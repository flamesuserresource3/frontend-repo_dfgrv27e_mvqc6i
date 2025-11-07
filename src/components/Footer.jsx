import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between text-white/80">
        <div className="flex gap-6 mb-4 sm:mb-0">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#privacy" className="hover:text-white">Privacy</a>
        </div>
        <div>©2025 Campus Connect</div>
      </div>
    </footer>
  );
}
