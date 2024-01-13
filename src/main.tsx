import React from 'react'
import ReactDOM from 'react-dom/client'

const LazyApp = React.lazy(() => import ('./App.tsx'))
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {store} from "./state/state.ts";
import {Provider} from "react-redux";
import SignIn from "./pages/signIn.tsx";
import SignUp from "./pages/signUp.tsx";
import Loader from "./pages/helpers/loader.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path={"*"} element={<React.Suspense fallback={<Loader/>}>
                        <LazyApp/>
                    </React.Suspense>}/>
                    <Route path={"/signIn"} element={<React.Suspense fallback={<Loader/>}>
                        <SignIn/>
                    </React.Suspense>}/>
                    <Route path={"/signUp"} element={<React.Suspense fallback={<Loader/>}>
                        <SignUp/>
                    </React.Suspense>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
)
