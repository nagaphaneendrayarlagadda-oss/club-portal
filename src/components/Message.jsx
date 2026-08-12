function Message({ sender, message, source }) {
  const isUser = sender === "You";

  return (

    <div className={`message-card ${isUser ? "message-user" : "message-assistant"}`}>

      <div className="message-meta">
        <span className="message-sender">{sender}</span>
        {source && <span className="message-source">{source}</span>}
      </div>
      <p>{message}</p>

    </div>

  );

}

export default Message;