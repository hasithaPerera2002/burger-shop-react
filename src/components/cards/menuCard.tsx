import {motion, useAnimation} from "framer-motion";
import RoundButton from "../roundButton.tsx";

interface MenuCardProps {
    image:string,
    name:string,
    price:number,
}

function MenuCard({image,name,price}:MenuCardProps) {
    const imageVariant =  {
      initial:{

      },
      animate:{
          scale:0.95,
          filter: 'blur(1px)',
          transition:{
            duration:0.25,
              ease:'easeInOut'
          }
      }
    }
    const showVariant =  {
      initial:{
            opacity:0
      },
      animate:{
          opacity:1
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
        <motion.div
            onHoverStart={handleHover}
            onHoverEnd={handleHoverEnd}
            className={"h-[25rem] shadow-custom-shadow my-5 bg-tertiary relative overflow-hidden rounded-3xl"}>
           <motion.div className={"h-3/4 "}
               variants={imageVariant}
               initial={"initial"}
               whileHover={"animate"}>
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
                Rs {price}
            </motion.div>
            <div className={"h-24 bottom-0 absolute w-full flex items-center justify-center rounded-b-2xl  bg-primary"}>
                <RoundButton color={"quinary"} fontColor={"white"} text={"order now"}/>
            </div>
        </motion.div>
    );
}

export default MenuCard;