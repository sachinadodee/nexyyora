"use client"
import { useEffect, useState } from "react";
import BGShape from "@/svg/bg-shape"; 
import Image from "next/image";
import analysis_shape_1 from "@/assets/img/shape/analysis-chart-1.png"; 
import analysis_shape_2 from "@/assets/img/shape/analysis-chart-2.png"; 
import Count from "@/components/common/count";
import Graph from "./Graph";


const analysis_content = {
    sub_title: "With Nexyora",
    title: <><span>Transform Your Business</span> <br /> Without vs With Nexyora</>,
    sm_des: <>Discover the real impact of digital marketing. Without Nexyora, your business struggles to grow.  <br />With Nexyora, every click, lead, and campaign drives measurable success.</>,
    counter_monthly: [
        {
            id: 1,
            cls: "ml-20 mb-40", 
            count_number: 121,
            type: "count",
            text: "Monthly Lead Generation"
        },
        {
            id: 2,
            cls: "text-center mb-40", 
            count_number: 735,
            type: "count",
            text: "Website Traffic monthly"
        },
        {
            id: 3,
            cls: "d-flex justify-content-end mr-25 mb-40", 
            count_number: 2,
            type: "percent",
            text: "Social Media Engagement"
        },
         {
            id: 3,
            cls: "d-flex justify-content-end mr-25 mb-40", 
            count_number: 7,
              type: "percent",
            text: "Revenue Growth"
        },

    ],
    counter_yearly: [
        {
            id: 1,
            cls: "ml-20 mb-40", 
            count_number: 2151,
            type: "count",
            text: "Monthly Lead Generation"
        },
        {
            id: 2,
            cls: "text-center mb-40", 
            count_number: 14980,
            type: "count",
            text: "Website Traffic monthly"
        },
        {
            id: 3,
            cls: "d-flex justify-content-end mr-25 mb-40", 
            count_number: 51,
            type: "percent",
            text: "ocial Media Engagementt"
            
        },
         {
            id: 3,
            cls: "d-flex justify-content-end mr-25 mb-40", 
            count_number: 52,
              type: "percent",
            text: "Revenue Growth"
        },

        
    ],
}
const {sub_title, title, sm_des, counter_monthly, counter_yearly} = analysis_content


const AnalysisAreaHomeOne = () => {
    const [isMonthlyActive, setIsMonthlyActive] = useState(true);
    const handleMonthlyClick = () => {
      setIsMonthlyActive(true);
    };
  
    const handleYearlyClick = () => {
      setIsMonthlyActive(false);
    };
  
    const handleSwitcherClick = () => {
      setIsMonthlyActive((prevState) => !prevState);
    };

  useEffect(() => {
    const monthlySEOElement = document.getElementById("monthly-seo");
    const hourlySEOElement = document.getElementById("hourly-seo");

    if (isMonthlyActive) {
      if (monthlySEOElement) {
        monthlySEOElement.classList.remove("analisis-hide");
      }
      if (hourlySEOElement) {
        hourlySEOElement.classList.add("analisis-hide");
      }
    } else {
      if (monthlySEOElement) {
        monthlySEOElement.classList.add("analisis-hide");
      }
      if (hourlySEOElement) {
        hourlySEOElement.classList.remove("analisis-hide");
      }
    }
  }, [isMonthlyActive]);
 

    return (
        <>
            <section className="analysis__area pb-80">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="tpsection__content text-center mb-70">
                            <div className="tpbanner__sub-title mb-15">
                                <span>{sub_title}</span>
                                <i>
                                    <BGShape /> 
                                </i>
                            </div>
                            <h2 className="tpsection__title mb-25">{title}</h2>
                            <p>{sm_des}</p>
                        </div>
                    </div>
                    </div>
                    <div className="tpanalysis-chart p-relatives pb-60">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="tpanalysis-different">
                                <label  
                                className={`analisis-toggler ${isMonthlyActive ? "analisis-toggler--is-active" : ""}`}
                                onClick={handleMonthlyClick}
                                 id="filt-monthly-seo">
                                WITHOUT NEXYORA
                                </label>
                                <div className="analisis-toggle">
                                <input 
                                type="checkbox" 
                                id="switcher-seo" 
                                className="analisis-check" 
                                onClick={handleSwitcherClick}
                                defaultChecked={!isMonthlyActive}
                                />
                                <b className="analisis-switch"></b>
                                </div>
                                <label  
                                className={`analisis-toggler ${isMonthlyActive ? "" : "analisis-toggler--is-active"}`}
                                onClick={handleYearlyClick}
                                id="filt-yearly-seo">
                                WITH NEXYORA
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="tpanalysis-shape d-none d-lg-block">
                        <div className="tpanalysis-shape-one">
                            {/* <Graph withNexyora={isMonthlyActive} /> */}
                            <Image src={analysis_shape_1} alt="theme-pure" />
                        </div>
                        <div className="tpanalysis-shape-two">
                            <Image src={analysis_shape_2} alt="theme-pure" />
                        </div>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-12">
                        <div className="tpseo-analisis">

                            <div id="monthly-seo" className={`wrapper-full ${isMonthlyActive ? "analisis-hide" : ""}`}>
                                <div className="tpanalysis__wrapper">
                                    <div className="row">
                                        {counter_monthly.map((item, i) => 
                                            <div key={i} className="col-lg-4 col-md-4">
                                                <div className={`tpanalysis__catagory ${item.cls}`}>
                                                    <div className="tpanalysis__item">
                                                    <h3 className="tpanalysis__count mb-10">
                                                        <span data-purecounter-duration="1"  className="purecounter">
                                                                 <Count number={item.count_number}  add_style={true} type={item.type} />
                                                        </span>
                                                    </h3>
                                                    <p>{item.text}</p>
                                                    </div>
                                                </div>
                                            </div>                                        
                                        )} 
                                    </div>
                                </div>
                            </div>
                            <div id="hourly-seo" className={`wrapper-full ${isMonthlyActive ? "" : "analisis-hide"}`}>
                                <div className="tpanalysis__wrapper">
                                    <div className="row">
                                        {counter_yearly.map((item, i) => 
                                            <div key={i} className="col-lg-4 col-md-4">
                                                <div className={`tpanalysis__catagory ${item.cls}`}>
                                                    <div className="tpanalysis__item">
                                                    <h3 className="tpanalysis__count mb-10 center">
                                                        <span data-purecounter-duration="1" data-purecounter-end="726"  className="purecounter"> 
                                                            <Count number={item.count_number} type={item.type}/> 
                                                        </span>
                                                    </h3>
                                                    <p>{item.text}</p>
                                                    </div>
                                                </div>
                                            </div> 
                                        )} 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AnalysisAreaHomeOne;