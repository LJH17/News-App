import React from 'react';

const NewsArticle = ({ article }) => (
  <article className="bg-primary rounded-xl p-8 md:p-0 m-4 text-white">
    <div className="pt-2 md:p-8 text-center md:text-left space-y-4">
      <section className="font-medium font-bold text-xl">
        <a href={article.url}>{ article.title }</a>
      </section>
      <section>
        <p className="font-semibold text-white">
          { article.description }
        </p>
      </section>
      <section className="font-medium italic">
        { article.author }
      </section>
    </div>
  </article>
);

export default NewsArticle;
