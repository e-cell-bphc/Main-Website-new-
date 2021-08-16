import carousel from "../styles/carousel.module.css";
import Image from "next/dist/client/image";
import img_1 from "../assets/images/img_1.png";
import img_2 from "../assets/images/img_2.png";
import img_3 from "../assets/images/img_3.png";

export default function Carousel() {
  return (
    <>
      <div className={carousel.container}>
        <main className={carousel.main}>
          <div className={carousel.carousel}>
            <div className={carousel.carousel_container}>
              <div className={carousel.row_1}>
                <button
                  className={`${carousel.carousel_button} ${carousel.carousel_button_left}`}
                >
                  <a>left</a>
                </button>

                <div className={carousel.carousel_track_container}>
                  <ul className={carousel.carousel_track}>
                    <li
                      className={`${carousel.carousel_slide} ${carousel.carousel_slide_1}`}
                    >
                      <Image
                        className={carousel.carousel_image}
                        src={img_1}
                        width={400}
                        height={400}
                        alt="img-1"
                      />
                    </li>
                    <li
                      className={`${carousel.carousel_slide} ${carousel.carousel_slide_2}`}
                    >
                      <Image
                        className={carousel.carousel_image}
                        src={img_2}
                        width={400}
                        height={400}
                        alt="img-2"
                      />
                    </li>
                    <li
                      className={`${carousel.carousel_slide} ${carousel.carousel_slide_3}`}
                    >
                      <Image
                        className={carousel.carousel_image}
                        src={img_3}
                        width={400}
                        height={400}
                        alt="img-3"
                      />
                    </li>
                  </ul>
                </div>

                <button
                  className={`${carousel.carousel_button} ${carousel.carousel_button_right}`}
                >
                  <a>right</a>
                </button>
              </div>
              <div className={carousel.carousel_nav}>
                <button
                  className={`${carousel.carousel_indicator} ${carousel.current_slider}`}
                >
                  <a></a>
                </button>
                <button className={carousel.carousel_indicator}>
                  <a></a>
                </button>
                <button className={carousel.carousel_indicator}>
                  <a></a>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
