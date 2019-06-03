import React from 'react'

import"./styles/BadgesList.css"
import twLogo from '../images/twitter.svg';


class BadgesList extends React.Component{
    render(){
        return(
           <ul className='list-unstyled'>
               {this.props.badges.map(badges => {
                   return (
                       <li key={badges.id} className= 'Badge__section-name'>
                           <div className='BadgeList_badge-container'>
                                <img src={badges.avatarUrl} className='BadgeList__avatar'/>
                            <div class='BadgeList_badge_text_container'>
                                <p class='BadgeList__name'>
                                    {badges.firstName} {badges.lastName}
                                </p>
                                <p>
                                    <img src={twLogo} className='tw__logo'/>
                                    <span className='tw__text'>{badges.twitter}</span>
                                </p>
                                <p>
                                    {badges.jobTitle}
                                </p>
                                
                            </div>
                            
                           </div>
                       </li>
                   )
               })}

           </ul>
        )
    }
}

export default BadgesList;