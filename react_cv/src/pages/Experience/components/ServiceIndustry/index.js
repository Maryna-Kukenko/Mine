import React, {Component} from 'react'

import './style.css'

class ServiceIndustry extends Component{
  showWorkInfo = () =>{
    let work = document.getElementById('hidden-experience')
    if (work.style.display === 'none'){
      work.style.display ='block'
    } else {
      work.style.display ='none'
    }
  }
  render(){
    return (
      <div className='experience-service'>
        <h2 className='experience-service-place'>Service Industry</h2>
        <p className='experience-service-descr' onClick={this.showWorkInfo}>
          Was working in hotel and restaurant business for 5 years.
          (if you want to see more information press here)
        </p>
        <div id='hidden-experience'>
          <p className='service-industry'>
            Volunteer during EURO 2012, Kiev
          </p>
          <p className='service-industry'>
            Manager in amusement park, USA, Massachusetts
          </p>
          <p className='service-industry'>
            Waitress at the restaurant, Kiev
          </p>
          <p className='service-industry'>
            Administrator of the hotel, Kiev
          </p>
        </div>
      </div>
    )
  }
}

export default ServiceIndustry