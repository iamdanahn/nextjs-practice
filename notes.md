# Pre-Rendering

Next.js pre-renders every page aka HTML is generated in advance instead of waiting
for client side JS to render.
`Hydration` - When the browser "fully" loads to page's JS and it becomes interactive
(Stuff like <Link />)

Benefits:

- Better performance and SEO
- Apps will work w/o JS

## Types of Pre-Rendering

1. Static Generation
   Generates HTML at build time (When app is launched).
   Pre-rendered HTML is reused on each request.

2. Server-Side Rendering
   Generates HTML on each request

Each page on the app can be customized with the type of Pre-Rendering
