import axios from "axios";

export const fetchNotifications =
  async (
    page = 1,
    limit = 10,
    type = ""
  ) => {

    let url =
      `http://localhost:5000/notifications?page=${page}&limit=${limit}`;

    if (type) {

      url +=
        `&notification_type=${type}`;

    }

    const response =
      await axios.get(url);

    return response.data;

  };