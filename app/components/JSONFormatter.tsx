"use client";

import { useState } from "react";

export default function JSONFormatter() {
  const [input, setInput] = useState(
    '{"name":"John Doe","age":30,"skills":["JavaScript","React","Node.js"],"address":{"city":"Hong Kong","country":"China"}}'
  );
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const showStatus = (message: string, type: "success" | "error") => {
    setStatus({ message, type });
    setTimeout(() => setStatus(null), 3000);
  };

  const formatJSON = () => {
    if (!input.trim()) {
      showStatus("Please enter JSON data", "error");
      return;
    }

    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      showStatus("✓ JSON formatted successfully", "success");
    } catch (e) {
      showStatus(
        `✗ Error: ${e instanceof Error ? e.message : "Invalid JSON"}`,
        "error"
      );
      setOutput("");
    }
  };

  const validateJSON = () => {
    if (!input.trim()) {
      showStatus("Please enter JSON data to validate", "error");
      return;
    }

    try {
      JSON.parse(input);
      showStatus("✓ Valid JSON! No syntax errors found.", "success");
    } catch (e) {
      showStatus(
        `✗ Invalid JSON: ${e instanceof Error ? e.message : "Syntax error"}`,
        "error"
      );
    }
  };

  const minifyJSON = () => {
    if (!input.trim()) {
      showStatus("Please enter JSON data", "error");
      return;
    }

    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      const saved = ((1 - minified.length / input.length) * 100).toFixed(1);
      showStatus(`✓ JSON minified successfully (${saved}% smaller)`, "success");
    } catch (e) {
      showStatus(
        `✗ Error: ${e instanceof Error ? e.message : "Invalid JSON"}`,
        "error"
      );
      setOutput("");
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setStatus(null);
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

  return (
    <>
      <div className="toolbar">
        <button className="btn btn-primary" onClick={formatJSON}>
          <span>✨</span> Format & Beautify
        </button>
        <button className="btn btn-primary" onClick={validateJSON}>
          <span>✓</span> Validate
        </button>
        <button className="btn btn-secondary" onClick={minifyJSON}>
          <span>⚡</span> Minify
        </button>
        <button className="btn btn-secondary" onClick={clearAll}>
          <span>🗑️</span> Clear
        </button>
        <button className="btn btn-secondary" onClick={copyOutput}>
          <span>📋</span> Copy
        </button>
        <div className="toolbar-spacer" />
        {/* <a
          href="https://www.buymeacoffee.com/yourname"
          target="_blank"
          rel="noopener noreferrer"
          className="btn coffee-btn"
        >
          ☕ Buy me a coffee
        </a> */}
      </div>

      <div className="editor-container">
        <div className="editor-panel">
          <div className="panel-header">
            <span className="panel-title">Input JSON</span>
          </div>
          <textarea
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Paste your JSON here... e.g., {"name": "John", "age": 30}'
            className="textarea"
          />
        </div>

        <div className="editor-panel">
          <div className="panel-header">
            <span className="panel-title">Output</span>
          </div>
          <textarea
            id="output"
            value={output}
            readOnly
            placeholder="Formatted JSON will appear here..."
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
