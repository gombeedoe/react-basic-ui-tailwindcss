export default function Header() {
  return (
    <header
      id="header"
      className="flex items-center h-16 bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-10"
    >
      <div className="w-full max-w-screen-xl relative mx-auto px-6">
        <div className="flex items-center">
          <div>This is React Components by Tailwind CSS</div>
        </div>
      </div>
    </header>
  );
}
