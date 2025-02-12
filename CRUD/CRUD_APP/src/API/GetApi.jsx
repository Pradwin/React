import axios from 'axios';

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})

export const getData = () => {
    return api.get("/posts")
}

export const deleteData = (id) => {
    return api.delete(`/posts/${id}`)
}

export const postData = (post) => {
    return api.post("/posts",post)
}

export const putData = (id,data) => {
    return api.put(`/posts/${id}`,data)
}