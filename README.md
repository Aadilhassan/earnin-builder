# EarnIn Website Builder

EarnIn Website Builder is a powerful and extensible web page builder built with Next.js, React, and GrapesJS. It enables users to visually design and export professional-quality web pages using a drag-and-drop interface and a rich set of plugins and components.

## Features

- **Next.js & React**: Modern, performant, and scalable application foundation.
- **GrapesJS Integration**: Visual editor for building web pages with drag-and-drop functionality.
- **Prebuilt Blocks & Plugins**: Includes a wide variety of GrapesJS plugins for forms, tabs, navbars, tooltips, gradients, Tailwind CSS, Bootstrap 4/5, countdowns, image editing, and more.
- **Export & File Management**: Export your projects using FileSaver and JSZip.
- **Custom Styling**: Full support for Tailwind CSS and PostCSS for easy style customization.
- **Fast Development**: Hot reloading and developer-friendly scripts.

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm/bun)
- (Optional) Familiarity with Next.js and React

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Aadilhassan/earnin-builder.git
   cd earnin-builder
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Building for Production

```bash
npm run build
npm start
```

## Editing & Customization

- Main page entry: `app/page.tsx`
- Customize Tailwind config: `tailwind.config.ts`
- Extend GrapesJS with additional plugins or blocks as needed (see `package.json` for current plugins).
- ESLint and TypeScript are enabled for code quality and safety.

## Key Dependencies

- **[Next.js](https://nextjs.org/)**: React framework for production.
- **[GrapesJS](https://grapesjs.com/)**: Visual editor and plugin ecosystem.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework.
- **[Bootstrap 5](https://getbootstrap.com/)**: Ready-to-use components.
- **[FileSaver](https://github.com/eligrey/FileSaver.js)/[JSZip](https://stuk.github.io/jszip/)**: Export capabilities.
- **React Spinners**: For loading indicators.

## Available Scripts

- `dev` - Start the dev server.
- `build` - Build for production.
- `start` - Start the production server.
- `lint` - Run ESLint.

## Extending the Builder

To add new GrapesJS plugins, install them via npm and register them in your builder initialization code. See the list of current plugins in `package.json` for examples.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [GrapesJS Documentation](https://grapesjs.com/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
