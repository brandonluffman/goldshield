import React from 'react';
import Link from 'next/link';
import { MdLocationPin } from 'react-icons/md';

const LocationLinks = () => {
  return (
    <div className='town-all-locations-div'>
        <div className='fairfield-county-div'>
          <Link href='/locations/FairfieldCounty' className='location-link'><h5 className='fairfield-header'>Fairfield County</h5></Link>
          <hr className='location-hr'></hr>
          <div className='county-locations'>
          <div className='location-link'><Link href='/locations/bethel' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Bethel</h6></Link></div>
          <div className='location-link'><Link href='/locations/bridgeport' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Bridgeport</h6></Link></div>
          <div className='location-link'><Link href='/locations/brookfield' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Brookfield</h6></Link></div>
          <div className='location-link'><Link href='/locations/danbury' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Danbury</h6></Link></div>
          <div className='location-link'><Link href='/locations/darien' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Darien</h6></Link></div>
          <div className='location-link'><Link href='/locations/easton' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Easton</h6></Link></div>
          <div className='location-link'><Link href='/locations/fairfield' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Fairfield</h6></Link></div>
          <div className='location-link'><Link href='/locations/greenwich' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Greenwich</h6></Link></div>
          <div className='location-link'><Link href='/locations/monroe' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Monroe</h6></Link></div>
          <div className='location-link'><Link href='/locations/new-canaan' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>New Canaan</h6></Link></div>
          <div className='location-link'><Link href='/locations/new-fairfield' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>New Fairfield</h6></Link></div>
          <div className='location-link'><Link href='/locations/newtown' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Newtown</h6></Link></div>
          <div className='location-link'><Link href='/locations/norwalk' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Norwalk</h6></Link></div>
          <div className='location-link'><Link href='/locations/redding' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Redding</h6></Link></div>
          <div className='location-link'><Link href='/locations/ridgefield' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Ridgefield</h6></Link></div>
          <div className='location-link'><Link href='/locations/shelton' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Shelton</h6></Link></div>
          <div className='location-link'><Link href='/locations/sherman' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Sherman</h6></Link></div>
          <div className='location-link'><Link href='/locations/stamford' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Stamford</h6></Link></div>
          <div className='location-link'><Link href='/locations/stratford' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Stratford</h6></Link></div>
          <div className='location-link'><Link href='/locations/trumbull' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Trumbull</h6></Link></div>
          <div className='location-link'><Link href='/locations/weston' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Weston</h6></Link></div>
          <div className='location-link'><Link href='/locations/westport' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Westport</h6></Link></div>
          <div className='location-link'><Link href='/locations/wilton' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Wilton</h6></Link></div>
          </div>
        </div>
        <div className='litchfield-county-div'>
          <Link href='/locations/LitchfieldCounty' className='location-link'><h5 className='litchfield-header'>Litchfield County</h5></Link>
          <hr className='location-hr'></hr>
          <div className='county-locations'>
          <div className='location-link'><Link href='/locations/kent' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Kent</h6></Link></div>
          <div className='location-link'><Link href='/locations/warren' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Warren</h6></Link></div>
          <div className='location-link'><Link href='/locations/litchfield' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Litchfield</h6></Link></div>
          <div className='location-link'><Link href='/locations/watertown' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Watertown</h6></Link></div>
          <div className='location-link'><Link href='/locations/bethlehemm' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Bethlehem</h6></Link></div>
          <div className='location-link'><Link href='/locations/morris' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Morris</h6></Link></div>
          <div className='location-link'><Link href='/locations/washington' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Washington</h6></Link></div>
          <div className='location-link'><Link href='/locations/roxbury' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Roxbury</h6></Link></div>
          <div className='location-link'><Link href='/locations/woodbury' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>Woodbury</h6></Link></div>
          <div className='location-link'><Link href='/locations/new-milford' className='location-link'><h6 className='location-town'><MdLocationPin className='location-icon'/>New Milford</h6></Link></div>
        </div>
        </div>
    </div>
  )
}

export default LocationLinks