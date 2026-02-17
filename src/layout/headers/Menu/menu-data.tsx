import { StaticImageData } from "next/image";
import RightArrowMenu from "@/svg/home-1/RightArrowMenu";
// home demo
import home_demo_1 from "@/assets/img/menu/home-1.jpg";
import home_demo_2 from "@/assets/img/menu/home-2.jpg";
import home_demo_3 from "@/assets/img/menu/home-3.jpg";
import home_demo_4 from "@/assets/img/menu/home-4.jpg";
import home_demo_5 from "@/assets/img/menu/home-5.jpg";
// service deme 
import service_demo_1 from "@/assets/img/header-icon/keyword.png";
import service_demo_2 from "@/assets/img/header-icon/audit.png";
import service_demo_3 from "@/assets/img/header-icon/building.png";
import service_demo_4 from "@/assets/img/header-icon/media.png";
import service_demo_5 from "@/assets/img/header-icon/analysis.png";

import menu_banner from "@/assets/img/header-icon/header-banner/header-banner-1.png";

import type { JSX } from "react";

// type MenuData =  
interface menu_data_type {
  id: number;
  title: string;
  link: string;
  has_dropdown?: boolean;
  has_megamenu?: boolean;
  img_dropdown?: boolean;
  service_dropdown?: boolean;
  blog_dropdown?: boolean;
  sub_menus?: {
    link?: string | any;
    title?: string;
    demo_img?: StaticImageData | any;
    layout?: {
      link: string;
      title: string;
    }[];
  }[];
  banner_sub_title?: string;
  banner_title?: JSX.Element;
  inner_title?: string;
  icon?: JSX.Element;
  m_banner?: StaticImageData;
}

// menu data 
const menu_data: menu_data_type[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false
  },
  {
    id: 2,
    title: "About",
    link: "/about",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Services",
    link: "#",
    has_dropdown: true,
    service_dropdown: true,
    inner_title: "Services Overview",
    sub_menus: [
      { link: "/SEO", title: "SEO", demo_img: service_demo_1, },
      { link: "/Meta & Google Ads", title: "Meta & Google Ads", demo_img: service_demo_1, },
      { link: "/Graphic Designing", title: "Graphic Designing", demo_img: service_demo_2, },
      { link: "/Professional Video Editing", title: "Professional Video Editing", demo_img: service_demo_3, },
      { link: "/content-creation", title: "Content Creation", demo_img: service_demo_4, },
      { link: "/Web Development", title: "Web Devlopment", demo_img: service_demo_5, },
      { link: "/Content Writing", title: "Content Writing", demo_img: service_demo_5, },
      { link: "/Social Media Managament", title: "Social Media Managament", demo_img: service_demo_5, },
      { link: "/E-commerce", title: "E-commerce", demo_img: service_demo_5, },
      { link: "/Competitor Research", title: "Competitor Research", demo_img: service_demo_5, },
    ],
    banner_sub_title: "SEO Agency",
    banner_title: <>The #1 SEO <br /> agency for fast growing <br /> companies.</>,
    icon: <RightArrowMenu />,
    m_banner: menu_banner,
  },
  {
    id: 4,
    title: "Pricing",
    link: "/pricing",
    has_dropdown: false,
  },
  {
    id: 5,
    title: "Blog",
    link: "#",
    has_dropdown: true,
    blog_dropdown: true,
    sub_menus: [
      { link: "/blog", title: "Blog" },
      { link: "/blog-grid", title: "Blog Grid" },
      { link: "/blog-masonry", title: "Blog Masonry" },
      { link: "/blog-list", title: "Blog List" },
      { link: "/blog-details", title: "Blog Details" },
      { link: "/blog-details-2", title: "Blog Details Full Width" },
    ],
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];
export default menu_data;
