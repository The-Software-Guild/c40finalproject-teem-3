import React from 'react'
import * as am4core from "@amcharts/amcharts4/core";
//import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps"
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


class InteractiveMap extends React.Component{
    info = {
                stateData : [
                        {"id":"US-CA",
                        "name": "California",
                        "value" : 100
                        },
                ]
    }


    componentDidMount() {
        //create map object
        let map = am4core.create("chartdiv", am4maps.MapChart);

        //populate map with USA GeoData
        map.geodata = am4geodata_usaLow;
        map.projection = new am4maps.projections.AlbersUsa();

        //this will create the state borders
        let polygonSeries = new am4maps.MapPolygonSeries();
        polygonSeries.useGeodata = true;


        //populate the series with our own data that we will get from the Yelp API
        polygonSeries.data = this.info.stateData;
        map.series.push(polygonSeries);

        //template to allow hover / tooltips
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name} : {value}";
        polygonTemplate.fill =am4core.color("#659DBD");

        let hoverState = polygonTemplate.states.create("hover");

        hoverState.properties.fill = am4core.color("#3c5e71");

        //allows on click zoom functionality
        polygonTemplate.events.on("hit",function(ev){
                    console.log(ev.target.dataItem.dataContext);
                    ev.target.series.chart.zoomToMapObject(ev.target);
                });

        //can also have an over functionality that can show information
//        polygonTemplate.events.on("over",function(ev){
//
//        })
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