import Link from "next/link";
import { Fragment, useState } from "react";
import "./style.scss";
import useGeneralStore from "@/store/generalStore"

const MobileNavigation = () => {
    const setNavigationToggle = useGeneralStore((state) => state.setNavigationToggle);
    const navigationToggle = useGeneralStore((state) => state.navigationToggle);
    return (
        <Fragment>
            <div className="fn_mobnav">
                {/*<div className="mob_top">*/}
                {/*    <div className="social_trigger">*/}
                {/*        <div className="trigger" onClick={() => setNavigationToggle(true)}>*/}
                {/*            <span />*/}
                {/*        </div>*/}
                {/*        <div className="social">*/}
                {/*            <ul>*/}
                {/*                <li>*/}
                {/*                    <a*/}
                {/*                        href="https://www.facebook.com/"*/}
                {/*                        target="_blank"*/}
                {/*                        rel="noreferrer"*/}
                {/*                    >*/}
                {/*                        Fb.*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <a*/}
                {/*                        href="https://www.twitter.com/"*/}
                {/*                        target="_blank"*/}
                {/*                        rel="noreferrer"*/}
                {/*                    >*/}
                {/*                        Tw.*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <a*/}
                {/*                        href="https://www.instagram.com/"*/}
                {/*                        target="_blank"*/}
                {/*                        rel="noreferrer"*/}
                {/*                    >*/}
                {/*                        In.*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <a*/}
                {/*                        href="https://www.linkedin.com/"*/}
                {/*                        target="_blank"*/}
                {/*                        rel="noreferrer"*/}
                {/*                    >*/}
                {/*                        Ln.*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="regis">*/}
                {/*        <a*/}
                {/*            href="#"*/}
                {/*            className="fn_button regis_opener"*/}
                {/*        >*/}
                {/*            <span>Join us</span>*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="mob_mid">
                    <div className="logo">
                        <Link href="/">
                            <img src="/img/logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="regis">
                        <a
                            href="#"
                            className="fn_button regis_opener"
                        >
                            <span>Join us</span>
                        </a>
                    </div>
                    <div
                        className={`trigger ${navigationToggle ? "active" : ""}`}
                        onClick={() => setNavigationToggle(!navigationToggle)}
                    >
                        <span />
                    </div>
                </div>
                <div className="mob_bot" style={{ display: navigationToggle ? "block" : "none" }}>
                    <ul>
                        <li>
                            <a className="interactive_link" href="#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="interactive_link" href="#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="interactive_link" href="#collection">
                                Collection
                            </a>
                        </li>
                        <li>
                            <a className="interactive_link" href="#news">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a className="interactive_link" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default MobileNavigation;

