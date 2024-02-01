import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import User from "../models/user.ts";

/* eslint-disable */

const addUser = async (user:User):Promise<AxiosResponse<any>> => {

    let data = JSON.stringify({
        "userName": user.userName,
        "secondName": user.secondName,
        "email": user.email,
        "password": user.password
    });

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url:  'https://burger-shop-backend-hasitha-1.onrender.com/api/v1/users',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    return await makeRequest(config)
}
const loginUser = async (email:string,password:string):Promise<AxiosResponse<any>> => {

    let data = JSON.stringify({
        "email": email,
        "password": password
    });

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://burger-shop-backend-hasitha-1.onrender.com:3000/api/v1/users/login',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    return await makeRequest(config)
}
async function makeRequest(config:AxiosRequestConfig):Promise<AxiosResponse<any>> {
    try {
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data),"response success");
        return  response;
    }
    catch (error) {
        console.log(error,"response error");
    }
    // @ts-ignore

    return Promise.resolve(undefined);

}

export {addUser,loginUser}


