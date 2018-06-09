from geopy.geocoders import Nominatim
geolocator = Nominatim()
location = geolocator.geocode("Johannesburg")
print(location.address)
print((location.latitude, location.longitude))
