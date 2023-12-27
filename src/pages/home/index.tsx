import React from "react";
import BentoBox from "@/components/Bentoboxtop";
import BentoLeftSection from "@/components/Segmentleft";
import BentoRightSection from "@/components/SegmentRight";
import TechStack from "@/components/TechStack";

const Index = () => {
    return (
    <>
        <div className="home">
            <BentoBox/>
            <div className="bento-segments">
                <BentoLeftSection/>
                <BentoRightSection/>
            </div>
            <TechStack/>
        </div>
    </>
    )
}

export default Index;