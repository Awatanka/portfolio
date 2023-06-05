import { motion } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import { Box, Typography, Button } from "@mui/material";

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "80%",
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
            variant="h5"
            style={{ padding: "10px 0", textAlign: "center" }}
          >
            Let's Talk!
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: "18px", textAlign: "center" }}
          >
            I am always on the lookout for exciting projects or roles that
            require my expertise. If you have an idea that you would like to
            bring to life, let's work together and make it happen!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <form
              target="_blank"
              action="https://formsubmit.co/natalia.sokolova.ca@gmail.com"
              method="POST"
            >
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <input
                      name="name"
                      className="form-control"
                      required
                      style={{
                        width: "400px",
                        backgroundColor: "#f5f5f5",
                        padding: "20px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <textarea name="message" placeholder="Your Message" />
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ marginTop: "20px", backgroundColor: "#ffd500" }}
              >
                Submit Form
              </Button>
            </form>
          </Box>
        </motion.div>
      </InView>
    </Box>
  );
};

export default ContactSection;
