import Navbar from "./components/Navbar";
import NewsApp from "./components/NewsApp";

const App = () => {
  return (
    <div>
      <div className="w-full">
        <Navbar />
      </div>
      <p className="text-center text-2xl font-bold mt-4 bg-green-200 p-4">
        {" "}
        Stay updated with the latest news
      </p>

      <div>
        <NewsApp />
      </div>
    </div>
  );
};

export default App;
