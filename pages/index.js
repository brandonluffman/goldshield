import React, { useState, Component, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {GraphQLClient, gql} from 'graphql-request';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {MdLocationPin} from 'react-icons/md';
import {BsArrowRight} from 'react-icons/bs'
import Testimonials from '../components/Testimonials';
import LocationLinks from '../components/LocationLinks';
import ServicesGrid from '../components/ServicesGrid';


export default function Home({ posts }) {

  return (
    <>
     {/* <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-W3Q83E2JE3"/>
        <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-W3Q83E2JE3', {
        page_path: window.location.pathname,
        });
        `,
        }}
        /> */}
    <Head>
          <title>Gold Shield Home Inspection | Connecticut Home Inspectors</title>
          <meta name="description" content="Gold Shield Home Inspection is a home inspector servicing Fairfield County, Litchfield County & Surrounding Areas"/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/goldshield-logo.webp" alt="Favicon" />
          <link rel="apple-touch-icon" href="/goldshield-logo.webp" /> 
          <link rel="canonical" href="https://goldshieldhomeinspection.com/"/>
            <meta property="og:type" content="article" />
            <meta property="og:title" content="TITLE OF YOUR POST OR PAGE" />
            <meta property="og:description" content="DESCRIPTION OF PAGE CONTENT" />
            <meta property="og:image" content="LINK TO THE IMAGE FILE" />
            <meta property="og:url" content="PERMALINK" />
            <meta property="og:site_name" content="SITE NAME" />
            <meta name="twitter:title" content="TITLE OF POST OR PAGE" />
            <meta name="twitter:description" content="DESCRIPTION OF PAGE CONTENT" />
            <meta name="twitter:image" content="LINK TO IMAGE" />
            <meta name="twitter:site" content="@USERNAME" />
            <meta name="twitter:creator" content="@USERNAME" />
      </Head>

      <Navbar />
      <div className='landing-container'>
        <div className='test'>
        <h1 className='landing-header'><span className='header-color'>Gold Shield</span> Home Inspection</h1>
        <h2 className='landing-subheader'>#1 Connecticut Home Inspector</h2>
        <div className='landing-btns'>
        <Link href='/booking'><button type='button' className='landing-btn booking-btn'>Book An Inspection</button></Link>
        <Link href='/about'><button type='button' className='landing-btn learn-btn'>Learn More</button></Link>
        </div>
        </div>
      </div>
      <div className='stats-container'>

      </div>
      <div className='about-container'>
        {/* <p className='container-header about-header'>About</p> */}
        <div className='about-content-container'>
          <div className='about-img-container'>
        <img src='goldshield-logo.webp' className='about-img' alt='Brand Logo'></img>
        </div>
        <div className='about-content-div'>
        <section className='about-paragraph'>
          <h3 className='about-paragraph-content'>Gold Shield Home Inspection Services is the <br></br><b className='about-paragraph-content-bold'>Top Rated Home Inspector in Fairfield County</b></h3>
        </section>
        <p className='about-paragraph-description'>
        If you&#39;re buying or selling a home, before you sign any papers, make sure the property in question has been thoroughly assessed. Protect your financial investment with the help of Gold Shield Home Inspection Service. Our Fairfield County inspectors will empower you with all the information you need to make sound, confident decisions about your future. From the plumbing to the electrical to the roof and attic, we&#39;ll cover every inch of your property, inside and out, and find any issues or areas of concern that may exist.
        </p>
        <p className='about-paragraph-assist'>
          <b>Assisting Buyers, Sellers & Real Estate Professionals</b>
        </p>
        <p className='about-paragraph-description'>
        Looking to purchase a home within Fairfield County? Reach out to Gold Shield Home Inspection Services to inspect and discuss the properties condition with an educational approach. With over 10 years in the Home Inspection business, Gold Shield will provide top tier services.
        </p>
        </div>
        </div>
        <div className='about-stats'>
          <div className='about-stat'>
            <p className='about-stat-number'>2000+</p>
            <p className='about-stat-title'>Home Inspections</p>
          </div>
          <div className='about-stat middle-stat'>
            <p className='about-stat-number'>50+</p>
            <p className='about-stat-title'>Towns Serviced</p>
          </div>
          <div className='about-stat'>
            <p className='about-stat-number'>12+</p>
            <p className='about-stat-title'>Years In The Business</p>
          </div>
        </div>
      </div>
      <div className='services-container'>
        <p className='container-header services-header'>Services</p>
        <ServicesGrid />
      </div>
      <div className='locations-cosntainer'>
      <p className='container-header locations-header'>Locations</p>
      <div className='locations-container-wrapper'>
      <div className='location-img-container'>
        <h2 className='location-description-header'>Top Fairfield County Home Inspector</h2>
        <p className='location-description'>If you&#39;re buying or selling a home, before you sign any papers, make sure the property in question has been thoroughly assessed. Protect your financial investment with the help of Gold Shield Home Inspection Service. Our Fairfield County inspectors will empower you with all the information you need to make sound, confident decisions about your future. From the plumbing to the electrical to the roof and attic, we&#39;ll cover every inch of your property, inside and out, and find any issues or areas of concern that may exist.</p>
        <div className='location-description-img-div'>
        <img src='/inspector.webp' className='location-inspection-img' alt='Fairfield County Graphic'></img>
        </div>
      </div>
      <div className='location-content-container'>  
      <div className='county-img'>
      <img src='fairfield-county.png' className='location-img' alt='Fairfield County Graphic'></img>
      </div>
      <div className='counties-container'>
        <LocationLinks />
        </div>
      </div>
      </div>
      <div className='location-btn-div'>
      <Link href='/locations'><button type='button' className='view-locations-btn'>View All Locations<BsArrowRight className='arrow-icon'/></button></Link>
      </div>
      </div>
      <div className='testimonials-container'>
        <p className='container-header testimonial-header'>Testimonials</p>
        <p className='testimonial-subheader'>See what our clients have to say</p>
        <Testimonials />
      </div>
      <div className='contact-container'>
      <p className='container-header contact-header'>Contact</p>
        <Contact /> 
      </div>
      <Footer />
    </>

  );
}