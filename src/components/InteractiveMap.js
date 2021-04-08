import React from 'react'
import * as am4core from "@amcharts/amcharts4/core";
//import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps"
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import axios from 'axios';
import cityStates from '../pythonScraper/mostPopCityInState.json';

am4core.useTheme(am4themes_animated);

class InteractiveMap extends React.Component {
    state = {
        loading: false,
        cleanedMapPointData: [],
        mapPointData: [],
        states: cityStates

            //add more states below... or load from CSV (/src/pythonScraper/statesPop.csv)

    }

    componentDidMount() {
        console.log("App is now mounted.")
        this.setState({ loading: true, })

//        console.log(this.state.states)
//        console.log(cityAndStateData)
        console.log("Loading businesses data")
        this.state.states.map((state, i) => {
            state.cities.map((city, j) => {
                console.log(city);
                let path = "/v3/businesses/search?location=" + city.name + "&limit=1";
                axios.get(path,
                    {
                        headers: {
                            'Authorization': 'Bearer 8bzvw3fDl9VH96QencxdFeUK6t-ksZvnbMU0qwTHPQuMdmrqb79ky71zkLbRpUeBifjtOtgYN9UJOxpVHPgIvqG_WK3Rj-gpVQCcvoB21lRsKKWODk-sA9ZxMWlrYHYx',
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json',
                            "accepts": "application/json"
                        }
                    })
                    .then(res => {
                        const business = res.data.businesses;
                        let data = {};
                            data["name"] = business.name;
                            data["coordinates"] = business.coordinates;
                            

                        this.setState({mapPointData: this.state.mapPointData.concat(business), loading:false})
//                        console.log(res.data.businesses);
//                        console.log(this.state.mapPointData);
                        this.showPointsOfInterest();

                        //const info = res.data['businesses'];
                        /*info.map((business, k) => {
                            let data = {};
                            data["name"] = business.name;
                            data["longitude"] = business.coordinates.longitude;
                            data["latitude"] = business.coordinates.latitude;
                            //this.info.yelpData.push(data);
                            //mapPointData.push(data);
                            //console.log(data)
                        }) */
                    })
            })
        })

        
        //create map object
        let map = am4core.create("chartdiv", am4maps.MapChart);

        //populate map with USA GeoData
        map.geodata = am4geodata_usaLow;
        map.projection = new am4maps.projections.AlbersUsa();

        //this will create the state borders
        let polygonSeries = new am4maps.MapPolygonSeries();
        polygonSeries.useGeodata = true;


        //populate the series with our own data that we will get from the Yelp API
        map.series.push(polygonSeries);

        //template to allow hover / tooltips
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#659DBD");

        let hoverState = polygonTemplate.states.create("hover");

        hoverState.properties.fill = am4core.color("#3c5e71");

        //allows on click zoom functionality
        polygonTemplate.events.on("hit", function (ev) {
            let data = ev.target.dataItem.dataContext;
//            console.log(data);
            ev.target.series.chart.zoomToMapObject(ev.target);
            //                    map.geodata = states.

            //                    polygonSeries.exclude=[data["id"]]
        });



        this.map = map;
        //        console.log(this.map);
      }

    
    
    showPointsOfInterest() {

        let placeSeries = this.map.series.push(new am4maps.MapImageSeries());

        let placeTemplate = placeSeries.mapImages.template;

        let circle = placeTemplate.createChild(am4core.Circle);
        circle.radius = 5;
        circle.fill = am4core.color("#B27799");
        circle.stroke = am4core.color("#FFFFFF");
        circle.strokeWidth = 2;
        circle.nonScaling = true;
        circle.tooltipText = "{name}";


        //        place.nonScaling = false;
        placeTemplate.propertyFields.latitude = "latitude";
        placeTemplate.propertyFields.longitude = "longitude";
        let cleanMapPointData = [];
        this.state.mapPointData.map((business, k) => {
//            console.log(business)
            let data = {};
            data["name"] = business.name;
            data["longitude"] = business.coordinates.longitude;
            data["latitude"] = business.coordinates.latitude;
            cleanMapPointData.push(data);
            this.setState({cleanedMapPointData: cleanMapPointData});
        })
        
        placeSeries.data = this.state.cleanedMapPointData;
        //console.log(placeSeries.data)
        //        this.setState({map : map})
    }



    //may have to change condition
    componentDidUpdate(oldProps) {
        if (oldProps.yelpData !== this.props.yelpData) {
            this.info.yelpData = this.props.yelpData;
            //            this.showData();
        }
    }


    componentWillUnmount() {
        if (this.map) {
            this.map.dispose();
        }
    }

    render() {
        return (
            <div id="chartdiv" style={{ position: "absolute", top: 100, right: 0, bottom: 0, left: 0 }}></div>
        );
    }

}

export default InteractiveMap;