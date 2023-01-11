import Link from "next/link";
import Image from "next/image";
import serviceInfo from "../api/services";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import LocationLinks from "../../components/LocationLinks";
import {BsArrowRight} from 'react-icons/bs';
import {MdLocationPin} from 'react-icons/md';
import Head from "next/head";


export default function Service({ service }) {
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
          <title>Gold Shield Home Inspection | {service.Name}</title>
          <meta name="description" content={`Gold Shield Home Inspection provides high quality ${service.Name}.`}/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/goldshield-logo.webp" alt="Favicon" />
          <link rel="apple-touch-icon" href="/goldshield-logo.webp" /> 
          <link rel="canonical" href={`https://goldshieldhomeinspection.com/services/${service.Slug}`} />
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
                <Link href='/services'>Services</Link> &#62; <Link href={`/services/{service.Slug}`}><span>{service.Name}</span></Link>
            </div>
            <div className="i-service-container">
                <div className="service-content-container">
                    <div className="service-img-div">
                        <img src={service.Image} className='town-img' alt='Fairfield County Graphic' />
                    </div>
                    <div className="service-description-div">
                        <h1 className="service-title">{service.Name}</h1>
                        <p className="service-description">{service.Text}</p>
                    </div>
                </div>
                <div className="town-links">
                        <div>
                            <h6 className="town-links-header">Looking to book a {service.Name}?</h6>
                        </div>
                        <div>
                            <Link href='/booking'><button className="town-book-btn">Book Here<BsArrowRight className="town-arrow"/></button></Link>
                        </div>
                </div>
 
            </div>
      <Footer />
      </div>
    );
  }
  
  export async function getStaticPaths() {
    const services = serviceInfo;
    const paths = services.map((service) => ({
      params: { serviceName: service.Slug }
    }));
  
    return {
      paths,
      fallback: false
    };
  }
  
  export async function getStaticProps({ params }) {
    const { serviceName } = params;
    const service = serviceInfo.find((p) => p.Slug === serviceName);
  
    return {
      props: { service }
    };
  }