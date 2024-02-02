import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import Order from "../models/order.ts";

/* eslint-disable */

const makeOrder = async (order:Order):Promise<AxiosResponse<any>> =>{
    console.log(order,"order")
    const data = JSON.stringify({
        "userId": order.userId,
        "burgerId": order.burger,
        "quantity": order.quantity,
        "price": order.price,
        "status": "Pending"
    });

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://burger-shop-backend-hasitha-1.onrender.com:3000/api/v1/orders',
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };

    return await makeRequest(config)
}


async function makeRequest(config:AxiosRequestConfig):Promise<AxiosResponse<any>>  {
    try {
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data));
        return response;
    }
    catch (error) {
        console.log(error);
    }

    // @ts-ignore
    return Promise.resolve(undefined);

}
export {makeOrder}

