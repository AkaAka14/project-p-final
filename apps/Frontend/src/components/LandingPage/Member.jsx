import React from "react";
import { Box, Typography, Avatar, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dummy Data for Team Members
const teamMembers = [
  
  {
    name: "Munish Sharma",
    post: "Training and Placement Officer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Prof. B.V. Ramana Reddy",
    post: "Director",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Prof. R.K. Sharma",
    post: "Dean | Research & Consultancy ",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Prof. Shelly Vadhera",
    post: "Associate Dean|Industry & International Relations ",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Surender Ontela",
    post: "Faculty In-charge | Training & Placement ",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Nidhi Gupta" ,
    post: "Associate Faculty In-charge | Training & Placement",
    image: "https://via.placeholder.com/150",
  },
];

const Team = () => {
  // Slick Slider Settings
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of visible slides
    slidesToScroll: 1, // Number of slides to scroll per swipe
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Time (ms) for each slide
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f7faff",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      {/* Section Header */}
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "30px" }}>
        Meet Our Team
      </Typography>

      {/* Carousel Slider */}
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 300,
              margin: "0 auto",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{
                  width: "100px",
                  height: "100px",
                  marginBottom: "15px",
                  border: "3px solid #2196F3",
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#333" }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#777", marginTop: "5px" }}
                >
                  {member.post}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default Team;
