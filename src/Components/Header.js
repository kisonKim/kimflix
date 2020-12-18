import React from "react";
import {Link, withRouter} from "react-router-dom";//withrouter는 다른 컴포넌트를 감싸는 component. 라우터에 정보를 줌
import styled from "styled-components";

const Header = styled.header`
    position:fixed;
    top:0;
    left:0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    color:white;
    background-color: black;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);
`;
const Item = styled.li`
    
    width: 140px;
    text-align:center;
    border-bottom : 5px solid ${props=> props.current?"#e74c3c":'transparent'};
    transition: border-bottom .3s ease-in-out;
    line-height:50px;

    `;

const List = styled.ul`
    display:flex;    
    height:50px;
`;
const SLink = styled(Link)`
    height:50px;
    display:flex;
    align-items: center;
    justify-content: center;
`;

export default withRouter( ({location: { pathname } }) => (
    <Header>
        <List>
            <Item current={pathname==="/"}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname==="/tv"}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname==="/search"}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
));