import seaborn as sns
sns.set_style("whitegrid")
tips = sns.load_dataset("tips")
ax = sns.swarmplot(x=tips["total_bill"])

ax = sns.swarmplot(x="day", y="total_bill", data=tips)

