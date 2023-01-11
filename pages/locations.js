import Link from 'next/link';
import {MdLocationPin} from 'react-icons/md';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import serviceTowns from './api/towns';
import Head from 'next/head';
import LocationLinks from '../components/LocationLinks';

const locations = ({ towns }) => {
  return (
    <div>    
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
      <div className='location-page-container'> 
      <div className='location-page-content-container'>
      <div className='location-page-content'>
        <h1 className='location-page-header'>Home Inspections in Fairfield County & Litchfield County</h1>
      </div>
      </div>
      <div className='location-page-graphic-container'>
        <div className='location-page-graphic'>
          <div className='locations-page-desc'>
            <h4>Servicing all of Fairfield County & Surrounding Areas</h4><br></br>
            <p className='desc-desc'>Our objective is to provide every home buyer in a complete home inspection so that you can make an educated buying decision for your potential house. With more than 12 years of expertise in home inspections, you can rely on our expert inspectors when they inspect the house you&apos;re hoping to purchase. Our home inspectors use the most current processes and the latest tools tools when on the job. The day of your inspection, you&apos;ll receive a trustworthy information on the house&apos;s condition. Make a confident home ownership choice with an expert home inspection.</p>
            
            <div className='about-stats'>
                <div className='about-stat about-page-stat'>
                  <p className='about-stat-number'>12+</p>
                  <p className='about-stat-title'>Years In Business</p>
                </div>
                <div className='about-stat middle-stat'>
                  <p className='about-stat-number'>50+</p>
                  <p className='about-stat-title'>Towns Serviced</p>
                </div>
            </div>
          </div>
          <div className='locations-page-img'>
            <img src='/goldshield-logo.webp' className='location-page-img' alt='Brand Logo'></img>
          </div>
        </div>
      </div>
      <div className='all-loc-div'>
      <hr className='location-hr'></hr>
      <h3 className='all-locations-header'>All Locations We Service</h3>
      <LocationLinks />
      {/* <ol>
          {towns.map((town) => (
            <li key={town.Id}>
              <Link href={`/locations/${town.Slug}`}>
                <a>{town.Town}</a>
              </Link>
            </li>
          ))}
        </ol> */}
        </div>
      </div>
      <Footer />
  </div>
  )
}

export async function getStaticProps() {
  const towns = serviceTowns;

  return {
    props: { towns }
  };
}

export default locations;