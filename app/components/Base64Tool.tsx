"use client";

import { useState, ChangeEvent } from "react";

export default function Base64Tool() {
  const [input, setInput] = useState("Hello, World!");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const showStatus = (message: string, type: "success" | "error") => {
    setStatus({ message, type });
    setTimeout(() => setStatus(null), 3000);
  };

  const encodeBase64 = () => {
    if (!input.trim()) {
      showStatus("Please enter text to encode", "error");
      return;
    }

    try {
      // Use btoa for encoding (supports UTF-8 via workaround)
      const encoded = btoa(unescape(encodeURIComponent(input)));
      setOutput(encoded);
      showStatus("✓ Text encoded to Base64 successfully", "success");
    } catch (e) {
      showStatus(
        `✗ Encoding error: ${
          e instanceof Error ? e.message : "Failed to encode"
        }`,
        "error"
      );
      setOutput("");
    }
  };

  const decodeBase64 = () => {
    if (!input.trim()) {
      showStatus("Please enter Base64 text to decode", "error");
      return;
    }

    try {
      // Use atob for decoding (supports UTF-8 via workaround)
      const decoded = decodeURIComponent(escape(atob(input.trim())));
      setOutput(decoded);
      showStatus("✓ Base64 decoded successfully", "success");
    } catch (e) {
      showStatus(`✗ Decoding error: Invalid Base64 string`, "error");
      setOutput("");
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        // Get base64 part (remove data:mime;base64, prefix)
        const base64 = content.split(",")[1];
        setInput(content); // Show full data URL in input
        setOutput(base64); // Show just base64 in output
        showStatus("✓ File encoded to Base64", "success");
      } catch (e) {
        showStatus("✗ Failed to read file", "error");
      }
    };
    reader.onerror = () => {
      showStatus("✗ Failed to read file", "error");
    };
    reader.readAsDataURL(file);
  };

  const copyOutput = async () => {
    if (!output) {
      showStatus("Nothing to copy", "error");
      return;
    }

    try {
      await navigator.clipboard.writeText(output);
      showStatus("✓ Copied to clipboard!", "success");
    } catch (e) {
      showStatus("Failed to copy", "error");
    }
  };

  const downloadOutput = () => {
    if (!output) {
      showStatus("Nothing to download", "error");
      return;
    }

    try {
      const blob = new Blob([output], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = mode === "encode" ? "encoded.txt" : "decoded.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showStatus("✓ File downloaded", "success");
    } catch (e) {
      showStatus("✗ Download failed", "error");
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setStatus(null);
  };

  const switchMode = (newMode: "encode" | "decode") => {
    setMode(newMode);
    // Swap input and output when switching modes
    if (output) {
      const temp = input;
      setInput(output);
      setOutput(temp);
    }
  };

  return (
    <>
      <div className="converter-options">
        <div className="mode-switcher">
          <button
            className={mode === "encode" ? "mode-btn active" : "mode-btn"}
            onClick={() => switchMode("encode")}
          >
            🔐 Encode
          </button>
          <button
            className={mode === "decode" ? "mode-btn active" : "mode-btn"}
            onClick={() => switchMode("decode")}
          >
            🔓 Decode
          </button>
        </div>

        <div className="option-group">
          <label className="file-upload-btn">
            📁 Upload File
            <input
              type="file"
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
          </label>
        </div>
      </div>

      <div className="toolbar">
        {mode === "encode" ? (
          <button className="btn btn-primary" onClick={encodeBase64}>
            <span>🔐</span> Encode to Base64
          </button>
        ) : (
          <button className="btn btn-primary" onClick={decodeBase64}>
            <span>🔓</span> Decode from Base64
          </button>
        )}
        <button className="btn btn-primary" onClick={downloadOutput}>
          <span>💾</span> Download
        </button>
        <button className="btn btn-secondary" onClick={copyOutput}>
          <span>📋</span> Copy
        </button>
        <button className="btn btn-secondary" onClick={clearAll}>
          <span>🗑️</span> Clear
        </button>
        <div className="toolbar-spacer" />
      </div>

      <div className="editor-container">
        <div className="editor-panel">
          <div className="panel-header">
            <span className="panel-title">
              {mode === "encode" ? "Plain Text Input" : "Base64 Input"}
            </span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === "encode"
                ? "Enter text to encode...\nExample: Hello, World!"
                : "Paste Base64 string to decode...\nExample: SGVsbG8sIFdvcmxkIQ=="
            }
            className="textarea"
          />
        </div>

        <div className="editor-panel">
          <div className="panel-header">
            <span className="panel-title">
              {mode === "encode" ? "Base64 Output" : "Decoded Text Output"}
            </span>
          </div>
          <textarea
            value={output}
            readOnly
            placeholder={
              mode === "encode"
                ? "Base64 encoded result will appear here..."
                : "Decoded text will appear here..."
            }
            className="textarea"
          />
          {status && (
            <div className={`status status-${status.type}`}>
              {status.message}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
