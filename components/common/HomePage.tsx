"use client";
import React, { useRef } from "react";
import styles from "../../styles/homePage.module.css";
import Logo from "../../Assets/audioshotsLogo.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Cantarell } from "next/font/google";
import image1 from "../../Assets/img1.png";
import image2 from "../../Assets/img2.png";
import image3 from "../../Assets/img3.png";
import image4 from "../../Assets/img4.png";
import image5 from "../../Assets/img5.png";
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
const image1A = useRef(null);
const image2A = useRef(null);
const image3A = useRef(null);
const image4A = useRef(null);
const image5A = useRef(null);
const caption1 = useRef(null);
const caption2 = useRef(null);
const caption3 = useRef(null);

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
    tl.from(image3A.current, {
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
    gsap.from([image2A.current],{
    x:300,
    opacity:0,
    scale:0.5,
    duration:1,
    dealy:0.5,
    scrollTrigger:{
                trigger:[image2A.current],
                start: 'top-=200 center',
                end: 'bottom-=30 top',
                once:true
            }
})
gsap.from([ image4A.current],{
    x:-300,
    opacity:0,
    scale:0.5,
    duration:1,
    dealy:0.5,
    scrollTrigger:{
                trigger:[image4A.current],
                start: 'top-=200 center',
                end: 'bottom-=30 top',
                once:true
            }
})
    gsap.from([image1A.current],{
    x:300,
    opacity:0,
    scale:0.5,
    duration:1,
    dealy:1,
    scrollTrigger:{
                trigger:[image1A.current],
                start: 'top-=200 center',
                end: 'bottom-=30 top',
                once:true
            }
})
gsap.from([image5A.current],{
    x:-300,
    opacity:0,
    scale:0.5,
    duration:1,
    dealy:1,
    scrollTrigger:{
                trigger:[image5A.current],
                start: 'top-=200 center',
                end: 'bottom-=30 top',
                once:true
            }
})

gsap.from(caption1.current , {
    y:300,
    Opacity:0,
    scale:0.5,
    duration:0.7,
    delay:0.5,
    scrollTrigger:{
        trigger:[caption1.current],
        start: 'top-=650 center',
        end: 'bottom-=1250 top',
        scrub:1
    }
})
gsap.from(caption2.current , {
    y:300,
    Opacity:0,
    scale:0.5,
    duration:0.7,
    delay:0.5,
    scrollTrigger:{
        trigger:[caption2.current],
        start: 'top-=650 center',
        end: 'bottom-=1250 top',
        scrub:1
    }
})
gsap.from(caption3.current , {
    y:300,
    Opacity:0,
    scale:0.5,
    duration:0.7,
    delay:0.5,
    scrollTrigger:{
        trigger:[caption3.current],
        start: 'top-=650 center',
        end: 'bottom-=1250 top',
        scrub:1
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
        <div ref={captionText} className={`${styles.caption} ${audio.className}`}>
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
        <div ref={image1A} className={styles.img0}>
            <Image src={image1} alt="" />
        </div>
        <div ref={image2A} className={styles.img1}>
            <Image src={image2} alt="" />
        </div>
        <div ref={image3A} className={styles.img2}>
            <Image src={image3} alt="" />
        </div>
        <div ref={image4A} className={styles.img3}>
            <Image src={image4} alt="" />
        </div>
        <div ref={image5A} className={styles.img4}>
        <Image src={image5} alt="" />
        </div>
        </div>
    </div>
    <div ref={caption1} className={`${styles.audioCaption} ${audio.className}`}>
        <div className={styles.firstCaption}>
            <h1><span style={{color:'#59CE8F'}}>Short on Time? Big on Audio?</span> Listen to the Best of Podcasts, News, and Entertainment in a Snap!</h1>
        </div>
        <div ref={caption2} className={styles.firstCaption}>
            <h1><span style={{color:'#59CE8F'}}>Stay updated with trending audio clips in real time.</span> Never miss out on what’s hot.</h1>
        </div>
        <div ref={caption3} className={styles.firstCaption}>
            <h1><span style={{color:'#59CE8F'}}>Discover shorts from diverse categories like</span> news, comedy, tech, and more—something for every mood.</h1>
        </div>
    </div>
    </section>
);
};

export default Home;
