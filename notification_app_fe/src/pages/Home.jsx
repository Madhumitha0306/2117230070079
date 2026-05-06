import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Pagination,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Grid
} from "@mui/material";

import NotificationCard from "../components/NotificationCard.jsx";

import { fetchNotifications } from "../services/api";

export default function Home() {

  const [notifications, setNotifications] =
    useState([]);

  const [page, setPage] =
    useState(1);

  const [type, setType] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [viewed, setViewed] =
    useState({});

  useEffect(() => {

    loadNotifications();

  }, [page, type]);

  const loadNotifications = async () => {

    setLoading(true);

    try {

      const data =
        await fetchNotifications(
          page,
          10,
          type
        );

      setNotifications(
        data.notifications || []
      );

    } catch (error) {

      setNotifications([]);

    }

    setLoading(false);

  };

  const handleViewed = (id) => {

    const updated = {
      ...viewed,
      [id]: true
    };

    setViewed(updated);

    localStorage.setItem(
      "viewedNotifications",
      JSON.stringify(updated)
    );

  };

  useEffect(() => {

    const stored =
      localStorage.getItem(
        "viewedNotifications"
      );

    if (stored) {

      setViewed(
        JSON.parse(stored)
      );

    }

  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        mt: 5,
        mb: 5,
        px: 5
      }}
    >

      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "#1565c0",
          mb: 1
        }}
      >
        Campus Notification Feed
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mb: 4,
          color: "gray"
        }}
      >
        View all latest campus updates,
        placements, results and events
      </Typography>

      <Box
        sx={{
          background: "#fff",
          p: 3,
          borderRadius: 3,
          boxShadow: 3,
          mb: 5,
          width: 400
        }}
      >

        <FormControl fullWidth>

          <InputLabel>
            Notification Type
          </InputLabel>

          <Select
            value={type}
            label="Notification Type"
            onChange={(e) =>
              setType(
                e.target.value
              )
            }
          >

            <MenuItem value="">
              All
            </MenuItem>

            <MenuItem value="Placement">
              Placement
            </MenuItem>

            <MenuItem value="Result">
              Result
            </MenuItem>

            <MenuItem value="Event">
              Event
            </MenuItem>

          </Select>

        </FormControl>

      </Box>

      {loading ? (

        <Box
          sx={{
            display: "flex",
            justifyContent:
              "center",
            mt: 5
          }}
        >
          <CircularProgress />
        </Box>

      ) : (

        <Grid container spacing={4}>

          {notifications.map(
            (notification) => (

              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={notification.ID}
              >

                <NotificationCard
                  notification={
                    notification
                  }
                  viewed={
                    viewed[
                      notification.ID
                    ]
                  }
                  onClick={() =>
                    handleViewed(
                      notification.ID
                    )
                  }
                />

              </Grid>

            )
          )}

        </Grid>

      )}

      <Box
        sx={{
          display: "flex",
          justifyContent:
            "center",
          mt: 5
        }}
      >

        <Pagination
          count={10}
          page={page}
          color="primary"
          size="large"
          onChange={(e, value) =>
            setPage(value)
          }
        />

      </Box>

    </Container>
  );

}