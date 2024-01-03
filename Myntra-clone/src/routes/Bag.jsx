import Summary from "../components/bagSummary";
import BagItem from "../components/bagitem";
import { useSelector } from "react-redux";
import Noitems from "../components/NoItems";

const Bag = () => {
  const bagitems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagitems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        {bagitems.length === 0 ? (
          <Noitems />
        ) : (
          <div className="bag-page">
            <div className="bag-items-container">
              {finalItems.map((item) => (
                <BagItem item={item} />
              ))}
            </div>
            <Summary />
          </div>
        )}
      </main>
    </>
  );
};
export default Bag;
