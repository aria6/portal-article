// @flow

import React, {Component} from 'react';
import {View, Button, TextInput} from '../../components/coreUIIndex';

import styles from './ToolBarPage-style';

type Props = {
  onAddArticleClick: () => void,
  onSearchTextChange: (text: string) => void,
};

class ToolBarPage extends Component {
  props: Props;

  render() {
    let {onSearchTextChange, onAddArticleClick} = this.props;
    return (
      <View style={styles.toolbarContainer}>
        <Button
          onClick={onAddArticleClick}
          style={styles.toolbarButton}
          label="Add Article"
        />
        <View>Search :</View>
        <TextInput onChange={onSearchTextChange} />
      </View>
    );
  }
}

export default ToolBarPage;
