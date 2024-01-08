import Head from "next/head";
import { Fragment, useEffect } from "react";
import { dataBgImg, holdSection, imgToSVG } from "@/utilits";
import Footer from "../Footer";
import Header from "../Header";
import MobileNavigation from "../MobileNavigation";
import Navigation from "../Navigation";
import PreLoader from "./PreLoader";
import ScrollTop from "./ScrollTop";
import Social from "./Social";
import "./style.scss";
const Layout = ({ children, pageTitle }) => {
    useEffect(() => {
        holdSection();
        imgToSVG();
        dataBgImg();
    }, []);

    return (
        <Fragment>
            <Head>
                <title>MetaPortal | {pageTitle}</title>
            </Head>
            <PreLoader />
            {/* !Preloader */}
            {/* Left Navigation */}
            <Navigation />
            {/* !Left Navigation */}
            {/* Main */}
            <div className="fn_main">
                {/* Mobile Navigation */}
                <MobileNavigation />
                {/* !Mobile Navigation */}
                {/* Header */}
                <Header />
                {/* !Header */}
                {/* Content */}
                <div className="holder_content">
                    {children}
                    {/* Footer */}
                    <Footer />
                    {/* !Footer */}
                </div>
                {/* !Content */}
                {/* Social */}
                <Social />
                {/* !Social */}
                {/* Totop */}
                <ScrollTop />
                {/* /Totop */}
            </div>
        </Fragment>
    );
};
export default Layout;
