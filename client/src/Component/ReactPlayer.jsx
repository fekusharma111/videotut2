import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import ReactPlayer from "react-player";
import axios from "axios";

const Container = styled(Box)`
  margin: 10px;
  display: flex;
  justify-content: center;
`;

const Player = () => {
    // const [videopath, setVideopath] = useState();
  // const url = "http://localhost:4000";
  // const configs ={
  //   headers:{
  //     range: bytes              ,
  //     header2: value2
  //   }
  // };
    // useEffect(() => {
    //     const fetchvideo = async () => {
    //         try {
    //             const videores = await axios.get(`/video`)
    //             .then(res=> console.log(res))
    //             .catch(err=> console.log(err))
    //             console.log(videores);
    //             setVideopath(videores);
    //         } catch (error) {
                
    //         }
    //     }

    //     fetchvideo();
    // })

  const config = {
    attributes: {
      disablePictureInPicture: true,
      controlsList: "nodownload",
    },
  };
  return (
    <Container>
      <ReactPlayer
              url='/video'
            controls
            config={config}>  
      </ReactPlayer>
    </Container>
  );
};

export default Player;
