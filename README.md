# ChatPay-Go-Xion

A modern monorepo project built with TypeScript, Next.js, and React, focused on blockchain and account abstraction.


## Project Structure

This monorepo is organized into two main directories:

### Apps

- `demo-app`: A Next.js application featuring Tailwind CSS for styling

### Packages

- `abstraxion`: A React package for account abstraction on XION
- `constants`: Utility package for shared constants
- `signers`: Utility package for account abstraction classes built on cosmjs
- `ui`: A React component library with Tailwind CSS
- `eslint-config-custom`: Custom ESLint configurations
- `tsconfig`: TypeScript configuration files

## Features

- TypeScript for type safety
- Next.js for modern React applications
- Tailwind CSS for styling
- Account abstraction support
- Modular and reusable components
- ESLint and Prettier for code quality

## Getting Started

### Prerequisites

- Node.js (LTS version)
- pnpm (package manager)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

### Development

Run the development server:
```bash
pnpm dev
```

### Building Packages

The UI package can be built using:
```bash
pnpm build
```

This will output the transpiled source and compiled styles to the `dist/` directory.

### Alternative: Using Source Directly

If you prefer to use the packages directly from source without building, update your `tailwind.config.js` to include package locations:

```javascript
content: [
  // app content
  `src/**/*.{js,ts,jsx,tsx}`,
  // include packages if not transpiling
  "../../packages/**/*.{js,ts,jsx,tsx}",
],
```

## Utilities

The project includes several development utilities:

- [Tailwind CSS](https://tailwindcss.com/) for styling
- [TypeScript](https://www.typescriptlang.org/) for type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
