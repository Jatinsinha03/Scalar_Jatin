import React, { useState } from 'react';

function QuestionInput({ onSubmit }) {
  const [leetcodeUrl, setLeetcodeUrl] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(leetcodeUrl, question);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        LeetCode URL:
        <input type="text" value={leetcodeUrl} onChange={e => setLeetcodeUrl(e.target.value)} />
      </label>
      <label><br />
        Question:
        <input type="text" value={question} onChange={e => setQuestion(e.target.value)} />
      </label>
      <button type="submit">Ask</button>
    </form>
  );
}

export default QuestionInput;
