import React, { useState } from 'react';
import QuestionInput from './components/QuestionInput';
import ResponseDisplay from './components/ResponseDisplay';
import './App.css';

function App() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (leetcodeUrl, question) => {
    setLoading(true);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ leetcode_url: leetcodeUrl, question: question })
    };
    const response = await fetch('http://localhost:5000/ask', requestOptions);
    const data = await response.json();
    setResponse(data.answer);
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>LeetCode Question Helper</h1>
      <QuestionInput onSubmit={handleQuestionSubmit} />
      <ResponseDisplay response={response} loading={loading} />
    </div>
  );
}

export default App;
