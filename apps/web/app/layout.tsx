import Providers from '@/components/providers';
import metadata from '@/lib/metadata';
import '@repo/ui/globals.css';
import { cn } from '@repo/ui/lib/utils';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { ReactNode } from 'react';

export const generateMetadata = async () => {
  return metadata;
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn(GeistMono.variable, GeistSans.variable, 'antialiased')}
      suppressHydrationWarning
    >
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
