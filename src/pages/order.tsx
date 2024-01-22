import Burger from "../models/burger.ts";
import {FaCircleMinus, FaCirclePlus} from "react-icons/fa6";
import log2 from "../assets/macaron_4746242.png";
import RoundButton from "../components/roundButton.tsx";
import {useState} from "react";
import {useLocation} from "react-router-dom";

function Order() {
    //TODO:implement the order added notifiaction and error notification
    document.title = "Order";
    const {state} = useLocation();
    console.log(state);
    const burger: Burger = state;

    const [quantity, setQuantity] = useState<number>(1)

    function handleDecrease() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }


    function handleIncrease() {
        setQuantity(quantity + 1)
    }

    return (
        <div className={"bg-gray-300 min-h-[100vh] font-inter  w-full pt-10"}>
            <div className="mx-[10rem]">
                <div className={"flex bg-tertiary shadow-lg rounded-3xl p-5"}>
                    <div className={"w-2/5 h-[80vh]  border-black"}>
                        <div>
                            <img src={log2} className="h-[40px] ms-4  w-[45px] object-fill" alt="Logo"/>
                            <div
                                className={`text-primary font-normal font-inter`}>burger
                                blitz
                            </div>
                        </div>
                        <div className={"ml-7 h-[50vh] mt-7"}>
                            <div className={"text-2xl font-bold"}>order details</div>
                            <div className={"font-bold mt-2"}>personal details</div>
                            <div className={"mt-3"}>
                                <div className={"flex px-2 py-2 gap-[2rem]"}>
                                    <div>name :</div>
                                    <div>name</div>
                                </div>
                                <div className={"flex px-2 gap-[2rem]"}>
                                    <div>email :</div>
                                    <div>name</div>
                                </div>
                                <div className={"flex px-2 py-2 gap-[1rem]"}>
                                    <div>address :</div>
                                    <div>name</div>
                                </div>
                            </div>
                            <hr/>
                            <div className={"mt-5"}>
                                <div className={"flex px-2  gap-[1rem]"}>
                                    <div>itemName :</div>
                                    <div>{burger.name}</div>
                                </div>
                                <div className={"flex px-2 py-2  gap-[1rem]"}>
                                    <div>description :</div>
                                    <div>{burger.description}</div>
                                </div>
                                <div className={"flex px-2  gap-[1rem]"}>
                                    <div>quantity :</div>
                                    <div className={"flex gap-2"}>
                                        <button onClick={handleDecrease}>
                                            <FaCircleMinus size={"1.5rem"}  color={"red"}/>
                                        </button>
                                        <div>{quantity}</div>
                                        <button onClick={handleIncrease}>
                                            <FaCirclePlus size={"1.5rem"} color={"red"}/>

                                        </button>
                                    </div>

                                </div>

                                <div className={"flex px-2 py-2 gap-[1rem]"}>
                                    <div>total :</div>
                                    <div>{burger.price * quantity}</div>
                                </div>
                            </div>
                        </div>
                        <div className={"mt-7 ml-[5rem]"}>
                            <RoundButton color={"quinary"} fontColor={"white"} text={"order"}/>
                        </div>
                    </div>
                    <div className={"w-3/5 h-[80vh]   mr-3 pt-5"}>
                        <div className={"flex justify-center"}>
                            <div className={"h-[60vh] mt-10 w-3/5 rounded"}>
                                <img className={"object-fill rounded-2xl h-full w-full"} src={burger.image} alt="no image found"/>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Order;