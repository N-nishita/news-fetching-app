export function formatTime(timeString) {
  const now = new Date();
  const givenDate = new Date(timeString);
  const difference =
    (now.getTime() - givenDate.getTime()) / 1000 / 60 / 60 / 24;

  if (difference > 1) {
    const formattedDate = givenDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  } else {
    const formattedTime = givenDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return formattedTime;
  }
}
