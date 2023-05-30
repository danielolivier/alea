This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project uses:

[shadcn/ui](https://ui.shadcn.com/)
[jest](https://jestjs.io/)
[storybook](https://storybook.js.org/)
[lucide-react](https://lucide.dev/)
[zod](https://zod.dev/)
[tanstack/query](https://tanstack.com/query/latest)
[tanstack/table](https://tanstack.com/table/v8)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter and Open Sans, a custom Google Font.

## About

This project has a Login page, a Dashboard page and fallback 404 default page. Please log in using this username/password:

```
    email: "eve.holt@reqres.in"
    password: "pistol"
```

Once successfully signed in, you'll be redirected to dashboard page where you'll be able to see a table displaying a list of users. On header you'll see a smiley face icon where you can click and a dropdown of options will prompt - currently there's only one option - and you can log out.

Check footer as I added my Linkedin link there and a toggle to switch themes in application.

Things that can be improved:

- API call to get list of users is triggered all at once - there's a few reasons as why I did that. I had few time to do task and API returns only 12 users in total. Best scenario, would have been to use pagination to call API to update users and not load all data at rendering time.
- Unit testing and storybooks - I did only a few of them and they are pretty basic. I mainly focused my time on achieving required features.
- Styling can be slightly approved on responsiveness.

## Deployed application

You can find the application deployed here:

[Alea Tech Test Application](https://alea.vercel.app) visit page.

Daniel Olivier Barrachina - olivier.daniel.b@gmail.com
