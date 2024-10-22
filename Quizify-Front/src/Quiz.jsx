import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestions } from "./api/question";

const Quiz = () => {
    const { quizId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await getQuestions(quizId);
                setQuestions(response.data);
            } catch (error) {
                console.error("Error fetching questions:", error);
                setError("Failed to load questions.");
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, [quizId]);

    if (loading) return <p>Loading questions...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Quiz Questions</h1>
            {questions.length > 0 ? (
                questions.map((question) => (
                    <div key={question.id}>
                        <p>{question.question}</p>
                        {/* Render options */}
                    </div>
                ))
            ) : (
                <p>No questions available.</p>
            )}
        </div>
    );
};

export default Quiz;
