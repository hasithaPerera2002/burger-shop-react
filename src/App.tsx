
import './App.css'
import Navbar from "./components/navbar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home.tsx";
import Menu from "./pages/menu.tsx";
import Offers from "./pages/offers.tsx";

function App() {


  return (
    <>
      <Navbar/>

            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/menu"} element={<Menu/>}></Route>
                <Route path={"/offers"} element={<Offers/>}></Route>
            </Routes>

    </>
  )
}

export default App
