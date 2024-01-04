import {useDispatch} from "react-redux";
import {useEffect} from "react";
import image1 from "../assets/delicious-cheeseburger.jpg";
import image2 from "../assets/white-burer-2.jpg";
import image3 from "../assets/white-burger-3.jpg";
import {secondary} from "../state/colorReducer.ts";
import MenuCard from "../components/cards/menuCard.tsx";


function Menu() {
    document.title="Menu";
    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch 'primary' action when the component mounts
        dispatch(secondary());
    }, []);

    return (
        <section className={"bg-secondary min-h-[100vh] w-full pt-28"}>
            <div className={"mx-[10rem]  "}>
                <div className={"font-normal font-inter text-7xl text-center text-tertiary mb-28"}>menu</div>
                <div className={" flex flex-wrap h-full"}>
                    <div className={"w-full  rounded-3xl overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"}>
                        <MenuCard image={image1} name={"lorem"} price={100}/>
                    </div>
                    <div className={"w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"}>
                        <MenuCard image={image2} name={"cheese burger "} price={100}/>
                    </div>
                    <div className={"w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"}>
                        <MenuCard image={image3} name={"lorem"} price={100}/>
                    </div>
                    <div className={"w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"}>
                        <MenuCard image={image1} name={"lorem"} price={100}/>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Menu;