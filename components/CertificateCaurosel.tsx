import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, {
    useEffect,
    useState,
} from 'react';

import Slider from 'react-slick';

import DashboardCSS from '../style/Home.module.css';

const CertificateSlider = () => {
    const [onlyBestSeller, setOnlyBestSeller] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='mt-[12px]'>

            <Slider {...settings}>

                <div className={`w-full px-2 hover:cursor-pointer ${DashboardCSS.carslImgContainer}`}>

                    <div style={{ position: 'absolute', bottom: '10px', zIndex: '3' }} className='px-2 w-full'>
                        <h1 className='h-8 flex justify-center'>Internship Compilation</h1>
                        <div className='flex justify-between items-center'>
                            <p className='text-slate-400' >6 July 2022</p>
                            <p className='text-white' > - </p>
                            <p className='mr-4 text-slate-400'>6 sept 2022</p>
                        </div>
                    </div>

                    <div className={`${DashboardCSS.carslImgContainer}`} style={{ border: '3px solid crimson', borderRadius: '8px' }}>
                        <figure><img src="https://i.ibb.co/8Bt6cnX/Screenshot-99.png" alt="Product Image" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} /></figure>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                            zIndex: '2',
                        }}
                    ></div>
                </div>








                <div className={`w-full px-2 hover:cursor-pointer ${DashboardCSS.carslImgContainer}`}>

                    <div style={{ position: 'absolute', bottom: '10px', zIndex: '3' }} className='px-2 w-full'>
                        <h1 className='h-8 flex justify-center'>Internship Offer Letter</h1>
                        <div className='flex justify-between items-center'>
                            <p className='text-slate-400' >6 July 2022</p>
                            <p className='text-white' > - </p>
                            <p className='mr-4 text-slate-400'>6 sept 2022</p>
                        </div>
                    </div>

                    <div className={`${DashboardCSS.carslImgContainer}`} style={{ border: '3px solid crimson', borderRadius: '8px' }}>
                        <figure><img src="https://i.ibb.co/fdfyYQf/Screenshot-103.png" alt="Product Image" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} /></figure>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                            zIndex: '2',
                        }}
                    ></div>
                </div>









                <div className={`w-full px-2 hover:cursor-pointer ${DashboardCSS.carslImgContainer}`}>

                    <div style={{ position: 'absolute', bottom: '10px', zIndex: '3' }} className='px-2 w-full'>
                        <h1 className='h-8 flex justify-center'>Offer Letter Translanse Pvt Ltd</h1>
                        <div className='flex justify-between items-center'>
                            <p className='text-slate-400' >6 July 2023</p>
                            <p className='text-white' > - </p>
                            <p className='mr-4 text-slate-400'>Present</p>
                        </div>
                    </div>

                    <div className={`${DashboardCSS.carslImgContainer}`} style={{ border: '3px solid crimson', borderRadius: '8px' }}>
                        <figure><img src="https://i.ibb.co/vzhTXQj/Screenshot-102.png" alt="Product Image" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} /></figure>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                            zIndex: '2',
                        }}
                    ></div>
                </div>







                <div className={`w-full px-2 hover:cursor-pointer ${DashboardCSS.carslImgContainer}`}>

                    <div style={{ position: 'absolute', bottom: '10px', zIndex: '3' }} className='px-2 w-full'>
                        <h1 className='h-8 flex justify-center'>Offer Letter Translanse Pvt Ltd</h1>
                        <div className='flex justify-between items-center'>
                            <p className='text-slate-400' >6 July 2023</p>
                            <p className='text-white' > - </p>
                            <p className='mr-4 text-slate-400'>Present</p>
                        </div>
                    </div>

                    <div className={`${DashboardCSS.carslImgContainer}`} style={{ border: '3px solid crimson', borderRadius: '8px' }}>
                        <figure><img src="https://i.ibb.co/cJbvG70/Screenshot-104.png" alt="Product Image" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} /></figure>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                            zIndex: '2',
                        }}
                    ></div>
                </div>





                <div className={`w-full px-2 hover:cursor-pointer ${DashboardCSS.carslImgContainer}`}>

                    <div style={{ position: 'absolute', bottom: '10px', zIndex: '3' }} className='px-2 w-full'>
                        <h1 className='h-8 flex justify-center'>Programming Hero</h1>
                        <div className='flex justify-between items-center'>
                                <p className='text-slate-400' >31 December 2020</p>
                                <p className='text-white' > - </p>
                                <p className='mr-4 text-slate-400'>Present</p>
                            </div>
                    </div>

                    <div className={`${DashboardCSS.carslImgContainer}`} style={{ border: '3px solid crimson', borderRadius: '8px' }}>
                        <figure><img src="https://i.ibb.co/Q6DF8wg/Screenshot-100.png" alt="Product Image" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} /></figure>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                            zIndex: '2',
                        }}
                    ></div>
                </div>


                <div className={`w-full px-2 hover:cursor-pointer ${DashboardCSS.carslImgContainer}`}>

                    <div style={{ position: 'absolute', bottom: '10px', zIndex: '3' }} className='px-2 w-full'>
                        <h1 className='h-8 flex justify-center'>Black Belt Reward by PH</h1>
                        <div className='flex justify-between items-center'>
                                <p className='text-slate-400' >31 December 2020</p>
                                <p className='text-white' > - </p>
                                <p className='mr-4 text-slate-400'>Present</p>
                            </div>
                    </div>

                    <div className={`${DashboardCSS.carslImgContainer}`} style={{ border: '3px solid crimson', borderRadius: '8px' }}>
                        <figure><img src="https://i.ibb.co/z5tH6RT/1659380673743.png" alt="Product Image" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} /></figure>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                            zIndex: '2',
                        }}
                    ></div>
                </div>

            </Slider>
        </div>
    );
};

export default CertificateSlider;