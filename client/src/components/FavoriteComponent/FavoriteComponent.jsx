import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoritePost, deleteFavoritePost, favoritePostList } from "../../redux/actions/actions";
import style from './Favorite.module.css'

function FavoriteComponent({ id, img, title }) {
  const dispatch = useDispatch()
  const favoritePost = useSelector(state => state.favoritePost)
  const favsFromLocalStorage = JSON.parse(localStorage.getItem("favs") || "[]");

  let x;

  favsFromLocalStorage.length > 0 ? (x = favsFromLocalStorage) : (x = []);



  const post = { id: id, title: title, img: img }

  useEffect(() => {
    window.localStorage.setItem("favs", JSON.stringify(x));
  }, [x]);

  useEffect(() => {
    dispatch(favoritePostList())
  }, [dispatch]);

  let isFavorite = favoritePost?.find((e) => e.id === id)

  function handleClick() {
    if (isFavorite) {
      dispatch(deleteFavoritePost(id))
    } else {
      dispatch(addFavoritePost(post))


    }
  }

  return (
    <div className={style.relative}>
      {isFavorite
        ?
        <button onClick={() => handleClick()} className={style.btnFavCom}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={style.svg1}
            fill={"red"}
            viewBox="0 0 24 24"
            stroke={"none"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          {/* Add to Fav */}
        </button>
        :
        <button onClick={() => handleClick()} className={style.btnFavCom}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={style.svg1}
            fill={"none"}
            viewBox="0 0 24 24"
            stroke={"black"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          {/* Add to Fav */}
        </button>
      }
    </div>
  );
}

export default FavoriteComponent;