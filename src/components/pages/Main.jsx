import React from "react";
import Header from "../layout/Header.jsx";
import Contents from "../layout/Contents.jsx";
import Footer from "../layout/Footer.jsx";
import Maincont from "../include/Maincont.jsx";

const Main = () => {
    return (
        <>
            <Header />
            <Contents>
                <Maincont />
            </Contents>
            <Footer />
        </>
    );
};

export default Main;
