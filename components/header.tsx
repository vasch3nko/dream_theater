"use client"

import {ReactElement} from 'react';
import Logo from '@/components/logo';
import ThemeSwitcher from '@/components/theme-switcher';
import Link from 'next/link';
import {Menu, X} from 'lucide-react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import {Button} from '@/components/ui/button';
import {useHeaderLinks} from '@/contexts/header-context';

export default function Header(): ReactElement {
    const {links} = useHeaderLinks();

    return (
        <header
            className="w-full bg-background/85 border-b sticky top-0 backdrop-blur-sm dark:bg-stone-950 z-50">
            <div className="container mx-auto px-5 py-2.5 flex justify-between items-center">
                <div className="xl:hidden">
                    <Drawer defaultOpen={false} direction="left">
                        <DrawerTrigger className="flex justify-center items-center" asChild>
                            <Menu/>
                        </DrawerTrigger>

                        <DrawerContent className="overflow-y-auto">
                            <DrawerHeader>
                                <div className="w-full flex justify-between items-center">
                                    <DrawerTitle>Dream Theater</DrawerTitle>
                                    <DrawerClose><X/></DrawerClose>
                                </div>
                            </DrawerHeader>

                            <ul className="grid gap-3 p-4 grid-cols-1">
                                {links.map(link => {
                                    return (
                                        <li key={link.href}>
                                            <Link
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                href={link.href}
                                            >
                                                <div className="text-sm font-medium leading-none">{link.label}</div>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>

                            <DrawerFooter>
                                <DrawerClose asChild>
                                    <Button className="w-full">
                                        Закрыть
                                    </Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>

                <Logo className="xl:hidden"/>

                <div className="hidden xl:flex gap-10 items-center">
                    <Logo/>

                    <ul className="flex items-center gap-5">
                        {links.map(link => {
                            return (
                                <li key={link.href}>
                                    <Link
                                        className="text-sm font-medium leading-none no-underline hover:text-amber-600 transition duration-150 ease-in"
                                        href={link.href}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <ThemeSwitcher/>
            </div>
        </header>
    );
}
