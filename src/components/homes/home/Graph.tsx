"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReactECharts = dynamic(() => import("echarts-for-react"), {
  ssr: false,
});

type GraphProps = {
  withNexyora: boolean;
};

const YEARS = ["2011", "2012", "2013", "2014", "2015", "2016", "2017"];

const DATA_WITHOUT = [0.2, 1.8, 2.5, 3.0, 3.3, 3.9, 4.6];
const DATA_WITH = [3.2, 3.8, 4.5, 5.3, 6.4, 7.3, 7.6];

export default function Graph({ withNexyora }: GraphProps) {
  // Progressive values to draw line
  const [values, setValues] = useState<number[]>([]);
  const [xLabels, setXLabels] = useState<string[]>([]);

  useEffect(() => {
    const target = withNexyora ? DATA_WITH : DATA_WITHOUT;

    let index = 0;

    // Start from (0,0)
    setValues([0]);
    setXLabels([YEARS[0]]);

    const interval = setInterval(() => {
      index++;

      if (index >= target.length) {
        clearInterval(interval);
        setValues(target);
        setXLabels(YEARS);
        return;
      }

      setValues(target.slice(0, index + 1));
      setXLabels(YEARS.slice(0, index + 1));
    }, 140); // drawing speed

    return () => clearInterval(interval);
  }, [withNexyora]);

  const option = {
    animation: false, // we control animation manually

    title: {
      text: "Business Growth Over Time",
      left: "center",
    },

    tooltip: {
      trigger: "axis",
      valueFormatter: (v: number) => `${v} Million`,
    },

    xAxis: {
      type: "category",
      data: xLabels,
    },

    yAxis: {
      type: "value",
      min: 0,
      name: "Million",
    },

    series: [
      {
        type: "line",
        smooth: true,
        data: values,
        symbol: "circle",
        symbolSize: 7,
        lineStyle: {
          width: 3,
          color: "#4f9cff",
        },
        areaStyle: {
          color: "rgba(79,156,255,0.25)",
        },
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: 420 }}>
      <ReactECharts
        option={option}
        style={{ width: "100%", height: "100%" }}
        onChartReady={(chart) => {
          setTimeout(() => chart.resize(), 0);
        }}
      />
    </div>
  );
}
