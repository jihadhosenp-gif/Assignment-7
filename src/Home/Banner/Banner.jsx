import React from 'react';
import { IoMdAdd } from 'react-icons/io';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                        <p className="py-6">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.

                        </p>
                        <button className="btn btn-primary bg-green-900 border-green-900 hover:bg-green-800"> <IoMdAdd /> Add a Friend</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;