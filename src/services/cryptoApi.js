import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url)=>({url, headers:cryptoApiHeaders})

const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count)=> {
                return createRequest(`/coins?limit=${count}`)
            }
        }), 
         getCryptoCoin: builder.query({
            query: (coinId)=> {
                return createRequest(`/coin/${coinId}`)
            }
        }), 
        getCryptoCoinHistory: builder.query({
            query: ({coinId, timeperiod})=> {
                return createRequest(`/coin/${coinId}/history/${timeperiod}`)
            }
        }), 
        getCryptoExchanges: builder.query({
            query: ()=> {
                return createRequest(`/exchanges`)
            }
        }), 

    })
})

export const {
    useGetCryptosQuery, // hook onGetCryptos
    useGetCryptoCoinQuery,
    useGetCryptoCoinHistoryQuery,
    useGetCryptoExchangesQuery,
    
} = cryptoApi;

export {cryptoApi};

