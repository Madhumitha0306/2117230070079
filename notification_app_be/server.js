require("dotenv").config();

const express = require("express");

const axios = require("axios");

const cors = require("cors");

const app = express();

app.use(cors());

app.get(
  "/notifications",
  async (req, res) => {

    try {

      console.log(
        "TOKEN:",
        process.env.ACCESS_TOKEN
      );

      const response =
        await axios.get(
          "http://20.207.122.201/evaluation-service/notifications",
          {
            headers: {
              Authorization:
                `Bearer ${process.env.ACCESS_TOKEN}`
            }
          }
        );

      let notifications =
        response.data.notifications || [];

      const {
        limit = 10,
        notification_type
      } = req.query;

      if (notification_type) {

        notifications =
          notifications.filter(
            (item) =>
              item.Type ===
              notification_type
          );

      }

      notifications =
        notifications.slice(
          0,
          Number(limit)
        );

      res.json({
        notifications
      });

    } catch (error) {

      console.log(
        error.response?.data ||
        error.message
      );

      res.status(500).json({
        error:
          "Failed to fetch notifications"
      });

    }

  }
);

app.listen(5000, () => {

  console.log(
    "Server running on port 5000"
  );

});