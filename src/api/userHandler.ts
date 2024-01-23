import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import User from "../models/user.ts";

/* eslint-disable */

const addUser = async (user:User):Promise<AxiosResponse<any>> => {

    let data = new FormData();
    data.append('userName', user.userName);
    data.append('secondName', user.secondName);
    data.append('email', user.email);
    data.append('password', user.password);

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/api/v1/users',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    return await makeRequest(config)
}
const loginUser = async (email:string,password:string):Promise<AxiosResponse<any>> => {

    let data = new FormData();

    data.append('email', email);
    data.append('password', password);

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/api/v1/users/login',
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
        console.log(JSON.stringify(response.data));
        return  response;
    }
    catch (error) {
        console.log(error);
    }
    // @ts-ignore

    return Promise.resolve(undefined);

}

export {addUser,loginUser}


