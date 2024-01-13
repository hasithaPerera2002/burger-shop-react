import {useEffect, useState} from "react";
import image1 from "../assets/delicious-cheeseburger.jpg";


import MenuCard from "../components/cards/menuCard.tsx";
import axios from "axios";
import ServerErr from "./helpers/ServerErr.tsx";
import Loader from "./helpers/loader.tsx";
import {useDispatch} from "react-redux";
import {secondary} from "../state/colorReducer.ts";

//TODO implement no item to show
function Menu() {
    document.title = "Menu";
    const dispatch = useDispatch();
    const [burgerList, setBurgerList] = useState([])
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState(false);

    useEffect(() => {
        setLoading(true)
        dispatch(secondary())
        const fetchData = async () => {
            try {


                const response = await axios.get('http://localhost:8080/api/v1/burgers');
                setBurgerList(response.data)
                console.log(burgerList)

            } catch (e) {

                setFetchError(true);


            } finally {
                setLoading(false)
            }

        }

        fetchData();

    }, [burgerList, fetchError]);

    if(loading)return <Loader/>
    if (fetchError)return <ServerErr/>

    return (
        <div>

                <section className="bg-secondary min-h-[100vh] w-full pt-28">
                    <div className="mx-[10rem]">
                        <div className="font-normal font-inter text-7xl text-center text-tertiary mb-28">menu</div>
                        <div className="flex flex-wrap h-full">
                            <div className="w-full rounded-3xl overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
                                <MenuCard image={image1} name="lorem" price={100}/>
                            </div>

                        </div>
                    </div>
                </section>

        </div>
    );
}

export default Menu;