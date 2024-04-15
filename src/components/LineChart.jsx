import React from 'react';
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';

const LineChart = ({ data, width, height }) => {
    return (
        <XYPlot width={width} height={height}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="X Axis" />
            <YAxis title="Y Axis" />
            <LineSeries data={data} />
        </XYPlot>
    );
};

export default LineChart;