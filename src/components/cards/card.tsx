import {motion} from "framer-motion";
import clock from "../../assets/clock.svg";

interface CardProps {
    height: number;
    width: number;
    image: string;
    heroText: string;
    price: number;
    time: string
}

function OfferCard({height, width, image, time, price, heroText}: CardProps) {
    return (
        <motion.div
            whileHover='hover'
            variants={{
                hover: {
                    scale: 1.05
                }
            }}
            transition={{
                duration: 0.5,
                ease: "backInOut"
            }}
            className={`h-[${height}vh] w-[${width}vw] relative hover:scale-125 overflow-hidden`}>
            <motion.img
                variants={{
                    hover: {
                        opacity: 0.75,
                        transition: {
                            duration: 0.5,
                            ease: "backInOut"
                        }
                    }
                }}
                src={image} className={`h-[${height}vh] w-[${width}vw] object-cover rounded-3xl`} alt=""/>
            <motion.div
                variants={{
                    hover: {
                        top: "2rem",
                    }
                }}
                className={"font-chango text-4xl font-normal text-tertiary absolute top-[67vh] left-[1rem]"}>{heroText}
            </motion.div>
            <motion.div
                variants={{
                    hover:{
                        top:"68vh"
                    }
                }}
                className={"absolute font-kadwa top-[100vh] left-[1rem] text-3xl text-tertiary font-bold leading-loose"}>
                RS {price}
            </motion.div>
            <motion.div
                variants={{
                    hover:{
                        top:"68.5vh"
                    }
                }}
                className={"absolute flex font-kadwa top-[100vh] right-[1rem] text-2xl text-tertiary font-thin leading-loose"}>
                <img src={clock} alt=""/><div>{time} mins</div>
            </motion.div>

        </motion.div>
    );
}

export default OfferCard;