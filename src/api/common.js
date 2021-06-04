import * as http from '@/utils/http'
const commonApi = {
    credentials: 'token'
}
export function getCredentials (parameter) {
   return http.get(commonApi.credentials, parameter)
}
