function ChatBox({ value, onChange, onSend, loading }) {

  return (

    <div className="chat-input-shell glass-panel">

      <textarea
        rows="3"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="chat-input"
        placeholder="Type your message here..."
      />

      <button
        type="button"
        onClick={onSend}
        disabled={loading || !value.trim()}
        className="btn-primary chat-send-button"
      >
        {loading ? "Sending..." : "Send message"}
      </button>

    </div>

  );

}

export default ChatBox;