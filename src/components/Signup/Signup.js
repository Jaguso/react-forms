import React, { Component } from 'react';

class Signup extends Component {

  constructor(){
    super();
    this.state = {
      name: "",
      lastname: "",
      email: "",
      password: "",
    }
  }

  onChangeInput = (event) => {
    const {name, value} = event.target

    console.log("Evento: ", event)
    console.log("Valores: ", name, value)
    this.setState({[name]: value})
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.validPasswords()) {

    } else {
      alert("Los passwords no coinciden")
    }
  }

  render() {
    return(
      <div className="row justify-content-center">
        <div className="col-md-10">
          <form onSubmit={this.onSubmit}>
            <div className="row justify-content-center">
              
              <div className="col-md-10 form-group">
                <label htmlFor="name">Tu nombre</label>
                <input 
                  type="text" 
                  name="name"
                  className="form-control"
                  vlue={this.state.name}
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="col-md-10 form group">
                <label htmlFor="lastname">Tus Apellidos:</label>
                <input 
                  type="text"
                  name="lastname"
                  className="form-control"
                  value={this.state.lastname}
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="col-md-10 form-group">
                <label htmlFor="">Tu email:</label>
                <input 
                  type="email" 
                  name="email" 
                  className="form-control" 
                  value={this.state.email}
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="col-md-10 form-group">
                <label htmlFor="">Tu Password:</label>
                <input 
                  type="password" 
                  name="password" 
                  className="form-control" 
                  value={this.state.password}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-success" >Registrar</button>
          </form>

        </div>

      </div>
    );
  }
}

export default Signup;