import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {primary} from "../state/colorReducer.ts";
import heroVideo from "../assets/video-hero - Trim.mp4";
import arrow from '../assets/arrow.png';
import sandwich2 from '../assets/sandwich-2.jpg'
import sandwich1 from '../assets/sandwich-1.jpg'
import burger1 from "../assets/hero-burer.jpg"
import burgerDash from "../assets/burgerdash.png"
import chickenBurger from "../assets/chicken-burger-with-french-fries-table.jpg"
import waiter from "../assets/waiter.jpg"
import twoBurgers from "../assets/hero-burer.jpg"
import cheeseBurger from "../assets/cheese-burger-2.jpg"
import {motion,} from "framer-motion";
import OfferCard from "../components/cards/offerCard.tsx";
import SpecialCard from "../components/cards/specialCard.tsx";


function Home() {
    document.title = "Home";
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(primary())
    }, [])

    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 15,
                ease: "easeInOut",
                repeat: Infinity

            }
        }

    }
    const showVariants = {
        hidden: {
            opacity: 0,
            y: 10
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ease: "easeIn",
                duration: 2,
                type: "spring",
                bounce: 0.5
            }

        }
    }
    const falling = {
        initial: {y: -100, opacity: 0},

        animate: {
            y: 0, opacity: 1, scale: [1.2, 0.8, 1],
            transition: {duration: 1.5, type: "spring", damping: 20, stiffness: 500}
        },


    }

    return (
        <>
            <section className={"h-[100vh] relative bg-primary flex items-center  justify-center "}>
                <video autoPlay loop muted className=" w-100 h-[120vh] object-fill z-0">
                    <source src={heroVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <motion.div
                    initial={"initial"}
                    whileInView={"animate"}
                    viewport={{
                        once: true,
                        amount: 0.5
                    }}
                    transition={{
                        staggerChildren: 0.25
                    }}
                    className={" border-green-300 w-[40vw] mt-10  h-[90vh] "}>

                    {/*hero text here*/}
                    <motion.div
                        variants={
                            falling
                        }
                        className={"font-bungee left-[10rem] absolute top-[6rem] font-bold text-tertiary text-9xl  text-shadow-sm shadow-gray-950"}>WHERE
                    </motion.div>
                    <motion.div
                        variants={falling}
                        className={"font-bungee left-[10rem] absolute top-[13rem]   text-tertiary text-9xl  text-shadow-sm shadow-gray-950"}>FRESHNESS
                    </motion.div>
                    <motion.div
                        variants={falling}
                        className={"font-bungee absolute text-shadow-sm shadow-gray-950   top-[20.5rem] left-[10rem] font-bold text-tertiary text-9xl "}>MEETS
                    </motion.div>
                    <motion.div
                        variants={falling}
                        className={"font-rampart absolute text-shadow-sm shadow-gray-950   top-[25rem] left-[10rem] font-bold text-tertiary text-[10rem] "}>FLAVOR
                    </motion.div>
                    <svg

                        xmlns="http://www.w3.org/2000/svg" width="607" height="590" viewBox="0 0 307 290"
                        className={"absolute  left-[45rem] top-5"} fill="none">
                        <motion.path
                            variants={pathVariants}
                            initial={"hidden"}
                            animate={"visible"}

                            d="M202.738 163.001L220.527 106.473C221.564 103.178 223.229 100.151 225.428 97.5658C227.626 94.9805 230.314 92.887 233.339 91.4049L234.653 90.7609C240.412 87.9374 247.113 87.633 253.282 89.9148C259.452 92.1965 264.585 96.8773 267.551 102.928C270.517 108.978 271.075 115.902 269.1 122.177C267.125 128.451 262.781 133.563 257.022 136.386L83.3122 221.553C77.5534 224.377 70.8521 224.681 64.6824 222.399C58.5128 220.117 53.3802 215.437 50.4139 209.386C47.4475 203.336 46.8904 196.412 48.865 190.137C50.8395 183.863 55.1841 178.751 60.943 175.928L109.962 151.895C127.236 143.427 147.336 142.513 165.842 149.356L202.738 163.001ZM72.4554 226.876L267.879 131.063L279.063 153.876C283.513 162.951 284.349 173.337 281.387 182.749C278.425 192.161 271.908 199.828 263.27 204.063L132.988 267.939C124.349 272.174 114.297 272.63 105.043 269.208C95.7884 265.785 88.0896 258.764 83.64 249.689L72.4554 226.876Z"
                            stroke="#EDF2F4" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round"
                            stroke-linejoin="round"/>
                        <motion.path
                            variants={pathVariants}
                            initial={"hidden"}
                            animate={"visible"}
                            d="M158.01 71.745L157.999 71.7503M131.032 99.1201L131.021 99.1254M108.652 53.5002C58.4603 78.1082 26.9266 118.413 45.1235 169.536C47.4827 176.161 54.95 178.866 60.9429 175.928L234.653 90.7608C240.646 87.8226 243.08 80.2625 239.287 74.3403C210.017 28.6467 158.843 28.8923 108.652 53.5002Z"
                            stroke="#EDF2F4" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>
                    {/*hero image*/}


                    {/*order button*/}

                    {/*<div className={"top-[37rem]    left-[10rem] absolute"}>*/}
                    {/*    <RoundButton color={"quinary "} fontColor={"tertiary"} text={"order now"}/>*/}

                    {/*</div>*/}
                    {/*<div className={"top-[36.5rem] flex left-[22rem] absolute"}>*/}
                    {/*    <div className="w-[55px] flex justify-center items-center h-[55px] bg-zinc-300 rounded-full">*/}
                    {/*        <img src={human} className={"rounded-full h-[50px] w-[50px]"} alt=""/>*/}
                    {/*    </div>*/}
                    {/*    <div*/}
                    {/*        className="w-[55px] flex justify-center items-center h-[55px] bg-rose-400 -ml-8 rounded-full">*/}
                    {/*        <img src={human} className={"rounded-full h-[50px] w-[50px]"} alt=""/>*/}
                    {/*    </div>*/}
                    {/*    <div*/}
                    {/*        className="w-[55px] h-[55px] flex justify-center items-center bg-violet-400 -ml-8 rounded-full">*/}
                    {/*        <img src={human} className={"rounded-full h-[50px] w-[50px]"} alt=""/>*/}
                    {/*    </div>*/}
                    {/*    <div*/}
                    {/*        className="flex items-center justify-center w-14 h-14 bg-blue-400 -ml-8 rounded-full text-tertiary">*/}
                    {/*        <p className="m-auto">100+</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </motion.div>
            </section>
            {/*about us */}

            <section className={"h-[140vh] bg-primary relative "}>
                <motion.div
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{
                        once: true,
                        amount: 0.5
                    }}
                    transition={{
                        staggerChildren: 0.15
                    }}
                    className={"h-48 bg-quinary w-full"}>
                    <div className={"px-[10rem] flex  items-center h-full "}>
                        <motion.img
                            variants={showVariants}
                            src={arrow} className={"h-40 left-[10rem]"} alt=""/>
                        <motion.div
                            variants={showVariants}


                            className={"font-chango text-4xl text-tertiary ps-4 pe-3 leading-relaxed"}>
                            special beef sandwich with soft bread
                        </motion.div>
                        <div className={"flex "}>
                            <motion.img
                                variants={showVariants}
                                src={sandwich1} className={"object-cover rounded-full me-2 h-36 w-36"} alt=""/>
                            <motion.img
                                variants={showVariants}
                                src={sandwich2} className={"object-cover rounded-full ms-2 h-36 w-36"} alt=""/>
                        </div>
                    </div>


                </motion.div>
                <motion.div
                    initial={"hidden"}
                    whileInView={"visible"}
                    variants={showVariants}

                    className={"px-[10rem] mt-16 flex  gap-6 h-[80vh] relative"}>
                    <OfferCard height={80} width={20} image={burger1} heroText={"breakfasts burger"} price={700}
                               time={"5-10"}/>
                    <OfferCard height={80} width={20} image={burger1} heroText={"blueberry sandwich"} price={1200}
                               time={"5-10"}/>
                    <OfferCard height={80} width={20} image={burger1} heroText={"cheese burger"} price={900}
                               time={"5-10"}/>
                </motion.div>
            </section>
            {/*servant section*/}
            <section className={"h-[100vh] pt-10 bg-secondary relative overflow-hidden"}>
                <img src={burgerDash} className={"absolute h-[20rem] right-[1rem] bottom-[1rem]"} alt=""/>
                <motion.div

                    initial={"hidden"}
                    whileInView={"visible"}
                    transition={{
                        staggerChildren: 0.2
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3
                    }}
                    className={"mx-[10rem]  justify-center items-center flex h-[90vh]"}>
                    <motion.div
                        variants={showVariants}
                        className={"h-[80vh] w-1/2 bg-black bg-opacity-20 mx-16 rounded-[23px]  border-opacity-30"}>
                        <img src={waiter} className={"object-cover rounded-[23px] opacity-85 shadow h-full"} alt=""/>
                    </motion.div>
                    <div className={"w-1/2"}>
                        <motion.div
                            variants={showVariants}
                            className={" font-normal font-chango text-tertiary text-5xl leading-[70px]"}>
                            where taste finds its true <span className={"font-rampart"}>Essence</span>
                        </motion.div>
                        <motion.div
                            variants={showVariants}
                            className={"text-white text-1xl font-normal mt-2 font-['Inter'] leading-[25px]"}>
                            Embrace Authentic Flavor: Where Taste Finds its Home. Our curated menu, crafted with premium
                            ingredients, delivers a symphony of satisfaction. Led by passionate chefs, we redefine
                            culinary excellence in every bite. <br/><br/>
                            Join us for a taste adventure that celebrates genuine flavors and unforgettable experiences.
                            Step into our world and savor the true essence of taste
                        </motion.div>
                        <div className={"flex mt-10 gap-20"}>
                            <motion.div
                                variants={showVariants}
                                className={"text-primary font-kadwa"}>
                                <div className={"text-5xl font-bold"}>112</div>
                                <div className={"text-2xl font-bold"}>outline</div>
                            </motion.div>
                            <motion.div
                                variants={showVariants}
                                className={"text-quinary font-kadwa"}>
                                <div className={"text-5xl font-bold"}>10</div>
                                <div className={"text-2xl font-bold"}>menu</div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>
            {/*special section*/}
            <section className={"h-[120vh] bg-primary relative"}>
                <div className={"mx-[10rem]"}>
                    <div className={"font-kadwa text-7xl py-5 text-tertiary font-bold leading-relaxed text-center"}>our
                        specials
                    </div>
                    <motion.div
                        variants={showVariants}
                        initial={"hidden"}
                        whileInView={"visible"}
                        className={"relative h-[90vh]  items-center gap-6 flex "}>
                        <SpecialCard price={4000} time={"9.00 AM"} ml={.5} width={30} height={80} image={chickenBurger}
                                     top={30}
                                     heroText={"double bbq burger"} list1={"french fries"} list2={"two burgers"}
                                     list3={"drinks"}/>
                        <SpecialCard price={4000} ml={1.5} mt={20} time={"9.00 AM"} width={40} top={30}
                                     height={90} image={twoBurgers}
                                     heroText={"double bbq burger"}
                                     list1={"french fries"} list2={"two burgers"}
                                     list3={"drinks"}/>
                        <SpecialCard price={4000} time={"9.00 AM"} ml={0} mt={0} width={40} height={80}
                                     image={cheeseBurger}
                                     top={30}
                                     heroText={"double bbq burger"} list1={"french fries"} list2={"two burgers"}
                                     list3={"drinks"}/>
                    </motion.div>
                </div>
                <svg

                    xmlns="http://www.w3.org/2000/svg" width="307" height="290" viewBox="0 0 307 290"
                    className={"absolute top-[3rem]"} fill="none">
                    <motion.path
                        variants={pathVariants}
                        initial={"hidden"}
                        animate={"visible"}

                        d="M202.738 163.001L220.527 106.473C221.564 103.178 223.229 100.151 225.428 97.5658C227.626 94.9805 230.314 92.887 233.339 91.4049L234.653 90.7609C240.412 87.9374 247.113 87.633 253.282 89.9148C259.452 92.1965 264.585 96.8773 267.551 102.928C270.517 108.978 271.075 115.902 269.1 122.177C267.125 128.451 262.781 133.563 257.022 136.386L83.3122 221.553C77.5534 224.377 70.8521 224.681 64.6824 222.399C58.5128 220.117 53.3802 215.437 50.4139 209.386C47.4475 203.336 46.8904 196.412 48.865 190.137C50.8395 183.863 55.1841 178.751 60.943 175.928L109.962 151.895C127.236 143.427 147.336 142.513 165.842 149.356L202.738 163.001ZM72.4554 226.876L267.879 131.063L279.063 153.876C283.513 162.951 284.349 173.337 281.387 182.749C278.425 192.161 271.908 199.828 263.27 204.063L132.988 267.939C124.349 272.174 114.297 272.63 105.043 269.208C95.7884 265.785 88.0896 258.764 83.64 249.689L72.4554 226.876Z"
                        stroke="#EDF2F4" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                    <motion.path
                        variants={pathVariants}
                        initial={"hidden"}
                        animate={"visible"}
                        d="M158.01 71.745L157.999 71.7503M131.032 99.1201L131.021 99.1254M108.652 53.5002C58.4603 78.1082 26.9266 118.413 45.1235 169.536C47.4827 176.161 54.95 178.866 60.9429 175.928L234.653 90.7608C240.646 87.8226 243.08 80.2625 239.287 74.3403C210.017 28.6467 158.843 28.8923 108.652 53.5002Z"
                        stroke="#EDF2F4" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="380" className={"absolute top-[20rem] right-[0rem]"}
                     height="338" viewBox="0 0 257 338" fill="none">
                    <path
                        d="M59.9903 197.595C60.3778 196.178 60.9156 194.684 61.6272 193.027C62.4817 191.058 61.6066 188.787 59.5471 187.876C57.5464 187.006 55.2347 187.899 54.38 189.877C53.5213 191.871 52.8647 193.7 52.3825 195.473C51.8947 197.256 52.7467 199.097 54.323 199.954C54.5834 200.096 54.8621 200.212 55.1629 200.295C57.2652 200.879 59.4237 199.672 59.9903 197.595Z"
                        fill="#EDF2F4" fillOpacity="0.5"/>
                    <path
                        d="M139.294 256.623L93.2318 231.589C72.5562 220.352 62.7203 213.574 60.1176 206.654C59.3521 204.619 56.7688 204.151 54.7332 204.884C52.694 205.616 51.8915 207.432 52.6572 209.457C56.0839 218.585 66.3832 225.867 89.51 238.437L135.572 263.471C137.492 264.514 139.876 263.828 140.904 261.936C141.933 260.043 141.214 257.666 139.294 256.623Z"
                        fill="#EDF2F4" fillOpacity="0.5"/>
                    <path
                        d="M216.493 101.397L204.962 103.996C202.847 104.469 201.541 106.566 202.049 108.668C202.318 109.803 203.063 110.709 204.018 111.228C204.837 111.673 205.818 111.838 206.793 111.615L218.325 109.016C220.44 108.542 221.746 106.446 221.238 104.344C220.734 102.234 218.607 100.91 216.493 101.397Z"
                        fill="#EDF2F4" fillOpacity="0.5"/>
                    <path
                        d="M166.555 87.8626C167.118 88.1683 167.76 88.3443 168.442 88.3471C170.619 88.3553 172.369 86.6158 172.349 84.4593L172.262 72.6951C172.244 70.5353 170.464 68.7701 168.296 68.7709C166.119 68.7626 164.369 70.5022 164.389 72.6586L164.476 84.4229C164.487 85.9006 165.323 87.1927 166.555 87.8626Z"
                        fill="#EDF2F4" fillOpacity="0.5"/>
                    <path
                        d="M253.271 108.064L241.771 110.778C239.661 111.276 238.381 113.382 238.909 115.482C239.187 116.599 239.927 117.489 240.868 118C241.701 118.453 242.694 118.612 243.685 118.379L255.185 115.665C257.295 115.167 258.574 113.061 258.047 110.961C257.518 108.856 255.376 107.567 253.271 108.064Z"
                        fill="#EDF2F4" fillOpacity="0.5"/>
                    <path
                        d="M170.812 94.2806L159.312 96.9945C157.202 97.4924 155.922 99.5986 156.45 101.698C156.728 102.816 157.468 103.706 158.409 104.217C159.242 104.67 160.235 104.829 161.226 104.596L172.725 101.882C174.835 101.384 176.115 99.2775 175.588 97.1778C175.062 95.0745 172.917 93.7843 170.812 94.2806Z"
                        fill="#EDF2F4" fillOpacity="0.5"/>
                    <path
                        d="M210.582 81.3738L202.111 73.037C200.552 71.4939 198.065 71.503 196.542 73.0296C195.02 74.5562 195.045 77.0258 196.602 78.5548L205.073 86.8916C205.346 87.1595 205.652 87.3833 205.968 87.555C207.475 88.3739 209.386 88.1583 210.642 86.899C212.162 85.3758 212.136 82.9009 210.582 81.3738Z"
                        fill="#EDF2F4" fillOpacity="0.5"/>
                    <path
                        d="M140.527 70.0906C138.53 69.2136 136.213 70.1001 135.355 72.0763L130.674 82.8232C129.861 84.6911 130.644 86.8588 132.429 87.8287C132.526 87.8815 132.632 87.9347 132.738 87.9792C134.735 88.8561 137.052 87.9696 137.91 85.9934L142.591 75.2465C143.447 73.2824 142.574 70.9731 140.527 70.0906Z"
                        fill="#EDF2F4" fillOpacity="0.5"/>
                    <path
                        d="M267.649 142.3C267.173 140.18 265.062 138.833 262.948 139.28C260.824 139.722 259.485 141.796 259.961 143.908L262.539 155.416C262.801 156.574 263.552 157.509 264.524 158.038C265.326 158.474 266.284 158.639 267.238 158.44C269.362 157.998 270.701 155.924 270.225 153.812L267.649 142.3Z"
                        fill="#EDF2F4" fillOpacity="0.5"/>
                    <path
                        d="M224.125 123.079C223.646 120.956 221.537 119.615 219.425 120.059C217.301 120.5 215.962 122.574 216.438 124.686L219.016 136.195C219.278 137.352 220.028 138.288 221.001 138.816C221.803 139.252 222.76 139.418 223.714 139.218C225.839 138.777 227.178 136.703 226.702 134.591L224.125 123.079Z"
                        fill="#EDF2F4" fillOpacity="0.5"/>
                    <path
                        d="M264.603 242.59C268.436 244.673 273.213 243.297 275.267 239.519L277.977 234.533C282.641 225.95 283.291 216.479 274.642 207.567L280.855 196.137L289.003 200.565C289.031 200.58 289.059 200.595 289.073 200.603C292.909 202.688 297.293 202.029 299.346 198.251C299.538 197.899 299.333 198.217 299.468 197.852C322.42 153.901 294.096 95.9221 233.003 62.719C171.431 29.2555 107.177 36.8169 83.226 80.8857C81.1726 84.6639 83.0485 88.627 86.8815 90.7102L89.8986 92.35L84.2666 102.713C76.0896 101.208 61.0814 103.996 55.7712 113.767L53.0612 118.753C51.0078 122.532 52.4522 127.289 56.2852 129.372C60.1182 131.455 64.8957 130.079 66.9491 126.301L69.659 121.315C70.855 119.114 75.4727 118.893 76.2371 117.487L54.5592 157.373L51.5421 155.734C47.709 153.65 42.9316 155.026 40.8782 158.804C14.9074 206.59 23.835 229.338 80.6849 260.236L150.124 297.975C206.971 328.87 230.915 323.987 256.886 276.202C258.94 272.424 257.495 267.667 253.662 265.583L245.514 261.155L261.375 231.969C259.325 235.75 260.77 240.507 264.603 242.59ZM226.233 75.1761C276.458 102.473 301.009 149.455 289.012 182.833L101.751 81.0592C123.237 52.8381 176.011 47.8811 226.233 75.1761ZM266.969 188.585L261.337 198.948C253.16 197.443 238.151 200.232 232.841 210.002L231.562 212.357C229.558 216.043 225.146 218.477 220.587 215.999C216.028 213.522 215.67 208.495 217.674 204.809L218.953 202.455C225.385 190.62 221.272 176.375 209.592 170.027C197.912 163.68 183.722 167.977 177.29 179.811L176.01 182.165C173.938 185.978 167.761 187.289 163.3 184.864C158.838 182.439 156.578 176.543 158.65 172.731L159.93 170.376C166.362 158.542 162.248 144.297 150.569 137.949C138.889 131.601 124.698 135.898 118.266 147.732L116.987 150.087C114.915 153.899 108.738 155.21 104.276 152.786C99.8149 150.361 97.555 144.465 99.627 140.652L100.907 138.298C105.571 129.715 106.221 120.244 97.5723 111.332L103.785 99.9013L266.969 188.585ZM157.564 284.286L88.1248 246.546C37.5626 219.067 35.2369 204.503 51.1294 173.242L51.31 173.34C52.4766 173.974 239.195 275.453 239.195 275.453C221.608 305.794 208.126 311.766 157.564 284.286ZM68.447 164.921L85.741 133.101C79.5232 144.542 84.6066 159.824 96.8384 166.471C109.07 173.119 124.659 169.072 130.877 157.631L132.156 155.277C134.159 151.591 138.572 149.157 143.131 151.635C147.689 154.112 148.047 159.139 146.044 162.825L144.764 165.179C138.546 176.62 143.63 191.902 155.862 198.55C168.093 205.198 183.682 201.151 189.9 189.71L191.18 187.355C193.183 183.67 197.595 181.236 202.154 183.713C206.713 186.191 207.071 191.217 205.067 194.903L203.788 197.258C197.356 209.092 201.469 223.337 213.149 229.685C224.829 236.033 239.019 231.736 245.451 219.901L246.731 217.547C247.927 215.346 252.545 215.125 253.309 213.719L231.631 253.605L68.447 164.921Z"
                        fill="#EDF2F4" fillOpacity="0.5"/>
                </svg>
            </section>

        </>
    );
}

export default Home;