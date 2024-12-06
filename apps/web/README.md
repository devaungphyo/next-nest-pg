## Web Documentation

### Table of Contents

- Preconfigured UI components
- Environment variables
- Type safe data fetching wit zod
- Metadata for SEO

### Preconfigured for ui components with shadcnUI and tailwindcss.

```ts
import { Button } from '@repo/ui/button';
import { Input } from '@repo/ui/input';
```

### Strict Environment variables with t3env

```ts
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    API_URL: z.string(),
  },
  client: {},
  runtimeEnv: {
    API_URL: process.env.API_URL,
  },
});
```

### Type Safe data fetching with zod and fetch api extends the nextjs version

```ts
import { env } from '@/lib/env';
import { safeFetchBuilder } from '@repo/utils';

const safeFetch = safeFetchBuilder(env.API_URL);

export default safeFetch;
```

### How to use safeFetch ?

```ts
'use server';
import z from 'zod';

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

const usersSchema = z.array(usersSchema);

const getUsers = async () => {
  const {} = await safeFetch(usersSchema, '/users', {
    cache: 'no-store',
    // You can implement caching here if you want to cache
    // Others RequestInit information is available like headers
  });
};
```

### Metadata for SEO best practices

```ts
import { Metadata } from 'next';

const metadata: Metadata = {
  metadataBase: new URL('https:///www.aungpyaephyo.com'),
  title: {
    default: 'Turborepo',
    template: '%s | Turborepo',
  },
  description: 'Description of Turborepo.',
  keywords: ['turborepo'],
  openGraph: {
    title: 'Turborepo',
    description: 'Description of Turborepo.',
    url: 'https:///www.aungpyaephyo.com',
    siteName: 'Turborepo',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Turborepo',
    card: 'summary_large_image',
  },
  verification: {
    google: 'Enter your Google Search Console verification code here',
  },
};

export default metadata;
```
