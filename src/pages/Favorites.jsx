import { useContext, useEffect } from "react";
import MeetUpList from "../components/meetsup/MeetUpList";
import FavoritesContext from "../store/favorites-context";

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favoritesCtx.favorites))
    }, [favoritesCtx.favorites])
    

  return (
    <section>
      <h1>Favorites Pages</h1>
      <MeetUpList data={favoritesCtx.favorites} />
    </section>
  );
};

export default Favorites;
