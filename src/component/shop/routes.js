import ShopList from './ShopList';
import ShopEdit from './ShopEdit';
import ShopAdd from './ShopAdd';

export default [
  {
    path: 'shop/list',
    component: ShopList,
  },
  {
    path: 'shop/edit/:id',
    component: ShopEdit,
  },
  {
    path: 'shop/add',
    component: ShopAdd,
  },
];
