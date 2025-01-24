## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Chapter 1

<b>Folders:</b>

- <b>/app</b>: Contains all the routes, components, and logic for your application.
- <b>/app/lib</b>: Contains functions used in your application, such as reusable utility functions and data fetching functions.
- <b>/app/ui</b>: Contains all the UI components for your application, such as cards, tables, and forms.
- <b>/public</b>: Contains all the static assets for your application, such as images.

## Chapter 3

<b>Fonts optimization:</b>

- Create a file inside app/ui called fonts.ts
- Import a font from the 'next/font/google'
- Configure subset, weight and others settings
- Import de font variable where you want to use and add the className. e.g: montserrat.className

<b>Image Optimization:</b>

- Next.js can serve static assets, like images, under the top-level /public folder
- Files inside /public can be referenced in your application.
- Next.js Image component (next/image)
  - Preventing layout shift automatically when images are loading.
  - Resizing images to avoid shipping large images to devices with a smaller viewport.
  - Lazy loading images by default.
  - Serving images in modern formats.

<b>Recommended reading:</b> <br />
[Image Optimization Docs](https://nextjs.org/docs/app/building-your-application/optimizing/images) <br />
[Font Optimization Docs](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

## Chapter 4

- Next.js use file-system routing, where folders are used to create nested routes - Each folder represents a route segment that maps to a URL segment

- <b>page.tsx</b> is a special Next.js file that exports a React component, and it's <b>required for the route to be accessible</b>

- [Example of nested routes](https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages#nested-routing)

- In Next.js, you can use a special <b>layout.tsx file to create UI that is shared between multiple pages</b>.
  - One benefit of using layouts in Next.js is that on navigation, only the page components update while the layout won't re-render

## Chapter 5

- When use <b>a</b> HTML element to navigate between pages, all page is refreshed
- In Next.js, you can use the <b>Link</b> (next/link) Component to link between page
  - <b>Link</b> allows you to do client-side navigation with JavaScript
- To get the user's current path from the URL, Next.js provides a hook called usePathname()
  - usePathname() is a React hook
  - Add React's "use client" directive to the top of the file
  - Then import usePathname() from next/navigation

## Chapter 7

- Using Server Components to fetch data
  - Server Components support JavaScript Promises
  - Solution for asynchronous tasks.
  - You can use async/await syntax without needing hooks or fetching libraries
  - Server Components run on the server, so you can keep expensive data fetches and logic on the server
