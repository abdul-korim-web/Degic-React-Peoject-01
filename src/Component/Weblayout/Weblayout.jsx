import React from 'react';
import Herosection from '../HeroSection/Herosection';
import ModernPresentation from '../modernPresentation/ModernPresentation';
import Branding from '../Branding/Branding';
import Promotion from '../Promotion/Promotion';
import Illustrations from '../Illustrations/Illustrations';
import MakeMoreTime from '../MakeMoreTime/MakeMoreTime';
import Presentation from '../Presentations/Presentation';
import HomeBlog from '../Blog/HomeBlog';


const Weblayout = () => {
    return (
        <>
           <Herosection/>
           <ModernPresentation/>
           <Branding/>
           <Promotion/>
           <Illustrations/>
           <MakeMoreTime/>
           <Presentation/>
           <HomeBlog/> 
           
        </>
    );
}

export default Weblayout;
