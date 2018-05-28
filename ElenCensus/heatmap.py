import matplotlib
import matplotlib.pyplot as plt
import numpy as np
# sphinx_gallery_thumbnail_number = 2

vegetables = ["maths", "science", "computer science"]
p = ["Gauteng", "West Cape","Mpumalanga"]

harvest = np.array([[0.8, 0.9,0.6],
                    [0.3, 0.5, 0.8], 
                    [0.65, 0.55, 0.45]])

fig,ax = plt.subplots()
im = ax.imshow(harvest)

# We want to show all ticks...
ax.set_xticks(np.arange(len(p)))
ax.set_yticks(np.arange(len(vegetables)))
# ... and label them with the respective list entries
ax.set_xticklabels(p)
ax.set_yticklabels(vegetables)

# Rotate the tick labels and set their alignment.
plt.setp(ax.get_xticklabels(), rotation=45, ha="right",
         rotation_mode="anchor")

# Loop over data dimensions and create text annotations.
for i in range(len(vegetables)):
    for j in range(len(p)):
        text = ax.text(j, i, harvest[i, j],
                       ha="center", va="center", color="w")

ax.set_title("Destinctions (per year)")
plt.show()
fig.savefig("foo.pdf", bbox_inches='tight')
