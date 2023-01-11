import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";

const about = () => (
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
          <title>Gold Shield Home Inspection | Abouts</title>
          <meta name="description" content="Gold Shield Home Inspection is a home inspector servicing Fairfield County, Litchfield County & Surrounding Areas"/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/goldshield-logo.webp" alt="Favicon" />
          <link rel="apple-touch-icon" href="/goldshield-logo.webp" /> 
          <link rel="canonical" href="https://goldshieldhomeinspection.com/about"/>
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
    <div className="about-page-container">
      <div className='about-content-container'>
        <div className='about-img-container'>
          <img src='goldshield-logo.webp' className='about-img about-page-img'  alt='Brand Logo'></img>
          <div className='about-stats about-page-stats'>
          <div className='about-stat about-page-stat'>
            <p className='about-stat-number'>2000+</p>
            <p className='about-stat-title'>Home Inspections</p>
          </div>
          <div className='about-stat middle-stat about-page-stat'>
            <p className='about-stat-number'>50+</p>
            <p className='about-stat-title'>Towns Serviced</p>
          </div>
          <div className='about-stat about-page-stat'>
            <p className='about-stat-number'>12+</p>
            <p className='about-stat-title'>Years In The Business</p>
          </div>
        </div>
        </div>
        <div className='about-content-div'>
          <section className='about-paragraph'>
            <h1 className='about-paragraph-content'>Gold Shield Home Inspection Services is the <br></br><b className='about-paragraph-content-bold'>Top Rated Home Inspector in Fairfield County</b></h1>
          </section>
          <p className='about-paragraph-description'>
          Here at Gold Shield Home Inspection Services, we are committed to upholding the highest standards in property inspection to ensure accurate, reliable results every time. From start to finish, you can be sure you&apos;re getting the trusted, dependable service you deserve every time you come to the seasoned pre-market inspection experts here at Gold Shield Home Inspection Services. If you&#39;re buying or selling a home, before you sign any papers, make sure the property in question has been thoroughly assessed. Protect your financial investment with the help of Gold Shield Home Inspection Service. Our Fairfield County inspectors will empower you with all the information you need to make sound, confident decisions about your future. From the plumbing to the electrical to the roof and attic, we&#39;ll cover every inch of your property, inside and out, and find any issues or areas of concern that may exist.
          </p>
          <p className='about-paragraph-assist'>
            <b>Assisting Buyers, Sellers & Real Estate Professionals</b>
          </p>
          <p className='about-paragraph-description'>
          For home buyers, getting top-notch professional home inspection, allows you to learn everything you need to know about the property you intend to buy and be alerted on existing structural, electrical, and other existing issues, as well as potential issues that may cause significant problems in the future. Knowing all of the home&apos;s flaws and areas for improvement also allows you to negotiate for better prices on the property.
              <br></br><br></br>
              For home sellers, knowing everything you need to take care of with regard to your property&apos;s issues and possible problem areas allows you ample time to have them fixed before putting the property on the market. This ensures that you get to sell your property at a better price point than is the needed repairs and areas for improvements were not brought to your attention through the pre-market home inspection.      
              <br></br><br></br>
            Looking to purchase a home within Fairfield County? Reach out to Gold Shield Home Inspection Services to inspect and discuss the properties condition with an educational approach. With over 10 years in the Home Inspection business, Gold Shield will provide top tier services.
          </p>
          <div className="about-inspect-div">
          <img src='/inspector.webp' className="about-page-inspector-img" alt='Home Inspector' />
          </div>
         </div>
    </div>
    </div>
    <Footer />
  </div>
)

export default about;