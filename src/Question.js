import React, { useState, useEffect, useRef } from 'react';
import { Calculate } from '@mui/icons-material';
import './question.css';
import CodeEditor from './Editor';
import CodeLearn from './CodeLearn';


const Question = () => {
    const [completedQuestions, setCompletedQuestions] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [output, setOutput] = useState('');
    const codeEditorRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleQuestionClick = (question) => {
        if (completedQuestions.includes(question)) {
            setCompletedQuestions(completedQuestions.filter((q) => q !== question));
        } else {
            setCompletedQuestions([...completedQuestions, question]);
        }
        setSelectedQuestion(question);
        setOutput(''); // Reset the output when a new question is selected
    };

    const handleRunCode = (code) => {
        // Simulate running the code and getting the output
        const simulatedOutput = `Output for ${selectedQuestion.text}: ${code}`; // Replace this with your actual code execution logic
        setOutput(simulatedOutput);
    };

    const questionData = [
        { id: 1, text: 'Binary-floating-point', topic: 'binary-floating-point' },
        { id: 2, text: 'Fibonacci', topic: 'fibonacci' },
        { id: 3, text: 'Matrix', topic: 'matrix' },
        { id: 4, text: 'Factorial', topic: 'factorial' },
        { id: 5, text: 'Radian', topic: 'radian' },
        { id: 6, text: 'Fast-powering', topic: 'fast-powering' },
        { id: 7, text: 'Pascal-triangle', topic: 'pascal-triangle' },
        { id: 8, text: 'Bits', topic: 'bits' },
        { id: 9, text: 'Complex-number', topic: 'complex-number' },
        { id: 10, text: 'Euclidean-algorithm', topic: 'euclidean-algorithm' },
        { id: 11, text: 'Primality-test', topic: 'primality-test' },
        { id: 12, text: 'Integer-partition', topic: 'integer-partition' },
        { id: 13, text: 'Fourier-transform', topic: 'fourier-transform' },
        { id: 14, text: 'Horner-method', topic: 'horner-method' },
        { id: 15, text: 'Sieve-of-eratosthenes', topic: 'sieve-of-eratosthenes' },
        { id: 16, text: 'Primality-test', topic: 'primality-test' }
    ];

    useEffect(() => {
        if (selectedQuestion && codeEditorRef.current) {
            codeEditorRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selectedQuestion]);

    // Filter the question data based on the search term
    const filteredQuestionData = questionData.filter((question) =>
        question.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="learn-page">
            <header className="headermath text-center ">
                <h1 className="display-4">MATH</h1>
                <span className="material-symbols-outlined"></span>
            </header>
            <section className="container">
                <h2 className="mb-4">
                    In this Responsive Web Design Certification, you'll learn the languages that developers use to build
                    webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.
                </h2>
                <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search..." />
                <h1 className="text-center">Course</h1>
                {filteredQuestionData.map((question) => (
                    <span key={question.id} className="material-symbols-outlined">
                        <button
                            className={`btn btn-primary custom-button ${completedQuestions.includes(question) ? 'completed' : ''}`}
                            onClick={() => handleQuestionClick(question)}
                        >
                            {question.text}
                            {completedQuestions.includes(question) && <Calculate className="checkmark" />}
                        </button>
                    </span>
                ))}
                <CodeLearn
                    selectedQuestion={selectedQuestion}
                    codeEditorRef={codeEditorRef}
                    onRunCode={handleRunCode}
                    output={output}
                />
            </section>

        </div>
    );
};

export default Question;
