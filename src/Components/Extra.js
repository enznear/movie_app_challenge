import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({id, isMovie, location: {pathname}}) => (
  // <Header>
    <List>
      {/* {console.log(props)} */}
      <Item current={pathname.split('/').reverse()[0] === "videos"}>
        {isMovie
          ? <SLink to={`/movie/${id}/videos`}>Videos</SLink>
          : <SLink to={`/show/${id}/videos`}>Videos</SLink>
        }        
      </Item>
      <Item current={pathname.split('/').reverse()[0] === "productions"}>
        {isMovie
          ? <SLink to={`/movie/${id}/productions`}>Productions</SLink>
          : <SLink to={`/show/${id}/productions`}>Productions</SLink>
        }     
      </Item>      
      {isMovie
       ? null
       : 
       <>     
       <Item current={pathname.split('/').reverse()[0] === "seasons"}>        
           <SLink to={`/show/${id}/seasons`}>Seasons</SLink>
       </Item>
      </>
      }     
      
    </List>
  // </Header>
));
