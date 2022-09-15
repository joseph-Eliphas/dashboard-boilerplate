import axios from "axios";

export default class API {

    url: string = "http://127.0.0.1:8000"; // should not end with foreward slash
    headers: any = {
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Accept": "application/json",
        // "Access-Token": "",
        // "Auth-Token":   "",
        // "Keep-Alive": "timeout=2, max=100"
    }

    constructor() {
        return
    }

    async login(username: string, password: string) {
        let response = await axios.post(`${this.url}/auth/login/`,
            {
                username: username,
                password: password
            },
            {
                headers: this.headers,
            })

        return response.data;
    }

    async resetPassword(email:string) {
        let response = await axios.post(`${this.url}/auth/login/`,
            {
                username: 'Joe',
                password: '01011000'
            },
            {
                headers: this.headers,
            })

        return response.data;
    }
}