export default function Child({ sendMessage }) {
  const handleClick = () => {
    sendMessage("Hello, Parent!");
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Send Message to Parent</button>
    </div>
  );
}
