import React, { useState, useEffect } from 'react';

// Define the type for the time state
interface Time {
  minutes: number;
  seconds: number;
}

// Define the props type
interface CountdownProps {
    onComplete: () => void;
}

const Countdown: React.FC<CountdownProps> = ({ onComplete }) => {
  // Initialize state for minutes and seconds
  const [time, setTime] = useState<Time>({ minutes: 5, seconds: 0 });

  useEffect(() => {
    // Create a timer to decrement the time every second
    const timer = setInterval(() => {
      const { minutes, seconds } = time;
      if (seconds > 0) {
        setTime({ minutes, seconds: seconds - 1 });
      } else if (minutes > 0) {
        setTime({ minutes: minutes - 1, seconds: 59 });
      } else {
        clearInterval(timer);
        onComplete(); // Call the onComplete function when timer reaches 0
      }
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, [time, onComplete]);

  // Format time to always show two digits for minutes and seconds
  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div>
      <h1 className='text-sm'>
        OTP Expiring in {formatTime(time.minutes)}:{formatTime(time.seconds)}
      </h1>
    </div>
  );
};

export default Countdown;
