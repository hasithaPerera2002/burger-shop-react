import {useDispatch} from "react-redux";
import {secondary} from "../state/colorReducer.ts";
import {useEffect, useState} from "react";
import OffersCard from "../components/cards/offersCard.tsx";
import Loader from "./helpers/loader.tsx";
import ServerErr from "./helpers/ServerErr.tsx";
import NotFound from "./helpers/notFound.tsx";
import Navbar from "../layouts/navbar.tsx";
import Footer from "../layouts/footer.tsx";
import Burger from "../models/burger.ts";
import {Navigate} from "react-router-dom";
import {getAllWithOffer} from "../api/burgerHandler.ts";

const handleOnCLick = (burger: Burger) => {
    Navigate({to:'/orders',state:burger});

};
function Offers() {
    document.title = "Offers";

    const dispatch = useDispatch();
    const [burgerList, setBurgerList] = useState<Burger[]>([])
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {


                const response =await getAllWithOffer();
                setBurgerList(response.data.result)
                console.log(burgerList)

            } catch (e) {

                setFetchError(true);


            } finally {
                setLoading(false)
            }

        }

        fetchData();
        dispatch(secondary());
    }, [dispatch,]);
    if (loading) return <Loader/>
    if(!burgerList)return <NotFound/>
    if (fetchError) return <ServerErr/>


    return (
        <section className={"bg-secondary min-h-[100vh] w-full pt-28"}>
            <Navbar/>
            <div className={"mx-[10rem]  "}>
                <div className={"font-normal font-inter text-7xl text-center text-tertiary mb-28"}>offers</div>
                <div className={" flex flex-wrap h-full"}>
                    {
                        burgerList.map((burger:Burger,index:number )=>(
                            <div className={"w-full  rounded-3xl overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"} key={index}>
                                <OffersCard onClick={() => handleOnCLick(burger)} image={burger.image} name={burger.name} offerPrice={burger.price} offerText={"buy 2 get 1 free"}/>
                            </div>
                        ))
                    }


                </div>
            </div>
            <Footer/>
        </section>
    )
        ;
}

export default Offers;