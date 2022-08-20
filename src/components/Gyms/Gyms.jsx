import React from 'react'
import "./Gyms.css"
import data from "../aspect/Screenshot wtf.png"


import { IoLocation } from 'react-icons/io5';
function Gyms() {
  return (
    <div>
      <div>
        <img src={data} className='img-wtf-main'/>
      </div>
      <div  className='searching-data'>
      <div className='search-box'>
      <div className='search'>
      <input className='search1' placeholder=' Search gym name here...'  />
      <label className='location'><IoLocation className='golocation'/></label>
      <button className='btn-clear'>Clear</button>
      </div>
                


            <div className='filter-and-mapage'>
                <div className='filter-data'>
                    <p className='Filter'>Filters</p>
                    <p className='location1'>Location</p>
                    <input className='enter-location' placeholder='   Enter location...'/>
                    <p className='location2'>Price</p>
                    <input className='enter-location3' placeholder='Min'/><input className='enter-location4' placeholder='Max'/>
                    <p className='location3'>Cities</p>
                   
                    <select className='enter-location1' >
                    <option value="select" className='option'>Select city</option>
                    <option value="volvo">New Delhi</option>
                    <option value="saab">Noida</option>
                    <option value="mercedes">Delhi</option>
                    </select>

                   
                   
                </div>
                <div className='map-data'> </div>
            </div>
        
      </div>
      </div>
      <div></div>
      <div></div>
     
     
    </div>
  )
}

export default Gyms
