  
import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assests/img/header-bg.jpg';

//re usable componenets

import Services from '../common/Services'
import Portfolio from '../common/Portfolio';
import Team from '../common/Team';
import Timeline from '../common/Timeline';



class Home extends Component {

    render(){
        return (
            <div>
               <Header
                    title="Welcome To Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
               />
               <Services />
               <Portfolio />
               <Timeline />
               <Team />

            </div>
        )
    }
}

export default Home;