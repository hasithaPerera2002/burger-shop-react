import offer from "../../assets/gift.png"
import {motion, useAnimation} from "framer-motion";
import RoundButton from "../roundButton.tsx";

interface OfferCardsProps {
    image: string,
    name: string,
    offerPrice: number,
    offerText: string
}

function OffersCard({image, name, offerPrice, offerText}: OfferCardsProps) {
    const imageVariant = {
        initial: {
            scale: 1.01,
            filter: 'blur(0px)',
            transition: {
                duration: 0.25,
                ease: 'easeInOut'
            }
        },
        animate: {
            scale: 0.95,
            filter: 'blur(1px)',
            transition: {
                duration: 0.25,
                ease: 'easeInOut'
            }
        }
    }
    const showVariant = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    }
    const controls = useAnimation();

    const handleHover = async () => {
        await controls.start("animate");

    };

    const handleHoverEnd = async () => {
        await controls.start("initial");
    };
    return (
        <>
            <motion.div
                onHoverStart={handleHover}
                onHoverEnd={handleHoverEnd}
                className={"h-[25rem] shadow-custom-shadow my-5 bg-tertiary relative overflow-hidden rounded-3xl"}>
                <motion.img
                    variants={imageVariant}
                    initial={"initial"}
                    animate={controls}
                    src={offer} className={"absolute z-10  h-20 w-20   right-0 top-0"} alt=""/>
                <motion.div className={"h-3/4 "}
                            variants={imageVariant}
                            initial={"initial"}
                           animate={controls}>
                    <img

                        src={image} className={"object-cover scale-105 h-full "} alt=""/>
                </motion.div>
                <motion.div
                    variants={showVariant}
                    initial={"initial"}
                    animate={controls}
                    className={"absolute text-black text-4xl font-kadwa font-medium text-center px-3 text-shadow-sm shadow-red-300 cursor-context-menu w-full top-[5rem]"}>
                    {name}
                </motion.div>

                <motion.div
                    variants={showVariant}
                    initial={"initial"}
                    animate={controls}
                    className={"absolute text-black text-3xl font-kadwa font-medium text-center px-3 text-shadow-sm shadow-red-300 cursor-context-menu  w-full top-[10rem]"}>
                    Rs {offerPrice}
                </motion.div>
                <motion.div
                    variants={showVariant}
                    initial={"initial"}
                    animate={controls}
                    className={"absolute text-quinary text-3xl font-kadwa font-medium text-center px-3 bg-tertiary cursor-context-menu  w-full top-[15rem]"}>
                     {offerText}
                </motion.div>
                <div
                    className={"h-24 bottom-0 absolute w-full flex items-center justify-center rounded-b-2xl  bg-primary"}>
                    <RoundButton color={"quinary"} fontColor={"white"} text={"order now"}/>
                </div>
            </motion.div>
        </>
    );
}

export default OffersCard;