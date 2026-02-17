import Link from "next/link";
import Image from "next/image";
import Image1 from "@/assets/img/blog/blog-bg-1.jpg";
import Image2 from "@/assets/img/blog/blog-bg-2.jpg";
import Image3 from "@/assets/img/blog/blog-bg-3.jpg";
import { link } from "fs";
function BehindTheDesign() {
  const images = [
    { id: 1, src: Image1, link: "/projects-1", alt: "Behind Design Image 1" },
    { id: 2, src: Image2, link: "/projects-2", alt: "Behind Design Image 2" },
    { id: 3, src: Image3, link: "/projects-3", alt: "Behind Design Image 3" },
  ]
  return (
    <div className="behind__design__area">
      <div className="behind__design_area-inner">
        <div className="behind__design__area-wrapper">
          <div className="title__area">
            <h5 className="title__area-heading">Behind The Design</h5>
            <p className="title__area-title">Shaping <br />
              Experiences That <br />
              Make Life Simpler
            </p>
          </div>
          <div className="content__area">
            <p className="content__area-paragraph">
              I'm a product designer focused on building clean, intuitive interfaces
              that solve real-world problems.

            </p>
            <div className="content__area-explore__more">
              <div className="content__area-explore__more-wrapper">

                <p className="explore__more-text">let's explore more <br />
                  overview our past projects</p>

                <div className="content__area-explore__more-btn">
                  <Link href="/projects" className="content__area-explore__more-btn-link">View Projects <span className="content__area-explore__more-btn-arrow">&rarr;</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img__area">
          <div className="img__area-wrapper">
            {images.map((image) => (
              <div className="img__item">
                <Link href={image.link} key={image.id}>
                  <Image src={image.src} alt={image.alt} width={400} height={300} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div></div>
  )
}
export default BehindTheDesign;