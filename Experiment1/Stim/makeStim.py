from itertools import combinations

FILENAME = 'AFo2'

with open(FILENAME + '.csv', 'r') as f:
    items1 = []
    items2 = []
    for s, l in enumerate(f.readlines()):
        entry  = l.strip('\n').split(',')
        if s == 0:
            cats = entry
        else:
            for i, w in enumerate(entry):
                if i == 0:
                    pass
                else:
                    if cats[i][-1] == '1':
                        items1.append((w, cats[i][0:-1], entry[0]))
                    else:
                        items2.append((w, cats[i][0:-1], entry[0]))


list1 = []
for c in combinations(items1,2):
    if c[0][1] == c[1][1]:
        list1.append(','.join([c[0][0], c[1][0], c[0][1], c[0][2], c[1][1], c[1][2], 'Same']))
    else:
        list1.append(','.join([c[0][0], c[1][0], c[0][1], c[0][2], c[1][1], c[1][2], 'Different']))

with open(FILENAME + '_1.csv','w') as f:
    f.write('\n'.join(list1))

list2 = []
for c in combinations(items2,2):
    if c[0][1] == c[1][1]:
        list2.append(','.join([c[0][0], c[1][0], c[0][1], c[0][2], c[1][1], c[1][2], 'Same']))
    else:
        list2.append(','.join([c[0][0], c[1][0], c[0][1], c[0][2], c[1][1], c[1][2], 'Different']))

with open(FILENAME + '_2.csv','w') as f:
    f.write('\n'.join(list2))


'''

Word_1, Word_2, Category_1, Bin_1, Category_2, Bin_2

'''