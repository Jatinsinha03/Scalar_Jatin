import React, { useState, useRef, useEffect } from 'react';
import QuestionInput from './components/QuestionInput';
import ResponseDisplay from './components/ResponseDisplay';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when new messages appear
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleQuestionSubmit = async (leetcodeUrl, question) => {
    if (!question.trim()) return;

    // Add the user's question to chat history
    const userMessage = { type: "user", content: question, leetcodeUrl };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leetcode_url: leetcodeUrl, question: question })
      });

      const data = await response.json();
      
      // Add AI response to chat history using ResponseDisplay
      const aiMessage = { type: "ai", content: data.answer };
      setMessages((prev) => [...prev, aiMessage]);

    } catch (error) {
      setMessages((prev) => [...prev, { type: "error", content: "Error fetching response" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>LeetCode Chat Helper</h1>
      
      {/* Chat Messages Display */}
      <div className="chat-container">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.type}`}>
            {msg.type === "user" ? (
              <strong>👤 You: </strong>
            ) : msg.type === "ai" ? (
              <>
                <strong>🤖 AI: </strong>
                <ResponseDisplay response={msg.content} loading={false} />
              </>
            ) : (
              <strong>⚠️ Error: </strong>
            )}
            {msg.type === "user" ? <span>{msg.content}</span> : null}
          </div>
        ))}
        {loading && <p className="loading">⏳ AI is thinking...</p>}
        <div ref={messagesEndRef} />
      </div>

      {/* User Input Section */}
      <QuestionInput onSubmit={handleQuestionSubmit} />
    </div>
  );
}

export default App;
