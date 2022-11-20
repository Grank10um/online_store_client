import {$authHost, $host} from "./index";

export const createApartment = async (ap_adress, statusId) => {
    const {data} = await /*$authHost.post*/ $host.post('api/apartment', {ap_adress, statusId})
    return data
}

export const fetchApartments = async () => {
    const {data} = await $host.get('api/apartment')
    return data
}

export const fetchOneApartment = async (id) => {
    const {data} = await $host.get('api/apartment/'+id)
    return data
}


