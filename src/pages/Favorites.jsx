import { useContext } from 'react'
import MeetUpList from '../components/meetsup/MeetUpList'
import FavoritesContext from '../store/favorites-context'

const Favorites = () => {
    const favoritesCtx = useContext(FavoritesContext)

    return (
        <section>
            <h1>Favorites Pages</h1>
            <MeetUpList data={favoritesCtx.favorites} />
        </section>
    )
}

export default Favorites
