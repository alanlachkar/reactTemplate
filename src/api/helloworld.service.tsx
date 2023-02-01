import { AxiosResponse } from 'axios';
import { HelloWorldInterface } from '../types';
import { API_URL } from '../utils/constants/constants';
import api from './api';

const delay = async (value: any, duration: number): Promise<any> =>
    new Promise((resolve) => setTimeout(resolve, duration, value));

const getHelloWorld = () => {
    return api
        .get(`${API_URL}/helloworld.json`)
        .then(async (response: AxiosResponse<HelloWorldInterface>) => {
            const delayData: HelloWorldInterface = await delay(
                response.data,
                1100
            );
            return Promise.resolve(delayData);
        });
};
export default {
    getHelloWorld,
};
