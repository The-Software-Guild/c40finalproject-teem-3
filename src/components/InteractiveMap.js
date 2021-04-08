import React from 'react'
import * as am4core from "@amcharts/amcharts4/core";
//import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps"
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import axios from 'axios';

am4core.useTheme(am4themes_animated);

class InteractiveMap extends React.Component {
    region = {
        states: [
            {
                "name": "Alabama",
                "cities": [
                    {
                        "name": "Birmingham"
                    },
                    /*{
                        "name": "Huntsville"
                    },
                    {
                        "name": "Montgomery"
                    },
                    {
                        "name": "Mobile"
                    },
                    {
                        "name": "Tuscaloosa"
                    }
                    */
                ]
            },
            //add more states below... or load from CSV (/src/pythonScraper/statesPop.csv)
        ]
    }
    info = {
        yelpData: [
            {
                "id": "GQinsAGZTF-MRCJWj3Iknw",
                "alias": "the-ricans-food-los-angeles",
                "name": "The Ricans Food",
                "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/y-s9wLYVr99-eh8gzCncfQ/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/the-ricans-food-los-angeles?adjust_creative=FXn2GZu27q2ZxwWX2BQm-Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=FXn2GZu27q2ZxwWX2BQm-Q",
                "review_count": 94,
                "categories": [
                    {
                        "alias": "puertorican",
                        "title": "Puerto Rican"
                    },
                    {
                        "alias": "personalchefs",
                        "title": "Personal Chefs"
                    },
                    {
                        "alias": "foodstands",
                        "title": "Food Stands"
                    }
                ],
                "rating": 5.0,
                "coordinates": {
                    "latitude": 34.0335465,
                    "longitude": -118.2405124
                },
                "transactions": [],
                "price": "$",
                "location": {
                    "address1": "777 S Alameda St",
                    "address2": null,
                    "address3": "",
                    "city": "Los Angeles",
                    "zip_code": "90021",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "777 S Alameda St",
                        "Los Angeles, CA 90021"
                    ]
                },
                "phone": "+17872982520",
                "display_phone": "(787) 298-2520",
                "distance": 3239.0494353663353
            },
            {
                "id": "2NTJmVo6Smp82PmrH83mlQ",
                "alias": "nightshade-los-angeles-2",
                "name": "Nightshade",
                "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/-Tenpo9FH_NNO2z3864h-A/o.jpg",
                "is_closed": false,
                "url": "https://www.yelp.com/biz/nightshade-los-angeles-2?adjust_creative=FXn2GZu27q2ZxwWX2BQm-Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=FXn2GZu27q2ZxwWX2BQm-Q",
                "review_count": 455,
                "categories": [
                    {
                        "alias": "cocktailbars",
                        "title": "Cocktail Bars"
                    },
                    {
                        "alias": "asianfusion",
                        "title": "Asian Fusion"
                    },
                    {
                        "alias": "szechuan",
                        "title": "Szechuan"
                    }
                ],
                "rating": 4.0,
                "coordinates": {
                    "latitude": 34.0463062,
                    "longitude": -118.23425
                },
                "transactions": [],
                "location": {
                    "address1": "923 E 3rd St",
                    "address2": "Ste 109",
                    "address3": null,
                    "city": "Los Angeles",
                    "zip_code": "90013",
                    "country": "US",
                    "state": "CA",
                    "display_address": [
                        "923 E 3rd St",
                        "Ste 109",
                        "Los Angeles, CA 90013"
                    ]
                },
                "phone": "+12136268888",
                "display_phone": "(213) 626-8888",
                "distance": 4758.566330074828
            },]
    }

    showPointsOfInterest() {

        let placeSeries = this.map.series.push(new am4maps.MapImageSeries());

        let placeTemplate = placeSeries.mapImages.template;

        let circle = placeTemplate.createChild(am4core.Circle);
        circle.radius = 10;
        circle.fill = am4core.color("#B27799");
        circle.stroke = am4core.color("#FFFFFF");
        circle.strokeWidth = 2;
        circle.nonScaling = true;
        circle.tooltipText = "{name}";


        //        place.nonScaling = false;
        placeTemplate.propertyFields.latitude = "latitude";
        placeTemplate.propertyFields.longitude = "longitude";

        placeSeries.data = this.generatePointData();

        //        this.setState({map : map})
    }

    generatePointData() {
        //need latitude
        //longitude
        //title of area?
        //iterate through each yelpData item
        //get the coordinates and name of place
        let mapPointData = [];
        this.region.states.map((state, i) => {
            state.cities.map((city, j) => {
                //console.log(city);
                let path = "/v3/businesses/search?location=" + city.name + "&limit=1";
                axios.get(path,
                    {
                        headers: {
                            'Authorization': 'Bearer ',
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json',
                            "accepts": "application/json"
                        }
                    })
                    .then(res => {
                        const info = res.data['businesses'];
                        info.map((business, k) => {
                            let data = {};
                            data["name"] = business.name;
                            data["longitude"] = business.coordinates.longitude;
                            data["latitude"] = business.coordinates.latitude;

                            //this.info.yelpData.push(data);
                            mapPointData.push(data);
                            console.log(data)
                        })
                    })
            })
        })

        console.log( mapPointData);
        return mapPointData;
    }


    //may have to change condition
    componentDidUpdate(oldProps) {
        if (oldProps.yelpData !== this.props.yelpData) {
            this.info.yelpData = this.props.yelpData;
            //            this.showData();
        }
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
            console.log(data);
            ev.target.series.chart.zoomToMapObject(ev.target);
            //                    map.geodata = states.

            //                    polygonSeries.exclude=[data["id"]]
        });



        this.map = map;
        //        console.log(this.map);
        this.showPointsOfInterest();

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