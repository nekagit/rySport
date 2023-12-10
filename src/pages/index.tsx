import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";

import React from "react";
import HomepageSections from "../components/HomepageFeatures/landing";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        {/* <Heading as="h3" className="hero__title">
          {siteConfig.title}
        </Heading> */}
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}></div>
      </div>
      <br />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageSections />
      </main>
    </Layout>
  );
}
