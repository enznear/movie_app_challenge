import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled("div")`
  margin-bottom: 0px;
`;

const YoutubeEmbed = ( { yt_key } ) => {  
  return(
  <Container>
  <div className="video-responsive">
    <iframe
      width="480"
      height="320"
      src={`https://www.youtube.com/embed/${yt_key}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  </Container>
  );
};

YoutubeEmbed.propTypes = {
  yt_key: PropTypes.string.isRequired
};

export default YoutubeEmbed;