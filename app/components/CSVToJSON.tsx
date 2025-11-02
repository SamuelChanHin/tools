"use client";

import { useState, ChangeEvent } from "react";

export default function CSVToJSON() {
  const [csvInput, setCsvInput] = useState(
    "name,age,city\nJohn Doe,30,Hong Kong\nJane Smith,25,Tokyo\nMike Johnson,35,Singapore"
  );
  const [jsonOutput, setJsonOutput] = useState("");
  const [delimiter, setDelimiter] = useState(",");
  const [hasHeader, setHasHeader] = useState(true);
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const showStatus = (message: string, type: "success" | "error") => {
    setStatus({ message, type });
    setTimeout(() => setStatus(null), 3000);
  };

  const csvToJSON = () => {
    if (!csvInput.trim()) {
      showStatus("Please enter CSV data", "error");
      return;
    }

    try {
      const lines = csvInput.trim().split("\n");
      if (lines.length === 0) {
        showStatus("CSV data is empty", "error");
        return;
      }

      let headers: string[];
      let dataLines: string[];

      if (hasHeader) {
        headers = lines[0].split(delimiter).map((h) => h.trim());
        dataLines = lines.slice(1);
      } else {
        headers = lines[0].split(delimiter).map((_, i) => `column${i + 1}`);
        dataLines = lines;
      }

      const result = dataLines.map((line) => {
        const values = line.split(delimiter).map((v) => v.trim());
        const obj: { [key: string]: string } = {};
        headers.forEach((header, index) => {
          obj[header] = values[index] || "";
        });
        return obj;
      });

      const formatted = JSON.stringify(result, null, 2);
      setJsonOutput(formatted);
      showStatus(`✓ Converted ${result.length} rows to JSON`, "success");
    } catch (e) {
      showStatus(
        `✗ Error: ${e instanceof Error ? e.message : "Conversion failed"}`,
        "error"
      );
      setJsonOutput("");
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith(".csv")) {
      showStatus("Please upload a CSV file", "error");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setCsvInput(content);
      showStatus("✓ CSV file loaded", "success");
    };
    reader.onerror = () => {
      showStatus("✗ Failed to read file", "error");
    };
    reader.readAsText(file);
  };

  const downloadJSON = () => {
    if (!jsonOutput) {
      showStatus("Nothing to download", "error");
      return;
    }

    try {
      const blob = new Blob([jsonOutput], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "converted.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showStatus("✓ JSON file downloaded", "success");
    } catch (e) {
      showStatus("✗ Download failed", "error");
    }
  };

  const copyOutput = async () => {
    if (!jsonOutput) {
      showStatus("Nothing to copy", "error");
      return;
    }

    try {
      await navigator.clipboard.writeText(jsonOutput);
      showStatus("✓ Copied to clipboard!", "success");
    } catch (e) {
      showStatus("Failed to copy", "error");
    }
  };

  const clearAll = () => {
    setCsvInput("");
    setJsonOutput("");
    setStatus(null);
  };

  return (
    <>
      <div className="converter-options">
        <div className="option-group">
          <label className="option-label">Delimiter:</label>
          <select
            value={delimiter}
            onChange={(e) => setDelimiter(e.target.value)}
            className="option-select"
          >
            <option value=",">Comma (,)</option>
            <option value=";">Semicolon (;)</option>
            <option value="\t">Tab (\t)</option>
            <option value="|">Pipe (|)</option>
          </select>
        </div>

        <div className="option-group">
          <label className="option-checkbox">
            <input
              type="checkbox"
              checked={hasHeader}
              onChange={(e) => setHasHeader(e.target.checked)}
            />
            <span>First row is header</span>
          </label>
        </div>

        <div className="option-group">
          <label className="file-upload-btn">
            📁 Upload CSV File
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
          </label>
        </div>
      </div>

      <div className="toolbar">
        <button className="btn btn-primary" onClick={csvToJSON}>
          <span>🔄</span> Convert to JSON
        </button>
        <button className="btn btn-primary" onClick={downloadJSON}>
          <span>💾</span> Download JSON
        </button>
        <button className="btn btn-secondary" onClick={copyOutput}>
          <span>📋</span> Copy
        </button>
        <button className="btn btn-secondary" onClick={clearAll}>
          <span>🗑️</span> Clear
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
            <span className="panel-title">CSV Input</span>
          </div>
          <textarea
            value={csvInput}
            onChange={(e) => setCsvInput(e.target.value)}
            placeholder="Paste CSV data here or upload a file...&#10;name,age,city&#10;John,30,Hong Kong"
            className="textarea"
          />
        </div>

        <div className="editor-panel">
          <div className="panel-header">
            <span className="panel-title">JSON Output</span>
          </div>
          <textarea
            value={jsonOutput}
            readOnly
            placeholder="Converted JSON will appear here..."
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
