import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      sla: { deliveryTime },
    } = resData?.info;
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
        <img
          className="rounded-lg"
          alt="res-logo"
          src={CDN_URL
            +
            resData.info.cloudinaryImageId
          }
        />
             
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h5>{cuisines.join(" , ")}</h5>
        <h5>{avgRating} stars</h5>
        <h5>{resData.info.sla.deliveryTime} minutes</h5>
      </div>
    );
  };

  export default RestaurantCard;