import React from 'react'
import * as am4core from "@amcharts/amcharts4/core";
//import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps"
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


class InteractiveMap extends React.Component{
    componentDidMount() {
        let map = am4core.create("chartdiv", am4maps.MapChart);


        map.geodata = am4geodata_usaLow;
        map.projection = new am4maps.projections.AlbersUsa();
        let polygonSeries = new am4maps.MapPolygonSeries();
        polygonSeries.useGeodata = true;
        map.series.push(polygonSeries);

        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill =am4core.color("#659DBD");

        let hoverState = polygonTemplate.states.create("hover");

        hoverState.properties.fill = am4core.color("#3c5e71");

        polygonTemplate.events.on("hit",function(ev){
                    ev.target.series.chart.zoomToMapObject(ev.target,2);
                });

        this.map = map;
      }

  componentWillUnmount() {
    if (this.map) {
      this.map.dispose();
    }
  }

  render() {
    return (
                <div id="chartdiv" style={{position: "absolute",top: 100, right:0,bottom:0,left:0}}></div>
    );
  }

}

export default InteractiveMap;