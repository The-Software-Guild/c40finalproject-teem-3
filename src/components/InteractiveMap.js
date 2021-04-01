import React from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps"
//import am4geodata_usaHigh from "@amcharts/amcharts4-geodata/worldLow";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {Container} from 'react-bootstrap';

am4core.useTheme(am4themes_animated);


class InteractiveMap extends React.Component{
    componentDidMount() {
        let chart = am4core.create("chartdiv", am4maps.MapChart);


        chart.geodata = am4geodata_usaLow;
        chart.projection = new am4maps.projections.AlbersUsa();
        let polygonSeries = new am4maps.MapPolygonSeries();
        polygonSeries.useGeodata = true;
        chart.series.push(polygonSeries);

        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill =am4core.color("#74B266");

        this.chart = chart;
      }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
            <Container fluid>
                <div id="chartdiv" style={{position: "absolute",top:0,right:0,bottom:0,left:0 }}></div>
            </Container>
    );
  }

//    componentDidMount(){
//
//
//        let map = am4core.create("chartdiv",am4maps.MapChart)
//        map.geodata = am4geodata_usaLow;
//
//        let polygonSeries = new am4maps.MapPolygonSeries();
//        map.series.push(polygonSeries);
//
//
//    }
//
//    render(){
//        let {chart} = this.props;
//        return (
//                <div id="chartdiv">
//                </div>
//        )
//    }
}

export default InteractiveMap;