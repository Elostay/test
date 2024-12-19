import type { Metadata } from 'next';
import { Suspense } from 'react';
import { CircleLoader } from 'react-spinners';
import './globals.css';
import './components/Background/lines.css';
import LinesBackground from './components/Background/Lines';

export const metadata: Metadata = {
  title: 'Test task',
  description: 'Created for DevelopsToday ❤️',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Suspense
          fallback={
            <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full ">
              <CircleLoader color="#ffffff" />
            </div>
          }
        >
          <div className="container mx-auto px-4 w-full"> {children}</div>
          <LinesBackground />
        </Suspense>
      </body>
    </html>
  );
}
