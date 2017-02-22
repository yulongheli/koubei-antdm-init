import React, { Component, PropTypes } from 'react';
import { Picker, List, InputItem, WingBlank, WhiteSpace, Button, ImagePicker } from 'antd-mobile';
import { createForm } from 'rc-form';
import store from './store';
import brands from './data/brands';
import areas from './data/areas';
import category from './data/category';
import images from './data/images';
import { PAY_TYPE_TEXT } from './config';
import './shop.less';

// compose payTypes picker data
const payTypes = Object.keys(PAY_TYPE_TEXT)
  .map(type => ({ label: PAY_TYPE_TEXT[type], value: type }));

class ShopForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { validateFields } = this.props.form;
    this.setState({
      submitting: true,
    });
    validateFields((err, values) => {
      if (!err) {
        Object.assign(this.props.shop, {
          brandId: values.brandId[0],
          shopName: values.shopName,
          provinceId: values.residence[0],
          cityId: values.residence[1],
          disctrictId: values.residence[2],
          categoryIds: values.categoryIds,
          address: values.address,
          mobileNo: values.mobileNo,
          payType: values.payType[0],
          receiveUserId: values.receiveUserId,
        });
        if (this.props.isEdit) {
          store.saveShop(this.props.shop.shopId, this.props.shop);
        } else {
          store.addShop(this.props.shop);
        }
        this.props.router.push('shop/list');
      } else {
        this.setState({
          submitting: false,
        });
      }
    });
  }

  render() {
    const { getFieldProps } = this.props.form;

    const shop = this.props.shop;

    return (
      <div>
        <List>
          <Picker
            extra="请选择(必选)"
            cols={1}
            data={brands}
            title="选择品牌"
            {...getFieldProps('brandId', {
              required: true,
              initialValue: [shop.brandId],
            })}
          >
            <List.Item arrow="horizontal">选择品牌</List.Item>
          </Picker>
          <InputItem
            className="shop-form-input"
            {...getFieldProps('shopName', {
              required: true,
              initialValue: shop.shopName,
            })}
          >门店名称</InputItem>
          <Picker
            extra="请选择(必选)"
            data={areas}
            title="选择地区"
            {...getFieldProps('residence', {
              required: true,
              initialValue: [shop.provinceId, shop.cityId, shop.districtId],
            })}
          >
            <List.Item arrow="horizontal">选择地区</List.Item>
          </Picker>
          <ImagePicker
            files={images}
            onChange={this.onLogoChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={images.length < 5}
          />
          <InputItem
            className="shop-form-input"
            {...getFieldProps('address', {
              required: true,
              initialValue: shop.address,
            })}
          >
            详细地址
          </InputItem>
          <Picker
            extra="请选择(品类)"
            cols={2}
            data={category}
            title="选择品类"
            {...getFieldProps('categoryIds', {
              required: true,
              initialValue: shop.categoryIds,
            })}
          >
            <List.Item arrow="horizontal">选择品类</List.Item>
          </Picker>
          <InputItem
            className="shop-form-input"
            {...getFieldProps('mobileNo', {
              required: true,
              initialValue: shop.mobileNo,
            })}
          >
            门店电话
          </InputItem>
          <Picker
            extra="请选择收款方式"
            cols={1}
            data={payTypes}
            title="收款方式"
            {...getFieldProps('payType', {
              required: true,
              initialValue: [shop.payType],
            })}
          >
            <List.Item arrow="horizontal">选择收款方式</List.Item>
          </Picker>
          <InputItem
            className="shop-form-input"
            {...getFieldProps('receiveUserId', {
              required: true,
              initialValue: shop.receiveUserId,
            })}
          >
            收款帐号
          </InputItem>
        </List>
        <WhiteSpace />
        <WingBlank>
          <Button
            type="primary"
            loading={this.state.submitting}
            onClick={this.handleSubmit}
          >提交</Button>
        </WingBlank>
      </div>
    );
  }
}

ShopForm.propTypes = {
  form: PropTypes.object,
  shop: PropTypes.object,
  isEdit: PropTypes.bool,
  router: PropTypes.object,
};

export default createForm()(ShopForm);
