import './App.scss';

//Components

import Aside from './Components/Aside/Aside';
import Header from './Components/Header/Header';
import {Routes, Route} from 'react-router-dom'

//PAGES

import Home from './Pages/Home/Home';
import Trending from './Pages/Trending';
import Subscriptions from './Pages/Subscriptions';
import Library from './Pages/Library';
import History from './Pages/History';
import WatchLater from './Pages/Watchlater';
import Favourites from './Pages/Favourites';
import LikeedVideos from './Pages/Liked videos';
import Music from './Pages/Music';
import Games from './Pages/Games';
import ShowMore from './Pages/Show more';
import Channel from './Pages/Channel/Channel';
import Videos from './Pages/Videos/Videos';

//IMAGES

import modal from './Assets/Images/modal.svg'
import logo from './Assets/Images/logo.svg'
import lupa from './Assets/Images/lupa.svg'
import video from './Assets/Images/video.svg'
import combinedshape from './Assets/Images/CombinedShape.svg'
import bell from './Assets/Images/bell.svg'
import trending from './Assets/Images/tranding.svg'
import left from './Assets/Images/left.svg'
import right from './Assets/Images/right.svg'
import home from './Assets/Images/home.svg'
import more from './Assets/Images/More.svg'
import light_logo from './Assets/Images/light_logo.svg'
import light_video from './Assets/Images/light_video.svg'
import light_dots from './Assets/Images/light_dots.svg'
import light_bell from './Assets/Images/light_bell.svg'
import useTheme from './Hook/useTheme';
import settings from './Assets/Images/settings.svg'
import light_settings from './Assets/Images/light_settings.svg'
import light_more from './Assets/Images/light_more.svg'

function App() {

  let [theme] = useTheme()

  return (
   <section className={theme === 'dark' ? "general general_light" : "general"}>
     <Header modal={modal} logo={logo} lupa={lupa} video={video} combinedshape={combinedshape} bell={bell} trending={trending} light_logo={light_logo} light_video={light_video} light_dots={light_dots} light_bell={light_bell} />
     <div className="big-box">
     <div className="container">
     <Aside home={home} settings={settings} light_settings={light_settings} />
      <Routes>
        <Route path="/" element={<Home left={left} right={right} />} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/subscription" element={<Subscriptions/>} />
        <Route path="/library" element={<Library/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/watchlater" element={<WatchLater/>} />
        <Route path="/favourites" element={<Favourites/>} />
        <Route path="/likedvideos" element={<LikeedVideos/>} />
        <Route path="/music" element={<Music/>} />
        <Route path="/games" element={<Games/>} />
        <Route path="/showmore" element={<ShowMore/>} />
        <Route path="/channel/:id" element={<Channel bell={bell} lupa={lupa} left={left} right={right} light_bell={light_bell} />} />
        <Route path="/video/:id" element={<Videos more={more} light_more={light_more} />} />
      </Routes>
     </div>
      </div>
   </section>
  );
}

export default App;
