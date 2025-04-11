import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../Slice/NewsSlice1";

const Navbar = () => {
  const [search, setSearch] = useState("United States");
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.news);

  const handleSearch = () => {
    dispatch(fetchNews(search));
  };
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  // Handle 'Enter' key press for searching
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-700 text-amber-100 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold dark:text-white">
            NEWS
          </span>
        </a>
        <div className="flex space-x-3">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search..."
              onChange={handleInput}
              onKeyDown={handleKeyDown} // Press Enter to search
              className="px-3 py-2 border rounded-lg text-sm dark:bg-gray-800 dark:text-white"
            />
            <button
              onClick={handleSearch}
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
            >
              {status === "loading" ? "Searching..." : "Search"}
            </button>
          </div>
          {status === "failed" && <p className="text-red-500">{error}</p>}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
            aria-controls="navbar-cta"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" viewBox="0 0 17 14" fill="none">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto`}
          id="navbar-cta"
        >
          <ul className="flex flex-col text-white font-medium p-4 md:flex-row md:space-x-8">
            <li>
              <a href="#" className="block py-2 px-3">
                All News
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3">
                Trending
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3">
                Latest News
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Move Sign in button after menu */}
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
