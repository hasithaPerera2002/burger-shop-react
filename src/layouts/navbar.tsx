import log2 from '../assets/macaron_4746242.png';
import {useSelector} from "react-redux";
import {RootState} from "../state/state.ts";
import Links from "../components/links.tsx";
import img from "../assets/832.jpg"
import RoundButton from "../components/roundButton.tsx";
import { NavLink} from "react-router-dom";



function Navbar() {
    const selector = useSelector((state: RootState) => state.color.value);
    const isLogged = useSelector((state:RootState)=>state.auth.isLoggedIn)

    return (
        <>
            <div className=" backdrop-blur w-full shadow-card z-20 fixed top-0 h-16">
                <div className="flex justify-between    px-[176px] flex-row items-center h-full ">
                    <div>
                        <img src={log2} className="h-[40px] ms-4  w-[45px] object-fill" alt="Logo"/>
                        <div
                            className={`${selector == 'primary' ? 'text-tertiary' : 'text-primary'} font-normal font-inter`}>burger
                            blitz
                        </div>
                    </div>


                    <ul className={`list-none flex ${selector == 'primary' ? 'text-tertiary' : 'text-primary'} gap-5 font-inter  items-center basis-1/3 h-full  justify-between`}>
                        <Links text={"home"} where={"home"}/>
                        <Links text={"menu"} where={"menu"}/>
                        <Links text={"offers"} where={"offers"}/>
                    </ul>

                    {
                        !isLogged ? (
                            <div className="flex items-center  gap-4">
                                <NavLink  to={'/signIn'} target={"_parent"} >
                                    <RoundButton color={"tertiary"}  fontColor={"black"} text={"Sign In"}/></NavLink>
                                <NavLink to={"/signUp"} target={"_parent"}>
                                    <RoundButton color={"secondary"}  fontColor={"black"}
                                                 text={"Sign Up"}/>
                                </NavLink>
                            </div>
                        ):(
                            <div className="flex items-center rounded-3xl h-14 w-16  gap-4">
                                <img src={img} className={"h-full rounded-full  object-cover "} alt=""/>
                            </div>
                        )
                    }


                </div>
            </div>
        </>
    );
}

export default Navbar;