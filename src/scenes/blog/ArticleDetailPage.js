// @flow

import React, {Component} from 'react';
import {View, Button, Border} from '../../components/coreUIIndex';

import styles from './ArticleDetailPage-style';

type Article = {
  id: string,
  title: string,
  date: string,
  author: string,
  imageArticle: string,
  content: string,
};

type Props = {
  articleSelected: ?Article,
  onDeleteClick: (id: string) => void,
  onEditClick: () => void,
};

export default class ArticleDetailPage extends Component {
  props: Props;

  constructor() {
    super(...arguments);
    this._onDeleteClick = this._onDeleteClick.bind(this);
    this._onEditClick = this._onEditClick.bind(this);
  }

  render() {
    let {articleSelected} = this.props;
    let {id, title, date, author, imageArticle, content} = articleSelected;
    if (!articleSelected) {
      return <View style={styles.container}>No Article Selected</View>;
    }
    return (
      <View>
        <View styleName="title">{title}</View>
        <Border />
        <View styleName="subTitle">{`Created on ${date}, by ${author}`}</View>
        <View style={styles.groupButton}>
          <Button label="Edit" onClick={this._onEditClick} />
          <Button label="Delete" onClick={() => this._onDeleteClick(id)} />
        </View>
        <View>{imageArticle}</View>
        <View styleName="content">{content}</View>
      </View>
    );
  }

  _onEditClick() {
    this.props.onEditClick();
  }

  _onDeleteClick(id: string) {
    this.props.onDeleteClick(id);
  }
}
