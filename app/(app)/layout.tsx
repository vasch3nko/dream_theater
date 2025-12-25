"use client"

import Footer from "@/components/footer";
import {ReactNode} from "react";
import {HeaderProvider} from "@/contexts/header-context";
import Header from "@/components/header";

export default function AppLayout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <HeaderProvider>
            <Header/>

            <main className="flex-1 px-5 py-10 container mx-auto">
                {children}
            </main>

            <Footer/>
        </HeaderProvider>
    );
}
