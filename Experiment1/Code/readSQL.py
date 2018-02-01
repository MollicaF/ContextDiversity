import sqlite3

connection = sqlite3.connect('participants.db')
cursor = connection.cursor()
cursor.execute("SELECT * FROM turkdemo") #experimentData
results = cursor.fetchall()

null=None
true=True
false=False

output = []

for r in results:
    try:
        dic = eval(r[16].encode('ascii','ignore'))
        trial = dic['data']
        for t in trial:
            if type(t['trialdata'])==list:
                out = [dic['workerId'], t['current_trial'], t['dateTime']]
                out.extend(t['trialdata'])
                output.append(', '.join(map(str, out)))
    except:
        pass            

with open('data.csv','w') as f:
    f.write('\n'.join(output))
    f.close()
    

