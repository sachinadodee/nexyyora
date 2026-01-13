'use client'
import Image from "next/image";
import ContactFormHomeOne from "@/components/forms/ContactFormHomeOne";
import SocialLinks from "@/components/common/social-links";
import Email from "@/svg/email";
import Location from "@/svg/location";
import Phone from "@/svg/phone";

import shape_1 from "@/assets/img/shape/form-shape-1.png";
import shape_2 from "@/assets/img/shape/form-shape-2.png";
import MouseParallax from "@/utils/MouseParallax";

const contact_content = {
  sub_title: "Contact Us",
  title: (
    <>
      Ready to get started? <br /> {`Let's`} chat.
    </>
  ),
  contact_id: [
    {
      id: 1,
      icon: <Email />,
      target: "mailto:nexyora@gmail.com",
      text: "nexyora@gmail.com",
    },
    {
      id: 2,
      icon: <Location />,
      target: "Kankarbagh , Patna, Pin : 800020",
      text: "Kankarbagh , Patna, Pin : 800020",
    },
    {
      id: 3,
      icon: <Phone />,
      target: "tell:0123456789",
      text: "+91 99559 82901",
    },
  ],
  contact_title: "Send a message",
};
const { sub_title, title, contact_id, contact_title } = contact_content;

const ContactAreaHomeOne = () => {
  return (
    <section className="contact-area theme-bg-img pt-120 pb-120 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="tpcontact-box pr-70 mb-30">
              <div className="tpsection__content">
                <div className="tpsection-sub-title tpsection-sub-title-white mb-30">
                  <span>{sub_title}</span>
                </div>
                <h2 className="tpsection-title tpsection-title-white mb-50">
                  {title}
                </h2>
              </div>
              <div className="tpcontact-info">
                <div className="tpcontact-info-links">
                  {contact_id.map((item, i) => (
                    <a href={item.target} key={i}>
                      <i>{item.icon}</i>
                      {item.text}
                    </a>
                  ))}
                </div>
                <div className="tpcontact-info-social">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="p-relative">
              <div className="tpcontact-form p-relative ml-30">
                <h4 className="tpcontact-form-title mb-35">
                  {contact_title}
                </h4>
                <ContactFormHomeOne />
              </div>

              <div className="tpcontact-shape d-none d-md-block">
                <MouseParallax factorX={0} factorY={0.07} className="tpcontact-shape-one">
                  <Image src={shape_1} alt="theme-pure" />
                </MouseParallax>
                <MouseParallax factorX={0} factorY={0.07} className="tpcontact-shape-two">
                  <Image src={shape_2} alt="theme-pure" />
                </MouseParallax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAreaHomeOne;
