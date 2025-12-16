export default function Header() {
  return (
    <header className="header w-full py-5 bg-white text-black flex justify-center items-center "> 
      <div className="wrap flex justify-between items-center" style={{ width: "calc(100% - 100px)" }}>
        <h1 className="font-semibold text-3xl">My Website</h1>
        <nav>
            <ul className="flex w-fit space-x-20">
                <li className="hover:underline"><a href="/">Home</a></li>
                <li className="hover:underline"><a href="/contact">Contact</a></li>
                <li className="hover:underline"><a href="/about">About</a></li>
            </ul>
        </nav>
      </div>
    </header>
  );
}