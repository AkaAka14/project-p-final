import { Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  // Animation Variants
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <Box
      sx={{
        padding: "60px",
        paddingTop: { xs: "80px", sm: "80px", md: "80px", lg: "100px" }, 
        backgroundColor: "#f0f5ff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "20px",
            color: "#2c3e50",
            fontSize: {
              xs: "2rem", 
              sm: "2.5rem", 
              md: "2.8rem", 
              lg: "3rem", 
            },
          }}
        >
          Discover Us
        </Typography>
      </motion.div>

      {/* Fixed Container with Motion for Image and Text */}
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          maxWidth: "1000px",
          mx: "auto",
          overflow: "hidden",
          borderRadius: "15px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          padding: "20px",
        }}
      >
        {/* Motion Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          viewport={{ once: true }}
          style={{ flex: 1 }}
        >
          <Box
            component="img"
            src="/image1.png"
            alt="Institute Banner"
            sx={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "10px",
            }}
          />
        </motion.div>

        {/* Motion Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
          style={{ flex: 1 }}
        >
          <CardContent
            sx={{
              backgroundColor: "#ffffff",
              padding: "20px 30px",
              borderRadius: "10px",
              marginLeft: { md: "20px" },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#2c3e50",
                marginBottom: "10px",
                fontSize: {
                  xs: "1.2rem", // Small devices
                  sm: "1.4rem", // Medium devices
                  md: "1.7rem", // Large devices
                  lg: "1.7rem", // Extra large devices
                },
              }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#333",
                textAlign: "justify",
                fontSize: {
                  xs: "0.875rem", // Small devices
                  sm: "1rem", // Medium devices
                  md: "1.125rem", // Large devices
                  lg: "1.125rem", // Extra large devices
                },
                lineHeight: {
                  xs: 1.5, // Line height for small devices
                  sm: 1.6, // Medium devices
                  md: 1.75, // Large devices
                  lg: 1.8, // Extra large devices
                },
              }}
            >
              The Training and Placement Office at NIT Kurukshetra serves as a
              bridge between academia and industry. We provide students with
              opportunities to build their skills, ensuring their professional
              growth and success in a competitive environment.
            </Typography>
          </CardContent>
        </motion.div>
      </Card>

      {/* Second Section with Reversed Layout */}
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          alignItems: "center",
          maxWidth: "1000px",
          mx: "auto",
          overflow: "hidden",
          borderRadius: "15px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          padding: "20px",
        }}
      >
        {/* Motion Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          viewport={{ once: true }}
          style={{ flex: 1 }}
        >
          <Box
            component="img"
            src="/image2.png"
            alt="Recruitment Drive"
            sx={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "10px",
            }}
          />
        </motion.div>

        {/* Motion Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
          style={{ flex: 1 }}
        >
          <CardContent
            sx={{
              backgroundColor: "#ffffff",
              padding: "20px 30px",
              borderRadius: "10px",
              marginRight: { md: "20px" },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#2c3e50",
                marginBottom: "10px",
                fontSize: {
                  xs: "1.2rem", // Small devices
                  sm: "1.4rem", // Medium devices
                  md: "1.7rem", // Large devices
                  lg: "1.7rem", // Extra large devices
                },
              }}
            >
              Our Vision
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#333",
                textAlign: "justify",
                fontSize: {
                  xs: "0.875rem", // Small devices
                  sm: "1rem", // Medium devices
                  md: "1.125rem", // Large devices
                  lg: "1.125rem", // Extra large devices
                },
                lineHeight: {
                  xs: 1.5, // Line height for small devices
                  sm: 1.6, // Medium devices
                  md: 1.75, // Large devices
                  lg: 1.8, // Extra large devices
                },
              }}
            >
              From campus drives to internships and workshops, we ensure every
              student is well-equipped for the challenges of the industry. Our
              team collaborates with top recruiters to bring exciting
              opportunities to our campus.
            </Typography>
          </CardContent>
        </motion.div>
      </Card>
    </Box>
  );
};

export default About;
