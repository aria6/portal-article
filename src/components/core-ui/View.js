import React, {Component} from 'react';

type Props = {
  style?: Object,
  styleName?: string,
};

export default class View extends Component {
  props: Props;
  render() {
    let {style, styleName, children, ...otherProps} = this.props;
    return (
      <div style={{...styles[styleName || 'normal'], ...style}} {...otherProps}>
        {children}
      </div>
    );
  }
}

const styles = {
  normal: {
    color: '#474747',
    fontSize: 13,
  },
  content: {
    color: '#474747',
    fontSize: 14,
    textAlign: 'justify',
  },
  warning: {
    color: '#474747',
    fontSize: 13,
    textAlign: 'center',
    marginVertical: 10,
  },
  title: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 23,
    color: '#474747',
  },
  subTitle: {
    fontSize: 12,
    margin: '5px 0px 5px 0px',
  },
};
