import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagslice";
import { GrAdd } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const Display = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elements = bagItems.indexOf(item.id) >= 0;
  const handleAdd = () => {
    dispatch(bagAction.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };
  const imageSize = "350x350";
  const imageUrl = `${item.image}?size=${imageSize}`;
  return (
    <div className="item-container">
      <img className="item-image" src={imageUrl} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elements ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleRemove}
        >
          <MdDelete /> Remove
        </button>
      ) : (
        <button className="btn btn-add-bag btn-success" onClick={handleAdd}>
          <GrAdd /> Add to Bag
        </button>
      )}
    </div>
  );
};
export default Display;
