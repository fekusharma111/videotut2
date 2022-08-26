import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";




const Container = styled(AppBar)(({ theme })=> `
background: #1565c0;
position:sticky;
`)


const Navbar = () => {
    
  return (
    <Container>
          <Toolbar>
              <Typography>
                  Video Player Demo 
              </Typography>
      </Toolbar>
    </Container>
  );
};

export default Navbar;
