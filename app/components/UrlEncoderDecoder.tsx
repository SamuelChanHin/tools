"use client";

import { useState } from "react";

export default function UrlEncoderDecoder() {
  const [input, setInput] = useState("");
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

  const encodeUrl = () => {
    if (!input.trim()) {
      showStatus("Please enter text to encode", "error");
      return;
    }
    try {
      const encoded = encodeURIComponent(input);
      setOutput(encoded);
      showStatus("✓ Text URL-encoded successfully", "success");
    } catch (e) {
      showStatus("✗ Encoding error", "error");
      setOutput("");
    }
  };

  const decodeUrl = () => {
    if (!input.trim()) {
      showStatus("Please enter URL-encoded text to decode", "error");
      return;
    }
    try {
      const decoded = decodeURIComponent(input);
      setOutput(decoded);
      showStatus("✓ URL decoded successfully", "success");
    } catch (e) {
      showStatus("✗ Decoding error: Invalid input", "error");
      setOutput("");
    }
  };

  const copyOutput = async () => {
    if (!output) {
      showStatus("Nothing to copy", "error");
      return;
    }
    try {
      await navigator.clipboard.writeText(output);
      showStatus("✓ Copied to clipboard!", "success");
    } catch {
      showStatus("✗ Failed to copy", "error");
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setStatus(null);
  };

  const switchMode = (newMode: "encode" | "decode") => {
    setMode(newMode);
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
            🌐 Encode
          </button>
          <button
            className={mode === "decode" ? "mode-btn active" : "mode-btn"}
            onClick={() => switchMode("decode")}
          >
            🔓 Decode
          </button>
        </div>
      </div>

      <div className="toolbar">
        {mode === "encode" ? (
          <button className="btn btn-primary" onClick={encodeUrl}>
            <span>🌐</span> Encode URL
          </button>
        ) : (
          <button className="btn btn-primary" onClick={decodeUrl}>
            <span>🔓</span> Decode URL
          </button>
        )}
        <button className="btn btn-primary" onClick={copyOutput}>
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
              {mode === "encode" ? "Text to Encode" : "URL-encoded Input"}
            </span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === "encode"
                ? "Enter text to URL encode..."
                : "Paste URL-encoded text to decode..."
            }
            className="textarea"
          />
        </div>

        <div className="editor-panel">
          <div className="panel-header">
            <span className="panel-title">
              {mode === "encode" ? "Encoded URL" : "Decoded Text Output"}
            </span>
          </div>
          <textarea
            value={output}
            readOnly
            placeholder={
              mode === "encode"
                ? "Encoded URL will appear here..."
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
