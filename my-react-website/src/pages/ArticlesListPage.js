import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => (
    <>
        <h1>Article list</h1>
        <ArticlesList articles={articleContent} />
    </>
);
export default ArticlesListPage;