export const calculateTimeDifference = (a, b) => {
  const time1 = new Date(a).getTime();
  const time2 = new Date(b).getTime();
  const timeDifference = Math.abs(time1 - time2);
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  return { seconds, minutes, hours, days };
};
