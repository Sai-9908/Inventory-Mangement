// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const Assets = {
  id: 'Assets',
  title: 'Assets',
  type: 'group',
  children: [
    {
      id: 'Category',
      title: 'Category',
      type: 'item',
      url: '/app/category',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'Sub-Category',
      title: 'Sub-category',
      type: 'item',
      url: '/app/subcategory',
      icon: icons.BgColorsOutlined
    },
    {
      id: 'Brand',
      title: 'Brand',
      type: 'item',
      url: '/app/brand',
      icon: icons.BarcodeOutlined
    },
    {
      id: 'DealersList',
      title: 'Dealers',
      type: 'item',
      url: '/app/dealers',
      icon: icons.AntDesignOutlined,
      breadcrumbs: false
    }
  ]
};

export default Assets;
