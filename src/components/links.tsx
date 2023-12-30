import { motion } from "framer-motion";
import {Link} from "react-router-dom";

interface LinkProps {
    text:string,
    where:string
}
function Links({text,where}:LinkProps) {
    return (
        <motion.li
            whileHover='hover'
            variants={{
                hover: {
                    scale: 1.05
                }
            }}
            transition={{
                duration: 0.25,
                ease: "backInOut"
            }}
        >
            <Link to={`/${where}`}>{text}</Link>
        </motion.li>
    );
}

export default Links;