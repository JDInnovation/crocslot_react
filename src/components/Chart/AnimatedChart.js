import React, { useRef, useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './AnimatedChart.css';

Chart.register(...registerables);

const AnimatedChart = () => {
  const chartContainerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const data = {
    labels: ['Team', 'Liquidity Pool'],
    datasets: [
      {
        data: [7.77, 92.23],
        backgroundColor: ['#6a0dad', '#228b22'],
        hoverBackgroundColor: ['#6a0dad', '#228b22'],
        borderWidth: 5,
        borderColor: '#ffffff',
      },
    ],
  };

  const options = {
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          color: '#000000',
          font: {
            size: 18,
            ffamily: "every",
          },
        },
      },
      title: {
        display: true,
        text: 'Crokinomics',
        color: '#000000',
        font: {
          size: 24,
          family: "every",
        },
      },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (chartContainerRef.current) {
      observer.observe(chartContainerRef.current);
    }

    return () => {
      if (chartContainerRef.current) {
        observer.unobserve(chartContainerRef.current);
      }
    };
  }, []);

  return (
    <div className="animated-chart" ref={chartContainerRef}>
      {isInView && <Pie data={data} options={options} />}
    </div>
  );
};

export default AnimatedChart;
