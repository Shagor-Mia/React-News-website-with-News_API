import { useDispatch } from "react-redux";
import { fetchCard } from "../Slice/NewsSlice1";

const Category = () => {
  const dispatch = useDispatch();
  const Categories = (e) => {
    e.preventDefault();
    const category = e.target.value;
    dispatch(fetchCard(category)); // Dispatch with category value
  };

  return (
    <div className="flex flex-wrap justify-center bg-amber-300 rounded-1xl gap-4 p-3 mt-10 mb-4">
      <button
        onClick={Categories}
        value="Sports"
        className="bg-white p-2 rounded-lg hover:bg-red-500 hover:text-white hover:font-bold cursor-pointer transition w-24 sm:w-28 md:w-32"
      >
        sports
      </button>

      <button
        onClick={Categories}
        value="Politics"
        className="bg-white p-2 rounded-lg hover:bg-red-500 hover:text-white hover:font-bold cursor-pointer transition w-24 sm:w-28 md:w-32"
      >
        politics
      </button>

      <button
        onClick={Categories}
        value="Economy"
        className="bg-white p-2 rounded-lg hover:bg-red-500 hover:text-white hover:font-bold cursor-pointer transition w-24 sm:w-28 md:w-32"
      >
        economy
      </button>

      <button
        onClick={Categories}
        value="Entertainment"
        className="bg-white p-2 rounded-lg hover:bg-red-500 hover:text-white hover:font-bold cursor-pointer transition w-24 sm:w-28 md:w-32"
      >
        entertainment
      </button>

      <button
        onClick={Categories}
        value="Technology"
        className="bg-white p-2 rounded-lg hover:bg-red-500 hover:text-white hover:font-bold cursor-pointer transition w-24 sm:w-28 md:w-32"
      >
        technology
      </button>

      <button
        onClick={Categories}
        value="Science"
        className="bg-white p-2 rounded-lg hover:bg-red-500 hover:text-white hover:font-bold cursor-pointer transition w-24 sm:w-28 md:w-32"
      >
        science
      </button>

      <button
        onClick={Categories}
        value="Health"
        className="bg-white p-2 rounded-lg hover:bg-red-500 hover:text-white hover:font-bold cursor-pointer transition w-24 sm:w-28 md:w-32"
      >
        health
      </button>
    </div>
  );
};

export default Category;
