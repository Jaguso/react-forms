import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return(
      <div className="row justify-content-center">
        <div className="col-md-10">
          <form action="">
            <div className="col-md-6 form-group">
              <label htmlFor="name">Tu nombre</label>
              <input 
                type="text" 
                name="name"
                className="form-control"
              />
            </div>
            
          </form>
        </div>
      </div>
    )
  }
}

export default Signup;