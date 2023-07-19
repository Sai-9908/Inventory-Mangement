import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - Assets
const Category = Loadable(lazy(() => import('pages/components-overview/Category')));
const SubCategory = Loadable(lazy(() => import('pages/components-overview/SubCategory')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/app',
  element: <MainLayout />,
  children: [
    {
      path: '/app/',
      element: <DashboardDefault />
    },
    {
      path: 'SubCategory',
      element: <SubCategory />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'Brand',
      element: <Shadow />
    },
    {
      path: 'Category',
      element: <Category />
    },
    {
      path: 'Dealers',
      element: <AntIcons />
    }
  ]
};

export default MainRoutes;
