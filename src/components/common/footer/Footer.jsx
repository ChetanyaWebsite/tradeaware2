import React from "react";
import { blog } from "../../../dummydata";
import { Box, Typography, Stack, TextField, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, PaperPlaneIcon } from "@mui/icons-material";
import "./footer.css";

const Footer = () => {
  return (
    <>
      {/*<Box sx={{ backgroundColor: '#1eb2a6', padding: '50px 0', color: '#fff' }}>
         <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} sx={{ justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 500 }}>Newsletter - Stay tuned and get the latest updates</Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Far far away, behind the word mountains</Typography>
          </Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <TextField
              variant="outlined"
              placeholder="Enter email address"
              fullWidth
              sx={{
                backgroundColor: 'white',
                '& .MuiOutlinedInput-root': {
                  height: 50
                }
              }}
            />
            <IconButton sx={{ backgroundColor: 'white', color: '#1eb2a6' }}>
            </IconButton>
          </Stack>
        </Stack> 
      </Box>*/}

      <footer>
        <Box sx={{ backgroundColor: '#eeeeee', padding: '50px 0' ,backgroundColor: "#1eb2a6"}}>
          <Box className="container">
            <Box sx={{ maxWidth: '300px' }}>
              <Typography variant="h4" sx={{ color: 'white' }}>ACADEMIA</Typography>
              <Typography sx={{ color: 'white', marginBottom: 2 }}>ONLINE EDUCATION & LEARNING</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography sx={{ color: 'white', fontSize: 14 }}>
                  A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton sx={{ backgroundColor: '#1eb2a6', color: 'white' }}>
                    <Facebook />
                  </IconButton>
                  <IconButton sx={{ backgroundColor: '#1eb2a6', color: 'white' }}>
                    <Twitter />
                  </IconButton>
                  <IconButton sx={{ backgroundColor: '#1eb2a6', color: 'white' }}>
                    <Instagram />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
      </footer>

      <Box sx={{ textAlign: 'center', padding: '50px 0', color: 'grey', backgroundColor: '#e9e9e9' }}>
        <Typography variant="body2">
          Copyright ©2022 All rights reserved
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
