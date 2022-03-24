import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import FavoriteCard from "./FavoriteCard";
import style from './Favorite.module.css'

const FavoriteButton = () => {  

  ////// favorite redux/////

  const favoritePost = useSelector(state => state.favoritePost)



  return (
    <>
      <Menu as="div" className={style.menu1}>
        {({ open }) => (

          <>
            <div className={style.menu2}>
              <Menu.Button className={style.menuButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.svg}
                  viewBox="0 0 24 24"
                  stroke={"red"}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>

                <span className={style.span}>{favoritePost?.length}</span>
              </Menu.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className={style.menuItems}
              >
                <div className={style.menuText1}>
                  <div className={style.menuText2}>
                    {
                      favoritePost.length === 0 ?
                        <div className={style.menuText3}>

                          <h1 className={style.font}>No tienes favoritos</h1>
                        </div>
                        :
                        <FavoriteCard fav={favoritePost} />
                    }
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
      </>
  );
};
export default FavoriteButton;        