import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = ["About", "Team", "Recruiters", "Contact"];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Handle scroll to toggle navbar background and shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        backgroundColor: "#f7f9fc",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: 2,
      }}
    >
      {/* Close Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#2c3e50" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Menu Items */}
      <List sx={{ flexGrow: 1, p: 2 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item}
            component="a"
            href={`#${item.toLowerCase()}`}
            onClick={handleDrawerToggle}
            sx={{
              borderRadius: "8px",
              transition: "all 0.3s",
              "&:hover": { backgroundColor: "#3498db", color: "white" },
            }}
          >
            <ListItemText
              primary={item}
              primaryTypographyProps={{
                sx: { fontWeight: 600, color: "#2c3e50" },
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Footer Section */}
      <Divider />
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "#2c3e50" }}>
          © 2025 Training & Placement Cell
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
    <AppBar
      sx={{
        position: scrolled ? "sticky" : "static",
        top: 0,
        backgroundColor: scrolled ? "#f0f5ff" : "#f0f5ff",
        boxShadow: scrolled ? "0px 2px 10px rgba(0, 0, 0, 0.1)" : "none",
        transition: "background-color 0.3s, box-shadow 0.3s, position 0.3s",
        zIndex: 1200, // Ensure it stays on top of other elements
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo Section */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src="/nitkkr1.png"
              alt="NIT KKR Logo"
              sx={{ height: { xs: 40, md: 50 }, mr: 2 }}
            />
            <Typography
              variant="h6"
              component="h1"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1rem", md: "1.25rem" },
                color: scrolled ? "black" : "black", // Ensure text is always visible
              }}
            >
              Training & Placement Cell
            </Typography>
          </Box>

          {/* Menu Section */}
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: scrolled ? "black" : "black" }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  sx={{
                    color: scrolled ? "black" : "black", // Adjust text color
                    marginLeft: 2,
                    "&:hover": { color: "#3498db" },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>



      {/* Modern Fancy Sidebar */}
      {isMobile && (
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: 250,
              backgroundColor: "#f7f9fc",
              boxShadow: 5,
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </>
  );
};

export default Navbar;
