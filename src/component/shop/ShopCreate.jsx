import React, { PropTypes, Component } from 'react';
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import ImageUploader from './ImageUploader';

class ShopCreate extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <List>
        <InputItem
          {...getFieldDecorator('name')}
          type="text"
          placeholder="门店名称"
        >门店名称：</InputItem>
        <InputItem
          {...getFieldDecorator('des')}
          type="text"
          placeholder="描述"
        >描述：</InputItem>
        <List.Item>
          <ImageUploader/>
        </List.Item>
      </List>
    );
  }
}

ShopCreate.propTypes = {
  form: PropTypes.object,
};

export default createForm()(ShopCreate);
