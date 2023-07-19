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

const utilities = {
  id: 'utilities',
  title: 'Assets',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Category',
      type: 'item',
      url: '/app/Category',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-color',
      title: 'Sub category',
      type: 'item',
      url: '/app/Subcategory',
      icon: icons.BgColorsOutlined
    },
    {
      id: 'util-shadow',
      title: 'Brand',
      type: 'item',
      url: '/app/Brand',
      icon: icons.BarcodeOutlined
    },
    {
      id: 'ant-icons',
      title: 'Dealers',
      type: 'item',
      url: '/app/Dealers',
      icon: icons.AntDesignOutlined,
      breadcrumbs: false
    }
  ]
};

export default utilities;
