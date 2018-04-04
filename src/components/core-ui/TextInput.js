// @flow

import React, {Component} from 'react';

type Props = {
  isMultiline: boolean,
  style: Object,
};

export default class TextInput extends Component {
  props: Props;

  render() {
    let {isMultiline, style, ...otherProps} = this.props;
    if (isMultiline) {
      return (
        <textarea style={{...styles.textInput, ...style}} {...otherProps} />
      );
    } else {
      return (
        <input
          style={{...styles.textInput, ...style}}
          {...otherProps}
          type="text"
        />
      );
    }
  }
}

const styles = {
  textInput: {
    display: 'flex',
    flex: 1,
    border: '1px solid #979797',
    padding: '5px 5px',
    margin: '3px 0',
  },
};
