import React from "react";
import { ContentSlide, ContentDesc } from "./";

const Contetns = () => {
    return (
        <section id="contents" className="contents__wrap">
            <div className="contents__inner">
                <h2>이런날 이런 음식 어때?</h2>
                <ContentSlide />
                <ContentDesc />
            </div>
        </section>
    );
};

export default Contetns;
