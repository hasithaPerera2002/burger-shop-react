import {useDispatch} from "react-redux";
import { secondary} from "../state/colorReducer.ts";
import {useEffect} from "react";



function Offers() {

    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch 'primary' action when the component mounts
        dispatch(secondary());
    }, []);



    return (
        <div className={'h-[100vh] bg-amber-300'}>hi</div>
    );
}

export default Offers;