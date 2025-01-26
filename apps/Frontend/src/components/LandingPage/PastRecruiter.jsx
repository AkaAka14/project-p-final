import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PastRecruiters = () => {
  // Array of company logos (URLs or public folder paths)
  const companyLogos = [
    "/tnp-americanexp.jpg",
    "/tnp-akash.jpg",
    "/amazon-tnp.jpg",
    "/microsoft1-tnp.jpg",
    "/ford-tnp.jpg",
    "/adobe-tnp.jpg",
    "/tnp-delhrivery.jpg",
  ];

  // Slick slider settings
  const settings = {
    infinite: true, // Enables infinite scrolling
    slidesToShow: 5, // Number of logos visible at a time
    slidesToScroll: 1, // Logos to scroll per cycle
    autoplay: true, // Enables auto scrolling
    autoplaySpeed: 1500, // Cycle time in ms
    pauseOnHover: true, // Pause when hovered
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // For mobile
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        paddingX: "20px",
        paddingY: { xs: "20px", sm: "30px", md: "40px", lg: "60px" },
        backgroundColor: "#f7faff",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: { xs: "20px", sm: "30px", md: "40px" }, // Responsive bottom margin
          color: "#333",
        }}
      >
        Past Recruiters
      </Typography>

      {/* Carousel Section */}
      <Slider {...settings}>
        {companyLogos.map((logo, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt={`Company ${index + 1}`}
              sx={{
                maxWidth: "120px",
                margin: "0 auto",
                filter: "grayscale(100%)", // Optional: Grayscale effect
                transition: "filter 0.3s ease-in-out",
                "&:hover": {
                  filter: "grayscale(0%)", // Highlight on hover
                },
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default PastRecruiters;
