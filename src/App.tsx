import Footer from "./layouts/footer.tsx";
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home.tsx";

const LazyMenu = React.lazy(() => import('./pages/menu.tsx'))
const LazyOffer = React.lazy(() => import('./pages/offers.tsx'))
import Navbar from "./layouts/navbar.tsx";

import Loader from "./pages/helpers/loader.tsx";
import PrivateRoutes from "./guard/privateRoutes.tsx";



function handleScroll() {
    console.log('handle scroll app.tsx');
}

const App = () => {

    return (
        <>

            < Navbar/>
            <div className="overscroll-contain" onScroll={handleScroll}>
                <Routes>
                    <Route path="/home"  element={<Home/>}  />
                    <Route element={<PrivateRoutes/>}>
                        <Route path="/menu" element={<React.Suspense fallback={<Loader/>}>
                            <LazyMenu/>
                        </React.Suspense>}/>
                        <Route path="/offers" element={<React.Suspense fallback={<Loader/>}>
                            <LazyOffer/>
                        </React.Suspense>}/>
                    </Route>


                    <Route index={true} element={<Home/>}/>
                </Routes>
            </div>
            <Footer/>


        </>
    );

};

export default App;
