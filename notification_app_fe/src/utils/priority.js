const weights = {
  Placement: 3,
  Result: 2,
  Event: 1
};

export const sortNotificationsByPriority = (
  notifications
) => {

  return [...notifications].sort(
    (a, b) => {

      const weightDifference =
        weights[b.Type] -
        weights[a.Type];

      if (weightDifference !== 0) {

        return weightDifference;

      }

      return (
        new Date(b.Timestamp) -
        new Date(a.Timestamp)
      );

    }
  );

};