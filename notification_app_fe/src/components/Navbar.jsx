import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from "@mui/material";

import NotificationsIcon
from "@mui/icons-material/Notifications";

import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg,#1565c0,#1976d2,#42a5f5)",
        boxShadow: 4
      }}
    >

      <Toolbar>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1
          }}
        >

          <NotificationsIcon
            sx={{
              mr: 1,
              fontSize: 30
            }}
          />

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1
            }}
          >
            Campus Notifications
          </Typography>

        </Box>

        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{
            fontWeight: "bold",
            mx: 1
          }}
        >
          Home
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/priority"
          sx={{
            fontWeight: "bold"
          }}
        >
          Priority
        </Button>

      </Toolbar>

    </AppBar>
  );

}