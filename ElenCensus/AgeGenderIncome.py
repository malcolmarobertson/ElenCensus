import matplotlib.pyplot as plt
import matplotlib.cm as cm
import numpy as np

N=4
province=['Ontario','Quebec','BritishColumbia','Manitoba','NovaScoti']
children = [0,1,3,4]
age = [23,23,40,60]
income = [620,752,629,630]

# Choose some random colors
colors=cm.rainbow(np.random.rand(N))

# Use those colors as the color argument
plt.scatter(children,income,s=age,color=colors)
for i in range(N):
    plt.annotate(province[i],xy=(children[i],income[i]))
plt.xlabel('Size(*1000km2)')
plt.ylabel('Population(ten million)')

# Move title up with the "y" option
plt.title('The Car Accidents Injuries Rate in 5 Canada Provinces',y=1.05)
plt.show()
