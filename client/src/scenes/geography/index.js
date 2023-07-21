import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetGeographyQuery } from "state/api";
import Header from "components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "state/geoData";

const Geography = () => {
    const theme = useTheme();
    const { dataNet } = useGetGeographyQuery();
    console.log("Network : ", dataNet);

    const data = [
        { id: "IDN", value: 35 },
        { id: "CHN", value: 54 },
        { id: "THA", value: 6 },
        { id: "ARG", value: 4 },
        { id: "POL", value: 11 },
        { id: "BRA", value: 9 },
        { id: "SVN", value: 2 },
        { id: "PHL", value: 16 },
        { id: "JOR", value: 2 },
        { id: "GRC", value: 3 },
        { id: "RUS", value: 24 },
        { id: "VNM", value: 4 },
        { id: "FRA", value: 16 },
        { id: "CAN", value: 2 },
        { id: "CHL", value: 1 },
        { id: "SLV", value: 1 },
        { id: "SWE", value: 5 },
        { id: "PER", value: 3 },
        { id: "BIH", value: 2 },
        { id: "SRB", value: 2 },
        { id: "UKR", value: 3 },
        { id: "UGA", value: 2 },
        { id: "NGA", value: 5 },
        { id: "HND", value: 2 },
        { id: "CMR", value: 3 },
        { id: "AFG", value: 3 },
        { id: "USA", value: 6 },
        { id: "PRT", value: 8 },
        { id: "PRY", value: 2 },
        { id: "BOL", value: 2 },
        { id: "JAM", value: 1 },
        { id: "NAM", value: 1 },
        { id: "MDG", value: 1 },
        { id: "ECU", value: 1 },
        { id: "LBN", value: 2 },
        { id: "COM", value: 2 },
        { id: "BGD", value: 1 },
        { id: "ESP", value: 1 },
        { id: "PSE", value: 1 },
        { id: "CZE", value: 5 },
        { id: "KOR", value: 1 },
        { id: "IRL", value: 4 },
        { id: "DOM", value: 2 },
        { id: "NIC", value: 1 },
        { id: "JPN", value: 7 },
        { id: "GBR", value: 1 },
        { id: "KGZ", value: 1 },
        { id: "LSO", value: 1 },
        { id: "ZAF", value: 2 },
        { id: "BGR", value: 1 },
        { id: "NZL", value: 1 },
        { id: "IRN", value: 2 },
        { id: "SYR", value: 3 },
        { id: "DNK", value: 1 },
        { id: "MEX", value: 3 },
        { id: "MKD", value: 1 },
        { id: "MNG", value: 1 },
        { id: "BLR", value: 1 },
        { id: "MMR", value: 1 },
        { id: "BWA", value: 2 },
        { id: "COL", value: 2 },
        { id: "SAU", value: 1 },
        { id: "CUB", value: 1 },
        { id: "ALB", value: 1 },
        { id: "NPL", value: 1 },
        { id: "SOM", value: 1 },
        { id: "ARM", value: 1 },
        { id: "NLD", value: 1 },
    ];

    return (
        <Box m="1.5rem 2.5rem">
            <Header
                title="Geography"
                subtitle="Know your customers locations..."
            />
            <Box
                mt="40px"
                height="75vh"
                border={`1px solid ${theme.palette.secondary[200]}`}
                borderRadius="4px"
            >
                {console.log(data, geoData.features)}
                {data ? (
                    <ResponsiveChoropleth
                        data={data}
                        theme={{
                            axis: {
                                domain: {
                                    line: {
                                        stroke: theme.palette.secondary[200],
                                    },
                                },
                                legend: {
                                    text: {
                                        fill: theme.palette.secondary[200],
                                    },
                                },
                                ticks: {
                                    line: {
                                        stroke: theme.palette.secondary[200],
                                        strokeWidth: 1,
                                    },
                                },
                                text: {
                                    fill: theme.palette.secondary[200],
                                },
                            },
                            legends: {
                                text: {
                                    fill: theme.palette.secondary[200],
                                },
                            },
                            tooltip: {
                                container: {
                                    color: theme.palette.primary.main,
                                },
                            },
                        }}
                        features={geoData.features}
                        margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
                        domain={[0, 60]}
                        unknownColor="#666666"
                        label="properties.name"
                        valueFormat=".2s"
                        projectionScale={150}
                        projectionTranslation={[0.45, 0.6]}
                        projectionRotation={[0, 0, 0]}
                        graticuleLineWidth={0}
                        graticuleLineColor="#ffffff"
                        borderColor="#ffffff"
                        borderWidth={1.3}
                        defs={[
                            {
                                id: "dots",
                                type: "patternDots",
                                background: "inherit",
                                color: "#38bcb2",
                                size: 4,
                                padding: 1,
                                stagger: true,
                            },
                            {
                                id: "lines",
                                type: "patternLines",
                                background: "inherit",
                                color: "#eed312",
                                rotation: -45,
                                lineWidth: 6,
                                spacing: 10,
                            },
                            {
                                id: "gradient",
                                type: "linearGradient",
                                colors: [
                                    {
                                        offset: 0,
                                        color: "#000",
                                    },
                                    {
                                        offset: 100,
                                        color: "inherit",
                                    },
                                ],
                            },
                        ]}
                        legends={[
                            {
                                anchor: "bottom-right",
                                direction: "column",
                                justify: true,
                                translateX: 0,
                                translateY: -120,
                                itemsSpacing: 0,
                                itemWidth: 94,
                                itemHeight: 18,
                                itemDirection: "left-to-right",
                                itemTextColor: theme.palette.secondary[20],
                                itemOpacity: 0.85,
                                symbolSize: 18,
                                effects: [
                                    {
                                        on: "hover",
                                        style: {
                                            itemTextColor:
                                                theme.palette.background.alt,
                                            itemOpacity: 1,
                                        },
                                    },
                                ],
                            },
                        ]}
                    />
                ) : (
                    <>Loading</>
                )}
            </Box>
        </Box>
    );
};

export default Geography;
