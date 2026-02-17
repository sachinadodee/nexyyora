import Image from "next/image";
import Testimonial from "./Testimonial";

interface content_type {
  count: number;
  title: string;
}

interface Skill {
  id: number;
  icon: React.ReactNode;
  title: string;
}

function Banner2() {


  const contents: content_type[] = [
    { count: 1, title: "Content Creation" },
    { count: 2, title: "Digital Marketing" },
    { count: 3, title: "Brand Strategy" },
    { count: 4, title: "Social Media Management" },
  ]

  const skills: Skill[] = [
    {
      id: 1,
      icon: <span className="icon">⭐</span>,
      title: "Supa Blox"
    },
    {
      id: 2,
      icon: <span className="icon">⭐</span>,
      title: "Hype Blox"
    },
    {
      id: 3,
      icon: <span className="icon">⭐</span>,
      title: "Frame Blox"
    },
    {
      id: 4,
      icon: <span className="icon">⭐</span>,
      title: "Ultra Blox"
    }
  ];

  return (

      <div className="banner2__area">
        <div className="banner2__wrapper">

          <div className="tpbanner2__area">
            <div className="tpbanner2__wapper">
              <div className="tpbanner2__content">
                <div className="tpbanner2__content-intro">
                  <p className="tpbanner2__content-intro-line1">Hey, I'm a <br /></p>
                  <p className="tpbanner2__content-intro-line2">Content <br /> Creator</p>
                </div>

                <div className="tpbanner2__content-quote">
                  <p className="tpbanner2__content-quote-line1">Great design should <br />feel invisible</p>
                  <p className="tpbanner2__content-quote-line2">- John Doe</p>
                </div>
              </div>

              <div className="content__feature">
                <div className="content__feature-wrapper">
                  {contents.map((item: content_type) => (
                    <div key={item.count} className="feature__item">
                      <p className="feature__item-count"><span className="feature__item-count-icon">#</span><span className="feature__item-count-text">{item.count}</span></p>
                      <p className="feature__item-title">{item.title}</p>
                    </div>))
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="skills__area">
            <div className="skills__area-wrapper">
              <div className="dis">
                <p className="dis_text">Trusted by Brands I’ve  <br /> Helped Shape</p>
              </div>
              {skills.map((skill) => (
                <div key={skill.id} className="skill__item">
                  <span className="skill__item-icon">{skill.icon}</span>
                  <span className="skill__item-title">{skill.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

  );
}
export default Banner2;