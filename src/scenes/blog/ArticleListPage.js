// @flow

import React, {Component} from 'react';
import {View} from '../../components/coreUIIndex';

import styles from './ArticleListPage-style';

type ArticleItem = {
  id: string,
  title: string,
};

type Props = {
  onClick: (id: string) => void,
  articleList: Array<ArticleItem>,
};

class ArticleListPage extends Component {
  props: Props;

  render() {
    let {articleList} = this.props;
    return (
      <View style={styles.container}>
        <View>List Article :</View>
        <View style={{margin: '7px 0'}}>
          {articleList.length === 0 ? (
            <View styleName="warning">Article Not Found..!!</View>
          ) : null}
          {articleList.map(articleItem => this._articleItem(articleItem))}
        </View>
      </View>
    );
  }

  _articleItem(articleItem: ArticleItem) {
    let {onClick} = this.props;
    let {title, id} = articleItem;
    return (
      <View key={id} style={styles.itemList} onClick={() => onClick(id)}>
        {title}
      </View>
    );
  }
}

export default ArticleListPage;
