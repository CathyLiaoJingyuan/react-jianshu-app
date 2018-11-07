import styled from "styled-components";
import logoPic from "../../statics/logo.png";
import { Search, FeatherAlt } from "styled-icons/fa-solid/";

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
  padding-right: 60px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 50px 0 0;
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
  padding: 0 40px 0 20px;
  width: 160px;
  height: 38px;
  border: none;
  border-radius: 19px;
  box-sizing: border-box;
  background: #eee;
  margin-top: 9px;
  font-size: 14px;
  ::placeholder {
    color: #999;
  }
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: left;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin: 9px 15px;
  padding: 0 18px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;
export const FeatherAltIcon = styled(FeatherAlt)`
  padding-right: 6px;
`;

export const SearchIcon = styled(Search)`
  color: #999;
  position: absolute;
  transform: translate(-26px, 20px);
`;
