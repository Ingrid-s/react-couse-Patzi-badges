import React from 'react';

import'../pages/styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../Components/Navbar'
import Badge from '../Components/Badge'
import BadgeForm from '../Components/BadgeForm'

class BadgeNew extends React.Component {
   state = { form: {
       firstName: '',
        lastName: '',
        email:'',
        jobTitle: '',
        twitter: ''
   } };

   handleChange = e => {
       //const nextForm = this.state.form;//otra forma sin los ... de abajo
       //nextForm[e.target.name]: e.target.value;
       this.setState({
           form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
           },
       });
   };
    render(){
      return(
          <div>
              <Navbar />
              <div className="BadgeNew__hero">
                <img className="image-fluid" src={header} alt="Logo"/>
              </div>

              <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge 
                            firstName={this.state.form.firstName} 
                            lastName={this.state.form.lastName}
                            twitter={this.state.form.twitter}
                            jobTitle={this.state.form.jobTitle}
                            email={this.state.form.email}
                        avatarUrl="http://www.gravatar.com/avatar/?d=identicon"
                        />
                    </div>
                    <div className="col-6">
                        <BadgeForm 
                         onChange={this.handleChange}
                         formValues={this.state.form} />
                    </div>
                </div>
              </div>
          </div>
      )  
    }
}

export default BadgeNew;