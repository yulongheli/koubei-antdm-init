import React, { PropTypes, Component } from 'react';
import { List, InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  login() {
    location.hash = 'shop/list';
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <List>
          <InputItem
            {...getFieldDecorator('phone')}
            type="phone"
            placeholder="186 1234 1234"
          >手机号码：</InputItem>
          <InputItem
            {...getFieldDecorator('password')}
            type="password"
            placeholder="****"
          >密码：</InputItem>
        </List>
        <WhiteSpace size="xl" />
        <WingBlank>
          <Button className="btn" type="primary" onClick={this.login}>登录</Button>
        </WingBlank>
      </div>
    );
  }
}

Login.propTypes = {
  form: PropTypes.object,
};

export default createForm()(Login);
