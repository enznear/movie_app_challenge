import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import YoutubeEmbed from "./YoutubeEmbed";
import ProductionCompany from "./ProductionCompany";
import Season from "./Season";


const Container = styled.div`
    margin-bottom: 20px;
    display: flex;    
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;  
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;

const Tabs = (props) => {
    {console.log(props)};
    if (props.segment === "videos"){
        const videos = props.result.videos.results; 
        return (
        <>        
            {videos.map(video => {                
                return (
              <YoutubeEmbed
              yt_key={video.key}                
              />
            )})}
        </>);
    }  else if (props.segment === "productions"){
        const production_companies = props.result.production_companies;
        const production_countries = props.result.production_countries;
        return (
            <>  
                <Title>Production Companies</Title>  
                <Container> 
                {production_companies.map(company => {                
                    return (
                  <ProductionCompany
                  logo_path={company.logo_path}
                  name={company.name}
                  />
                )})} 
                </Container>                
                <Title>Production Countries</Title> 
                {production_countries.map(country => {                
                    return (
                  <li>{country.name}</li>   
                )})}
                
            
            </>);
    } else if (props.segment === "seasons"){
        const seasons = props.result.seasons;        
        return (
            <>                
                <Container> 
                {seasons.map(season => {                
                    return (
                  <Season
                  air_date={season.air_date}
                  poster_path={season.poster_path}
                  name={season.name}
                  episode_count={season.episode_count}                  
                  />
                )})} 
                </Container> 
            </>);
    }else {
        return  <Container>
        <div>aaa</div>
        {console.log(props)}
        {/* {console.log(id)} */}
        {/* <Title>{title}</Title>
        <Grid>{children}</Grid> */}
    </Container>;
  }  
 
};

Tabs.propTypes = {  
};

export default Tabs;
