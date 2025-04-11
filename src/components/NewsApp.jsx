import Category from "./Category";
import Card from "./Card";
const NewsApp = () => {
  return (
    <div className="ml-10 mr-10 p-3 mt-5 bg-gray-200 rounded-1xl">
      <div>
        <Category />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default NewsApp;
