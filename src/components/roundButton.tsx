import { motion } from "framer-motion";

interface ButtonProps {
    color:string,
    fontColor:string,
    text:string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function RoundButton({color,fontColor,text,onClick}:ButtonProps) {
    return (
        <motion.button
            whileHover={{
                scale:1.05,
                transition:{duration:0.2}
            }}
            whileTap={{
                scale:0.9
            }}
            className={`bg-${color} px-6 py-2 shadow rounded-2xl text-${fontColor} font-normal font-inter`}
                onClick={onClick}>
            {text}
        </motion.button>
    );
}

export default RoundButton;