import 'bootstrap/dist/css/bootstrap.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/navbar.css';
import '../styles/Index.css';
import '../styles/contact.css';
import '../styles/footer.css';
import '../styles/blogs.css';
import '../styles/services.css';
import '../styles/locations.css';
import '../styles/about.css';
import '../styles/booking.css';
import '../styles/service.css';
import '../styles/testimonials.css';
import '../styles/location.css';
import '../styles/breadcrumbs.css';
import '../styles/locationlinks.css';
import '../styles/servicesgrid.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
