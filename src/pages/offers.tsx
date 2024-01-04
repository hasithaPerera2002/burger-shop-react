import {useDispatch} from "react-redux";
import {secondary} from "../state/colorReducer.ts";
import {useEffect} from "react";
import image1 from "../assets/delicious-cheeseburger.jpg";
import OffersCard from "../components/cards/offersCard.tsx";


function Offers() {
    document.title="Offers";

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
                    <div className={"w-full  rounded-3xl overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"}>
                        <OffersCard image={image1} name={"lorem"} offerPrice={100} offerText={"buy 2 get 1 free"}/>
                    </div>
                    <div className={"w-full  rounded-3xl overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"}>
                        <OffersCard image={image1} name={"lorem"} offerPrice={100} offerText={"buy 2 get 1 free"}/>
                    </div>
                    <div className={"w-full  rounded-3xl overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"}>
                        <OffersCard image={image1} name={"lorem"} offerPrice={100} offerText={"buy 2 get 1 free"}/>
                    </div>

                </div>
            </div>
        </section>
    )
        ;
}

export default Offers;