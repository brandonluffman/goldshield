import React from 'react';
import Link from 'next/link';

const ServicesGrid = () => {
  return (
    <div>
        <div className='services-grid'>
        <Link href='/services/mold-inspection'>
        <div className='service-grid-item service-grid-1'>
            <h6 className='service-grid-title'>Mold/Spore Detection</h6>
        </div>
        </Link>
        <Link href='/services/radon-inspection'>
        <div className='service-grid-item service-grid-2'>
            <h6 className='service-grid-title'>Radon Testing</h6>
        </div>
        </Link>
        <Link href='/services/septic-inspection'>
        <div className='service-grid-item service-grid-3'>
        <h6 className='service-grid-title'>Septic System Inspection</h6>
        </div>
        </Link>
        <Link href='/services/sewer-scoping'>
        <div className='service-grid-item service-grid-4'>
        <h6 className='service-grid-title'>Sewer Scoping</h6>
        </div>
        </Link>
        <Link href='/services/water-quality-testing'>
        <div className='service-grid-item service-grid-5'>   
        <h6 className='service-grid-title'>Water Quality Testing</h6>
        </div>
        </Link>
        <Link href='/services/water-system-test'>
        <div className='service-grid-item service-grid-6'>
        <h6 className='service-grid-title'>Water System Test</h6>
        </div>
        </Link>
        <Link href='/services/well-inspection'>
        <div className='service-grid-item service-grid-7'>
        <h6 className='service-grid-title'>Well Inspection</h6>
        </div>
        </Link>
        <Link href='/services/wind-mitigation-inspection'>
        <div className='service-grid-item service-grid-8'> 
        <h6 className='service-grid-title'>Wind Mitigation Inspection</h6>
        </div>
        </Link>
        <Link href='/services/insect-inspection'>
        <div className='service-grid-item service-grid-9'>
        <h6 className='service-grid-title'>Wood Damaging Insect Inspection</h6>
        </div>
        </Link>
        </div>
    </div>
  )
}

export default ServicesGrid