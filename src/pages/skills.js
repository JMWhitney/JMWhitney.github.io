import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

const Skills = () => (
  <Layout>
    <SEO title="Justin Whitney" />

    <div id="background">
        <div className="grid-wrapper">
          <div className="grid">
            <div className="vertical">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="horizontal">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>

    <div id="skills">
      
      <div className="row">
        <div className="tree card">
          <ul>
          <li>
            <button>Back-end</button>
            <ul>
              <li>
                <button>Node.js</button>
                <ul>

                  <li>
                    <button>Express.js</button>
                  </li>

                  <li>
                    <button>Gatsby.js</button>
                  </li>

                  <li>
                    <button>Next.js</button>
                  </li>

                </ul>
              </li>
              
              <li>
                <button>C++</button>
              </li>

              <li>
                <button>PHP 7</button>
              </li>

            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="tree card">
        <ul>
          <li>
            <button>Front-End</button>
            <ul>

              <li>
                <button>JavaScript (ES6+)</button>

                  <ul>
                    <li>
                      <button>React.js</button>
                    </li>
                  </ul>
              </li>

              <li>
                <button>HTML5</button>

                <ul>
                  <li>
                    <button>Canvas</button>
                  </li>
                </ul>

              </li>

              <li>
                <button>CSS3</button>
                <ul>

                  <li>
                    <button>Animations</button>
                  </li>

                  <li>
                    <button>Bootstrap</button>
                  </li>

                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="tree card">
        <ul>
          <li>
            <button>Databases</button>
            <ul>
              <li>
                <button>NoSQL</button>
                <ul>
                  <li>
                    <button>MongoDB</button>
                  </li>
                </ul>
              </li>

              <li>
                <button>SQL</button>
                <ul>
                  <li>
                    <button>MySQL</button>
                  </li>
                </ul>
              </li>
              
            </ul>
          </li>
        </ul>
      </div>
    </div> {/* ROW */}
  </div>

  </Layout>
);
 
export default Skills;