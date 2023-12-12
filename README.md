# Next.js 14 (app router) + Shadcn UI

This is a personal project boilerplate that embraces Next.js app router, streaming render method, Shadcn UI and atomic design methodology.
And of course, it is TypeScript!

## Getting Started

- Clone the project to your local.
- Install dependencies.

```bash
pnpm run install
```

- Spin up the JSON Server:

```bash
json-server --watch ./_data/db.json --port 4000
```

- Run the development server:

```bash
pnpm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Shadcn UI: A reusable UI component collection

Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.

Shadcn UI takes a different approach from other UI and component libraries like Material UI and Chakra UI. Where those libraries offer access to components through their bundled packages, Shadcn UI does something different and instead allows you to download the source code for individual UI components into your codebase. [Introducing Shadcn UI: A reusable UI component collection](https://blog.logrocket.com/shadcn-ui-reusable-ui-component-collection/)

## Helpful resources

- [Shadcn UI](https://ui.shadcn.com/)
- [Component Streaming Method](https://nextjs.org/learn/dashboard-app/streaming)
- [React Suspense](https://react.dev/reference/react/Suspense)
- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
