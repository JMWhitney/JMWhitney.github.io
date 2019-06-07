import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";


const IndexPage = () => (
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

    <div id="title">
      <h1>
        <span  id="outline">Justin Whitney</span>
        <span >Justin Whitney</span>
      </h1>
      <h2 className="css3D-text-shadow" >Developer | Full Stack</h2>
    </div>

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
