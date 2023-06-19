import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import icon from "../assets/icon.png";
import boat from "../assets/boat.png";

const drawerWidth = 200;
const navItems = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Resume", id: "resume" },
];

interface Props {
  window?: () => Window;
}

export default function DrawerAppBar({ window }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigation = (id: string, label: string) => {
    setActiveItem(label);
    if (id === "resume") {
      const resumeLink = document.createElement("a");
      resumeLink.href =
        "https://drive.google.com/file/d/14Ocl5hpprdI5Fcx3S8djvm0Wy_Ra4Jrh/view?usp=sharing";
      resumeLink.target = "_blank";
      resumeLink.style.display = "none";
      document.body.appendChild(resumeLink);
      resumeLink.click();
      document.body.removeChild(resumeLink);
    } else {
      if (mobileOpen) {
        setMobileOpen(false);
      }
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", inline: "nearest" });
      }
    }
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        height: "100%",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <Typography variant="h6" sx={{ my: 2 }}>
          Menu
        </Typography>
        <ArrowForwardIcon style={{ marginLeft: "5px" }} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <ListItemButton
              sx={{ textAlign: "left", width: "100%" }}
              onClick={() => handleNavigation(item.id, item.label)}
              selected={activeItem === item.label}
            >
              {activeItem === item.label && (
                <img
                  src={icon}
                  alt="Active Icon"
                  style={{ width: "32px", margin: "10px" }}
                />
              )}
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", background: "#013B41" }}>
      <AppBar
        component="nav"
        style={{
          background: "#013B41",
          height: "80px",
          padding: "10px 40px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontFamily: "fantasy",
              fontSize: 30,
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            Nataliia Sokolova
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            {navItems.map((item) => (
              <div
                key={item.id}
                style={{ display: "flex", alignItems: "center" }}
              >
                {activeItem === item.label && (
                  <img src={boat} alt="Active Icon" style={{ width: "32px" }} />
                )}
                <Button
                  sx={{
                    color: "#fff",
                    margin: "0 10px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "#fff",
                    },
                    ...(activeItem === item.label && {
                      borderRadius: "0",
                      borderBottom: "2px solid #ffd500",
                      padding: "24px 0",
                    }),
                  }}
                  onClick={() => handleNavigation(item.id, item.label)}
                >
                  {item.label}
                </Button>
              </div>
            ))}

            <IconButton
              sx={{ color: "#fff" }}
              href="https://www.linkedin.com/in/natalia-sokolova-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              sx={{ color: "#fff" }}
              href="https://github.com/Awatanka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              sx={{ color: "#1#4B6B9" }}
              href="https://www.linkedin.com/in/natalia-sokolova-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              sx={{ color: "##14B6B9" }}
              href="https://github.com/Awatanka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}
