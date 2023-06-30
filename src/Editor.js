import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import AceEditor from "react-ace";
import axios from "axios";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools.js";

const Editor = ({ question }) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [output, setOutput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/math/${question.topic}`);
        setContent(response.data);
      } catch (error) {
        setError(error.message);
      }
    };


    fetchData();
  }, [question.topic]);


  const executeCode = async () => {
    try {
      const response = await axios.post("http://localhost:5000/java/execute", {
        code: content
      });
      setOutput(response.data.output);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="editor-container">
      <div className="code-editor">
        <AceEditor
          mode="java"
          width="100%"
          height="100%"
          theme="github"
          onChange={setContent}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={content}
          wrapEnabled={true}
          setOptions={{
            useWorker: false,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2
          }}
        />
        <button className="run" onClick={executeCode}>
          <span className="material-icons">play_arrow</span>
        </button>
      </div>
      <div className="rendered-markdown">
        <ReactMarkdown>{content}</ReactMarkdown>
        <div className="output">
          <h3>Output:</h3>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
};

export default Editor;
