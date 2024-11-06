'use client';
import React from 'react';

interface AnimatedTextProps {
  text: string;
  delay: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay }) => {
  const [visibleText, setVisibleText] = React.useState(text[0]);
  const textRef = React.useRef<string>('');
  const forwardRef = React.useRef<boolean>(true);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const animateText = () => {
      if (forwardRef.current) {
        if (textRef.current.length < text.length) {
          textRef.current += text[textRef.current.length];
          setVisibleText(textRef.current);
        } else {
          forwardRef.current = false;
        }
      } else {
        if (textRef.current.length > 1) {
          textRef.current = textRef.current.slice(0, -1);
          setVisibleText(textRef.current);
        } else {
          forwardRef.current = true;
        }
      }
    };

    intervalRef.current = setInterval(animateText, delay);

    return () => clearInterval(intervalRef.current!);
  }, []);

  return (
    <p
      style={{
        animation: 'typewrite 2s steps(30, end)',
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
      }}
    >
      {visibleText}
    </p>
  );
};

export default AnimatedText;
