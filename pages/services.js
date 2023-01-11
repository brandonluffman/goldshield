import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { FaRegDotCircle } from 'react-icons/fa';
import serviceInfo from "./api/services";
import ServicesGrid from "../components/ServicesGrid";

const services = ({ services }) => {
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
          <title>Gold Shield Home Inspection | Services</title>
          <meta name="description" content="Gold Shield Home Inspection provides a variety of Home Inspections within the Farifield County & Litchfield County areas."/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/goldshield-logo.webp" alt="Favicon" />
          <link rel="apple-touch-icon" href="/goldshield-logo.webp" /> 
          <link rel="canonical" href="https://goldshieldhomeinspection.com/services"/>
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
      <div className='services-container'>
        
        <div className="service-page-headers">
        <img src='/goldshield-logo.webp' className="headers-logo" alt='Brand Logo'></img>
        <h1 className='container-header services-page-header'><span className='color-change'>Home Inspection</span> Services in <span className='color-change'>Connecticut</span></h1>
        <h3 className='services-page-subheader'>Gold Shield offers a variety of inspections in Fairfield & Litchfield County, CT. Whether you&apos;re looking to test the radon or do a full home inspection, Gold Shield has you covered.</h3>
        <div>
          <img src='/cpii.png' className="cert-logo" alt='Home Inspection Certification'></img>
          <img src='/internachi.png' className="cert-logo" alt='Home Inspection Certification'></img>
        </div>
        <Link href='/booking'><button className="services-page-btn">Book an Inspection</button></Link>
        </div>


        <div className="included-div">
        <h3 className='included-header'>What&apos;s Included In Your Home Inspection?</h3>
        <hr></hr>

          <div className="structural-div">
            <h3 className="included-item-header">Structural - <span className='color-less'>Home Inspections</span></h3>
            <div className="included-desc-div">
              <img src='/structural.jpeg' className="included-desc-img" alt='Inspection Image'></img>
              <ul className="included-tabs">
                  <li className="tabs-div">Condition of the Structural Components, including the Attic and Crawl Space or Basement</li>
                  <li className="tabs-div">Construction Methods and Materials</li>
                  <li className="tabs-div">Evidence of moisture Foundation Movement</li>
                  <li className="tabs-div">Water Penetration</li>
              </ul>
            </div>
          </div>

          <hr className="structural-hr"></hr>

          <div className="structural-div">
            <h3 className="included-item-header">Roofing - <span className='color-less'>Home Inspections</span></h3>
            <div className="included-desc-div">
              <img src='/roofing.jpeg' className="included-desc-img" alt='Inspection Image'></img>
              <ul className="included-tabs">
              <li className="tabs-div">Materials, Condition and Performance of the Roof Coverings, Flashings, Chimneys, Gutters and Downspouts</li>
              <li className="tabs-div">Vents & Trim</li> 
              <li className="tabs-div">Skylight, Chimney & other Roof Penetrations</li>
              </ul>
               </div>
          </div>

          <hr className="structural-hr"></hr>


          <div className="structural-div">
            <h3 className="included-item-header">Exterior - <span className='color-less'>Home Inspections</span></h3>
            <div className="included-desc-div">
              <img src='/exterior.jpeg' className="included-desc-img" alt='Inspection Image'></img>
              <ul className="included-tabs">
                  <li className="tabs-div">Materials and Condition of the Exterior Cladding, Doors and Windows, Driveway and Walkways</li> 
                  <li className="tabs-div">Deck, Porches, Stoops & Railings</li>  
                  <li className="tabs-div">Lot Grading & Drainage</li>  
                  <li className="tabs-div">Eaves, Soffit & Fascia</li>
                  <li className="tabs-div">Garage Doors, Safety Sensors & Openers</li>
                </ul>
            </div>
          </div>

          <hr className="structural-hr"></hr>


          <div className="structural-div">
            <h3 className="included-item-header">HVAC - <span className='color-less'>Home Inspections</span></h3>
            <div className="included-desc-div">
              <img src='/HVAC.jpeg' className="included-desc-img" alt='Inspection Image'></img>
              <ul className="included-tabs">
                  <li className="tabs-div">General Condition and Operation of the Visible Portion of the Furnace and Air Conditioning Units, Duct Work, Thermostat, and Air Filter Fireplace Damper Door & Hearth</li>
            </ul>
            </div>
          </div>

          <hr className="structural-hr"></hr>

          <div className="structural-div">
            <h3 className="included-item-header">Electrical - <span className='color-less'>Home Inspections</span></h3>
            <div className="included-desc-div">
              <img src='/electrical.jpeg' className="included-desc-img" alt='Inspection Image'></img>
              <ul className="included-tabs">
                  <li className="tabs-div">General Condition of the Electrical Service  Electrical Panels, Breakers & Fuses Grounding & Bonding</li>
                  <li className="tabs-div">GFCIs & AFCIs</li>
                  <li className="tabs-div">Electrical Service Line & Meter Box</li>
                  <li className="tabs-div">Main Disconnect & Service Amperage</li> 
                  <li className="tabs-div">Random Testing of Switches & Outlets, Light Fixtures, and Ceiling Fans</li>
             </ul>
            </div>
          </div>

          <hr className="structural-hr"></hr>


          <div className="structural-div">
            <h3 className="included-item-header">Plumbing - <span className='color-less'>Home Inspections</span></h3>
            <div className="included-desc-div">
              <img src='/plumbing.webp' className="included-desc-img" alt='Inspection Image'></img>
              <ul className="included-tabs">
              <li className="tabs-div">General Condition and Operation of the Plumbing System</li> 
              <li className="tabs-div">All Visible Supply Piping and Drains</li>
              <li className="tabs-div">Main Water Shut Off Valves Water Heating System</li> 
              <li className="tabs-div">Interior Plumbing Fixtures & Faucets Drainage Sump Pumps with Accessible Floats</li>
              </ul>
            </div>
          </div>

          <hr className="structural-hr"></hr>


          <div className="structural-div">
            <h3 className="included-item-header">Insulation and Ventilation - <span className='color-less'>Home Inspections</span></h3>
            <div className="included-desc-div">
              <img src='/insulation.jpeg' className="included-desc-img" alt='Inspection Image'></img>
              <ul className="included-tabs">
                <li className="tabs-div">Overall Condition of Attic and Crawl Space Insulation & Ventilation Operation of Exhaust Fans</li>
              </ul>
            </div>
          </div>

          <hr className="structural-hr"></hr>


          <div className="structural-div">
            <h3 className="included-item-header">Interior Home Inspections</h3>
            <div className="included-desc-div">
              <img src='/interior.jpeg' className="included-desc-img" alt='Inspection Image'></img>
              <ul className="included-tabs">
                <li className="tabs-div">General Condition of the Walls, Ceilings, Floor Coverings, Windows & Doors, Cabinets & Countertops</li>
              </ul>
            </div>
          </div>
        </div>

      <h6 className='services-grid-header'>Other Services</h6>
       <ServicesGrid />
        
      </div>
      <Footer />
    </div>
  )
}


export async function getStaticProps() {
  const services = serviceInfo;

  return {
    props: { services }
  };
}



export default services;