import React, { useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import Project1 from '../../images/random cocktail.png'
import Project2 from '../../images/inspirational homepage.png'
import Project3 from '../../images/react-portfolio.png'
import Modal from '../modal/modal'
// import ProjectGif from '../../GIF/Random-Coctails.gif'
// import ProjectGif2 from '../../GIF/Inspirational-Homepage.gif'


import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import "swiper/swiper-bundle.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";

import './Projects.css'

const Projects = () => {
	const [modalActive, setModalActive] = useState(false)
	const [modalActive2, setModalActive2] = useState(false)
	const [modalActive3, setModalActive3] = useState(false)

	return (
		
		<>
			<div className="projects_container" id='projects'>
				<h2>Projects</h2>
				<Swiper 
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				coverflowEffect={{
				  rotate: 50,
				  stretch: 0,
				  depth: 100,
				  modifier: 1,
				  slideShadows: true,
				}}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className="mySwiper"
				pagination={{ clickable: true }}
				>
    				<SwiperSlide>
      					<div className="projects_item">
							<img src={Project1} alt="" />
							<div className="bottom">
								<h3>Random cocktail generator</h3>
									<a href="https://github.com/maksfilius/randomcocktail" className='btn' target="_blank">GitHub</a>
									<a className='btn btn_second' onClick={() => setModalActive(true)}>Learn more</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="projects_item">
							<img src={Project2} alt="" />
							<div className="bottom">
								<h3>Inspirational homepage</h3>
								<a href="https://github.com/maksfilius/Inspirational-homepage.git" className='btn' target="_blank">GitHub</a>
								<a className='btn btn_second'onClick={() => setModalActive2(true)}>Learn more</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="projects_item">
							<img src={Project3} alt="" />
							<div className="bottom">
								<h3>React Portfolio Website</h3>
								<a href="" className='btn'>GitHub</a>
								<a href="http://localhost:3000/#home" className='btn btn_second' /*onClick={() => setModalActive3(true)}*/>Learn more</a>
							</div>
						</div>
					</SwiperSlide>
        		</Swiper>
			</div>
			<Modal active={modalActive} setActive={setModalActive}>
				<div className="modal_info">
					{/* <img src={ProjectGif} alt="" /> */}
				</div>
			</Modal>
			<Modal active={modalActive2} setActive={setModalActive2}>
			<div className="modal_info">
					{/* <img src={ProjectGif2} alt="" /> */}
				</div>
			</Modal>
			<Modal active={modalActive3} setActive={setModalActive3}>
			</Modal>
		</>
	)
}

export default Projects