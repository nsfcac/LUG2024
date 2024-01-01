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
                          Meta Legends
                      </h3>
                      <p>
                          Meta Legends represent a collection of 17,000 legends categorized
                          by level of rarity and generated with hundreds of elements. The
                          Legends are stored as ERC-721 tokens on the Ethereum blockchain
                          and hosted on IPFS.
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
              </div>
          </section>
      </Layout>
  )
}
