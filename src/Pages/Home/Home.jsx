import './Home.scss'
import { Users, Posts } from '../../API/Data'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useTheme from '../../Hook/useTheme';
// import useOpen from '../../Hook/useOpen';


function Home({ left, right }) {

    let [theme] = useTheme()

    // let [open, setOpen] = useOpen()

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4.9,
        slidesToScroll: 1
    };
    var settings_second = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };
    var something = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.65,
        slidesToScroll: 1
    }
    return (
        <>
            <section className="Home_section">
                <div className="user-box">
                    <div key={Users[6].userid} className="dollie-box">
                        <img src={Users[6].userImg} alt="" />
                        <Link className={theme === 'dark' ? "title26 dollie-box-name light_text" : "title26 dollie-box-name"} to={`/channel/${Users[6].userid}`}>{Users[6].name}</Link>
                        <div className="button-box">
                            <button data-role="none" className="slick-arrow" style={{ marginRight: 10, display: 'block' }}>
                                <img src={left} alt="" />
                            </button>
                            <button data-role="none" className="slick-arrow slick-nex">
                                <img src={right} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="block_slider">
                        <Slider {...settings} className="Home_section_list">
                            {
                                Posts.filter(post => post.postId === Users[6].userid).map(post => {
                                    return (
                                        <li className="slider_item" key={post.id}>
                                            <Link to={`/video/${post.id}`}>
                                                <img style={{ width: 250, height: 150 }} src={post.postImg} alt="" />
                                            </Link>
                                            <span className="time slider_item-time">{post.time}</span>
                                            <h3 className={theme === 'dark' ? "Home_section_list-title light_text" : "Home_section_list-title"}>{post.title}</h3>
                                            <div className="mini-box">
                                                <span className={theme === 'dark' ? "text16 Home_section_list-span span_opacity" : "text16 Home_section_list-span"}>{post.additional}</span>
                                                <span className={theme === 'dark' ? "text16 Home_section_list-span span_opacity" : "text16 Home_section_list-span"}>{post.author}</span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
                <div className="reccomended">
                    <div className="dollie-box">
                        <h2 className={theme === 'dark' ? "title26 reccomended_box-name light_text" : "title26 reccomended_box-name"}>Recommended</h2>
                        <div className="button-box">
                            <button data-role="none" className="slick-arrow" style={{ marginRight: 10, display: 'block' }}>
                                <img src={left} alt="" />
                            </button>
                            <button data-role="none" className="slick-arrow slick-nex">
                                <img src={right} alt="" />
                            </button>
                        </div>
                    </div>
                    <Slider {...something} className="reccomended_list">
                        {
                            Posts.filter(post => post.isRec === true).map(post => {
                                return (
                                    <li className="slider_bigger-item" key={post.id}>
                                        <Link to={`/video/${post.id}`}>
                                            <img src={post.postImg} alt="" />
                                        </Link>
                                        <span className="time slider_bigger-item-time">{post.time}</span>
                                        <h3 className={theme === 'dark' ? "Home_section_list-title light_text" : "Home_section_list-title"}>{post.title}</h3>
                                        <div className="rec_mini-box">
                                            <span className={theme === 'dark' ? "text16 Home_section_list-span span_opacity" : "text16 Home_section_list-span"}>{post.additional}</span>
                                            <span className={theme === 'dark' ? "text16 Home_section_list-span span_opacity" : "text16 Home_section_list-span"}>{post.author}</span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </Slider>
                </div>
                <div className="user-box">
                    <div key={Users[7].userid} className="dollie-box">
                        <img src={Users[7].userImg} alt="" />
                        <Link className={theme === 'dark' ? "title26 dollie-box-name light_text" : "title26 dollie-box-name"} to={`/channel/${Users[7].userid}`}>{Users[7].name}</Link>
                        <p className="dollie-box_text">Recommended channel for you</p>
                        <div className="food_button-box">
                            <button className="subscribe rec_btn">Subscribe 2.3m</button>
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
                            Posts.filter(post => post.postId === Users[7].userid).map(post => {
                                return (
                                    <li className="slider_item" key={post.id}>
                                        <Link to={`/video/${post.id}`}>
                                            <img src={post.postImg} alt="" />
                                        </Link>
                                        <span className="time slider_item-time">{post.time}</span>
                                        <h3 className={theme === 'dark' ? "Home_section_list-title light_text" : "Home_section_list-title"}>{post.title}</h3>
                                        <div className="mini-box">
                                            <span className={theme === 'dark' ? "text16 Home_section_list-span span_opacity" : "text16 Home_section_list-span"}>{post.additional}</span>
                                            <span className={theme === 'dark' ? "text16 Home_section_list-span span_opacity" : "text16 Home_section_list-span"}>{post.author}</span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </Slider>
                </div>
            </section>
        </>
    )

}
export default Home