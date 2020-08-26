import React, { Component } from 'react';
import axios from '../instance/axios';

import Chart from 'react-apexcharts';

class LineBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: this.props.height, 
            series: [{
                name: "Points",
                data: [100, 70, 85, 95, 65, 70, 65, 40, 30, 65, 45, 95, 95, 45, 50, 40, 20, 75, 25, 75]
            }],
            options: {
                chart: {
                type: 'line',
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
                },
                dataLabels: {
                enabled: false
                },
                stroke: {
                curve: 'smooth'
                },
                title: {
                    enabled: false
                },
                grid: {
                    show: false
                },
                tooltip: {
                    theme: 'dark',
                },
                xaxis: {
                    labels: {
                        show: false
                    },
                    tooltip:{
                        enabled: false
                    },
                    crosshairs: {
                        show: false
                    },
                    categories: ['1/11/2020', '2/11/2020', '3/11/2020', '4/11/2020', '5/11/2020', '6/11/2020', '7/11/2020', '8/11/2020', '9/11/2020', '10/11/2020', '11/11/2020', '12/11/2020', '13/11/2020', '14/11/2020', '15/11/2020', '16/11/2020', '17/11/2020', '18/11/2020', '19/11/2020', '20/11/2020'],
                },
                yaxis: {
                    labels: {
                        show: false
                    }
                },
                colors: ['#FE3A21'],
                fill: {
                    type: 'gradient',
                    gradient: {
                        gradientToColors: [ '#FC7B45'],
                        shadeIntensity: 1,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 200, 100, 100]
                    }
                },
                markers: {
                    size: 6,
                    colors: ["#FE3A21"],
                    strokeColors: "transparent",
                    strokeWidth: 0,
                    hover:{
                        size: 10
                    }
                },
                legend: {
                    show: false
                }
            },    
        };
    }


    getPointData(){
        let Auth = localStorage.getItem('auth_bdGroup');
        
        axios.get(`/?itemType=pointsummary&userID=${Auth}`)
            .then(res => {
            const data = res.data;
            console.log(data);

            // bet Points
            const getBetsPoints = [];
            data.get_all_bets_placed.map((point) => {
                return getBetsPoints.push(parseInt(point.points_bet));
            });

            // bet date
            const getBetsDate = [];
            data.get_all_bets_placed.map((date) => {
                return getBetsDate.push(date.bet_date);
            });

            // console.log(getBetsPoints);

            this.setState({
                series: [{
                    data: getBetsPoints
                }],
                options: {
                    xaxis: {
                        categories: getBetsDate
                    }
                }
            })
            
        }).catch((error) => {
            console.log(error)
        })
    }

    componentWillMount(){
        this.getPointData();

        if(window.innerWidth < 991){
            this.setState({height: '160'});
        }
    }

    render() {
        // console.log(this.state.series.data);

        return (
            <Chart options={this.state.options} series={this.state.series} height={this.state.height} />
        );
    }
}

export default LineBar;