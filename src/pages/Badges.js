import React from 'react';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';

import BadgesList from '../Components/BadgesList';
import { Link } from 'react-router-dom';
import PageLoading from '../Components/PageLoading';
import PageError from '../Components/PageError';
import MiniLoader from '../Components/MiniLoader'
import api from '../api'

class Badges extends React.Component {

  constructor (props) {
    super(props)
    console.log('1. constructor()')
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  
  }

  componentDidMount() {
    console.log('3 componentDidMount()')

    this.fetchData()

    this.intervalId = setInterval(this.fetchData, 5000);

    /*this.timeoutId = setTimeout(() => {
        this.setState({
         
        })
    }, 3000);*/
}

 componentWillUnmount (){
   clearInterval(this.intervalId);
 }

fetchData = async ()=> {
this.setState({ loading: true, error: null })

try {
const data =  await api.badges.list();
this.setState({ loading: false, data: data })
}catch (error) {
this.setState({ loading: false, error: error })
}
}
  componentDidUpdate(prevProps, prevState){
    console.log('5, component did Update');
    console.log({
      prevProps: prevProps, 
      prevState: prevState
    });
    console.log({
      props: this.props,
      state: this.state
    });
  }

  componentWillUnmount(){
    console.log('6. component Will Unmount')
    clearTimeout(this.timeoutId)
  }


  render() {

    if (this.state.loading === true && !this.state.data ) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return  <PageError error={this.state.error} />;
    }
    console.log('2/4 Render');
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.data} />
          {this.state.loading && <MiniLoader />}

        </div>
      </React.Fragment>
    );
  }
}

export default Badges;