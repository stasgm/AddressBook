import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { RoutesEnum } from '@common/config/router.config';

const Linkmenu = withRouter(props => {
  const { location } = props;
  return (
    <Menu mode="horizontal" selectedKeys={[location.pathname]}>
      <Menu.Item key="/">
        <Link to="/">
          <Icon type="appstore" />
          Главная
        </Link>
      </Menu.Item>
      <Menu.Item key={RoutesEnum.Scrape}>
        <Link to={RoutesEnum.Scrape}>Scrape</Link>
      </Menu.Item>
      <Menu.Item key={RoutesEnum.TreeView}>
        <Link to={RoutesEnum.TreeView}>Дерево</Link>
      </Menu.Item>
      <Menu.Item key="/test/treeview">
        <Link to={`/test/treeview`}>Test-with-params</Link>
      </Menu.Item>
      <Menu.Item key="/test">
        <Link to={`/test`}>Test</Link>
      </Menu.Item>
    </Menu>
  );
});

export default Linkmenu;
