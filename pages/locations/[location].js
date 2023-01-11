import Link from "next/link";
import Image from "next/image";
import serviceTowns from "../api/towns";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import LocationLinks from "../../components/LocationLinks";
import {BsArrowRight} from 'react-icons/bs';
import {MdLocationPin} from 'react-icons/md';
import Head from "next/head";

export default function Town({ town }) {

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
          <title>Gold Shield Home Inspection | {town.Town} Home Inspections</title>
          <meta name="description" content={`Gold Shield Home Inspection offers Home Inspections in {town.Town}`}/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/goldshield-logo.webp" alt="Favicon" />
          <link rel="apple-touch-icon" href="/goldshield-logo.webp" /> 
          <link rel="canonical" href={`https://goldshieldhomeinspection.com/locations/{town.Slug}`}/>
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
            <div className='breadcrumbs'>
                <Link href='/locations'>Locations</Link> &#62; <Link href={`/services/{town.Slug}`}>{town.Town}</Link>
            </div>
            <div className="town-container">
                <div className="town-content-container">
                    <div className="town-img-div">
                        <img src={town.Image} className='town-img' alt='Fairfield County Graphic' />
                    </div>
                    <div className="town-description-div">
                        <h1 className="town-title">{town.Town} Home Inspections</h1>
                        <h3 className="town-subtitle"><MdLocationPin />{town.Town}, CT</h3>
                        <h6 className="town-county">County - {town.County}</h6>
                        <p className="town-description">{town.Text}</p>
                    </div>
                </div>
                <div className="town-services-container">

                </div>
                <div className="town-links">
                        <div>
                            <h6 className="town-links-header">Looking to book an inspection in {town.Town}?</h6>
                        </div>
                        <div>
                            <Link href='/booking'><button className="town-book-btn">Book Here<BsArrowRight className="town-arrow"/></button></Link>
                        </div>
                </div>
                <div className="town-nearby-div">
                    <h6 className="nearby-header">More locations nearby to Bethel</h6>
                    <LocationLinks />
                </div>
            </div>
      <Footer />
      </div>
    );
  }
  
  export async function getStaticPaths() {
    const towns = serviceTowns;
    const paths = towns.map((town) => ({
      params: { location: town.Slug }
    }));
  
    return {
      paths,
      fallback: false
    };
  }
  
  export async function getStaticProps({ params }) {
    const { location } = params;
    const town = serviceTowns.find((p) => p.Slug === location);
  
    return {
      props: { town }
    };
  }