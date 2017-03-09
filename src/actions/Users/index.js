import request from 'axios';

var instance = request.create({
  baseURL: 'http://private-541df-tokenmanager1.apiary-mock.com/v1'
});

instance.headers = {
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Methods": "DELETE, HEAD, GET, OPTIONS, POST, PUT",
    "Access-Control-Allow-Headers": "Content-Type, Content-Range, Content-Disposition, Content-Description",
    "Access-Control-Max-Age": "1728000",
    "Content-Type": "application/json;charset=UTF-8"
}

export function loadUsersList () {
    return {
        type: 'FETCH_USERS',
        payload: new Promise((resolve, reject) => {
            instance.get('/users')
            .then(function (response) {
                return resolve(response.data);
            })
            .catch(function (error) {
                return reject(error);
            })
        })
    }
}

export function createUser (data) {
    return {
        type: 'CREATE_USER',
        payload: new Promise((resolve, reject) => {
            instance.post('/users', data)
            .then(function (response) {
                return resolve(response);
            })
            .catch(function (error) {
                return reject(error);
            })
        })
    }
}

export function updateUser (data) {
    return {
        type: 'UPDATE_USER',
        payload: new Promise((resolve, reject) => {
            instance.put('/users', data)
            .then(function (response) {
                return resolve(response);
            })
            .catch(function (error) {
                return reject(error);
            })
        })
    }
}

export function removeUsers (data) {
    return {
        type: 'REMOVE_USERS',
        payload: new Promise((resolve, reject) => {
            instance.delete('/users', data)
            .then(function (response) {
                return resolve(response.data);
            })
            .catch(function (error) {
                return reject(error);
            })
        })
    }
}

export const selectUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: user
    }
}