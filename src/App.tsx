
import './App.css'
import Navbar from "./layouts/navbar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home.tsx";
import Menu from "./pages/menu.tsx";
import Offers from "./pages/offers.tsx";

function App() {

//change color according to bg
    function handleScroll() {
        console.log('handle scroll app.tsx');

    }

    return (
    <>
      <Navbar/>
        <div className={"overscroll-contain"} onScroll={handleScroll}>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/menu"} element={<Menu/>}></Route>
                <Route path={"/offers"} element={<Offers/>}></Route>
            </Routes>
        </div>
    </>
  )
}

export default App
