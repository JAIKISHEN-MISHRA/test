import React from 'react';
import About from './About';
import WhyUs from './why';
import MenuItem from './Menu';
import Specials from './Specials';
import Events from './Events';
import Booktable from './Booktable';
import Testimonial from './Testimonial';
import Gallery from './Gallery';
import Chef from './Chef';
import Contact from './Contact';

export default function Main() {
    return (
        <main id="main">
            <About/>
            <WhyUs/>
            <MenuItem/>
            <Specials/>
            <Events/>
            <Booktable/>
            <Testimonial/>
            <Gallery/>
            <Chef/>
            <Contact/>
        </main>
)
}
