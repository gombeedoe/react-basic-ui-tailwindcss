export default function Button({ children, type, onClick }) {
  return (
    <button
      className="bg-indigo-500 bg-indigo-700 text-white py-2 px-8 rounded"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
