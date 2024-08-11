# This program helps us build the json object representing the information of all the students in the institution. The object will be used
# to fill up our database in a mongodb server. We can add as many students as possible and analyze their performance.
import pandas as pd
import numpy as np
from faker import Faker

fake = Faker()
names = [fake.name() for _ in range(0,30)]

physics = np.random.randint(0, 31, size=30)
chemistry = np.random.randint(0, 31, size=30)
math = np.random.randint(0, 31, size=30)

collection = pd.DataFrame({
    'Name': names,
   'Physics':physics,
    'Math':math,
    'Chemistry':chemistry
})

json  = collection.to_json()

f = open('Student.json','w',encoding='utf-8')
f.write(json)




