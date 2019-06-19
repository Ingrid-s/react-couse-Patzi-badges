import React from 'react'
import { Link } from 'react-router-dom';

import"./styles/BadgesList.css"
import twLogo from '../images/twitter.svg';
import Gravatar from '../Components/Gravatar'


class BadgesList extends React.Component{
    render(){
        if(this.props.badges.length === 0){
            return (
                <div>
                    <h3>No badges were found!</h3>
                    <Link  className='btn btn-primary' to= '/badges/New'>
                        Create new badge
                    </Link>
                </div>
            )
        }
        return(
           <ul className='list-unstyled'>
               {this.props.badges.map(badges => {
                   return (
                       <li key={badges.id} className= 'Badge__section-name'>
                           <Link className="text-reset text-decoration-none" to={`/badges/${badges.id}/`}>
                                <div className='BadgeList_badge-container'>
                                        <Gravatar
                                            email ={badges.email}
                                            alt='Avatar'
                                            className='BadgeList__avatar'
                                        />
                                        
                                    <div className='BadgeList_badge_text_container'>
                                        <p className='BadgeList__name'>
                                            {badges.firstName} {badges.lastName}
                                        </p>
                                        <p>
                                            <img src={twLogo} alt='logo de twitter' className='tw__logo'/>
                                            <span className='tw__text'>{badges.twitter}</span>
                                        </p>
                                        <p>
                                            {badges.jobTitle}
                                        </p>
                                    </div>
                                </div>
                           </Link>
                       </li>
                   )
               })}

           </ul>
        )
    }
}

export default BadgesList;