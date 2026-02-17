import { StaticImageData } from "next/image";
import service_icon_1 from "@/assets/img/services/User Engagement.png";
import service_icon_2 from "@/assets/img/services/Online Goal.png";
import service_icon_3 from "@/assets/img/services/services-1-icon-3.png";
import service_icon_4 from "@/assets/img/services/Tv Ads.png";
import service_icon_5 from "@/assets/img/services/Mobile Marketing.png";
import service_icon_6 from "@/assets/img/services/Web Content.png";

interface our_service_data_type {
  id: number;
  img: StaticImageData;
  category: string;
  title: string;
}

const our_service_data: our_service_data_type[] = [
  {
    id: 1,
    img: service_icon_1,
    category: "Social Media Marketing",
    title: "Helps your brand attract and <br /> engage customers.",
  },
  {
    id: 2,
    img: service_icon_2,
    category: "SEO Optimization",
    title: "Improves visibility and brings  <br /> high-quality traffic.",
  },
  {
    id: 3,
    img: service_icon_3,
    category: "Graphic Designing",
    title: "Makes your brand instantly <br /> attractive & memorable.",
  },
  {
    id: 4,
    img: service_icon_4,
    category: "Meta & Google Ads",
    title: "Drives targeted traffic and   <br /> Converts quality leads.",
  },
  {
    id: 5,
    img: service_icon_5,
    category: "Digital Marketing",
    title: "Grows your business with <br /> targeted online strategies.",
  },
  {
    id: 6,
    img: service_icon_6,
    category: "Content Creation",
    title: "Creates meaningful content  <br /> that attracts ideal customers. .",
  },
];

export default our_service_data;
