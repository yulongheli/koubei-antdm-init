import ShopCreate from './ShopCreate';
import ShopModify from './ShopModify';
import ShopDetail from './ShopDetail';

export default [{
  path: '/shop/create',
  component: ShopCreate
}, {
  path: '/shop/modify/:shopId',
  component: ShopModify	
}, {
  path: '/shop/detail/:shopId',
  component: ShopDetail
}];
