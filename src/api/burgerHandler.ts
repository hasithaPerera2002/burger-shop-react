import {Burger} from "../pages/admin/adminHome.tsx";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
/* eslint-disable */
const createBurger = async (burger: Burger):Promise<AxiosResponse<any>>  => {
    const data = new FormData();
    data.append('name', burger.name);
    data.append('image', burger.image);
    data.append('price', burger.price.toString());
    data.append('featured',String( burger.featured));
    data.append('offered', String(burger.offered));


    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://burger-shop-backend-hasitha-1.onrender.com:3000/api/v1/burgers',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer YourAccessToken',
        },
        data: data
    };


   return  await makeRequest(config);
}
const updateBurger =async (burger:Burger):Promise<AxiosResponse<any>>  => {
    const data = new FormData();
    data.append('name', burger.name);
    data.append('image', burger.image);
    data.append('price', burger.price.toString());
    data.append('featured',String( burger.featured));
    data.append('offered', String(burger.offered));


    const config = {
        method: "put",
        maxBodyLength: Infinity,
        url: 'https://burger-shop-backend-hasitha-1.onrender.com:3000/api/v1/burgers/'+burger._id,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer YourAccessToken',
        },
        data: data
    };


   return  await makeRequest(config);
}

const deleteBurger = async (id: string):Promise<AxiosResponse<any>> => {
    const config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `https://burger-shop-backend-hasitha-1.onrender.com:3000/api/v1/burgers/${id}`,
        headers: {}
    };
   return  await makeRequest(config);
}

const getAll = async ():Promise<AxiosResponse<any>>  => {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://burger-shop-backend-hasitha-1.onrender.com/api/v1/burgers',
        headers: { },
        withCredentials: true,
    };
    console.log(config,"config")
   return  await makeRequest(config)
}
const getAllWithOffer = async ():Promise<AxiosResponse<any>>  => {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://burger-shop-backend-hasitha-1.onrender.com:3000/api/v1/burgers?offered=true',
        headers: {}
    };
   return  await makeRequest(config)
}

async function makeRequest(config: AxiosRequestConfig):Promise<AxiosResponse<any>>  {
    try {
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data));
        return response;
    }
    catch (error) {
        console.log(error,"response error");
    }
    // @ts-ignore
    return Promise.resolve(undefined);
}

export { createBurger,updateBurger,deleteBurger,getAll,getAllWithOffer};