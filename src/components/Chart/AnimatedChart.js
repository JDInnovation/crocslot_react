import React from "react";

import CanvasJSReact from '@canvasjs/react-charts';
import { BiFontFamily } from "react-icons/bi";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function AnimatedChart() {

    const options = {
        animationEnabled: true,
        exportEnabled: false,
        theme: "light1", // "light1", "dark1", "dark2"
        backgroundColor: "#c44bf6",
        /*  title: {
             text: "CROKINOMICS",
             fontColor: "#000000", // Customize title color
             fontFamily: 'every',
             fontSize: 80,
         }, */
        data: [{
            type: "doughnut",
            indexLabel: "{label}: {y}%",
            startAngle: -27.972,
            fontFamily: 'every',
            indexLabelFontSize: 50,
            indexLabelFontColor: "#000000",
            indexLabelLineThickness: 4,
            markerBorderColor: "#000000",
            indexLabelFontFamily: "every",
            dataPoints: [
                { y: 100, label: "Liquidity Pool", color: "#79bf57", },
            ]
        }]
    }

    return (
        <div className="h-100 w-100 justify-center align-center d-flex-row">
            <CanvasJSChart options={options}
            /* onRef = {ref => this.chart = ref} */
            />
        </div>
    );
}

export default AnimatedChart;