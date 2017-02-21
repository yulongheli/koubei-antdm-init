import React, { Component, PropTypes } from 'react';
import store from './store';
import { NavBar, Icon, Card, Toast, WingBlank, WhiteSpace } from 'antd-mobile';

class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopList: store.getList(),
    };
    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleClickShop = this.handleClickShop.bind(this);
    this.handleClickNew = this.handleClickNew.bind(this);
  }

  handleClickBack() {
    this.props.router.goBack();
  }

  handleClickShop(id) {
    this.props.router.push(`/shop/view/${id}`);
  }

  handleClickNew() {
    this.props.router.push('/shop/add');
  }

  reload() {
    this.setState({
      shopList: store.getList(),
    });
  }

  render() {
    return (
      <div>
        <NavBar
          leftContent="返回"
          mode="light"
          onLeftClick={this.handleClickBack}
          rightContent={[
            <span key="1" onClick={this.handleClickNew}>新增</span>,
          ]}
        >门店
        </NavBar>
        {this.state.shopList.map(shop => (
          <div key={shop.shopId} onClick={() => this.handleClickShop(shop.shopId)}>
            <WingBlank>
              <WhiteSpace />
              <Card>
                <Card.Header
                  title={shop.shopName}
                  thumb={shop.shopLogo}
                  extra="extra info"
                />
                <Card.Body>
                  <div>门店简介</div>
                </Card.Body>
                <Card.Footer
                  content={shop.mobileNo}
                  extra={shop.address}
                />
              </Card>
              <WhiteSpace />
            </WingBlank>
          </div>
        ))}
      </div>
    );
  }
}

ShopList.propTypes = {
  router: PropTypes.object,
};

export default ShopList;
