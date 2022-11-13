import React from "react";

const MainInfo = [{ text: "we provide" }, { text: "visual coding" }, { text: "solutions" }, { text: "for you API" }];
const MainText = ({ text }) => {
    return <div>{text}</div>;
};

const Maincont = (temp) => {
    console.log(temp.temp);
    return (
        <section className="cont__main">
            <div className="container">
                <div className="main__inner">
                    {MainInfo.map((text, idx) => (
                        <MainText key={idx} text={text.text} />
                    ))}
                    <div className="temperature">여기날씨 {temp.temp.temperature} </div>
                </div>
            </div>
        </section>
    );
};

export default Maincont;
