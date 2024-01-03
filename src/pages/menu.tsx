import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {secondary} from "../state/colorReducer.ts";


function Menu() {
    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch 'primary' action when the component mounts
        dispatch(secondary());
    }, []);

    return (
       <section className={"bg-secondary min-h-[100vh] w-full pt-28"}>
            <div className={"mx-[10rem] border-black border-2 "}>
                <div className={"font-normal font-inter text-5xl text-center text-tertiary mb-28"}>menu</div>
                <div className={"border-green-300 flex border-2 h-full"}>

                </div>
            </div>
       </section>
    );
}

export default Menu;