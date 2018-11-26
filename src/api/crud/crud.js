import request from '@/utils/request'

export function getUser() {
    return request({
        url: '/users',
        method: 'get',
    })
}

export function getOneUser(EmpID) {
    return request({
        url: '/users/get/' + EmpID,
        method: 'get',
    })
}

export function addUser(data) {
    return request({
        url: 'users/add',
        method: 'post',
        data
    })
}

export function deleteUser(data) {
    return request({
        url: 'users/delete',
        method: 'post',
        data
    })
}

export function updateUser(data) {
    return request({
        url: 'users/update',
        method: 'post',
        data
    })
}