import React, {Component} from 'react';
import TeamMember from './TeamMember';

import team1 from '../assests/img/team/1.jpg';
import team2 from '../assests/img/team/2.jpg';


const members = [
    {name: 'Yogesh Agrawal', role: 'Lead Developer', image: team1},
    {name: 'Kriti Rai', role: 'Contributor', image: team2},    
];

class Team extends Component {
    render(){
        return (
            <section className="bg-light" id="team">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Let's Meet Them</h3>
                    </div>
                </div>
                <div className="row" >
                    
                    {members.map((member, i) => {
                        return <TeamMember {...member} key={i} />
                    })}
                    
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                    <p className="large text-muted">Eat Sleep Code Repeat.</p>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

export default Team;