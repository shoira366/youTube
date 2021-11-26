import './Header.scss'
import userpic from '../../Assets/Images/Userpic.png'
import useTheme from '../../Hook/useTheme'
import useOpen from '../../Hook/useOpen'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
// import { useState } from 'react'


function Header({ logo, video, combinedshape, bell, light_logo, light_video, light_dots, light_bell }) {
    let [open, setOpen] = useOpen()

    let [theme, setTheme] = useTheme()


    return (
        <>
            <header className="header">
                <div className="container">
                    <button onClick={() =>
                        setOpen(!open)
                    } className="header_modal-btn">
                        <FaIcons.FaBars className={theme === 'dark' ? "menu_dark menu_light" : "menu_dark"} />
                    </button>
                    <a href="#tab">
                        {theme === "dark" ? <img src={light_logo} alt="" /> : <img src={logo} alt="" />}
                    </a>
                    <label className="header_label">
                        <input className={theme === 'dark' ? "header_label-input input_light" : "header_label-input"} type="text" placeholder="Search" />
                        <FiIcons.FiSearch className='header_label-lupa' />
                    </label>
                    <ul className="header_list">
                        <li className="header_list-item">
                            <select className="select" onChange={(e) => {
                                setTheme(e.target.value)
                            }} defaultValue={theme}>
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                            </select>
                        </li>
                        <li className="header_list-item">
                            <button className="header_list-btn">
                                {theme === 'dark' ? <img src={light_video} alt="video" /> : <img src={video} alt="video" />}
                            </button>
                        </li>
                        <li className="header_list-item">
                            <button className="header_list-btn">
                                {theme === 'dark' ? <img src={light_dots} alt="img" /> : <img src={combinedshape} alt="video" />}
                            </button>
                        </li>
                        <li className="header_list-item">
                            <button className="header_list-btn header_btn">
                                <span className="three">3</span>
                                {theme === 'dark' ? <img src={light_bell} alt="img" /> : <img src={bell} alt="video" />}
                            </button>
                        </li>
                        <li className="header_list-item">
                            <img src={userpic} alt="video" />
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}
export default Header