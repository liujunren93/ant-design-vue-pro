import request from './request'
function defaultHeader (conf = {}) {
    if (conf.headers === undefined) {
        conf.headers = { 'Content-Type': 'application/json;charset=UTF-8' }
    }
    return conf
}
export const get = (url, params, conf = {}) => {
    conf = defaultHeader(conf)
    return new Promise((resolve, reject) => {
        return request({
            url: url,
            method: 'get',
            params: params,
            // data: params,
            ...conf
          }).then(response => {
            resolve(response)
          }).catch(error => {
            reject(error)
          })
    })
}

export const del = (url, params, conf = {}) => {
    conf = defaultHeader(conf)
    return new Promise((resolve, reject) => {
        return request({
            url: url,
            method: 'delete',
            data: params,
            ...conf
          }).then(response => {
            resolve(response)
          }).catch(error => {
            reject(error)
          })
    })
}

export const post = (url, params = {}, conf = {}) => {
    conf = defaultHeader(conf)
    console.log(conf)
    return new Promise((resolve, reject) => {
        return request({
            url: url,
            method: 'post',
            data: params,
            ...conf
          }).then(response => {
            resolve(response)
          }).catch(error => {
            reject(error)
          })
    })
}

export const put = (url, params = {}, conf = {}) => {
    conf = defaultHeader(conf)
    return new Promise((resolve, reject) => {
        return request({
            url: url,
            method: 'put',
            data: params,
           ...conf
          }).then(response => {
            resolve(response)
          }).catch(error => {
            reject(error)
          })
    })
}
