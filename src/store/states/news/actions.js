export const FETCH = '[News] fetch';
export const SET_ARTICLES = '[News] set articles';
export const SET_ERROR = '[News] set error';

export const fetchNews = () => {
  return { type: FETCH };
};

export const setArticles = (articles, page, allowNextPage, allowPreviousPage, query) => {
  return { type: SET_ARTICLES, articles, page, allowNextPage, allowPreviousPage, query };
}

export const setError = (error) => {
  return { type: SET_ERROR, error };
}
