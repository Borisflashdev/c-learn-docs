# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Documentation website for C Learn, a machine learning framework written in pure C. Built with React 19, TypeScript, and Tailwind CSS v4.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Type-check and build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Tech Stack

- **React 19** with React Compiler enabled (babel-plugin-react-compiler)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin
- **Vite 7** as bundler
- **TypeScript** with strict config
- **ESLint** with flat config (eslint.config.js)

## Architecture

- `src/main.tsx` - Application entry point with React 19 createRoot
- `src/App.tsx` - Root component
- `src/index.css` - Tailwind imports
- `vite.config.ts` - Vite config with React Compiler and Tailwind plugins

## Visual Style

The visual style of the site should be inspired by a terminal interface, but with a modern, futuristic look. The design should use dark backgrounds with neon accent colors (like neon blue, purple, green, or pink) to create a cyberpunk / high-tech atmosphere.

The UI should feel like a developer tool from the future — minimal, fast, and very clean. Text should resemble terminal fonts (monospace), and animations should be subtle, like glowing hover effects, smooth fade-ins, or cursor-style typing effects.

The layout should be simple and developer-focused.

Overall, the site should feel like a mix of a hacker terminal, modern developer docs, and futuristic neon UI design.
