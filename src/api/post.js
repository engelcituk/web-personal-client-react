import { basePath, apiVersion } from './config';

export function getPostsApi(limit, page) {
    const url = `${basePath}/${apiVersion}/post?limit=${limit}&page=${page}`;

    return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err;
        })
}

export function updatePostApi(token, postId, data) {
    const url = `${basePath}/${apiVersion}/post/${postId}`;

    const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(data)

    }
    return fetch(url, params)
        .then(response => {
            return response.json();
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err;
        })
}


export function addPostApi(token, post) {
    const url = `${basePath}/${apiVersion}/post`;

    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(post)

    }
    return fetch(url, params)
        .then(response => {
            return response.json();
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err;
        })
}

export function deletePostApi(token, postId) {
    const url = `${basePath}/${apiVersion}/post/${postId}`;

    const params = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    }

    return fetch(url, params)   
        .then(response => {
            return response.json();
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err;
        })
}
export function getPostApi(urlpost) {
    const url = `${basePath}/${apiVersion}/post/${urlpost}`;

    return fetch(url)   
        .then(response => {
            return response.json();
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err;
        })
}