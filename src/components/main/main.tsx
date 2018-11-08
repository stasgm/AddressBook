// import { Menu, Icon } from 'antd';
import { RoutesEnum } from '@common/config/router.config';
import RouterParamTest from '@components/routerParamTest/routerParamTest';
import TreeView from '@components/TreeView';
import { Scrape } from '@components/scrape';
import { autobind } from 'core-decorators';
import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import Linkmenu from '@components/main/Linkmenu';
import './main.scss';

export interface IMainProps {}

export interface IMainState {}

export default class Main extends React.Component<IMainProps, IMainState> {
  constructor(props: IMainProps) {
    super(props);
  }

  public render() {
    return (
      <div className="main-container">
        <Linkmenu />
        {/*  <Menu mode="horizontal">
          <Menu.Item>
            <Icon type="appstore" />
            Главная
          </Menu.Item>
            <ul className="menu-main">
            <li>
              <Link to={`/`}>Главная</Link>
            </li>
            <li>
              <Link to={`/treeview`}>Дерево</Link>
            </li>
            <li>
              <Link to={`/test`}>Test</Link>
            </li>
            <li>
              <Link to={`/test/treeview`}>Test-with-params</Link>
            </li>
          </ul>
        </Menu> */}
        <Route exact path={RoutesEnum.Root} component={this._renderRoot} />
        <Route path={RoutesEnum.Scrape} component={Scrape} />
        <Route path={RoutesEnum.Test} component={this._renderTest} />
        <Route path={RoutesEnum.TestRouterParams} component={({ match }) => <RouterParamTest id={match.params.id} />} />
        <Route path={RoutesEnum.TreeView} component={TreeView} />
      </div>
    );
  }

  @autobind
  private _renderRoot() {
    return <div>Hello Home</div>;
  }

  @autobind
  private _renderTest() {
    return <div>Hello Test</div>;
  }
}
