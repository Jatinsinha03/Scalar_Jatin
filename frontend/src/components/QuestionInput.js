import React, { useState } from 'react';

function QuestionInput({ onSubmit }) {
  const [leetcodeUrl, setLeetcodeUrl] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    onSubmit(leetcodeUrl, question);
    setQuestion(""); // Clear input after sending
  };

  return (
    <form onSubmit={handleSubmit} className="question-form">
      <input
        type="text"
        placeholder="Enter LeetCode URL (optional)"
        value={leetcodeUrl}
        onChange={(e) => setLeetcodeUrl(e.target.value)}
        className="leetcode-url-input"
      />
      <input
        type="text"
        placeholder="Ask a question about this problem..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="question-input"
      />
      <button type="submit" className="send-button">Send</button>
    </form>
  );
}

export default QuestionInput;
