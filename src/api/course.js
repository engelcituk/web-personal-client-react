import { basePath, apiVersion } from './config';

export function getCoursesApi() {
    const url = `${basePath}/${apiVersion}/course`;

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
export function getCourseDataUdemyApi(id) {
    const baseUrl = `https://www.udemy.com/api-2.0/courses/${id}`;
    const courseParams = `?fields[course]=title,headline,url,price,image_480x270`;
    const url= baseUrl+courseParams;

    return fetch(url)
        .then( async response => {
            return {code: response.status, data: await response.json()};
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err;
        })
}

export function updateCourseApi(token, courseId, data) {
    const url = `${basePath}/${apiVersion}/course/${courseId}`;

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
            return result.message;
        })
        .catch(err => {
            return err.message;
        })
}



export function addCourseApi(token, course) {
    const url = `${basePath}/${apiVersion}/course`;

    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(course)

    }
    return fetch(url, params)
        .then(response => {
            return response.json();
        })
        .then(result => {
            return result.message;
        })
        .catch(err => {
            console.log(err.message);
        })
}

export function deleteCourseApi(token, courseId) {
    const url = `${basePath}/${apiVersion}/course/${courseId}`;

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
            return result.message;
        })
        .catch(err => {
            console.log(err.message);
        })
}