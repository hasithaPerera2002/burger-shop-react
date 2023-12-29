import {motion} from "framer-motion";

interface CardProps {
    height: number;
    width: number;
    image: string;
}

function Card({height, width, image}: CardProps) {
    return (
        <motion.div
            whileHover='hover'
            variants={{
                hover: {
                    scale: 1.05
                }
            }}
            transition={{
                    duration: 1,
                    ease: "backInOut"
                }}
            className={`h-[${height}vh] w-[${width}vw] relative hover:scale-125`}>
            <img src={image} className={`h-[${height}vh] w-[${width}vw] object-cover rounded-3xl`} alt=""/>
        </motion.div>
    );
}

export default Card;