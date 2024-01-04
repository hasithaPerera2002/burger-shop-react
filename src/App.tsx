import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home.tsx";
import Menu from "./pages/menu.tsx";
import Offers from "./pages/offers.tsx";
import Navbar from "./layouts/navbar.tsx";
import Footer from "./layouts/footer.tsx";



function handleScroll() {
    console.log('handle scroll app.tsx');
}

const LoadingScreen = () => {




    return (
        <>

                < Navbar />
                <div className="overscroll-contain" onScroll={handleScroll}>
                    <Routes >
                        <Route path="/" element={<Home/>}/>
                        <Route path="menu" element={<Menu/>}/>
                        <Route path="offers" element={<Offers/>}/>

                    </Routes>
                </div>
                <Footer/>



        </>
    );
};

export default LoadingScreen;
