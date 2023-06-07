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
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const drawerWidth = 240;
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
        "https://drive.google.com/file/d/1MPQSTFfDC6MQ3Fr9Zz7cV1IY_09IISSE/view?usp=sharing";
      resumeLink.target = "_blank";
      resumeLink.style.display = "none";
      document.body.appendChild(resumeLink);
      resumeLink.click();
      document.body.removeChild(resumeLink);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Nataliia Sokolova
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleNavigation(item.id, item.label)}
              selected={activeItem === item.label}
            >
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
        style={{ background: "#013B41", height: "80px", padding: "10px 40px" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
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
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                sx={{
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                  },
                  ...(activeItem === item.label && {
                    borderBottom: "2px solid white",
                    borderRadius: "0",
                  }),
                }}
                onClick={() => handleNavigation(item.id, item.label)}
              >
                {item.label}
              </Button>
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
          <IconButton
            sx={{ color: "#013B41" }}
            href="https://www.linkedin.com/in/natalia-sokolova-/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            sx={{ color: "#013B41" }}
            href="https://github.com/Awatanka"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Drawer>
      </Box>
    </Box>
  );
}
