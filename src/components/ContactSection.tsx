import { motion } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import { Box, Typography, Button, TextField, styled } from "@mui/material";

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const CssTextField = styled(TextField)({
    width: "100%",
    "& label.Mui-focused": {
      color: "#A0AAB4",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E0E3E7",
      },
      "&:hover fieldset": {
        borderColor: "#B2BAC2",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#6F7E8C",
      },
    },
  });

  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "0 30px",
        borderRadius: "50px",
      }}
      id="contact"
    >
      <InView>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h4"
            style={{
              padding: "10px 0",
              textAlign: "center",
              color: "#248282",
              fontWeight: "700",
            }}
          >
            Let's Talk!
          </Typography>
          <Typography
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
              lineHeight: "1.4",
              fontWeight: "400",
              margin: "20px 0",
            }}
            variant="body1"
          >
            I am always on the lookout for exciting projects or roles that
            require my expertise. If you have an idea that you would like to
            bring to life, let's work together and make it happen!
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2, width: "45ch" },
              margin: "0 auto",
            }}
            action="https://formsubmit.co/natalia.sokolova.ca@gmail.com"
            method="POST"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <CssTextField
                name="name"
                label="Full Name"
                required
                placeholder="Full Name"
                color="secondary"
              />

              <CssTextField
                type="email"
                name="email"
                label="Email Address"
                placeholder="Email Address"
                required
              />

              <CssTextField
                name="message"
                placeholder="Your Message"
                rows={4}
                multiline
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "35px",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="info"
                size="large"
                sx={{
                  marginTop: "20px",
                  backgroundColor: "#ffd500",
                  "&:hover": {
                    backgroundColor: "#248282",
                  },
                }}
              >
                MESSAGE ME
              </Button>
            </div>
          </Box>
        </motion.div>
      </InView>
    </Box>
  );
};

export default ContactSection;
