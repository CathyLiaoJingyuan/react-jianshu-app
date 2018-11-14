import React, { Component } from "react";
import { connect } from "react-redux";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  FeatherAltIcon,
  SearchIcon
} from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
          <NavSearch
            onFocus={this.props.handleInputFocus}
            onBlur={this.props.handleInputFocusOut}
            className={this.props.focused ? "focused" : ""}
          />
          <SearchIcon
            size="14px"
            className={this.props.focused ? "icon-focused" : ""}
          />
        </Nav>
        <Addition>
          <Button className="reg">注册</Button>
          <Button className="writting">
            <FeatherAltIcon size="14px" />
            写文章
          </Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    focused: state.focused
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      const action = {
        type: "search_focus"
      };
      dispatch(action);
    },
    handleInputFocusOut() {
      const action = {
        type: "search_blur"
      };
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
