// @flow

import React, {Component} from 'react';
import {View, Button, TextInput, Border} from '../../components/coreUIIndex';

import styles from './ArticleFormPage-style';

type Article = {
  title: string,
  date: string,
  author: string,
  imageArticle: string,
  content: string,
};

type Props = {
  articleData: Article,
  onCancelClick: () => void,
  onSaveClick: (articleData: Article) => void,
};

type State = Article;

export default class ArticleFormPage extends Component {
  props: Props;
  state: State;

  constructor() {
    super(...arguments);
    this._onResetClick = this._onResetClick.bind(this);
    this._onCancelClick = this._onCancelClick.bind(this);
    this._onSaveClick = this._onSaveClick.bind(this);
    let {articleData} = this.props;
    this.state = {
      id: articleData.id || '',
      title: articleData.title || '',
      date: articleData.date || '',
      author: articleData.author || '',
      imageArticle: articleData.imageArticle || '',
      content: articleData.content || '',
    };
  }

  render() {
    let {id, title, author, content} = this.state;
    return (
      <View>
        <View styleName="title">{id ? 'Edit' : 'Add New'} Article</View>
        <Border />
        <View style={styles.groupButton}>
          <Button label="Save" onClick={this._onSaveClick} />
          <Button label="Reset" onClick={this._onResetClick} />
          <Button label="Cancel" onClick={this._onCancelClick} />
        </View>
        <View style={styles.formArticle}>
          <View>
            <View>Title :</View>
            <View style={{display: 'flex', flex: 1}}>
              <TextInput
                value={title}
                onChange={event => this.setState({title: event.target.value})}
              />
            </View>
          </View>
          <View style={styles.formField}>
            <View>Author :</View>
            <View style={{display: 'flex', flex: 1}}>
              <TextInput
                value={author}
                onChange={event => this.setState({author: event.target.value})}
              />
            </View>
          </View>
          <View style={styles.formField}>
            <View>Content :</View>
            <View style={{display: 'flex', flex: 1}}>
              <TextInput
                value={content}
                isMultiline={true}
                onChange={event => this.setState({content: event.target.value})}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

  _onCancelClick() {
    this.props.onCancelClick();
  }

  _onSaveClick() {
    this.props.onSaveClick(this.state);
  }

  _onResetClick() {
    this.setState({
      title: '',
      date: '',
      author: '',
      imageArticle: '',
      content: '',
    });
  }
}
