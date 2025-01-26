import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  Email,
  Phone,
  LinkedIn,
  Twitter,
  Instagram,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#606470",
        color: "white",
        py: 6,
        mt: "auto",
        px: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              Training & Placement Office
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 2, textAlign: { xs: "center", sm: "left" } }}
            >
              National Institute of Technology
              <br />
              Kurukshetra, Haryana - 136119
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "left" },
                mb: 1,
              }}
            >
              <Phone sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">+91-1744-233208</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "left" },
              }}
            >
              <Email sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">tnp@nitkkr.ac.in</Typography>
            </Box>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              Quick Links
            </Typography>
            <Box
              sx={{
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <Link
                href="#about"
                color="inherit"
                display="block"
                sx={{ mb: 1, textAlign: { xs: "center", sm: "left" } }}
              >
                About Us
              </Link>
              <Link
                href="#recruiters"
                color="inherit"
                display="block"
                sx={{ mb: 1, textAlign: { xs: "center", sm: "left" } }}
              >
                Past Recruiters
              </Link>
              <Link
                href="#team"
                color="inherit"
                display="block"
                sx={{ mb: 1, textAlign: { xs: "center", sm: "left" } }}
              >
                Our Team
              </Link>
              <Link href="#contact" color="inherit" display="block">
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Connect and Important Links */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              Connect With Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "left" },
                mb: 2,
              }}
            >
              <IconButton
                color="inherit"
                aria-label="LinkedIn"
                sx={{ mx: 0.5 }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Twitter"
                sx={{ mx: 0.5 }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Instagram"
                sx={{ mx: 0.5 }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="YouTube"
                sx={{ mx: 0.5 }}
              >
                <YouTube />
              </IconButton>
            </Box>

            {/* <Typography
              variant="h6"
              gutterBottom
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              Important Links
            </Typography>
            <List sx={{ textAlign: { xs: "center", sm: "left" } }}>
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
            </List> */}
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          sx={{
            mt: 4,
            pt: 2,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} Training & Placement Cell, NIT
          Kurukshetra
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
