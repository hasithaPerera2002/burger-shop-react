import log2 from '../assets/macaron_4746242.png';
import {useSelector} from "react-redux";
import {RootState} from "../state/state.ts";
import Links from "../components/links.tsx";
import RoundButton from "../components/roundButton.tsx";


function Navbar() {
    const selector = useSelector((state: RootState) => state.color.value);
    console.log(selector);
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
                        <Links text={"home"} where={"/"}/>
                        <Links text={"menu"} where={"/menu"}/>
                        <Links text={"offers"} where={"/offers"}/>
                    </ul>


                    <div className="flex items-center  gap-4">
                        <RoundButton color={"tertiary"} fontColor={"black"} text={"Sign In"} />
                        <RoundButton color={"secondary"} fontColor={"black"} text={"Sign Up"}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;