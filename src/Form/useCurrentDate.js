import React from "react";

const useCurrentDate = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);
  return time;
};

export default useCurrentDate;
