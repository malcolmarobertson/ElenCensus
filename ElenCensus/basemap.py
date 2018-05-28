from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt

m = Basemap(projection='mill',llcrnrlat=-35,urcrnrlat=-20,\
            llcrnrlon=13,urcrnrlon=35,resolution='c')
m.drawcoastlines()
m.drawcountries()
m.drawstates()
m.fillcontinents(color='#04BAE3', lake_color='#FFFFFF')
m.drawmapboundary(fill_color='#FFFFFF')

(-26.205, 28.049722)
from geopy.geocoders import Nominatim
geolocator = Nominatim()
location = geolocator.geocode("Struisbaai, South Africa")
print(location.address)
print((location.latitude, location.longitude))


lat = location.latitude
lon = location.longitude

x,y = m(lon,lat)
m.plot(x,y,'ro',markersize=20,alpha=.5)

plt.title('Geo Plotting')
plt.show()
