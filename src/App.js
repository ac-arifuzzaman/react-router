import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Countryes from "./components/Country/Countryes";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import FoodContainer from "./components/FoodContainer/FoodContainer";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Post from "./components/Post/Post";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/friend/:friendId" element={<FriendDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />}>
          <Route path=":post" element={<Post />}></Route>
        </Route>
        <Route path="/countri" element={<Countryes />} />
        <Route path="/country/:countryDetail" element={<CountryDetails />} />
        <Route path="/food" element={<FoodContainer />} />
        <Route path="/posts/:post" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
