import Image from "next/image";
import Link from "next/link";
import {basePath} from "../../../next.config";

export default function Header () {
    return <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center lg:static lg:w-auto  ">
            <Link href={"/"}>
                <p className="nav-button highlight">Home</p>
            </Link>
            <Link href={"/agenda"}>
                <p className="nav-button">Agenda</p>
            </Link>
            <Link href={"/call-for-presentations"}>
                <p className="nav-button">
                    Call for Presentations</p>
            </Link>
            <Link href={"/student-support"}>
                <p className="nav-button">
                    Student support</p>
            </Link>
            <Link href={"/getting-here"}>
                <p className="nav-button">
                    Getting here</p>
            </Link>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                By{' '}
                <Image
                    src={`${basePath}/vercel.svg`}
                    alt="Vercel Logo"
                    className="dark:invert"
                    width={100}
                    height={24}
                    priority
                />
            </a>
        </div>
    </div>
}