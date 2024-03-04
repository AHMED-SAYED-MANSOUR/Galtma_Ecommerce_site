import "./App.css";
import { Route , Routes } from "react-router-dom";
import CatHeading from "./components/Categories/Heading/CategoryHeading";
import NavBar from "./components/NavBar/NavBar";
import Product from "./components/Product/Product";
import ADV from "./components/advirtising/AD";
import Intro from "./components/carousel/Intro";
import Products from "./components/ProductsList/Products";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/contactus/Contact";
import Proto from "./components/Pages/Protofolio/proto";
import ProductPage from "./components/ProductAlone/ProductPage";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <NavBar></NavBar> */}
        <Routes>
          <Route path="/" element={<><NavBar></NavBar><Intro></Intro> <ADV></ADV> <CatHeading></CatHeading> <Products></Products></>}></Route>
          <Route path="/About" element={<><NavBar></NavBar><About></About></>}></Route>
          <Route path="/contactus" element={<><NavBar></NavBar><Contact></Contact></>}></Route>
          <Route path="/protofolio" element={<><NavBar></NavBar><Proto></Proto></>}></Route>
          <Route path="/productpage" element={<><ProductPage></ProductPage></>}></Route>
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
