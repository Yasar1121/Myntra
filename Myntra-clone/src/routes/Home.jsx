import { useSelector } from "react-redux";
import Display from "../components/Homeitem";

const Home = () => {
  const items = useSelector((store) => store.items);
  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <Display key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};
export default Home;
