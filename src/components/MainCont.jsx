import React from "react";
import { Contents, Aside } from "./";

const MainCont = ({ lon }) => {
    return (
        <main id="main" className="main__wrap">
            <div className="main__inner">
                <Contents />
                <Aside />
            </div>
        </main>
    );
};

export default MainCont;
