import './Channel.scss'
import { Users, Posts, recUsers } from '../../API/Data'

import background from '../../Assets/Images/background.png'
import { useParams } from 'react-router'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import useTheme from '../../Hook/useTheme';
import * as FiIcons from 'react-icons/fi'



function Channel({ bell, lupa, left, right, light_bell }) {

    let { id } = useParams()

    let [toggleState, setToggleState] = useState(1)

    let toggleTab = (index) => {
        setToggleState(index)
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5.5,
        slidesToScroll: 1
    };

    let [theme] = useTheme()

    return (
        <>
            <section className="channel">
                <img src={background} alt="" />
                <div className="channel_box">
                    {
                        Users.filter(user => user.userid === Number(id)).map(user => {
                            return (
                                <div key={user.userid} className="channel_top-box">
                                    <img style={{ width: 80, height: 80 }} src={user.userImg} alt="" />
                                    <div className="channel_info-box">
                                        <h2>{user.name}</h2>
                                        <span style={{ marginTop: 1 }} className={theme === 'dark' ? "text16 span_opacity" : "text16"}>{`${user.following} subscribed`}</span>
                                    </div>
                                    <div className="channel_remind-box">
                                        {theme === 'dark' ? <img src={light_bell} alt="img" /> : <img src={bell} alt="" />}
                                        <button className="channel_btn subscribe">Subscribe 2.3m</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="block-tabs">
                    <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "tabs active-tabs" : "tabs"}>Home</div>
                    <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "tabs active-tabs" : "tabs" && theme === 'dark' ? "tabs light_text" : "tabs"}>Videos</div>
                    <div onClick={() => toggleTab(3)} className={toggleState === 3 ? "tabs active-tabs" : "tabs"}>Playlists</div>
                    <div onClick={() => toggleTab(4)} className={toggleState === 4 ? "tabs active-tabs" : "tabs"}>Channels</div>
                    <div onClick={() => toggleTab(5)} className={toggleState === 5 ? "tabs active-tabs" : "tabs"}>Discussion</div>
                    <div onClick={() => toggleTab(6)} className={toggleState === 6 ? "tabs active-tabs" : "tabs"}>About</div>
                    <button>
                        <FiIcons.FiSearch className={theme === 'dark' ? "light_text" : "tabs"} style={{ width: 19, height: 19 }} />
                        {/* <img src={lupa} alt="" /> */}
                    </button>
                    <span style={{ marginLeft: 494 }} className="text16">Recommended channel</span>
                </div>

                <div className="content-tabs">
                    <div className={toggleState === 1 ? "content active-content" : "content"}>
                        {
                            Posts.filter(post => post.channelId === Number(id)).map(post => {
                                return (
                                    <div key={post.id} className="channel_main-box">
                                        <div className="left-box">
                                            <Link to={`/video/${post.id}`}>
                                                <img style={{ width: 540, height: 250, borderRadius: 14 }} src={post.channelImg} alt="" />
                                            </Link>
                                            <div className="channel_text-box">
                                                <h2 className={theme === 'dark' ? "title26 channel_title light_text" : "title26 channel_title"}>{post.channelTitle}</h2>
                                                <p className={theme === 'dark' ? "channel_description opacity_06" : "channel_description"}>{post.channel_description}</p>
                                                <span className={theme === 'dark' ? "text16 span_opacity" : "text16"}>{post.additional}</span>
                                            </div>
                                        </div>
                                        <ul className="right-box">
                                            {
                                                recUsers.map(item => {
                                                    return (
                                                        <li key={item.id} className="follow-box">
                                                            <img src={item.avatar} alt="" />
                                                            <p className={theme === 'dark' ? "follow-box_p light_text" : "follow-box_p "}>{item.name}</p>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={toggleState === 2 ? "content active-content" : "content"}>
                        <h2>Videos</h2>
                        <p style={{ width: 548 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero totam illum accusamus voluptates consectetur animi, iure, ad recusandae minus nostrum eos fugiat ipsum facilis eaque.</p>
                    </div>
                    <div className={toggleState === 3 ? "content active-content" : "content"}>
                        <h2>Playlist</h2>
                        <p style={{ width: 548 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero totam illum accusamus voluptates consectetur animi, iure, ad recusandae minus nostrum eos fugiat ipsum facilis eaque.</p>
                    </div>
                    <div className={toggleState === 4 ? "content active-content" : "content"}>
                        <h2>Channels</h2>
                        <p style={{ width: 548 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero totam illum accusamus voluptates consectetur animi, iure, ad recusandae minus nostrum eos fugiat ipsum facilis eaque.</p>
                    </div>
                    <div className={toggleState === 5 ? "content active-content" : "content"}>
                        <h2>Discussion</h2>
                        <p style={{ width: 548 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero totam illum accusamus voluptates consectetur animi, iure, ad recusandae minus nostrum eos fugiat ipsum facilis eaque.</p>
                    </div>
                    <div className={toggleState === 6 ? "content active-content" : "content"}>
                        <h2>About</h2>
                        <p style={{ width: 548 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero totam illum accusamus voluptates consectetur animi, iure, ad recusandae minus nostrum eos fugiat ipsum facilis eaque.</p>
                    </div>
                </div>
                <div className="channel_bottom-box">
                    {
                        Users.filter(user => user.userid === Number(id)).map(user => {
                            return (
                                <div key={user.userid} >
                                    <div className="channel_top-part">
                                        <h2 className={theme === 'dark' ? "title26 light_text" : "title26"}>{`${user.name} videos`}</h2>
                                        <div className="channel_button-box">
                                            <button data-role="none" className="slick-arrow" style={{ marginRight: 10, display: 'block' }}>
                                                <img src={left} alt="" />
                                            </button>
                                            <button data-role="none" className="slick-arrow slick-nex">
                                                <img src={right} alt="" />
                                            </button>
                                        </div>
                                    </div>
                                    <Slider className="Home_section_list"  {...settings}>
                                        {
                                            Posts.filter(post => post.postId === Number(id)).map(post => {
                                                return (
                                                    <li className="slider_bottom-item" key={post.id}>
                                                        <Link to={`/video/${post.id}`}>
                                                            <img style={{ width: 250, height: 150, borderRadius: 14 }} src={post.postImg} alt="" />
                                                        </Link>
                                                        <span className="time slider_bottom-item-time">{post.time}</span>
                                                        <h3 className={theme === 'dark' ? "Home_section_list-title light_text" : "Home_section_list-title"}>{post.title}</h3>
                                                        <div className="mini-box">
                                                            <span className={theme === 'dark' ? "text16 Home_section_list-span span_opacity" : "Home_section_list-span text16"}>{post.additional}</span>
                                                            <span className={theme === 'dark' ? "text16 Home_section_list-span span_opacity author" : "Home_section_list-span text16 author"}>{post.author}</span>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </Slider>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
export default Channel