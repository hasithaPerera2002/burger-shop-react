import {motion} from "framer-motion";
import React, {useState} from "react";

interface ButtonProps {
    color: string,
    fontColor: string,
    text: string,
    height?: string,
    width?: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const pathVariants = {
    hidden: {

        opacity: 0,
        pathLength: 0,

    },
    visible: {

        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",


        }
    }
}

function RoundButton({color, fontColor, height, width, text, onClick}: ButtonProps) {
    const [isHovered, setHovered] = useState(false);

    return (
        <motion.button
            whileHover={{
                scale: 1.05,
                transition: {duration: 0.2}

            }}
            onHoverStart={() => {
                setHovered(true)
            }}
            onHoverEnd={() => {
                setHovered(false)
            }}
            whileTap={{
                scale: 0.9
            }}
            className={`bg-${color}  px-6 py-2 flex relative overflow-hidden min-h-10 min-w-16 items-center shadow h-[${height}] w-[${width}] rounded-2xl `}
            onClick={onClick}>


                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isHovered ? 0 : 1 ,
                        left:isHovered?40:0,
                        transition:{
                        duration:0.2
                        }
                    }}

                    className={`text-${fontColor} relative  font-normal font-inter`}>{text}</motion.div>
            {isHovered && <motion.svg
                initial={
                    {left: -50}
                }
                animate={{
                    left: 20,
                    transition: {
                        duration: 0.35,
                        ease: 'easeOut'
                    }
                }}
                width="60" className={"absolute"} height="20" viewBox="0 0 96 38" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    variants={pathVariants}
                    initial={"hidden"}
                    animate={"visible"}
                    d="M66.9547 0.479602L95.0662 17.7472L95.224 17.8367C95.7044 18.1319 95.9631 18.5116 96 18.8979V19.1021C95.9631 19.4884 95.7044 19.8681 95.224 20.1633L95.0856 20.2358L66.9547 37.5204C65.9139 38.1599 64.2263 38.1599 63.1855 37.5204C62.1446 36.8809 62.1446 35.8441 63.1855 35.2047L87.2071 20.4437L2.66524 20.445C1.19326 20.445 0 19.7119 0 18.8076C0 17.9032 1.19326 17.1701 2.66524 17.1701L86.5808 17.1688L63.1855 2.79533C62.1446 2.15586 62.1446 1.11907 63.1855 0.479602C64.2263 -0.159867 65.9139 -0.159867 66.9547 0.479602ZM93.641 18.8062L65.0701 36.3625L93.3391 19.0003L93.3394 18.994L93.1817 18.9051L93.0206 18.8062H93.641Z"
                    fill={fontColor}/>
            </motion.svg>}

        </motion.button>
    );
}

export default RoundButton;