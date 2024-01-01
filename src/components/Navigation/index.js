import Link from "next/link";
import { Fragment, useState } from "react";
import "./style.scss";
import useGeneralStore from "@/store/generalStore";

const Navigation = () => {
    const [subMenu, setSubMenu] = useState(null);
    const setNavigationToggle = useGeneralStore((state) => state.setNavigationToggle);
    const navigationToggle = useGeneralStore((state) => state.navigationToggle);
    return (
        <Fragment>
            <div
                onClick={() => setNavigationToggle(false)}
                className={`fn_leftnav_closer ${navigationToggle ? "active" : ""}`}
            />
            <div className={`fn_leftnav ${navigationToggle ? "active" : ""}`}>
                <a
                    href="#"
                    className="fn__closer"
                    onClick={() => setNavigationToggle(false)}
                >
                    <span />
                </a>
                <div className="navbox">
                    <div className="list_holder">
                        <ul className="fn_items">
                            <li>
                                <div className="item">
                                    <a
                                        href="https://opensea.io/"
                                        target="_blank"
                                        rel="noreferrer"
                                    />
                                    <span className="icon">
                    <img src="/img/market/opensea.png" alt="" />
                  </span>
                                    <span className="text">Opensea</span>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <a
                                        href="https://discord.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    />
                                    <span className="icon">
                    <img src="/img/market/discord.png" alt="" />
                  </span>
                                    <span className="text">Discord</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="nav_holder">
                        {/* For JS */}
                        <span className="icon">
              <img src="/svg/down.svg" alt="" className="fn__svg" />
            </span>
                        {/* For JS */}
                        <ul
                            style={{
                                transform: `translateX(${subMenu !== null ? "-100" : "0"}%)`,
                            }}
                        >
                            <li>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSubMenu("home");
                                    }}
                                    className={`${subMenu == "home" ? "active" : ""}`}
                                >
                  <span className="interactive_link">
                    Home
                    <img src="/svg/down.svg" alt="" className="fn__svg" />
                  </span>
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                        <a
                                            href="#"
                                            className="prev"
                                            onClick={() => setSubMenu(null)}
                                        >
                      <span className="interactive_link">
                        <img src="/svg/down.svg" alt="" className="fn__svg" />
                        Home
                      </span>
                                        </a>
                                    </li>

                                    <li>
                                        <Link href="/" onClick={() => setNavigationToggle(false)}>
                                            <span className="interactive_link">#1 3D Carousel</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-2" onClick={() => setNavigationToggle(false)}>
                        <span className="interactive_link">
                          #2 Bended Carousel
                        </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-3" onClick={() => setNavigationToggle(false)}>
                        <span className="interactive_link">
                          #3 Video Background
                        </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-4" onClick={() => setNavigationToggle(false)}>
                                            <span className="interactive_link">#4 Water Effect</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-5" onClick={() => setNavigationToggle(false)}>
                        <span className="interactive_link">
                          #5 Simple Carousel
                        </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-6" onClick={() => setNavigationToggle(false)}>
                        <span className="interactive_link">
                          #6 Fullscreen Slider
                        </span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/nft/1" onClick={() => setNavigationToggle(false)}>
                                    <span className="interactive_link">Mint Page</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/collection" onClick={() => setNavigationToggle(false)}>
                                    <span className="interactive_link">Collection</span>
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSubMenu("pages");
                                    }}
                                    className={`${subMenu == "pages" ? "active" : ""}`}
                                >
                  <span className="interactive_link">
                    Pages
                    <img src="/svg/down.svg" alt="" className="fn__svg" />
                  </span>
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                        <a
                                            href="#"
                                            className="prev"
                                            onClick={() => setSubMenu(null)}
                                        >
                      <span className="interactive_link">
                        <img src="/svg/down.svg" alt="" className="fn__svg" />
                        Pages
                      </span>
                                        </a>
                                    </li>

                                    <li>
                                        <Link href="/coming-soon" onClick={() => setNavigationToggle(false)}>
                                            <span className="interactive_link">Coming Soon</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/404" onClick={() => setNavigationToggle(false)}>
                                            <span className="interactive_link">404 Page</span>
                                        </Link>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="info_holder">
                        <div className="copyright">
                            <p>
                                Copyright 20224 - Designed &amp; Developed by{" "}
                                <a
                                    href="https://github.com/zipexpo"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Zipexpo
                                </a>
                            </p>
                        </div>
                        <div className="social_icons">
                            <ul>
                                <li>
                                    <a href="#">
                                        <img
                                            src="/svg/social/twitter-1.svg"
                                            alt=""
                                            className="fn__svg"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src="/svg/social/facebook-1.svg"
                                            alt=""
                                            className="fn__svg"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src="/svg/social/instagram-1.svg"
                                            alt=""
                                            className="fn__svg"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src="/svg/social/pinterest-1.svg"
                                            alt=""
                                            className="fn__svg"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src="/svg/social/behance-1.svg"
                                            alt=""
                                            className="fn__svg"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Navigation;
