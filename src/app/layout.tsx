import { Container, Theme, ThemePanel } from '@radix-ui/themes';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SideBar from './SideBar';
import UserAvatar from './UserAvatar';
import AuthProvider from './auth/Provider';
import './globals.css';
import MainContainer from './MainContainer';
import '@radix-ui/themes/styles.css';
import colors from './styles/colors';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bacian y Rocha Ltda.',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <AuthProvider>
          <Theme appearance="light" radius="large" accentColor="cyan">
            <div className="flex">
              <SideBar />
              <main>
                <UserAvatar />
                <MainContainer>{children}</MainContainer>
              </main>
            </div>
          </Theme>
        </AuthProvider>
      </body>
    </html>
  );
}
