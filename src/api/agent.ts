import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:5032/api";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody)
}

const Posts = {
    list: () => requests.get("/posts")
}

const agent = {
    Posts
}

export default agent;