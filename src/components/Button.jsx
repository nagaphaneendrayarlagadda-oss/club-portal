function Button({ text, onClick }) {
  return (

    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
    >
      {text}
    </button>

  );
}

export default Button;