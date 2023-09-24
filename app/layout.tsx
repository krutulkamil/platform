import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import { ModalProvider } from '@/components/providers/modal-provider';
import { ToasterProvider } from '@/components/providers/toaster-provider';
import { CrispProvider } from '@/components/providers/crisp-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Genius',
  description: 'AI Powered Platform',
};

interface IProps {
  children: React.ReactElement;
}

export default function RootLayout({ children }: IProps) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
