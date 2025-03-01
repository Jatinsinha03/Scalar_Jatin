import React from 'react';
import './ResponseDisplay.css';

function ResponseDisplay({ response, loading }) {
    if (loading) return <p className="loading">Loading...</p>;

    // Helper function to split and parse the response content
    const parseResponse = (response) => {
        const sections = response.split("###");
        return sections.map((section, index) => {
            if (section.trim() === "") return null;  // Skip empty sections
            const titleEndIndex = section.indexOf("\n");
            const title = section.slice(0, titleEndIndex).trim();
            const content = section.slice(titleEndIndex).trim();
            return (
                <div key={index} className="response-section">
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            );
        });
    };

    return (
        <div className="response-container">
            <h2>Response</h2>
            {response ? (
                <div>{parseResponse(response)}</div>
            ) : (
                <p className="no-response">Submit a question to get help.</p>
            )}
        </div>
    );
}

export default ResponseDisplay;

