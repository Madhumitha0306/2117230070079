import { useEffect, useState } from "react";

import {
  Container,
  Typography,
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

import {
  sortNotificationsByPriority
} from "../utils/priority";

export default function Priority() {

  const [notifications, setNotifications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [limit, setLimit] =
    useState(10);

  useEffect(() => {

    loadPriorityNotifications();

  }, [limit]);

  const loadPriorityNotifications =
    async () => {

      setLoading(true);

      try {

        const data =
          await fetchNotifications(
            1,
            limit
          );

        const sorted =
          sortNotificationsByPriority(
            data.notifications || []
          );

        setNotifications(sorted);

      } catch (error) {

        setNotifications([]);

      }

      setLoading(false);

    };

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
        Priority Inbox
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mb: 4,
          color: "gray"
        }}
      >
        Top important notifications
        based on priority and recency
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
            Top Notifications
          </InputLabel>

          <Select
            value={limit}
            label="Top Notifications"
            onChange={(e) =>
              setLimit(
                e.target.value
              )
            }
          >

            <MenuItem value={5}>
              Top 5
            </MenuItem>

            <MenuItem value={10}>
              Top 10
            </MenuItem>

            <MenuItem value={15}>
              Top 15
            </MenuItem>

            <MenuItem value={20}>
              Top 20
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
                />

              </Grid>

            )
          )}

        </Grid>

      )}

    </Container>
  );

}