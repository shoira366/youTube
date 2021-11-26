import './Videos.scss'
import { useParams } from "react-router"
import { Posts, Users } from '../../API/Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faShare } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useTheme from '../../Hook/useTheme'


function Videos({ more, light_more }) {

    let [likes, setLikes] = useState(false)

    let [dislikes, setDislikes] = useState(false)

    let [theme] = useTheme()

    let [clicked, seClicket] = useState(false)

    
    let { id } = useParams()
    
    return (
        <>
            <section className="videos">
                <div className="videos_big-box">
                    {
                        Posts.filter(post => post.id === Number(id)).map(post => {
                            return (
                                <div className="general_box" key={post.id}>
                                    <div className="videos_left-box">
                                        <div className="videos_box">
                                            <iframe title="YouTube video player" width="1180" height="700" style={{ borderRadius: 14, border: 'none' }} src={post.video} frameBorder="14" />
                                            <h2 className={theme === 'dark' ? "videos_box-title light_text" : "videos_box-title color_darkblue"}>{post.title}</h2>
                                            <div className="videos_box-bottom">
                                                <span className={theme === 'dark' ? "videos_box-views light_text" : "videos_box-views"}>{`${post.views}k views`}</span>
                                                <button className="rate like-box">
                                                    <FontAwesomeIcon onClick={() => {
                                                        if (likes) {
                                                            setLikes(false)
                                                        } else {
                                                            setLikes(true)
                                                        }
                                                    }} className={likes === true ? "simple red" : likes === false ? "simple" : 'ok'} icon={faThumbsUp} />
                                                    <span className={theme === 'dark' ? "text16 light_text" : "text16 color_darkblue"} style={{ marginLeft: 8 }}>{`${post.likes}k`}</span>

                                                </button>
                                                <button className="rate">
                                                    <FontAwesomeIcon onClick={() => {
                                                        if (dislikes) {
                                                            setDislikes(false)
                                                        } else {
                                                            setDislikes(true)
                                                        }
                                                    }} className={dislikes === true ? "red" : dislikes === false ? "simple" : 'ok'} icon={faThumbsDown} />
                                                    <span className={theme === 'dark' ? "text16 light_text" : "text16 color_darkblue"} style={{ marginLeft: 8 }}>{`${post.dislikes}k`}</span>
                                                </button>
                                                <button className="rate">
                                                    <FontAwesomeIcon style={{ width: 14, height: 11 }} className="simple" icon={faShare} />
                                                    <span className={theme === 'dark' ? "text16 light_text" : "text16 color_darkblue"} style={{ marginLeft: 8 }}>Share</span>
                                                </button>
                                                <button style={{ marginLeft: 30 }}>
                                                    {theme === 'dark' ? <img src={light_more} alt="img" /> : <img src={more} alt="" />}
                                                </button>
                                            </div>
                                        </div>
                                        <hr className="line" />
                                        {
                                            Users.filter(user => user.userid === post.postId || user.userid === post.channelId).map(user => {
                                                return (
                                                    <div key={user.userid} className="videos_bottom-box">
                                                        <img style={{ width: 80, height: 80, borderRadius: '50%' }} src={user.userImg} alt="" />
                                                        <div className="videos_text-box">
                                                            <h2 className={theme === 'dark' ? "title26 light_text" : "title26"}>{user.name}</h2>
                                                            <span className={theme === 'dark' ? "time_subscribed span_opacity" : "time_subscribed"}>{user.published}</span>
                                                            <p className={theme === 'dark' ? "about_channel opacity_06" : "about_channel"}>{user.text}</p>
                                                            <a className={theme === 'dark' ? "show_more span_opacity" : "show_more"} href="#tab">Show more</a>
                                                        </div>
                                                        <button className="subscribe videos-btn">Subscribe 2.3m</button>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="videos_right-box">
                                        <div className="videos_right-box-top">
                                            <h2 className={theme !== "light" ? "next light_text" : "next"}>Next</h2>
                                            <p className={theme !== "light" ? "autoplay_text light_text" : "autoplay_text"} >autoplay</p>
                                            <label className={theme === "dark" ? "switch_light": "switch"}>
                                                <input onClick={()=>{
                                                    if(clicked){
                                                        seClicket(false)
                                                    }else{
                                                        seClicket(true)
                                                    }
                                                }} className={theme === "dark" ? "checkbox_light" : "checkbox" }type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                        {
                                            Users.filter(user => user.userid === post.postId).map(u => {
                                                return (
                                                    <ul className={clicked === true ? "autoplay_list" : "autoplay_mini-list"} key={u.userid}>
                                                        {
                                                            Posts.filter(post => post.id !== Number(id) && post.postId === u.userid).map(item => {
                                                                return (
                                                                    <li className="autoplay_item" key={item.id}>
                                                                        <Link to="">
                                                                            <img style={{ width: 367, height:213, borderRadius:14 }} src={item.postImg} alt="" />
                                                                        </Link>
                                                                        <h3 className={theme === 'dark' ? "title26 autoplay_title light_text":"title26 autoplay_title"}>{item.title}</h3>
                                                                        <span className={theme === 'dark' ? "autoplay_span span_opacity" : "autoplay_span"}>{`${item.views}k views`}</span>
                                                                        <span className={theme === 'dark' ? "autoplay_span autoplay_author span_opacity" : "autoplay_span autoplay_author"}>{item.author}</span>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                            )

                        })
                    }


                </div>
            </section>
        </>
    )
}
export default Videos