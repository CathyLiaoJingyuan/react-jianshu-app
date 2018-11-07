import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a`
  position: absolute;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  background: url(${logoPic});
  height: 56px;
  display: block;
  width: 100px;
  background-size: 100%;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  display: inline-block;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const NavSearch = styled.input.attrs({ placeholder: "search" })`
  padding: 0 40px 0 20p;
  width: 160px;
  height: 38px;
  border: none;
  border-radius: 19px;
  box-sizing: border-box;
  background: green;
  margin-top: 9px;
`;
