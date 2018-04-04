// @flow

import React, {Component} from 'react';
import {View} from '../components/coreUIIndex';

import ArticleListPage from './blog/ArticleListPage';
import ArticleFormPage from './blog/ArticleFormPage';
import ArticleDetailPage from './blog/ArticleDetailPage';
import ToolBarPage from './blog/ToolBarPage';

import styles from './IndexBlog-style';

import {articles as dummyDataArticles} from './temp/dummyData';

class IndexBlog extends Component {
  constructor() {
    super(...arguments);
    this._deleteArticle = this._deleteArticle.bind(this);
    this._saveArticle = this._saveArticle.bind(this);
    this._editArticle = this._editArticle.bind(this);
    this._onCancelClick = this._onCancelClick.bind(this);
    this.state = {
      searchText: '',
      selectedArticleID: null,
      articles: dummyDataArticles,
      isAddArticle: false,
      isEditArticle: false,
    };
  }

  _saveArticle(articleData) {
    let {articles} = this.state;
    if (articleData.id === '') {
      let articleID = `article${Math.random()
        .toString()
        .slice(2, 5)}`;
      let newArticle = [
        ...articles,
        {
          ...articleData,
          id: articleID,
          imageArticle: articleData.imageArticle || null,
        },
      ];
      this.setState({
        articles: newArticle,
        isAddArticle: false,
        selectedArticleID: articleID,
      });
    } else {
      this._editArticle(articleData);
    }
  }

  _deleteArticle(id: string) {
    let {articles} = this.state;
    let newArticle = articles.filter(article => article.id !== id);
    this.setState({
      articles: newArticle,
    });
  }

  _editArticle(articleData) {
    let {articles} = this.state;
    let newArticle = articles.filter(article => article.id !== articleData.id);
    this.setState({
      articles: [...newArticle, articleData],
      isAddArticle: false,
      isEditArticle: false,
    });
  }

  _onCancelClick() {
    this.setState({isAddArticle: false, isEditArticle: false});
  }

  render() {
    let {
      searchText,
      selectedArticleID,
      articles,
      isAddArticle,
      isEditArticle,
    } = this.state;
    let articleList = articles.filter(article =>
      article.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    let selectedArticle = articles.find(
      article => article.id === selectedArticleID,
    );
    return (
      <View style={styles.container}>
        <View style={styles.leftBar}>
          <ToolBarPage
            onSearchTextChange={event =>
              this.setState({searchText: event.target.value})
            }
            onAddArticleClick={() => this.setState({isAddArticle: true})}
          />
          <ArticleListPage
            onClick={id => this.setState({selectedArticleID: id})}
            articleList={articleList}
          />
        </View>
        <View style={styles.mainContent}>
          {isAddArticle || isEditArticle ? (
            <ArticleFormPage
              articleData={
                isEditArticle
                  ? articles.find(article => article.id === selectedArticleID)
                  : {}
              }
              onCancelClick={this._onCancelClick}
              onSaveClick={this._saveArticle}
            />
          ) : (
            <ArticleDetailPage
              articleSelected={selectedArticle || false}
              onEditClick={() => this.setState({isEditArticle: true})}
              onDeleteClick={this._deleteArticle}
            />
          )}
        </View>
      </View>
    );
  }
}

export default IndexBlog;
