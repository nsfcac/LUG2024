'use client'

import Layout from "@/components/Layout";
import "./style.scss"
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
      <Layout pageTitle={"Home"}>
          <section className={"relative overflow-hidden"}>
              <div
                  className="fn_cs_hero_slider ripple"
                  data-ratio="1.33"
                  id="ripple"
                  data-bg-img="/img/bg4.jpg"
              >
                  <div className="bg_overlay"></div>
                  <div className="left_part">
                      <h3 className="fn__maintitle big" data-text="Meta Legends">
                          LUG'24
                      </h3>
                      <p>
                          May 6th - 9th, 2024
                          Texas Tech University
                      </p>
                      <a
                          href="https://opensea.io/"
                          className="metaportal_fn_button"
                          target="_blank"
                          rel="noreferrer"
                      >
                          <span>Buy On Opensea</span>
                      </a>
                  </div>
                  <ParticlesBackground />
                  <div className="slider_part">
                  </div>
              </div>
          </section>
      </Layout>
  )
}
