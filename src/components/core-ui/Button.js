// @flow

import React, {Component} from 'react';

type Props = {
  label: string,
};

export default class Button extends Component {
  props: Props;

  render() {
    let {label, ...otherProps} = this.props;
    return <button {...otherProps}>{label}</button>;
  }
}
