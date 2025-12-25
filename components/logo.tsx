import {Url} from "node:url";
import {ComponentProps, ReactElement} from 'react';
import Link from "next/link";
import {cn} from "@/lib/utils";

type LogoProps = Omit<Omit<ComponentProps<typeof Link>, "href">, "className"> & {
    isAdmin?: boolean,
    className?: string,
    href?: Url,
};

export default function Logo({className, href, ...props}: LogoProps): ReactElement {
    return (
        <Link
            className={cn("text-lg font-bold hover:text-amber-600 transition duration-150 ease-in", className)}
            href={href ?? "/"}
            {...props}
        >
            Dream Theater
        </Link>
    );
}
