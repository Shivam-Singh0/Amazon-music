import apiSlice from "./apiSlice";


export const playListApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getTopFiftyIndia : builder.query({
            query : () => ({
                url : '/playlists/37i9dQZEVXbLZ52XmnySJg',
                method : 'GET'
            }),
            
            keepUnusedDataFor: 60 * 60, // Cache data for 1 hour
        }),
         getTrendingIndia : builder.query({
            query : () => ({
                url : '/playlists/37i9dQZF1DXbVhgADFy3im',
                method : 'GET'
            }),
            
            keepUnusedDataFor: 60 * 60, // Cache data for 1 hour
        }), 
        getTopGlobal : builder.query({
            query : () => ({
                url : '/playlists/37i9dQZEVXbNG2KDcFcKOF',
                method : 'GET'
            }),
            
            keepUnusedDataFor: 60 * 60, // Cache data for 1 hour
        }),
        getBollyWoodMush : builder.query({
            query : () => ({
                url : '/playlists/37i9dQZF1DXdpQPPZq3F7n',
                method : 'GET'
            }),
            
            keepUnusedDataFor: 60 * 60, // Cache data for 1 hour
        }),
    })
})



export const { useGetTopFiftyIndiaQuery, useGetTrendingIndiaQuery, useGetTopGlobalQuery, useGetBollyWoodMushQuery } = playListApiSlice