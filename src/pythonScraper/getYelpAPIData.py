import requests
import json

API_KEY = 'H_TE2DxoDYSyTynT7CcGqjBks9KeP6v0U7DxzeIvxZck4mUmPcqwKpetWsbwhgqLhhyZpunHg_CkPwKpi775lihgbqot2ChY9Tc_VPMPW7mDirQERXYFBiyNRZdvYHYx'

headers = {'Authorization' : 'Bearer ' + API_KEY}

base_url = 'https://api.yelp.com/v3/businesses/search'

params = {"location" : "birmingham","limit": 1}

businesses = []

with open('mostPopCityInState.json') as file:
    data = json.load(file)
    for row in data:
        cities = row["cities"] #array of dict of cities
        for dict in cities:
            city = dict["name"]
            params = {'location' : city, "limit" : 1}
            req = requests.get(base_url,params=params,headers=headers)
            for business in req.json()["businesses"]:
                name = business["name"]
                longitude,latitude = business["coordinates"]["longitude"], business["coordinates"]["latitude"]

                busData = {}

                busData["name"] = name
                busData["longitude"] = longitude
                busData["latitude"] = latitude

                businesses.append(busData)

# with open("topResData.js", 'w') as outfile:
#     json.dump(businesses,outfile)
# req = requests.get(base_url,params=params,headers=headers)

# print(businesses)

#need name
#and coordinates
# print(req.json()["businesses"]) #array of businesses
# print("status code of call: ", req.status_code);



