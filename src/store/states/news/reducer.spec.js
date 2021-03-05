import { FETCH, SET_ARTICLES, SET_ERROR } from './actions';
import newsReducer from './reducer';
import initialState from './state';

describe('news reducer', () => {
  it('sets loading true when fetching', () => {
    const action = {
      type: FETCH
    };

    const updatedState = newsReducer(undefined, action);

    expect(updatedState).toStrictEqual({
      ...initialState,
      loading: true
    });
  });

  it('sets error property and loading false when setting an error', () => {
    const mockError = 'Mock Error';
    const action = {
      type: SET_ERROR,
      error: mockError
    };

    const updatedState = newsReducer(undefined, action);

    expect(updatedState).toStrictEqual({
      ...initialState,
      error: mockError,
      loading: false
    });
  });

  it('clears error property and sets loading false when setting news articles', () => {
    const mockArticles = [{
      'author': 'Joseph Green',
      'title': '6 of the best Python courses for aspiring programmers',
      'description': 'Dutch computer scientist Guido van Rossum decided to take on a fun little side project over the Christmas break in 1989: building a new programming language. The one he used in projects at work was overcomplicated and clunky, but he thought he could use some …',
      'url': 'https://mashable.com/uk/roundup/best-python-courses-uk/',
      'urlToImage': 'https://mondrian.mashable.com/2021%252F02%252F24%252F88%252Fa4c9fe6f3bd44042a3bed03b444f329f.46e82.jpg%252F1200x630.jpg?signature=WZh82RlEtNSXhzkdi5pFIYhtvs4=',
      'publishedAt': '2021-02-28T04:55:00Z',
      'content': 'Dutch computer scientist Guido van Rossum decided to take on a fun little side project over the Christmas break in 1989: building a new programming language. The one he used in projects at work was o… [+8507 chars]'
    }];

    const action = {
      type: SET_ARTICLES,
      articles: mockArticles,
      allowNextPage: false,
      allowPreviousPage: false,
      page: 1,
      query: ''
    };

    const updatedState = newsReducer(undefined, action);

    expect(updatedState).toStrictEqual({
      ...initialState,
      articles: mockArticles,
      error: '',
      loading: false
    });
  });
})
