import React from 'react';
import Link from 'next/link';

const ServicesGrid = () => {
  return (
    <div>
        <div className='services-grid'>
        <Link href='/services/mold-inspection'>
        <div className='service-grid-item service-grid-1'>
            <h2 className='service-grid-title'>Mold/Spore Detection</h2>
        </div>
        </Link>
        <Link href='/services/radon-inspection'>
        <div className='service-grid-item service-grid-2'>
            <h2 className='service-grid-title'>Radon Testing</h2>
        </div>
        </Link>
        <Link href='/services/septic-inspection'>
        <div className='service-grid-item service-grid-3'>
        <h2 className='service-grid-title'>Septic System Inspection</h2>
        </div>
        </Link>
        <Link href='/services/sewer-scoping'>
        <div className='service-grid-item service-grid-4'>
        <h2 className='service-grid-title'>Sewer Scoping</h2>
        </div>
        </Link>
        <Link href='/services/water-quality-testing'>
        <div className='service-grid-item service-grid-5'>   
        <h2 className='service-grid-title'>Water Quality Testing</h2>
        </div>
        </Link>
        <Link href='/services/water-system-test'>
        <div className='service-grid-item service-grid-6'>
        <h2 className='service-grid-title'>Water System Test</h2>
        </div>
        </Link>
        <Link href='/services/well-inspection'>
        <div className='service-grid-item service-grid-7'>
        <h2 className='service-grid-title'>Well Inspection</h2>
        </div>
        </Link>
        <Link href='/services/wind-mitigation-inspection'>
        <div className='service-grid-item service-grid-8'> 
        <h2 className='service-grid-title'>Wind Mitigation Inspection</h2>
        </div>
        </Link>
        <Link href='/services/insect-inspection'>
        <div className='service-grid-item service-grid-9'>
        <h2 className='service-grid-title'>Wood Damaging Insect Inspection</h2>
        </div>
        </Link>
        </div>
    </div>
  )
}

export default ServicesGrid