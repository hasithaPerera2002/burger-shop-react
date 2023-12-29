import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {primary} from "../state/colorReducer.ts";
import hero_burger from "../assets/hero-burger.png";
import human from "../assets/human.jpg";
import heroVideo from "../assets/video-hero - Trim.mp4";

function Home() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(primary())
    }, [])

    return (
        <>
            <section className={"h-[100vh] relative bg-primary flex items-center  justify-center "}>
                <div className={" border-green-300 w-[80vw] mt-10  h-[90vh] "}>
                    {/*hero text here*/}
                    <div
                        className={"font-kadwa left-[10rem] absolute top-[10rem] font-bold text-tertiary text-8xl  text-shadow-sm shadow-red-700"}>where
                        freshness
                    </div>
                    <div
                        className={"font-kadwa absolute text-shadow-sm shadow-red-700  z-[1] top-[17rem] left-[24rem] font-bold text-tertiary text-8xl "}>meets
                        <span className={"font-rampart tracking-wide"}> flavor</span>
                    </div>
                    {/*hero image*/}
                    <div className={"h-[35rem] top-[7rem] left-[50rem] absolute -z-0 w-[27rem]"}>
                        <img src={hero_burger} className={"h-full  transform rotate-[27.44deg] object-cover w-full  "}
                             alt="burger hero png"/>
                    </div>

                    <div
                        className={"absolute font-inter text-tertiary font-light left-[10rem] top-[30rem] leading-7 tracking-wide italic"}>
                        “ delight in the perfect fusion of <br/> freshness and flavor in every bite “
                    </div>
                    <button
                        className="absolute bg-quaternary px-6 py-2 shadow rounded-2xl text-tertiary font-inter top-[37rem] left-[10rem] ">order
                        now
                    </button>
                    <div className={"top-[36.5rem] flex left-[22rem] absolute"}>
                        <div className="w-[55px] flex justify-center items-center h-[55px] bg-zinc-300 rounded-full" >
                            <img src={human} className={"rounded-full h-[50px] w-[50px]"} alt=""/>
                        </div>
                        <div className="w-[55px] flex justify-center items-center h-[55px] bg-rose-400 -ml-8 rounded-full" >
                            <img src={human} className={"rounded-full h-[50px] w-[50px]"} alt=""/>
                        </div>
                        <div className="w-[55px] h-[55px] flex justify-center items-center bg-violet-400 -ml-8 rounded-full" >
                            <img src={human} className={"rounded-full h-[50px] w-[50px]"} alt=""/>
                        </div>
                        <div className="flex items-center justify-center w-14 h-14 bg-blue-400 -ml-8 rounded-full text-tertiary">
                            <p className="m-auto">100+</p>
                        </div>
                    </div>

                </div>
            </section>
            {/*about us */}
            <section className={"relative bg-tertiary h-[100vh]"}>
                <video autoPlay loop muted className=" inset-0 w-full h-full object-cover z-0">
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={"z-1 font-bold font-kadwa absolute top-[5rem] left-[10rem] text-8xl text-tertiary"}>about <span className={"font-rampart tracking-wide"}>us</span></div>
                <div className={"absolute z-1 text-tertiary font-inter font-thin text-2xl italic top-[14rem] px-[10rem] backdrop-blur"}>
                    In our burger haven, taste isn't just a promise; it's a tradition we meticulously uphold. <br/><br/>
                    With an unwavering commitment to freshness, every ingredient is handpicked to ensure supreme quality and delectable flavors.Guided by seasoned chefs, our kitchen is a melting pot of culinary expertise, where every burger is a masterpiece in taste.
                    <br/><br/>
                    Each bite tells a tale of our passion for crafting burgers that redefine the boundaries of taste and freshness.
                    <br/><br/>
                    Join us in experiencing a flavorful journey that resonates with our dedication to quality and the joy of savoring every bite.

                </div>
            </section>
        </>
    );
}

export default Home;