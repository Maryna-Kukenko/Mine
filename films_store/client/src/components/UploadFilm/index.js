import React, {Component} from 'react'
import './style.scss'

class UploadFilm extends Component {
  render() {
    return (
      <>
        <div className="popup">
          <div className="popupInner">
            <input className="input" type="text" placeholder="Film title" />
            <input className="input" type="text" placeholder="Release year" />
            <input className="input" type="text" placeholder="Format" />
            <input className="input" type="text" placeholder="Stars" />
            <button className="btn">Submit</button>
          </div>
        </div>
        <button id="openPopup">ADD FILM</button>
      </>
    )
  }
}

export default UploadFilm