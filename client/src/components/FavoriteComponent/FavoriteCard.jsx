import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFavoritePost } from '../../redux/actions/actions'
import { Link } from "react-router-dom"
import style from './Favorite.module.css'

function FavoriteCard({ fav }) {

    const dispatch = useDispatch()
    const handeClick = (id) => {
        dispatch(deleteFavoritePost(id))
    }
    return (
        <div className={style.container}>
            <h1>Favoritos</h1>
            <div className={style.fav1}>

                {
                    fav?.map(e => {

                        return <div className={style.fav2} key={e.id}>
                            <Link to={`/detail/${e.id}`}><div className={style.fav3}><img className={style.imgFav} src={e.img} alt="img product" /></div></Link>
                            <div className={style.fav4}>
                                <div className={style.fontFav}>{e.title}</div>
                            </div>
                            <div className={style.fav5} onClick={() => handeClick(e.id)}>
                                <div className={style.fav6} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={style.fav7}>
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0  1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </div>
                            </div>
                        </div>

                    })
                }

            </div>
        </div >
    )
}

export default FavoriteCard