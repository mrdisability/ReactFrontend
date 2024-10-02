import axios, { AxiosResponse } from "axios";
import { Post } from "../models/post";

axios.defaults.baseURL = "http://localhost:5032/api";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody)
}

const Posts = {
    list: () => requests.get<Post[]>("/posts"),
    details: (id: string) => requests.get<Post>(`/posts/${id}`),
    create: (post: Post) => requests.post<void>('/posts', post),
    update: (post: Post) => requests.put<void>(`/posts/${post.id}`, post),
    delete: (id: string) => requests.del<void>(`/posts/${id}`)
}

const agent = {
    Posts
}

export default agent;