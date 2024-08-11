# This program is used analyze the academic performance of the entire institution. It reads all the data from the database and makes
# a bar plot of students and their grades in each subject.
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_json('Stats.json')
longDB = pd.melt(df,id_vars=['Name'],value_vars=['Physics','Chemistry','Math'],var_name='Subject',value_name='Points')
stats = sns.catplot(kind="bar",data=longDB, hue="Subject", x="Name", y="Points", height=7, aspect=7)
view = stats.figure
stats.savefig('Student.png')


