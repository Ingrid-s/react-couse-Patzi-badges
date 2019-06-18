import React from 'react';

import'../pages/styles/BadgeEdit.css'
import header from '../images/platziconf-logo.svg'
import Badge from '../Components/Badge';
import BadgeForm from '../Components/BadgeForm';
import api from '../api';

class BadgeEdit extends React.Component {
   state = { form: {
        loading: true,
        error: null,
        firstName: '',
        lastName: '',
        email:'',
        jobTitle: '',
        twitter: ''
   }
 };
 componentDidMount(){
     this.fetchData()
 }

 fetchData = async e => {
    this.setState ({ loading: true, error: null})

    try{
        const data = await api.badges.read(
            this.props.match.params.badgeId
        )
            this.setState({ loading: false, form: data })
    }catch (error) {
            this.setState({loading: false, error: error})   
    }
 }

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

   handleSubmit = async  e => {
      e.preventDefault ()
      this.setState({loading: true, error: null})

        try{
            await api.badges.update(this.props.match.params.badgeId, this.state.form);
                this.setState({ loading: false });

               this.props.history.push('/badges');
        }catch (error) {
            this.setState({ loading: false, error: error})
        }

   }
    render(){
      return(
          <React.Fragment>
              <div className="BadgeEdit__hero">
                <img className="BadgeEdit__hero-imgage image-fluid" src={header} alt="Logo"/>
              </div>

              <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge 
                            firstName={this.state.form.firstName || 'First Name'} 
                            lastName={this.state.form.lastName || 'Last Name'}
                            twitter={this.state.form.twitter ||'Twitter'}
                            jobTitle={this.state.form.jobTitle || 'JOB_TITTLE'}
                            email={this.state.form.email || 'EMAIL'}
                        //avatarUrl="http://www.gravatar.com/avatar/?d=identicon"
                        />
                    </div>
                    <div className="col-6">
                        <h2>Edit Attendant</h2>
                        <BadgeForm 
                         onChange={this.handleChange}
                         onSubmit= {this.handleSubmit}
                         formValues={this.state.form} />
                    </div>
                </div>
              </div>
          </React.Fragment>
      )  
    }
}

export default BadgeEdit;