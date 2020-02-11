import { basePath, apiVersion } from './config';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../utils/constants';
import jwtDecode from 'jwt-decode';

export function getAccessTokenApi() {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (!accessToken || accessToken === "null") {
        return null;
    }
    return willExpireToken(accessToken) ? null : accessToken;

}
export function getRefreshTokenApi() {
    const refresToken = localStorage.getItem(REFRESH_TOKEN);

    if (!refresToken || refresToken === "null") {
        return null;
    }
    return willExpireToken(refresToken) ? null : refresToken;
}

export function refreshAccessTokenApi(refreshToken) {
    const url = `${basePath}/${apiVersion}/refresh-access-token`;
    const bodyObj = {
        refresToken: refreshToken
    }
    const params = {
        method: "POST",
        body: JSON.stringify(bodyObj),
        headers: {
            "Content-Type": "application/json"
        }
    };

    return fetch(url, params)
        .then(response => {
            if (response.status !== 200) {
                return null;
            }
            return response.json();
        })
        .then(result => {
            if (!result) {
                logout(); // cerramos la sesion del usuario
            } else {
                const { accessToken, refreshToken } = result;
                localStorage.setItem(ACCESS_TOKEN, accessToken);
                localStorage.setItem(REFRESH_TOKEN, refreshToken);
            }
        })
        .catch(err => {
            return err.message;
        })
}
export function logout() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
}

function willExpireToken(token) {
    const seconds = 60;
    const metaToken = jwtDecode(token);
    const { exp } = metaToken;
    const now = (Date.now() + seconds) / 1000;
    return now > exp;
}