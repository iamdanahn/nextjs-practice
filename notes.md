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

### Static Generation
Static Gen is recommended whenever possible as it is faster.
Once built on build-time, it doesn't have to be prepared again unlike Server-side

What about when you need to fetch external data?
(ie: file systems, fetch external APIs, or query database at buildtime)
Then we can use **Static Generation with data**

### Static Generation with Data using `getStaticProps`
When exporting a page component, an `async` function called `getStaticProps` can be exported too. If so:
   - getStaticProps runs at production's build time 
   - Inisde the function, external data can be fetched and sent as props to the page

* `getStaticProps` runs/resolves first, then the return of props is passed into the component
* It only runs server-side, never client-side
* `gSP` can only be exported from a **page**. Cannot export it from non-page files.

Notes: looks like `getStaticProps` is in the same file as the component needing the props/external info 

```js
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```

NOTE: `getSortedPostsData` is in a separate file from `getStaticProps`, but
`gSP` imports `gSPD` from outside
External APIs can be fetched like below:
```js
export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..')
  return res.json()
}
```


Database queries like below:
```js
import someDatabaseSDK from 'someDatabaseSDK'

const databaseClient = someDatabaseSDK.createClient(...)

export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from a database
  return databaseClient.query('SELECT posts...')
}
```


## Server-side Rendering with Data
