import matplotlib.pyplot as plt
import numpy as np

Y =np.arrange(5,10,20)
mIncome = [10000,20000,30000]
fIncome=[10000,25000,20000]

X = np.arange(3)
plt.bar(Y, mIncome,width=0.25,color='b')
plt.bar(Y+0.25,fIncome,width=0.25,color='r')

plt.show()
