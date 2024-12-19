import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
