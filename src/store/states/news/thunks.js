import { fetchNews, setArticles, setError } from './actions';

const newsAPIKey = process.env.REACT_APP_NEWS_API_KEY;

export const dispatchGetNewsArticles = (
  query = 'telecoms',
  config = { prevPage: false, nextPage: false }
) => async (dispatch, getState) => {
  try {
    dispatch(fetchNews());
    const { previousQuery, page } = getState().news;
    const { prevPage, nextPage } = config;

    const usePage = (nextPage || prevPage) && query === previousQuery;
    const newPage = usePage
      ? prevPage
      ? page - 1
      : page + 1
      : 1;
    const pageSize = 10;
    const newsAPIURL = `https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${newsAPIKey}&pageSize=${pageSize}&page=${newPage}`;

    const response = await fetch(newsAPIURL);
    const data = await response.json();
    const { articles, totalResults, status, message } = data;

    if (status !== 'ok') {
      return dispatch(setError(message))
    }

    const allowNextPage = pageSize * (page + 1) < totalResults;
    const allowPreviousPage = newPage > 1;

    return dispatch(setArticles(articles, newPage, allowNextPage, allowPreviousPage, query));
  } catch (error) {
    return dispatch(setError('Failed to load news - please try refreshing'));
  }
};
