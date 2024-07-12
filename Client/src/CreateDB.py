import pandas as pd
import numpy as np
from faker import Faker

fake = Faker()
names = [fake.name() for _ in range(0,31)]

physics = np.random.randint(0, 31, size=30)
chemistry = np.random.randint(0, 31, size=30)
math = np.random.randint(0, 31, size=30)

collection = pd.DataFrame({
   ' Physics':physics,
    'Math':math,
    'Chemistry':chemistry
})

json  = collection.to_json()

f = open('Student.json','w',encoding='utf-8')
f.write(json)




