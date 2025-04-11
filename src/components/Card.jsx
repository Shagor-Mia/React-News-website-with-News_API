import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews, fetchCard } from "../Slice/NewsSlice1";

const Card = ({ searchTerm, category }) => {
  const { articles, status, error } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    if (category) {
      dispatch(fetchCard(category));
    } else if (searchTerm) {
      dispatch(fetchNews(searchTerm));
    }
  }, [dispatch, category, searchTerm]);

  if (status === "loading") return <p className="text-center">Loading...</p>;
  if (status === "failed") return <p className="text-red-500">{error}</p>;
  if (!articles || articles.length === 0)
    return <p className="text-gray-500 text-center">No news available.</p>;

  const readMore = (article) => {
    window.open(article.url, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm transition hover:shadow-xl"
        >
          <img
            src={article.urlToImage || "https://via.placeholder.com/400"}
            alt={article.title}
            onClick={() => readMore(article)}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2
              className="text-lg font-semibold text-gray-800"
              onClick={() => readMore(article)}
            >
              {article.title}
            </h2>
            <p className="text-gray-600 mt-2" onClick={() => readMore(article)}>
              {article.description || "No description available."}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
