import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./About.css";
import aboutImage from "../../../images/about-remax.jpeg";
import client1 from "../../../images/team/Client1.0.jpeg";
import client2 from "../../../images/team/Client2.0.jpeg";
import mailLogo from "../../../images/Icons/🦆 icon _Envelope_.png";

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
        <h1>MEET OUR TEAM</h1>
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
                Sashi Kumar Yarramsetti loves working in real estate and
                partners with Madhava Dudipalli, a mortgage broker and tax
                accountant, to meet the local community’s real estate needs and
                help people realise their home ownership goals.
              </p>
              <p>
                A highly motivated and credentialed mechanical engineer since
                2008, his experience of more than 14 years among several
                well-regarded engineering firms has seen him work on key
                projects in Australia and New Zealand.
              </p>
              <p>
                Sashi’s personal real estate interests include a four-bedroom
                investment property in Thornton, Newcastle, bought in 2011; an
                apartment bought in Essendon North, Melbourne, in 2012; and a
                Springfield Lakes property purchased in 2015.
              </p>
              <p>
                Along with his passion and commitment to real estate is Sashi’s
                involvement with health and fitness. Dedicated fitness
                professional with a passion for improving client health,
                wellness, and quality of life, he established Skyz Fitness in
                2019 to deliver fitness programs that are fun, safe, extremely
                effective and tailored to individual goals for youth, teens,
                adults and senior citizens. Enjoyed the game of cricket so much
                led Sashi to become a coach in 2016 and follow his passion to
                help and develop young cricketers.
              </p>
              <p>
                Testimonials reflect, in particular, Sashi’s energy and
                enthusiasm, friendly caring manner, commitment, focus on
                individual needs and excellent communication.
              </p>
              <p>
                Now working with the world’s number one real estate brand, his
                objective is to listen to and work with the seller to develop a
                stress free and effective sales and marketing process that
                achieves the very best price possible, while at the same time
                having a satisfied buyer. When it comes to real estate, Sashi
                will be by your side throughout the 4300 post code, ensuring you
                have the best real estate experience and achieve the best
                outcome.
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
                  <img src={mailLogo} alt="mail logo" className="mailLogo" />
                  <p>rise@remax.com.au</p>
                </div>
              </div>
            </div>
            <div className="about-team-text-2">
              <p>
                Madhava Dudipalli is a highly respected professional with
                enviable credentials across both real estate and finance.
              </p>
              <p>
                The fully licensed real estate agent is an experienced mortgage
                broker, operating his own business since 2020. The breadth of
                Madhava’s experience includes director in his accounting and tax
                firm, and senior finance roles with local councils in
                Queensland, Victoria and Northern Territory including Acting
                Director Finance, Alice Springs Town Council.
              </p>
              <p>
                He was accounts and finance manager with Deccan Chronicle
                Holdings Ltd, an A Listed company with a $120m-plus turnover and
                interests in publication of a major daily newspaper, IPL 20-20
                Cricket and retail stores.
              </p>
              <p>
                Professional memberships include CAANZ (Chartered Accountants
                Australia and New Zealand), FBAA (Finance Brokers Association of
                Australia), CPA Australia and ICAI (Institute of Chartered
                Accountants of India). A hands-on property investor himself,
                Madhava has experienced property markets through his own
                property companies.
              </p>
              <p>
                Based in Ripley and partnering in business with Sashi
                Yarramsetti, his expertise is sought by clients through
                Springfield, Springfield Lakes, Ripley, Spring Mountain and
                surrounding areas.
              </p>
              <p>
                Having honed skills in areas such as financial accounting and
                reporting, budgeting, audits, capital projects, costing,
                compliance, forecasting, income tax and GST aspects, he has been
                awarded by industry for his achievements.
              </p>
              <p>
                Madhava is recognised for his ability in building rapport with
                stakeholders to assist in accounting, finance, and
                administration related matters, carrying out project appraisals,
                capital budgeting, fixed assets management, delivering short-
                and long-term capital projects.
              </p>
              <p>
                He is customer focused, result oriented and committed to
                delivering on time. As a mortgage broker/advisor, an accountant,
                a real estate agent and an investor in property markets, Madhava
                is able to deliver a truly exceptional real estate experience
                covering all aspects of the process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
