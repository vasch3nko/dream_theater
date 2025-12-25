import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import "./globals.css";
import YandexMetrika from "@/components/yandex-metrika";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Главная - Dream Theater - Драм. театр Нижневартовск",
    description: "Драм. театр в Нижневартовске. Классика, драма, психологический театр, современная классика, эксперименты и авторские постановки.",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ru" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-dvh antialiased font-sans`}>
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </NextThemesProvider>
        <YandexMetrika/>
        </body>
        </html>
    );
}
