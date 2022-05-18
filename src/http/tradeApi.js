import {$authHost, $host} from "./index";

export const createTrade = async (trade_type,
                                  bank,
                                  info,
                                  price,
                                  price_1,
                                  tradeDate,
                                  //userId,
                                  apartmentId,
                                  customerId) => {
    const {data} = await /*$authHost.post*/ $host.post('api/trades', {
        trade_type,
        bank,
        info,
        price,
        price_1,
        tradeDate,
        //userId,
        apartmentId,
        customerId
    })
    return data
}

export const fetchTrades = async () => {
    const {data} = await $host.get('api/trades')
    return data
}

export const fetchOneTrade = async (id) => {
    const {data} = await $host.get('api/trades/' + id)
    return data
}