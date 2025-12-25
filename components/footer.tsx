import Link from 'next/link';
import Logo from "@/components/logo";
import {useHeaderLinks} from "@/contexts/header-context";

const contacts = [
    "Телефон: +7 (912) 345-67-89",
    "Email: support@dream-theater-nv.ru",
    "Адрес: Нижневартовск, ул. Ленина, 3",
];

export default function Footer() {
    const {links} = useHeaderLinks();

    return (
        <footer className="border-t">
            <div className="container mx-auto px-5 py-5 flex flex-col items-center gap-5">
                <section className="w-full grid md:grid-cols-4 grid-cols-1 gap-x-10 gap-y-5">
                    <div className="flex flex-col">
                        <Logo className="mb-2.5"/>

                        <p className="font-light">Лучший драматический театр в Нижневартовске</p>
                    </div>

                    <div className="flex flex-col">
                        <h4 className="font-bold mb-2.5">Навигация</h4>

                        <ul className="flex items-center gap-5">
                            {links.map(link => {
                                return (
                                    <li key={link.href}>
                                        <Link
                                            className="underline hover:text-amber-600 transition duration-150 ease-in"
                                            href={link.href}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h4 className="font-bold mb-2.5">Контакты</h4>

                        <ul>
                            {contacts.map(contact => {
                                return <li key={contact} className="flex gap-2.5">{contact}</li>;
                            })}
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h4 className="font-bold mb-2.5">Режим работы</h4>

                        <ul>
                            <li>Пн-Пт: 9:00 - 20:00</li>
                            <li>Сб-Вс: 10:00 - 20:00</li>
                        </ul>
                    </div>
                </section>

                <section className="w-full border-t pt-5">
                    <div className="text-center">
                        &copy; Dream Theater {new Date().getUTCFullYear()}. Все&nbsp;права&nbsp;защищены.
                    </div>
                </section>
            </div>
        </footer>
    );
}
