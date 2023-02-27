import sys
input = sys.stdin.readline

n = int(input())
string_list = list(input())
numbertest = '0123456789'
hiddennum = ''
for w in string_list:
    if w in numbertest:
        hiddennum += w
    else:
        hiddennum += ' '
print(sum(list(map(int, hiddennum.split()))))