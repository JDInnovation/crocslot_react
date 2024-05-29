import React from "react";

import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function AnimatedChart() {

const options = {
    animationEnabled: true,
    exportEnabled: false,
    theme: "light1", // "light1", "dark1", "dark2"
    backgroundColor: "#A020F0",
    title:{
        text: "Crokinomics",
        fontColor: "#000000", // Customize title color
        
        fontSize: 20,
    },
    data: [{
        type: "pie",
        indexLabel: "{label}: {y}%",		
        startAngle: -27.972,
        dataPoints: [
            { y: 7.77, label: "Team", color: "#6a0dad"},
            { y: 92.23, label: "Liquidity Pool",color: "#228b22" },
        ]
    }]
}

return (
    <div className="h-100 w-100">
        <CanvasJSChart options = {options}
        /* onRef = {ref => this.chart = ref} */
        />
    </div>
);
}

export default AnimatedChart;