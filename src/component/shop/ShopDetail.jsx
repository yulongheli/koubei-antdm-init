import React, {PropTypes} from 'react';
import { List, InputItem } from 'antd-mobile';

const ShopDetail = React.createClass({
  propTypes: {
    form: PropTypes.object,
  },
  getInitialState() {
    return {};
  },
  componentDidMount() {
    this.fetch();
  },
  fetch() {
    
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    
    return (
      <List>
        <InputItem
          {...getFieldProps('phone')}
          type="phone"
          placeholder="186 1234 1234"
        >手机号码</InputItem>
        <InputItem
          {...getFieldProps('password')}
          type="password"
          placeholder="****"
        >密码</InputItem>
      </List>
    );
  },
});

export default ShopDetail;
