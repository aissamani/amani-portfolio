import React from 'react';

export default function Footer() {
  return (
    <footer className="py-24 text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} Amani Aissaoui. All rights reserved.
    </footer>
  );
}
