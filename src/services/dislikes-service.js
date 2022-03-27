import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const USERS_API = `${BASE_URL}/api/users`;
const TUITS_API = `${BASE_URL}/api/tuits`;

const api = axios.create({
    withCredentials: true
});

export const userDislikesTuit = (uid, tid) => {
    console.log(uid,tid);
    api.put(`${USERS_API}/${uid}/dislikes/${tid}`)
        .then(response => response.data);
}

export const findAllTuitsDislikedByUser = (userId) =>
    api.get(`${USERS_API}/${userId}/dislikes`)
        .then(response => response.data);

export const findAllUsersThatDislikedTuit = (tuitId) =>
    api.get(`${TUITS_API}/${tuitId}/dislikes`)
        .then(response => response.data);