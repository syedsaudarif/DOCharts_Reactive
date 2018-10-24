import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import DOChart from './Charts/DOChart.js';


export default class BarChartContainer extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          type: 'stackedarea2d',
          width: '100%',
          height: '100%',
          dataFormat: 'json',
          dataSource: {
            "chart": {
                "caption": "Sales Trends",
                "showCaption": false,

                "subcaption": "FY 2012 - FY 2013",
                "showSubcaption": false,

                "xaxisname": "Month",
                "showXaxisname": false,
                "showXaxis":false,

                "yaxisname": "Revenue",
                "showYaxisname": false,
                "showYaxis":false,

                "axisColor": "#cccccc",
                
                "showvalues": "1",
                "numberprefix": "$",
                "labeldisplay": "WRAP",
                "linethickness": "3",
                "numVisiblePlot": "12",
                "scrollheight": "10",
                "flatScrollBars": "1",
                "scrollShowButtons": "0",
                "scrollColor": "#cccccc",
                "theme": "fusion"
            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "Jan 2012"
                        },
                        {
                            "label": "Feb 2012"
                        },
                        {
                            "label": "Mar 2012"
                        },
                        {
                            "label": "Apr 2012"
                        },
                        {
                            "label": "May 2012"
                        },
                        {
                            "label": "Jan 2012"
                        },
                        {
                            "label": "Feb 2012"
                        },
                        {
                            "label": "Mar 2012"
                        },
                        {
                            "label": "Apr 2012"
                        },
                    ],
                    "categoryLabelColor": "#555555",
                    "categoryWidth": "65",
                    "categoryLabelHeight":40
                }
            ],
            "dataset": [
                {
                    "data": [
                        {
                            "value": "27400",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "29800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "25800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "26800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "29600",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "27400",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "29800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "25800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "26800",
                            "topSummary": "9.2%"
                        },
                    ],
                    "maxValue": "30000",
                },
                {
                    "data": [
                        {
                            "value": "17400",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "19800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "15800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "16800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "19600",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "27400",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "29800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "25800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "26800",
                            "topSummary": "9.2%"
                        },
                    ],
                    "maxValue": "40000",
                }
            ],
            "style": [
                {
                    "data": [
                        {
                            "barColorTop": "#487591",
                            "barColorBottom": "#0D3E61",
                            "topLabelColor": "#111111",
                            "margin":5,
                            "barWidth":10,
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "barColorTop": "#f442d4",
                            "barColorBottom": "#992a82",
                            "topLabelColor": "#111111",
                            "margin":5,
                            "barWidth":10,
                        }
                    ]
                }
            ]
        }           
        };
      }



    render() {

        var json = this.state.dataSource
        return (
        <View style={{ backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
          <Text>Bar Chart Container</Text>
          <DOChart type="BarChart" width="350" height="200" data={ json }/>
        </View>
      );
    }
}
   