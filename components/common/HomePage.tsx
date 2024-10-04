"use client";
import React, { useRef } from "react";
import styles from "../../styles/homePage.module.css";
import Logo from "../../Assets/audioshotsLogo.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Cantarell } from "next/font/google";
import img1 from "../../Assets/A-1.png";
import img2 from "../../Assets/A-1.png";
import img3 from "../../Assets/iPhoneImg.png";
import img4 from "../../Assets/A-2.png";
import img5 from "../../Assets/A-2.png";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const audio = Cantarell({
weight: "400",
subsets: ["latin"],
preload: true,
});

const Home = () => {
var tl = gsap.timeline();
const logoImg = useRef(null);
const appName = useRef(null);
const captionText = useRef(null);
const discrptionText = useRef(null);
const img1A = useRef(null);
const img2A = useRef(null);
const img3A = useRef(null);
const img4A = useRef(null);
const img5A = useRef(null);

useGSAP(() => {
    tl.from(logoImg.current, {
    height: "25vh",
    width: "25vw",
    y: 200,
    duration: 1,
    delay: 1,
    });
    tl.from(appName.current, {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    });
    tl.from(
    captionText.current,
    {
        y: 300,
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
    },
    "=-0.5"
    );
    tl.from(
    discrptionText.current,
    {
        y: 300,
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
    },
    "=-0.5"
    );
    tl.from(img3A.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        delay: 0,
        // scrollTrigger:{
        //     trigger:img3A.current,
        //     start: 'top-=200 center',
        //     end: 'bottom-=50 top',
        //     once:true
        // }
    })
    gsap.from([img2A.current],{
    x:300,
    opacity:0,
    scale:0.5,
    duration:1,
    dealy:0.5,
    scrollTrigger:{
                trigger:[img2A.current],
                start: 'top-=200 center',
                end: 'bottom-=30 top',
                once:true
            }
})
gsap.from([ img4A.current],{
    x:-300,
    opacity:0,
    scale:0.5,
    duration:1,
    dealy:0.5,
    scrollTrigger:{
                trigger:[img4A.current],
                start: 'top-=200 center',
                end: 'bottom-=30 top',
                once:true
            }
})
    gsap.from([img1A.current],{
    x:300,
    opacity:0,
    scale:0.5,
    duration:1,
    dealy:1,
    scrollTrigger:{
                trigger:[img1A.current],
                start: 'top-=200 center',
                end: 'bottom-=30 top',
                once:true
            }
})
gsap.from([img5A.current],{
    x:-300,
    opacity:0,
    scale:0.5,
    duration:1,
    dealy:1,
    scrollTrigger:{
                trigger:[img5A.current],
                start: 'top-=200 center',
                end: 'bottom-=30 top',
                once:true
            }
})
});
return (
    <section className="mb-7">
    <div className={styles.main}>
        <div
        ref={logoImg}
        style={{ borderRadius: "10px" }}
        className={styles.logo}
        >
        <Image style={{ borderRadius: "20px" }} src={Logo} alt="logo" />
        </div>
        <div ref={appName} className={`${styles.title} ${audio.className}`}>
        <p>Audio Shots</p>
        </div>
        <div ref={captionText} className={`${styles.caption}`}>
        <h1>Your voice, your podcasts anytime, anywhere</h1>
        </div>
        <div
        ref={discrptionText}
        className={`${styles.description} ${audio.className}`}
        >
        <p>
            Discover, stream, and share your favorite podcasts all in one place.
            Elevate your listening experience with endless content and
            personalized recommendations.
        </p>
        </div>
    </div>
    <div className={styles.mainImgs}>
        <div className={styles.imgContaner}>
        <div ref={img1A} className={styles.img0}>
            <Image src={img1} alt="" />
        </div>
        <div ref={img2A} className={styles.img1}>
            <Image src={img2} alt="" />
        </div>
        <div ref={img3A} className={styles.img2}>
            <Image src={img3} alt="" />
        </div>
        <div ref={img4A} className={styles.img3}>
            <Image src={img4} alt="" />
        </div>
        <div ref={img5A} className={styles.img4}>
        <Image src={img5} alt="" />
        </div>
        </div>
    </div>
    </section>
);
};

export default Home;
