import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
  margin-right: 10px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  width: 120px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.7;
    }   
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Season = ({ air_date, poster_path, name, episode_count }) => ( 
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : require("../assets/noPosterSmall.png")
          }
        />
      </ImageContainer>
      <Title>
        {name} ({episode_count})
      </Title>
      <Year>{air_date}</Year>
    </Container> 
);

Season.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Season;
