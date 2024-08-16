import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = String(import.meta.env.VITE_RAPID_API_KEY);
const API_HOST = String(import.meta.env.VITE_RAPID_API_HOST);

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://news-api14.p.rapidapi.com/v2/",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", API_KEY);
      headers.set("x-rapidapi-host", API_HOST);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNewsList: builder.query({
      query: ({ page = 1, category = "General" }) =>
        `trendings?topic=${category}&language=en&limit=15&page=${page}`,
    }),
    searchNews: builder.query({
      query: ({ page = 1, query = "General" }) =>
        `search/articles?query=${query}&language=en&limit=15&page=${page}`,
    }),
    getNewsContent: builder.query({
      query: ({ url }) => `article?url=${url}&type=plaintext`, // html, plaintext
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.error,
    }),
  }),
});

export const {
  useGetNewsListQuery,
  useSearchNewsQuery,
  useGetNewsContentQuery,
} = newsApi;