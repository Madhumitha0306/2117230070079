import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box
} from "@mui/material";

import WorkIcon
from "@mui/icons-material/Work";

import EventIcon
from "@mui/icons-material/Event";

import SchoolIcon
from "@mui/icons-material/School";

export default function NotificationCard({
  notification,
  viewed,
  onClick
}) {

  const getColor = () => {

    if (
      notification.Type ===
      "Placement"
    ) {
      return "#1565c0";
    }

    if (
      notification.Type ===
      "Result"
    ) {
      return "#2e7d32";
    }

    return "#ef6c00";

  };

  const getIcon = () => {

    if (
      notification.Type ===
      "Placement"
    ) {
      return <WorkIcon />;
    }

    if (
      notification.Type ===
      "Result"
    ) {
      return <SchoolIcon />;
    }

    return <EventIcon />;

  };

  return (
    <Card
      onClick={onClick}
      sx={{
        mb: 3,
        borderRadius: 4,
        cursor: "pointer",
        transition: "0.3s",
        opacity: viewed ? 0.7 : 1,
        border:
          viewed
            ? "1px solid #ccc"
            : `2px solid ${getColor()}`,
        boxShadow: 4,
        "&:hover": {
          transform:
            "translateY(-4px)",
          boxShadow: 8
        }
      }}
    >

      <CardContent>

        <Chip
          icon={getIcon()}
          label={notification.Type}
          sx={{
            mb: 2,
            backgroundColor:
              getColor(),
            color: "white",
            fontWeight: "bold"
          }}
        />

        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 1
          }}
        >
          {notification.Message}
        </Typography>

        <Box>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {new Date(
              notification.Timestamp
            ).toLocaleString()}
          </Typography>

        </Box>

      </CardContent>

    </Card>
  );

}