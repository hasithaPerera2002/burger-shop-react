import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from "./pages/home.tsx";

const LazyMenu = React.lazy(() => import('./pages/menu.tsx'))
const LazyOffer = React.lazy(() => import('./pages/offers.tsx'))
const LazyOrder = React.lazy(() => import('./pages/order.tsx'))

import Loader from "./pages/helpers/loader.tsx";
import PrivateRoutes from "./guard/privateRoutes.tsx";


function handleScroll() {
    console.log('handle scroll app.tsx');
}

const App = () => {

    return (
        <>

            {/*< Navbar/>*/}
            <div className="overscroll-contain" onScroll={handleScroll}>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace={true}/>}/>
                    <Route path="/*" element={<Navigate to="/home" replace={true}/>}/>
                    <Route path={"/home"} element={<React.Suspense fallback={<Loader/>}>
                        <Home/>
                    </React.Suspense>}/>
                    <Route element={<PrivateRoutes/>}>
                        <Route path="/menu" element={<React.Suspense fallback={<Loader/>}>
                            <LazyMenu/>
                        </React.Suspense>}/>
                        <Route path="/offers" element={<React.Suspense fallback={<Loader/>}>
                            <LazyOffer/>
                        </React.Suspense>}/>
                        <Route path={"/orders"} element={<React.Suspense fallback={<Loader/>}>
                            <LazyOrder id={''} name={''} image={''} price={0} featured={false} description={''} category={''}/>
                        </React.Suspense>}/>
                    </Route>


                </Routes>
            </div>
            {/*<Footer/>*/}


        </>
    );

};

export default App;
