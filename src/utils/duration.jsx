export default function duration(isoString) {
  const pastDate = new Date(isoString);
  const now = new Date();

  const diffInMilliseconds = now - pastDate; // Difference in milliseconds

  // Convert to seconds, minutes, hours, days, etc.
  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} day(s) ago`;
  if (hours > 0) return `${hours} hour(s) ago`;
  if (minutes > 0) return `${minutes} minute(s) ago`;
  return `${seconds} second(s) ago`;
}

// Example usage:
//   const isoString = "2023-10-10T12:34:56.000Z";
//   console.log(timeSince(isoString));
