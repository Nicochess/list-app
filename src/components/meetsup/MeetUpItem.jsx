import { useContext } from "react";
import classes from "./MeetUpItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

const MeetUpItem = ({ address, title, id, image, description }) => {

  const favoriteCtx = useContext(FavoritesContext)

  const itemIsFavorite = favoriteCtx.itemIsFavorite(id)

  const toggleFavoriteStatus = () => {
    if (itemIsFavorite){
      favoriteCtx.removeFavorites(id)
    } else {
      favoriteCtx.addFavorites({
        id: id,
        title: title,
        description: description,
        image: image,
        address: address
      })
    }
  };

  return (
    <Card>
      <div className={classes.item} id={id}>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatus}>{itemIsFavorite ? "Remove from Favorites" : "To Favorites"}</button>
        </div>
      </div>
    </Card>
  );
};

export default MeetUpItem;
