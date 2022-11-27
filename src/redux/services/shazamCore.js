import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'b8b084600fmshd79161d2e19e4f6p12b3cbjsnedc55bfb3ea0',
//       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
export const shazamCoreApi=createApi({
    reducerPath:'shazamCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers)=>{
          headers.set('X-RapidAPI-Key','b8b084600fmshd79161d2e19e4f6p12b3cbjsnedc55bfb3ea0');
          return headers;
        },
    }),
    endpoints:(builders)=>({
        getTopCharts:builders.query({query:()=> '/charts/world'}),
        getSongDetails:builders.query({query:({songid})=>`/tracks/details?track_id=${songid}`}),
        getSongRelated:builders.query({query:({songid})=>
        `/tracks/related?track_id=${songid}`}),
        getArtistDetails: builders.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
        getSongsByCountry: builders.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
        getSongsBySearch: builders.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
        getSongsByGenre: builders.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
    }),
   
})
export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,
    useGetSongsByGenreQuery,    

}= shazamCoreApi;