"use client";
import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: string;
  className?: string;
}

const Countdown = ({ targetDate, className = "" }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsComplete(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsComplete(true);
      }
    };

    // Mettre à jour immédiatement
    updateCountdown();

    // Mettre à jour toutes les secondes
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, [targetDate]);

  if (isComplete) {
    return (
      <div className={`countdown ${className}`}>
        <div className="countdown-item completed">
          <span className="countdown-number">🎉</span>
          <span className="countdown-label">C'est le grand jour !</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-row justify-center gap-6 mt-5 ${className}`}>
      <div className="flex flex-col items-center gap-1 ">
        <span className="font-marcellus text-4xl">
          {timeLeft.days.toString().padStart(2, "0")}
        </span>
        <span className="font-marcellus uppercase">Jours</span>
      </div>
      <div className="flex flex-col items-center gap-1 ">
      <span className="font-marcellus text-4xl ">
          {timeLeft.hours.toString().padStart(2, "0")}
        </span>
        <span className="font-marcellus uppercase">Heures</span>
      </div>
      <div className="flex flex-col items-center gap-1 ">
        <span className="font-marcellus text-4xl ">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </span>
        <span className="font-marcellus  uppercase">Minutes</span>
      </div>
      <div className="flex flex-col items-center gap-1 ">
      <span className="font-marcellus text-4xl ">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </span>
        <span className="font-marcellus uppercase">Secondes</span>
      </div>
    </div>
  );
};

export default Countdown;
