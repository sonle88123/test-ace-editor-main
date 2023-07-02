import React from 'react';
import { useParams } from 'react-router-dom';
import CodeEditor from './Editor';

const CodeLearnPage = () => {
    const { topic } = useParams();

    // Lấy dữ liệu câu hỏi từ API hoặc từ nguồn dữ liệu khác
    const questionData = [
        { id: 1, text: 'Binary-floating-point', topic: 'binary-floating-point', code: '...' },
        { id: 2, text: 'Fibonacci', topic: 'fibonacci', code: '...' },
        { id: 3, text: 'Matrix', topic: 'matrix', code: '...' },
        // Các câu hỏi khác
    ];

    // Tìm câu hỏi tương ứng với topic
    const selectedQuestion = questionData.find((question) => question.topic === topic);

    return (
        <div className="code-learn-page">
            {selectedQuestion ? (
                <CodeEditor code={selectedQuestion.code} />
            ) : (
                <p>Không tìm thấy câu hỏi</p>
            )}
        </div>
    );
};

export default CodeLearnPage;
