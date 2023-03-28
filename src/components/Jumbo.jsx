import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";

class Jumbo extends Component {
  state = {greet : ""};

  componentWillMount() {
    let currHr = new Date().getHours(); 
    const username = this.props.name.split(' ')[0];
    if (currHr < 12 && currHr >= 0) this.setState({ greet: "Good Morning " + username  + "!"});
    else if (currHr >= 12 && currHr < 18) this.setState({ greet: "Good Afternoon " + username + "!"});
    else if (currHr >=18) this.setState( { greet: "Good Evening " + username + "!"});
  }

  Userhist(hist) {
    if (hist === "newuser") {
      return <p id="mytextnewuser">
        - Welcome to Nutrify by TEAM ELFTHANOS<br/>
        - Let's visit <Link to={routes.ACCOUNT}>your Nutrify profile</Link><br/>
        - Know your health status<br/>
      </p>
    }
  }

  render() {
    return (
      <div style={{marginTop: "120px"}}> 
          <Jumbotron className="Jumbotron">
              <div className="overflow">
                <h1 className="jumbo_transform">{this.state.greet}</h1>
              </div>
               <div className="overflow">
                <p className="jumbo_transform">
                  {
                    this.props.hist !== "" ? <h5 id="mytextjambo">{this.Userhist(this.props.hist)}</h5> :
                    <div>
                      <h5 id="mytextjambo"><strong><i>Welcome to Nutrify - Your all-in-one solution for healthy eating, personalized diet and workout plans, and expert support on your wellness journey!</i></strong></h5>
                    </div>
                  }
                </p>
            </div>
          </Jumbotron>
      </div>
    )
  }
  
}

export default Jumbo;
