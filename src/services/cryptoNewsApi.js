import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-rapidapi-key': 'cab691d914msh2a007f1a5231d42p18b3ccjsnc8ebf994a88e',
    'x-rapidapi-host': 'google-news13.p.rapidapi.com'
};

const baseUrl = 'https://google-news13.p.rapidapi.com';

const createRequest = (url, params) => ({ url, headers: cryptoNewsHeaders, params });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (lr) => createRequest('/latest', { lr }),
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;



// Google news
// headers: {
//     'x-rapidapi-key': '94e02538d7mshcc29dcc29e3a539p133f15jsn0d8f46a89a10',
//     'x-rapidapi-host': 'google-news13.p.rapidapi.com'
//   }
// };

// Bing news search
// headers: {
//     'x-rapidapi-key': '94e02538d7mshcc29dcc29e3a539p133f15jsn0d8f46a89a10',
//     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//     'X-BingApis-SDK': 'true'
//   }