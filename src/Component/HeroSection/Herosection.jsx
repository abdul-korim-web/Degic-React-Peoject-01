import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Herosection = () => {
    return (
        <>
            <section className="Hero flex flex-col justify-center items-center space-y-5 px-5   ">
                <div className=' w-[80%]'>
                    <img src="/image/Heroimage.png" alt="" />
                </div>
                <div>
                    <h2 className='text-3xl '>Simply explained with illustrations</h2>
                    <p>There are a lot of different components that will help you create the perfect look for your project</p>
                    <div>
                        <Button variant="contained">Contained</Button>
                        <Button variant="outlined">Outlined</Button>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Herosection;
