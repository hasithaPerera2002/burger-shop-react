import {Navigate, Outlet} from "react-router-dom";
import { useSelector} from "react-redux";
import {RootState} from "../state/state.ts";


function PrivateRoutes() {
    const auth = useSelector((state:RootState) =>  state.auth.isLoggedIn);

    return (
       auth?<Outlet/> :<Navigate to={"/signIn"}/>
    );
}

export default PrivateRoutes;