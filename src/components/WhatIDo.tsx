import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }

    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          {/* ==================== CARD 1 - DEVELOPMENT ==================== */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DEVELOPMENT</h3>

              <h4>Description</h4>
              <p>
                I specialize in Front-End, Back-End & Full-Stack Development. 
                I create responsive, visually appealing and high-performance websites 
                using modern technologies like React, Next.js, PHP, Laravel, ASP.NET Core, 
                and WordPress. From beautiful user interfaces to secure and scalable backends, 
                I deliver complete web solutions.
              </p>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* ==================== CARD 2 - CAPABILITIES ==================== */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>CAPABILITIES</h3>

              <h4>My Skills</h4>

              <div className="what-content-flex" style={{ marginTop: "15px", gap: "6px" }}>
                <div className="what-tags">HTML5 <span style={{opacity:0.6}}>95%</span></div>
                <div className="what-tags">CSS3 <span style={{opacity:0.6}}>90%</span></div>
                <div className="what-tags">JavaScript <span style={{opacity:0.6}}>85%</span></div>
                <div className="what-tags">React/Next.js <span style={{opacity:0.6}}>90%</span></div>
                <div className="what-tags">PHP <span style={{opacity:0.6}}>90%</span></div>
                <div className="what-tags">Laravel <span style={{opacity:0.6}}>88%</span></div>
                <div className="what-tags">WordPress <span style={{opacity:0.6}}>85%</span></div>
                <div className="what-tags">ASP.NET <span style={{opacity:0.6}}>80%</span></div>
                <div className="what-tags">MySQL <span style={{opacity:0.6}}>92%</span></div>
                <div className="what-tags">MongoDB <span style={{opacity:0.6}}>85%</span></div>
                <div className="what-tags">UI/UX <span style={{opacity:0.6}}>85%</span></div>
                <div className="what-tags">Responsive <span style={{opacity:0.6}}>95%</span></div>
                <div className="what-tags">Git <span style={{opacity:0.6}}>80%</span></div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container && sibling.classList.contains("what-content")) {
        sibling.classList.remove("what-content-active");
        sibling.classList.add("what-sibling");
      }
    });
  }
}