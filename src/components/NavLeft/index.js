import React, { Component } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import menuConfig from '../../config/menuConfig';
import './index.less';

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

export default class NavLeft extends Component {
  state = {
    menuTreeNode: null,
  };

  componentDidMount() {
    const menuTreeNode = this.renderMenu(menuConfig);
    this.setState({
      menuTreeNode,
    });
  }

  renderMenu = data => data.map((item) => {
    if (item.children) {
      return (
        <SubMenu title={item.title} key={item.key}>
          {this.renderMenu(item.children)}
        </SubMenu>
      );
    }
    return (
      <Item title={item.title} key={item.key}>
        <NavLink to={'/admin' + item.key}>{item.title}</NavLink>
      </Item>
    );
  });

  render() {
    return (
      <div>
        <div className={'logo'}>
          <img src="/assets/logo-ant.svg" alt="logo" />
          <h1>i love you</h1>
        </div>
        <Menu theme="dark">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}
