import Link from "next/link";
import {useEffect} from "react";
import "./header.scss"
import useGeneralStore from "@/store/generalStore";
import {stickyNav} from "@/utilits";

export default function Header () {
    const setNavigationToggle = useGeneralStore((state) => state.setNavigationToggle);
    useEffect(() => {
        stickyNav();
    }, []);
    return <header id="header">
        <div className="header">
            <div className="header_in">
                <div className="trigger_logo">
                    <div className="trigger" onClick={() => setNavigationToggle(true)}>
                        <span />
                    </div>
                    <div className="logo">
                        <Link href="/">
                            <img src="/img/logo.png" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="nav" style={{ opacity: 1 }}>
                    <ul>
                        <li>
                            <Link href="/#home" className="interactive_link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/#about" className="interactive_link">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/#collection" className="interactive_link">
                                Collection
                            </Link>
                        </li>
                        <li>
                            <Link href="/#news" className="interactive_link">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/#contact" className="interactive_link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="regis">
                    <Link href="/registration" className="interactive_link">
                        Registration
                    </Link>
                </div>
            </div>
        </div>
    </header>
}