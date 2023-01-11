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
              <h6 className="included-desc">
                <FaRegDotCircle className="included-icon"/>Condition of the Structural Components, including the Attic and Crawl Space or Basement <br></br> 
                <FaRegDotCircle className="included-icon"/>Construction Methods and Materials  <br></br> 
                <FaRegDotCircle className="included-icon"/>Evidence of moisture Foundation Movement  <br></br> 
                <FaRegDotCircle className="included-icon"/>Water Penetration
                </h6>
            </div>
          </div>

          <hr className="structural-hr"></hr>

          <div className="structural-div">
            <h3 className="included-item-header">Roofing - <span className='color-less'>Home Inspections</span></h3>
            <div className="included-desc-div">
              <img src='/roofing.jpeg' className="included-desc-img" alt='Inspection Image'></img>
              <h6 className="included-desc">
              <FaRegDotCircle className="included-icon"/>Materials, Condition and Performance of the Roof Coverings, Flashings, Chimneys, Gutters and Downspouts  <br></br>
              <FaRegDotCircle className="included-icon"/>Vents & Trim  <br></br>
              <FaRegDotCircle className="included-icon"/>Skylight, Chimney & other Roof Penetrations
              </h6>
               </div>
          </div>

          <hr className="structural-hr"></hr>


          <div className="structural-div">
            <h3 className="included-item-header">Exterior - <span className='color-less'>Home Inspections</span></h3>
            <div className="included-desc-div">
              <img src='/exterior.jpeg' className="included-desc-img" alt='Inspection Image'></img>
              <h6 className="included-desc">
              <FaRegDotCircle className="included-icon"/>Materials and Condition of the Exterior Cladding, Doors and Windows, Driveway and Walkways <br></br> 
              <FaRegDotCircle className="included-icon"/>Deck, Porches, Stoops & Railings  <br></br>
              <FaRegDotCircle className="included-icon"/>Lot Grading & Drainage  <br></br>
              <FaRegDotCircle className="included-icon"/>Eaves, Soffit & Fascia  <br></br>
              <FaRegDotCircle className="included-icon"/>Garage Doors, Safety Sensors & Openers 
              </h6>
            </div>
          </div>

          <hr className="structural-hr"></hr>


          <div className="structural-div">
            <h3 className="included-item-header">HVAC - <span className='color-less'>Home Inspections</span></h3>
            <div className="included-desc-div">
              <img src='/HVAC.jpeg' className="included-desc-img" alt='Inspection Image'></img>
              <h6 className="included-desc"><FaRegDotCircle className="included-icon"/>General Condition and Operation of the Visible Portion of the Furnace and Air Conditioning Units, Duct Work, Thermostat, and Air Filter Fireplace Damper Door & Hearth
              </h6>
            </div>
          </div>

          <hr className="structural-hr"></hr>

          <div className="structural-div">
            <h3 className="included-item-header">Electrical - <span className='color-less'>Home Inspections</span></h3>
            <div className="included-desc-div">
              <img src='/electrical.jpeg' className="included-desc-img" alt='Inspection Image'></img>
              <h6 className="included-desc">

              <FaRegDotCircle className="included-icon"/>General Condition of the Electrical Service  Electrical Panels, Breakers & Fuses Grounding & Bonding  <br></br>
              <FaRegDotCircle className="included-icon"/>GFCIs & AFCIs  <br></br>
              <FaRegDotCircle className="included-icon"/>Electrical Service Line & Meter Box <br></br>
              <FaRegDotCircle className="included-icon"/>Main Disconnect & Service Amperage  <br></br>
              <FaRegDotCircle className="included-icon"/>Random Testing of Switches & Outlets, Light Fixtures, and Ceiling Fans
                </h6>
            </div>
          </div>

          <hr className="structural-hr"></hr>


          <div className="structural-div">
            <h3 className="included-item-header">Plumbing - <span className='color-less'>Home Inspections</span></h3>
            <div className="included-desc-div">
              <img src='/plumbing.webp' className="included-desc-img" alt='Inspection Image'></img>
              <h6 className="included-desc">
              <FaRegDotCircle className="included-icon"/>General Condition and Operation of the Plumbing System  <br></br>
              <FaRegDotCircle className="included-icon"/>All Visible Supply Piping and Drains  <br></br>
              <FaRegDotCircle className="included-icon"/>Main Water Shut Off Valves Water Heating System  <br></br>
              <FaRegDotCircle className="included-icon"/>Interior Plumbing Fixtures & Faucets Drainage Sump Pumps with Accessible Floats
              </h6>
            </div>
          </div>

          <hr className="structural-hr"></hr>


          <div className="structural-div">
            <h3 className="included-item-header">Insulation and Ventilation - <span className='color-less'>Home Inspections</span></h3>
            <div className="included-desc-div">
              <img src='/insulation.jpeg' className="included-desc-img" alt='Inspection Image'></img>
              <h6 className="included-desc">
              <FaRegDotCircle className="included-icon"/>Overall Condition of Attic and Crawl Space Insulation & Ventilation Operation of Exhaust Fans
              </h6>
            </div>
          </div>

          <hr className="structural-hr"></hr>


          <div className="structural-div">
            <h3 className="included-item-header">Interior Home Inspections</h3>
            <div className="included-desc-div">
              <img src='/interior.jpeg' className="included-desc-img" alt='Inspection Image'></img>
              <h6 className="included-desc">
              <FaRegDotCircle className="included-icon"/>General Condition of the Walls, Ceilings, Floor Coverings, Windows & Doors, Cabinets & Countertops
              </h6>
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