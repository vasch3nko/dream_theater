"use client";

import {ReactElement} from 'react';
import {useTheme} from 'next-themes';
import {Moon, Sun} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function ThemeSwitcher(): ReactElement {
    const {setTheme} = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="group/theme-switcher">
                    <Sun
                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 duration-400 group-hover/theme-switcher:rotate-45"/>
                    <Moon
                        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-400 dark:group-hover/theme-switcher:rotate-45"/>
                    <span className="sr-only">Переключение темы</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Выберите тему:</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem onClick={(): void => setTheme('light')}>Светлая</DropdownMenuItem>
                <DropdownMenuItem onClick={(): void => setTheme('dark')}>Тёмная</DropdownMenuItem>
                <DropdownMenuItem onClick={(): void => setTheme('system')}>Системная</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
