import React from 'react';
import CodeEditor from './Editor';

const CodeLearn = ({ selectedQuestion, codeEditorRef, onRunCode, output }) => {
    if (!selectedQuestion) {
        return null; // Render nothing if selectedQuestion is null
    }

    return (
        <>
            <div ref={codeEditorRef} />
            <CodeEditor question={selectedQuestion} onRunCode={onRunCode} />
            {output && (
                <div className="output-section">
                    <h3>Output:</h3>
                    <pre>{output}</pre>
                </div>
            )}
        </>
    );
};

export default CodeLearn;
