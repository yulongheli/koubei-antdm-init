import React, { PropTypes, Component  } from 'react';
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

class Login extends Component {

  static propTypes = {
    form: PropTypes.object,
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <List>
        <InputItem
          {...getFieldDecorator('phone')}
          type="phone"
          placeholder="186 1234 1234"
        >手机号码</InputItem>
        <InputItem
          {...getFieldDecorator('password')}
          type="password"
          placeholder="****"
        >密码</InputItem>
      </List>
    );
  }
}

export default createForm()(Login);
