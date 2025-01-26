import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Link, List, ListItem, ListItemText } from '@mui/material';
import { Email, Phone, LinkedIn, Twitter, Instagram, YouTube, Fax } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#606470",
        color: "white",
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Training & Placement Office
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              National Institute of Technology
              <br />
              Kurukshetra, Haryana - 136119
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Phone sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">+91-1744-233208</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Email sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">tnp@nitkkr.ac.in</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#about" color="inherit" display="block" sx={{ mb: 1 }}>
              About Us
            </Link>
            <Link href="#recruiters" color="inherit" display="block" sx={{ mb: 1 }}>
              Past Recruiters
            </Link>
            <Link href="#team" color="inherit" display="block" sx={{ mb: 1 }}>
              Our Team
            </Link>
            <Link href="#contact" color="inherit" display="block">
              Contact Us
            </Link>
          </Grid>

          {/* Connect and Additional Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Box sx={{ mb: 2 }}>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" aria-label="YouTube">
                <YouTube />
              </IconButton>
            </Box>

            <Typography variant="h6" gutterBottom>
              Important Links
            </Typography>
            <List>
              <ListItem disableGutters>
                <ListItemText>
                  <Link href="#iitd-home" color="inherit" underline="hover">
                    NIT KKR Website
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem disableGutters>
                <ListItemText>
                  <Link href="#curriculum" color="inherit" underline="hover">
                    NIT KKR Curriculum
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem disableGutters>
                <ListItemText>
                  <Link href="#calendar" color="inherit" underline="hover">
                    Academic Calendar
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Typography 
          variant="body2" 
          sx={{ 
            mt: 4, 
            pt: 2, 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center' 
          }}
        >
          © {new Date().getFullYear()} Training & Placement Cell, NIT Kurukshetra
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
