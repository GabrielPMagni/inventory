import axios from "axios";

export class Requests {
    constructor(){}

    static async get(url: string, payload: any) {
        return await axios.get(url, {
            data: payload,
            responseType: 'json'
        }).catch(err => {
            throw new Error(err);
        })
    }

    static async post(url: string, payload: any) {
        return await axios.post(url, {
            data: payload,
            responseType: 'json'
        }).catch(err => {
            throw new Error(err);
        })
    }

    static async put(url: string, payload: any) {
        return await axios.put(url, {
            data: payload,
            responseType: 'json'
        }).catch(err => {
            throw new Error(err);
        })
    }

    static async delete(url: string, payload: any) {
        return await axios.delete(url, {
            data: payload,
            responseType: 'json'
        }).catch(err => {
            throw new Error(err);
        })
    }
}