import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./About.css";
import aboutImage from "../../../images/about-remax.jpeg";
import client1 from "../../../images/team/Client1.0.jpeg";
import client2 from "../../../images/team/Client2.0.jpeg";
// import mailLogo from "../../../images/Icons/🦆 icon _Envelope_.png";

export const About = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="about-section">
      <section className="about-section-1">
        <div className="about-section-div-1">
          <h1>
            About RE/MAX <span>RISE</span>
          </h1>
          <p>
            Our team at RE/MAX RISE of highly-qualified professionals are
            dedicated to providing personalised, efficient and results-driven
            solutions to all your real estate needs.
          </p>
          <p>
            From humble beginnings, we've been based in Queensland for the last
            10 years and know what it takes to get results across the outer
            suburbs.
          </p>
          <p>
            Managing every aspect of the residential property journey is what we
            do best, be it looking after your investment property and its
            tenants, finding you your next home or unearthing greater
            possibilities in the commercial market.
          </p>
          <NavLink
            exact
            to="/contact"
            activeclassname="active"
            className="about-contact-us-nav-link"
            onClick={handleClick}
          >
            Contact Us
          </NavLink>
        </div>
        <div className="about-section-div-2">
          <img src={aboutImage} alt="Remax" className="about-section-img" />
        </div>
      </section>
      <section className="about-mot">
        <h1>Meet Our Team</h1>
        <h3>
          With strong expertise in the industry, our team are experts in their
          field
        </h3>
        <div className="about-team-members">
          <div className="about-team-1">
            <div className="about-team-text">
              <img src={client1} alt="Madhav" className="about-client-img" />
              <div className="about-team-text-1">
                <h1>Sashi Yarramsetti</h1>
                <h4>Principal</h4>
                <h4>+0434 666 606</h4>
                <div className="mot-div-mail">
                  {/* <img src={mailLogo} alt="mail logo" className="mailLogo" /> */}
                  <p>rise@remax.com.au</p>
                </div>
              </div>
            </div>
            <div className="about-team-text-2">
              <p>
                RE/MAX Rise broker owner - Sashi Yarramsetti Sashi Yarramsetti
                took his love of real estate sales to the next level and opened
                RE/MAX Rise with business partner Madhava Dudipalli in May 2023.
              </p>
              <p>
                As broker owner and sales specialist, Sashi has enormous pride
                in the role he plays in meeting the local community’s real
                estate needs and helping people realise their home ownership
                goals. Sashi’s personal real estate interests include property
                investments across three Australian states.
              </p>
              <p>
                A highly motivated and credentialed mechanical engineer since
                2008, he has also worked with highly regarded engineering firms
                on key projects in Australia and New Zealand. Along with his
                passion and commitment to real estate is Sashi’s involvement
                with health and fitness.
              </p>
              <p>
                As a dedicated fitness professional, he established Skyz Fitness
                in 2019. As a cricket coach, he also follows his passion to help
                and develop young cricketers. Testimonials, both in real estate
                and fitness arenas, reflect Sashi’s energy and enthusiasm,
                friendly caring manner, commitment, focus on individual needs
                and excellent communication.
              </p>
              <p>
                As business owner with the world’s number one real estate brand,
                Sashi’s objective is to listen to and work with clients to
                create a stress-free real estate experience with effective sales
                and marketing processes that deliver the very best price
                possible for the seller and a satisfied buyer.
              </p>
              <p>
                When it comes to real estate, Sashi will be by your side,
                ensuring you have the best real estate experience and achieve
                the best outcome.
              </p>
            </div>
          </div>
          <div className="about-team-1">
            <div className="about-team-text">
              <img src={client2} alt="Madhav" className="about-client-img" />
              <div className="about-team-text-1">
                <h1>Madhava Dudipalli</h1>
                <h4>Principal</h4>
                <h4>+61415469369</h4>
                <div className="mot-div-mail">
                  <p>rise@remax.com.au</p>
                </div>
              </div>
            </div>
            <div className="about-team-text-2 about-team-text-last">
              <p>
                Co-owner of RE/MAX Rise, Madhava Dudipalli is a highly respected
                professional with enviable credentials across both real estate
                and finance.
              </p>
              <p>
                The fully licensed real estate agent is an experienced mortgage
                broker, operating his own business since 2020. The breadth of
                Madhava’s experience includes director in his accounting and tax
                firm, and senior finance roles with local councils in
                Queensland, Victoria and Northern Territory. He was accounts and
                finance manager with Deccan Chronicle Holdings Ltd, an A Listed
                company with a $120m-plus turnover, interests in IPL 20-20
                Cricket and retail stores, and publisher of the largest
                circulated English newspaper in South India.
              </p>
              <p>
                Madhava’s professional memberships include CAANZ (Chartered
                Accountants Australia and New Zealand), FBAA (Finance Brokers
                Association of Australia), CPA Australia and ICAI (Institute of
                Chartered Accountants of India).
              </p>
              <p>
                Having honed skills in areas such as financial accounting and
                reporting, budgeting, audits, capital projects, costing,
                compliance, forecasting, income tax and GST aspects, he has been
                awarded by industry for his achievements.
              </p>
              <p>
                A hands-on property investor himself, Madhava has experienced
                property markets through his own property companies.
              </p>
              <p>
                He is recognised for business acumen, his ability in building
                rapport, and being customer focused, result oriented and
                committed to delivering on time.
              </p>
              <p>
                As a real estate agent, investor and business owner, a mortgage
                broker/advisor and an accountant, Madhava is able to deliver a
                truly exceptional real estate experience covering all aspects of
                the process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
