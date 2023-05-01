// Import React and the useState hook from the "react" package.
import React, { useState } from "react";

// Define a functional component called ChatApp.
const ChatApp = () => {
  // Use the useState hook to create a state variable "messages" and a function "setMessages" to update it.
  // Initialize the "messages" state with an empty array.
  const [messages, setMessages] = useState([]);

  // Define a function "handleSubmit" that will handle the form submission.
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior.
    e.preventDefault();

    // Extract the message value from the form input field.
    const message = e.target.message.value;

    // Update the "messages" state by appending the new message.
    setMessages([...messages, message]);

    // Clear the input field after message submission.
    e.target.message.value = "";
  };

  // Return the JSX markup for the ChatApp component.
  return (
    <div>
      <h1>Chat App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          placeholder="Enter a message"
        />
        <input type="submit" value="Send" />
      </form>
      <ul>
        {messages.map((message, index) => (
          // Use index as the key instead of message, to avoid issues when multiple identical messages are submitted
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

// Export the ChatApp component as the default export.
export default ChatApp;

