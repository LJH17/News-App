import React from 'react';
import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { dispatchGetNewsArticles } from '../../store/states/news/thunks';

import NewsArticle from './NewsArticle';

const News = () => (
  <section>
    News Feed with Search Goes Here
    Example News Article:
    <NewsArticle />
  </section>
);
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

export default connect(mapStateToProps, mapDispatchToProps)(News);
