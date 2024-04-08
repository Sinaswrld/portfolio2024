import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-cs">
        &copy; 2030 Sina. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React.js and Next.js (App Router & Server Actions), TypeScript,
        TailwindCss, Framer Motion, React Email & Resend.
      </p>
    </footer>
  );
}
