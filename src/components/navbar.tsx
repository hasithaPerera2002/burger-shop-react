import {Link} from "react-router-dom";
import log2 from '../assets/macaron_4746242.png';
import {useSelector} from "react-redux";
import {RootState} from "../state/state.ts";


function Navbar() {
    const selector = useSelector((state: RootState) => state.color.value);
    console.log(selector);
    return (
        <>
            <div className=" backdrop-blur w-full shadow-card z-20 fixed top-0 h-16">
                <div className="flex justify-between    px-[176px] flex-row items-center h-full ">
                    <div >
                        <img src={log2} className="h-[40px] ms-4  w-[45px] object-fill" alt="Logo"/>
                        <div className={`${selector == 'primary' ? 'text-tertiary' :'text-primary'} font-normal font-inter`}>burger blitz</div>
                    </div>


                    <ul className={`list-none flex ${selector == 'primary' ? 'text-tertiary' :'text-primary'} gap-5 font-inter  items-center basis-1/3 h-full  justify-between`}>
                        <li className={"leading-relaxed"}>
                            <Link to={"/"} className={"font-inter"}>home</Link>
                        </li>
                        <li>
                            <Link to={"/menu"}>menu</Link>
                        </li>
                        <li>
                            <Link to={"/offers"}>offers</Link>

                        </li>
                    </ul>


                    <div className="flex items-center gap-4">
                        <button className="bg-tertiary px-6 py-2 shadow rounded-2xl  text-black font-normal font-inter">
                            Sign In
                        </button>
                        <button className="bg-secondary px-6 py-2 shadow rounded-2xl text-black font-normal font-inter">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;