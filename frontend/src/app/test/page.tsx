"use client";

import { useEffect } from 'react';
import { themeChange } from 'theme-change';

export default function TestPage() {
  useEffect(() => {
    themeChange(false); // Initialize theme-change
  }, []);

  return (
    <div data-theme="dim" className="bg-base-100 p-8">
      <h1 className="text-2xl font-bold text-base-content">Forced Dim Theme</h1>
      <button className="btn btn-primary">Test Button</button>
      <select data-choose-theme className="select select-bordered w-full max-w-xs">
        <option value="">Default</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="synthwave">Synthwave</option>
        <option value="dim">Dim</option>
        <option value="cupcake">Cupcake</option>
        <option value="cyberpunk">Cyberpunk</option>
      </select>
    </div>
  );
}