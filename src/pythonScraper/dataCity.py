import pandas as pd
from os.path import dirname, abspath

d = dirname(dirname(abspath(__file__)))
df = pd.read_html('https://en.wikipedia.org/wiki/List_of_largest_cities_of_U.S._states_and_territories_by_population')

#Loading data from wikipedia to csv file.
df[1][['State, federaldistrict, or territory','Most populous','2nd most populous','3rd most populous','4th most populous','5th most populous']].to_csv(d + '\\pythonScraper\\statesPop.csv')


