import {useDispatch} from "react-redux";
import {secondary} from "../state/colorReducer.ts";
import {useEffect} from "react";


function Offers() {

    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch 'primary' action when the component mounts
        dispatch(secondary());
    }, []);


    return (
        <section className={"bg-secondary min-h-[100vh] w-full pt-28"}>
            <div className={"mx-[10rem]  "}>
                <div className={"font-normal font-inter text-7xl text-center text-tertiary mb-28"}>offers</div>
                <div className={" flex flex-wrap h-full"}>


                </div>
            </div>
        </section>
    )
        ;
}

export default Offers;