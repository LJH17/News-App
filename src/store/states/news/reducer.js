import * as newsActions from './actions';
import initialState from './state';

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case newsActions.FETCH:
      return {
        ...state,
        loading: true
      }
    case newsActions.SET_ARTICLES:
      return {
        ...state,
        allowNextPage: action.allowNextPage,
        allowPreviousPage: action.allowPreviousPage,
        articles: action.articles,
        error: '',
        loading: false,
        page: action.page,
        previousQuery: action.query
      }
    case newsActions.SET_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state;
  }
}

export default reducer;
