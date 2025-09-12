import React from 'react';

import Button from '@mui/material/Button';

const Herosection = () => {
    return (
        <>
            <section className="Hero flex flex-col justify-center items-center space-y-5 md:flex-row  w-full  md:px-20 md:justify-center pb-20   ">
                <div className='heroimage w-[80%] md:order-2 md:w-[50%] '>
                    <img src="/image/Heroimage.png" alt="" />
                </div>
                <div className='herotext flex flex-col space-y-3 md:order-1 md:space-y-5 '>
                    <h2 className='text-3xl font-semibold md:text-4xl   '>Simply explained with illustrations</h2>
                    <p className='text-sm text-gray-700 md:w-[80%]  '>There are a lot of different components that will help you create the perfect look for your project</p>
                    <div className='hero-button' >
                        <Button sx={{marginRight:"20px", background:"#5F62E2", borderRadius:"10px"}} variant="contained">Get Started</Button>
                        <Button sx={{background:"#5F62E226", borderRadius:"10px",color:"#5F62E2"}} variant="outlined">Learn More</Button>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Herosection;
