import React, { useEffect } from "react"

const Index = () => {

    useEffect(() => {
        const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
          const mouseX = e.clientX;
          const mouseY = e.clientY;
    
          const anchor = document.getElementById('anchor');
          if (anchor) {
            const rekt = anchor.getBoundingClientRect();
            const anchorX = rekt.left + rekt.width / 2;
            const anchorY = rekt.top + rekt.height / 2;
    
            const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
            console.log(angleDeg);

            const eyes = document.querySelectorAll('.eye')
            eyes.forEach((eye: Element) => {
                const eyeElement = eye as HTMLElement;
                eyeElement.style.transform = `rotate(${90 + angleDeg}deg)`;
            });
          }
        };
        document.addEventListener('mousemove', handleMouseMove);
      }, []);

    return (
        <div className="Bento-box-left-segment">
            <div className="bento-box-left-section-Imager">
                <img id="anchor" className="me-image" src="./me.png"  />
                <div className="eyes">
                    <img className="eye" src="./eyes.png" style={{ top: "-51px", left: "-49px" }} />
                    <img className="eye" src="./eyes.png" style={{ top: "-51px", left: "22px" }} />
                </div>
            </div>
            <div className="bento-box-left-section-elongated">
                <h1>Projects</h1>
                <div className="disapear">
                    From concept to completion: a journey in projects
                </div>
                <a className="first-image" href="http://sarvlok.com" target="_blank" rel="noopener noreferrer"><img src="./project1.png" alt="" /></a>
                <a className="second-image" href="http://treeved.com" target="_blank" rel="noopener noreferrer"><img src="./project2.jpg" alt="" /></a>
                <a className="third-image" href="http://edloops.com" target="_blank" rel="noopener noreferrer"><img src="./project3.png" alt="" /></a>
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
function angle(cx: number, cy: number, ex: number, ey: number){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180/ Math.PI;
    return deg;
}
export default Index;
