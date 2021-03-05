import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { dispatchGetNewsArticles } from '../../store/states/news/thunks';

import NewsArticle from './NewsArticle';

const mapStateToProps = (state) => ({
  allowNextPage: state.news.allowNextPage,
  allowPreviousPage: state.news.allowPreviousPage,
  articles: state.news.articles,
  error: state.news.error,
  loading: state.news.loading
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onGetNewsArticles: dispatchGetNewsArticles,
    },
    dispatch
  );

export const News = ({
 allowNextPage,
 allowPreviousPage,
 articles,
 error,
 loading,
 onGetNewsArticles
}) => {
  const [search, setSearch] = useState('telecoms');

  useEffect(() => {
    onGetNewsArticles(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onGetNewsArticles]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onGetNewsArticles(search);
  };

  return (
    <div>
      <div className="flex justify-center pt-2">
        <form onSubmit={handleSubmit} className="pb-2">
          <label>
            <input
              className="bg-primary focus-within:bg-grey3 text-white p-4"
              type="text"
              value={search}
              placeholder="search for something..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <input type="submit" value="Search" disabled={loading || search.length === 0} className="bg-grey3 text-white p-4 cursor-pointer" />
        </form>
      </div>

      { error && <div>{ error }</div> }

      { loading && (
        <div className="flex justify-center p-4">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
        </div>
      )}

      { !loading && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2">
            { articles.length > 0 && articles.map((article, i) => <NewsArticle article={article} key={i} />) }
          </div>
          <div className="flex justify-evenly pt-2">
            { allowPreviousPage && (
              <button
                className="rounded-md bg-primary text-white p-4"
                onClick={() => onGetNewsArticles(search, { prevPage: true })}
                disabled={loading}
              >
                Previous Page
              </button>
            )}
            { allowNextPage && (
              <button
                className="rounded-md bg-primary text-white p-4"
                onClick={() => onGetNewsArticles(search, { nextPage: true })}
                disabled={loading}
              >
                Next Page
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
