import {$authHost, $host} from "./index";

export const createValuation = async (val_type, val_sum, val_info, val_date, apartmentId, customerId) => {
    const {data} = await /*$authHost.post*/ $host.post('api/valuation', {val_type, val_sum, val_info,val_date, apartmentId, customerId})
    return data
}

export const createAmount = async (val_type, val_sum, val_info, apartmentId, customerId) => { //изменить параметры создания
    const {data} = await /*$authHost.post*/ $host.post('api/amount', {val_type, val_sum, val_info, apartmentId, customerId})
    return data
}
export const fetchOneApartmentValuation = async (id) => {
    const {data} = await $host.get('api/valuation/'+id+'/sum')
    return data
}

export const fetchOneValuation = async (id) => {
    const {data} = await $host.get('api/valuation/'+id)
    return data
}

export const fetchValuations = async (id) => {
    const {data} = await $host.get('api/valuation/apartment/'+id)
    return data
}