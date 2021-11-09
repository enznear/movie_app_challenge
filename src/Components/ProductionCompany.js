import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 50px;
  width: 100px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;  
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

// const Year = styled.span`
//   font-size: 10px;
//   color: rgba(255, 255, 255, 0.5);
// `;

const ProductionCompany = ({ logo_path, name }) => (  
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            logo_path
              ? `https://image.tmdb.org/t/p/w300${logo_path}`
              : require("../assets/noPosterSmall.png")
          }
        />       
      </ImageContainer>
      <Title>
        {name}
      </Title>    
    </Container>
 
);

ProductionCompany.propTypes = {
  logo_path: PropTypes.string, 
  name: PropTypes.string,
 
};

export default ProductionCompany;
