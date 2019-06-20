import React from 'react'
import { Link } from 'react-router-dom';

import"./styles/BadgesList.css"
import twLogo from '../images/twitter.svg';
import Gravatar from '../Components/Gravatar'

/*custom hook que empaqueta toda la funcionalidad*/
function useSearchBadges (badges) {
    const [ query, setQuery ] = React.useState ('');
    const [ filteredBadges, setFilteredBadges] = React.useState(badges)

     React.useMemo(() => {
        const result =badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges( result)
}, [ badges, query ]);

return { setQuery, filteredBadges }
}

function BadgesList (props){
        const badges = props.badges;

        const {query, setQuery, filteredBadges } = useSearchBadges(badges)

        

        if(filteredBadges.length === 0){
            return (
                <div>
                    <div className="form-group">
                        <label> Filter Badges</label>
                        <input 
                            type="text"
                            className="form-control" 
                            value={query}
                            onChange={e => {
                            setQuery(e.target.value)
                            }}
                        />
                    </div>
                    
                    <h3>No badges were found!</h3>
                    <Link  className='btn btn-primary' to= '/badges/New'>
                        Create new badge
                    </Link>
                </div>
               
            );
        }
        return(
            <div className="BadgesList">
                <div className="form-group">
                    <label> Filter Badges</label>
                    <input type="text" className="form-control" 
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                    />
                </div>
                <ul className='list-unstyled'>
                    {filteredBadges.map(badges => {
                        return (
                            <li key={badges.id} className= 'Badge__section-name'>
                                <Link className='text-reset text-decoration-none' to={`/badges/${badges.id}/`}>
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
            </div>
           
        );
    
}

export default BadgesList;