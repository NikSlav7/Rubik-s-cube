'use client'
import React from "react";


interface Props{
    className?: string;
}
export const Calender: React.FC<Props> = ({ className }) => {

    React.useEffect(() => {
      // Load the Calendly script after the component mounts
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
  
      return () => {
        // Clean up the script if the component is unmounted
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <div 
        data-url="https://calendly.com/nikitaslavinski/30min"
        className={`min-w-[320px] h-[700px] calendly-inline-widget ${className}`}
      />
    );
  }