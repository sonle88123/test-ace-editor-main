import React from 'react';
import CodeEditor from './Editor';

const CodeLearn = ({ selectedQuestion }) => {
    return (
        <div>
            {selectedQuestion && (
                <div>
                    <h1>Question: {selectedQuestion.text}</h1>
                    <CodeEditor question={selectedQuestion} />
                </div>
            )}
        </div>
    );
};

export default CodeLearn;