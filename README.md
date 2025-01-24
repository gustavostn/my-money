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
