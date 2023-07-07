import { BrowserRouter as Router ,Routes , Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
// import CoinDetails from "./components/CoinDetails";
// import Coin from "./components/Coin";
// import Exchanges from "./components/Exchanges";
import Trending from "./components/Trending";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import Categories from "./components/Categories";
import Login from "./components/Login";
import Register from "./components/Register";
import GetStart from "./components/GetStart";
import Search from "./components/Search";
import initialDetails from './data/initialDetails';



function App() {
  return (
    <Router>

        <Header/>
        <Routes>
          
          <Route path="/" element={<><Home /><GetStart /><Featured /><Categories /></>} />
          
          <Route path="/featured" element={<Featured />} />
          <Route path="/getStart" element={<GetStart />} />
          
          <Route path="/categories" element={<Categories />} />
          {/* <Route path="/coins" element={<Coin />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/coins/:id" element={<CoinDetails />} /> */}
          <Route path="/trending" element={<Trending />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<div className="tc min-vh-100">
            <Search details={initialDetails}/>
            </div>} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
