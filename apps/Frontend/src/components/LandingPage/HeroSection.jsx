import React, { useState } from 'react';
import { Box, Typography, Button, Container, Menu, MenuItem } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (role) => {
    navigate(`/auth/${role}/login`);
    handleCloseMenu();
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'white',
        backgroundImage: 'url(/heroBackground.svg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        p: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
            alignItems: 'center',
          }}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: '#2c3e50',
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
              }}
            >
              Shape Your Future at NIT Kurukshetra
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#34495e',
                mb: 4,
                opacity: 0.9,
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              Connecting talent with opportunity through excellence in education
            </Typography>
            <Button
              onClick={handleOpenMenu}
              variant="contained"
              size="small"
              sx={{
                py: 1,
                px: 3,
                backgroundColor: '#3498db',
                '&:hover': { backgroundColor: '#2980b9' },
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
              }}
            >
              Login
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              PaperProps={{
                sx: { mt: 1, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' },
              }}
            >
              {['student', 'recruiter', 'coordinator', 'admin'].map((role) => (
                <MenuItem
                  key={role}
                  onClick={() => handleNavigate(role)}
                  sx={{
                    textTransform: 'capitalize',
                    '&:hover': { backgroundColor: '#f0f0f0' },
                  }}
                >
                  {role}
                </MenuItem>
              ))}
            </Menu>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box
              component="img"
              src="/image4.jpg"
              alt="Hero Section"
              sx={{
                width: '100%',
                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)',
                maxHeight: { xs: '300px', md: '500px' },
                objectFit: 'cover',
              }}
            />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
