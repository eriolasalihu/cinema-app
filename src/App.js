import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './home';
import Food from './Food';
import Search from './Search';
import More from './more';
import HomePage from './homePage';
import Profile from './anotherPage/profile';
import LoginForm from './loginForm/LoginForm';
import LandingPage from './landingPage/LandingPage';
import Landingg from './landingPagePage/Landingg';
import AllMovies from './allMovies/AllMovies';
import SliderSimple from './SliderSimple';
import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
import ComingSoon from './comingSoon/ComingSoon';
import Trending from './trending/Trending';
import Saved from './saved/Saved';
import SinglePageFilm from './SinglePageFilm/SinglePageFilm';
import GeeksforGeeks from './GeeksforGeeks';
import About from './aboutUs/About';
import Table from './tables/Table';

// import AboutUs from './aboutUs/aboutUs';
function App() {
  return (
    <Router>
    <Routes>
    <Route exact path="/single/:id" element={<Food />} />
    <Route exact path="/search" element={<Search />} />
    <Route exact path="/homePage" element={<HomePage />}/>
        <Route exact path="/homePagess" element={<Home />} />
        {/* <Route exact path="/random" element={<Food />} /> */}
    <Route exact path="/More" element={<More />}/>
    <Route exact path="/Profile" element={<Profile />}/>
    <Route exact path="/Login" element={<LoginForm />}/>
    <Route exact path='/' element={<LandingPage />}/>
    <Route exact path="/Landing" element={<Landingg />}/>
    <Route exact path="/AllMovies" element={<AllMovies />}/>
    <Route exact path="/ola" element={<SliderSimple />}/>
    <Route exact path="/comingSoon" element={<ComingSoon />}/>
    <Route exact path="/trending" element={<Trending />}/>
    <Route exact path="/saved" element={<Saved />}/>
    <Route exact path="/singlePage" element={<SinglePageFilm />}/>
    <Route exact path="/po" element={<GeeksforGeeks />}/>
    <Route exact path="/about" element={<About />}/>
    <Route exact path="/tables" element={<Table />}/>



    </Routes>
    </Router>
  );
}

export default App;
