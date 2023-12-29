import React from "react"

const Index = () => {

    return (
        <div className="Bento-box-left-segment">
            <div className="left-top-flex">
                <div className="bento-box-left-section-small"></div>
                <div className="bento-box-left-section-small"></div>
            </div>
            <div className="bento-box-left-section-elongated">
                <h1>Projects</h1>
                <div className="additional-content">
                    <div className="slant-one"></div>
                    <div className="slant-two"></div>
                    <div className="slant-three"></div>
                </div>
            </div>
            <div className="bento-box-left-section-elongated-break">
                <div className="bento-box-left-section-elongated-break-section">
                    <img src="./linkedin.png" alt="" />
                    Linkedin
                </div>
                <div className="bento-box-left-section-elongated-break-section">
                    <img src="./github.png" alt="" />
                    Github
                </div>
            </div>
        </div>
    )
}

export default Index;