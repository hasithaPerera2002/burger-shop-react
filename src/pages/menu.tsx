import {useEffect, useState} from "react";


import MenuCard from "../components/cards/menuCard.tsx";
import axios from "axios";
import ServerErr from "./helpers/ServerErr.tsx";
import Loader from "./helpers/loader.tsx";
import {useDispatch} from "react-redux";
import {secondary} from "../state/colorReducer.ts";
import NotFound from "./helpers/notFound.tsx";
import Navbar from "../layouts/navbar.tsx";
import Footer from "../layouts/footer.tsx";
import { useNavigate, } from "react-router-dom";
import Burger from "../models/burger.ts";



function Menu() {
    document.title = "Menu";
    const dispatch = useDispatch();
    const [burgerList, setBurgerList] = useState<Burger[]>([])
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState(false);
    const navigation =useNavigate();
    useEffect(() => {
        setLoading(true)
        dispatch(secondary())
        const fetchData = async () => {
            try {


                const response = await axios.get('http://localhost:3000/api/v1/burgers');
                setBurgerList(response.data.result)
                console.log(response.data.result)
                console.log(burgerList)

            } catch (e) {
                console.log('catched err')
                setFetchError(true);


            } finally {
                setLoading(false)
            }

        }

        fetchData();

    }, []);

    if (loading) return <Loader/>
    if (!burgerList) return <NotFound/>
    if (fetchError) return <ServerErr/>


    const handleOnClick = (burger: Burger) => {
      //  Navigate({to:'/orders',state:burger});
        navigation('/orders', {state:burger})
    };
    return (
        <div>
            <Navbar/>
            <section className="bg-secondary min-h-[100vh] w-full pt-28">
                <div className="mx-[10rem]">
                    <div className="font-normal font-inter text-7xl text-center text-tertiary mb-28">menu</div>
                    <div className="flex flex-wrap h-full">
                        {

                            burgerList.map((burger: Burger, index: number) => (

                                <div
                                    key={index}
                                    className="w-full rounded-3xl overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
                                    <MenuCard image={burger.image} name={burger.name} key={index} onClick={()=>handleOnClick(burger)} price={100} />

                                </div>
                            ))

                        }
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Menu;