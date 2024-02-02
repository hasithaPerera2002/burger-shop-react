import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import Order from "../models/order.ts";

/* eslint-disable */

const makeOrder = async (order:Order):Promise<AxiosResponse<any>> =>{
    console.log(order,"order")
    const data = JSON.stringify({
        "userId": "65a1868756415c430c0ef021",
        "burgerId": "65a13c4db7d1b34d24fa689f",
        "quantity": 2,
        "price": 2000,
        "status": "Pending"
    });

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://burger-shop-backend-hasitha-1.onrender.com/api/v1/orders',
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
        console.log(JSON.stringify(response.data),"data");
        return response;
    }
    catch (error) {
        console.log(error);
    }

    // @ts-ignore
    return Promise.resolve(undefined);

}
export {makeOrder}

