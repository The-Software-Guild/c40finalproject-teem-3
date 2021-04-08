import csv
import json


toJSON = []

with open('statesPop.csv','r') as csv_file:
    reader = csv.reader(csv_file)

    data = []

    for row in reader:
        state = row[1]
        rest = row[2:]
        # print(state, rest)

        stateInfo = {"name": state}
        cities = []
        #get only the first city
        for x in range(1):
            cities.append({"name": rest[x]})

        stateInfo["cities"] = cities

        data.append(stateInfo)

    toJSON = data
    csv_file.close()

print(toJSON)
with open("mostPopCityInState.json", 'w') as outfile:
    json.dump(toJSON,outfile)
# with open("topThreeCityInStates.json", 'w') as outfile:
#     json.dump(toJSON,outfile)
