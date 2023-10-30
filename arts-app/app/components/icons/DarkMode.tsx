// app/components/DarkMode.tsx
// icon:wi-moon-alt-third-quarter | Weather Icons https://erikflowers.github.io/weather-icons/ | Eric Flowers
import * as React from "react";

function IconDarkMode(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 384 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M223.5 32C100 32 0 132.3 0 256s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
    </svg>
  );
}

export default IconDarkMode;
