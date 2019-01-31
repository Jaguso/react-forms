import React, { Component } from 'react';
import { createAuthor } from '../../services';

class Authors extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      nationality: ""
    }
  }

  onChangeInput = (event) => {
    const {name, value} = event.target;

    console.log("Evento: ", event);
    console.log("Valores: ", name, value);
    this.setState({[name]: value});
  }

  onSubmit = async (event) => {
    event.preventDefault();

    let response = {}
    response = await createAuthor(this.state).catch(({response}) => 
      alert(response.data.error.errors[0].message))
    if(response) {
      console.log(response)
    }
  }
  

  render() {
    return (
      <div className="row justify-content-center">
        <h4>Register name and nationality of a writer</h4>
        <div className="col-md-10">
          <form onSubmit={this.onSubmit}>
            <div className="row justify-content-center">
              
              <div className="col-md-10 form-group">
                <label htmlFor="name">Name: </label>
                <input 
                  type="text" 
                  name="name"
                  className="form-control"
                  vlue={this.state.name}
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="col-md-10 form group">
                <label htmlFor="nationality">Nationality:</label>
                <input 
                  type="text"
                  name="nationality"
                  className="form-control"
                  value={this.state.nationality}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-success">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Authors;