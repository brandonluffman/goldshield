import 'bootstrap/dist/css/bootstrap.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/Navbar.css';
import '../styles/Index.css';
import '../styles/Contact.css';
import '../styles/Footer.css';
import '../styles/Blogs.css';
import '../styles/Services.css';
import '../styles/Locations.css';
import '../styles/About.css';
import '../styles/Booking.css';
import '../styles/Service.css';
import '../styles/Newsletter.css';
import '../styles/Testimonials.css';
import '../styles/Location.css';
import '../styles/breadcrumbs.css';
import '../styles/LocationLinks.css';
import '../styles/ServicesGrid.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
