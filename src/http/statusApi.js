import {$authHost, $host} from "./index";

export const createStatus = async (status_name) => {
    const {data} = await /*$authHost.post*/ $host.post('api/status', {status_name})
    return data
}

export const fetchStatuses= async () => {
    const {data} = await $host.get('api/status')
    return data
}

export const fetchOneStatus = async (id) => {
    const {data} = await $host.get('api/status/'+id)
    return data
}