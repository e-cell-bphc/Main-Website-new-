import styles from "../../styles/esummit/carousel.module.css"
import Image from "next/image"
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState,useEffect } from "react"
export default function Carousel({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        console.log(slides);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    // useEffect(() => {
    //     setInterval(nextSlide, 1000);
    //   },[current]);
    return (
        <>
            <section className={styles.slider}>
                <FontAwesomeIcon icon={faArrowCircleLeft} className={styles.lefticon} onClick={prevSlide} />
                <FontAwesomeIcon icon={faArrowCircleRight} className={styles.righticon} onClick={nextSlide} />
                {slides.map((slide, index) => {
                    return (
                        <div className={index === current ? styles.slideactive : styles.slide} key={index}>
                            {index === current && (<Image src={slide.image} height={300} width={550} />)}
                        </div>
                    )
                })}
            </section>
        </>
    )
} 