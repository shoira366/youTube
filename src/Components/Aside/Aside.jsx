import './Aside.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFire, faFolder, faBookmark, faStar, faHeart, faScroll, faMusic, faClock, faGamepad, faChevronDown } from '@fortawesome/free-solid-svg-icons'



import { NavLink, Link } from 'react-router-dom'
import { data } from '../../API/Data'
import { useState } from 'react'
import useOpen from '../../Hook/useOpen'
import useTheme from '../../Hook/useTheme'



function Aside({ settings, light_settings }) {

    let [theme] = useTheme()
    let [some, setSome] = useState(1)

    let [open] = useOpen()

    let change = (index) => {
        setSome(index)
    }

    return (


        <>
            {open && <section className={theme === 'dark' ? "aside aside_light" : "aside"}>
                <div className="dialog">
                    <nav className="aside_nav">
                    <NavLink onClick={() => change(2)} className={some === 2 ? "link active-link" : "link"} to="/" >
                            <FontAwesomeIcon icon={faHome} style={{ width: 20, height: 19, marginRight: 16 }} />
                            Home</NavLink>
                        <NavLink onClick={() => change(2)} className={some === 2 ? "link active-link" : "link"} to="/trending" >
                            <FontAwesomeIcon icon={faFire} style={{ width: 16, height: 21, marginRight: 16 }} />
                            Trending</NavLink>
                        <NavLink onClick={() => change(3)} className={some === 3 ? "link active-link" : "link"} to="/subscription" >
                            <FontAwesomeIcon icon={faBookmark} style={{ width: 18, height: 18, marginRight: 14 }} />
                            Subscriptions</NavLink>
                        <NavLink onClick={() => change(4)} className={some === 4 ? "link active-link" : "link"} to="/library" >
                            <FontAwesomeIcon icon={faFolder} style={{ width: 20, height: 16, marginRight: 13 }} />
                            Library</NavLink>
                        <NavLink onClick={() => change(5)} className={some === 5 ? "link active-link" : "link"} to="/history" >
                            <FontAwesomeIcon icon={faScroll} style={{ marginRight: 13 }} />
                            History</NavLink>
                        <NavLink onClick={() => change(6)} className={some === 6 ? "link active-link" : "link"} to="/watchlater" >
                            <FontAwesomeIcon icon={faClock} style={{ marginRight: 14 }} />
                            Watch later</NavLink>
                        <NavLink onClick={() => change(7)} className={some === 7 ? "link active-link" : "link"} to="/favourites" >
                            <FontAwesomeIcon icon={faStar} style={{ marginRight: 13 }} />
                            Favourites</NavLink>
                        <NavLink onClick={() => change(8)} className={some === 8 ? "link active-link" : "link"} to="/likedvideos" >
                            <FontAwesomeIcon icon={faHeart} style={{ width: 18, height: 17, marginRight: 14 }} />
                            Liked videos</NavLink>
                        <NavLink onClick={() => change(9)} className={some === 9 ? "link active-link" : "link"} to="/music" >
                            <FontAwesomeIcon icon={faMusic} style={{ width: 18, height: 20, marginRight: 14 }} />
                            Music</NavLink>
                        <NavLink onClick={() => change(10)} className={some === 10 ? "link active-link" : "link"} to="/games" >
                            <FontAwesomeIcon icon={faGamepad} style={{ marginRight: 12 }} />
                            Games</NavLink>
                        <NavLink onClick={() => change(10)} className={some === 10 ? "link active-link" : "link"} to="/showmore" >
                            <FontAwesomeIcon icon={faChevronDown} style={{ marginRight: 16 }} />
                            Show more</NavLink>
                    </nav>
                    <div className="followers">
                        <h2 className={theme === 'dark' ? "followers_title followers_title-light" : "followers_title"}>Subscriptions</h2>
                        <ul className="aside_followers">
                            {
                                data.map(item => {
                                    return (
                                        <li onClick={() => {
                                        }} className="aside_followers-item" key={item.id}>
                                            <img className="aside_followers-img" src={item.avatar} alt="" />
                                            <Link className="aside_followers-link" to={`/channel/${item.id}`}>{item.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <button className="setting">
                        {theme === 'dark' ? <img style={{ marginRight: 12 }} src={light_settings} alt="img" /> : <img style={{ marginRight: 12 }} src={settings} alt="img" />}
                        Setting</button>
                </div>
            </section>
            }
        </>
    )
}

export default Aside