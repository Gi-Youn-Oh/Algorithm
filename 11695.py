import sys
input = sys.stdin.readline
# n = 수의 개수 / m = 합 계산 회수
n, m = map(int, input().split())

numbers = list(map(int,input().split()))

numbers_sum = [0]

tmp = 0
for i in numbers:
    tmp += i
    numbers_sum.append(tmp)
# print(numbers_sum)

for _ in range(m):
    i, j = map(int, input().split())
    print(numbers_sum[j]-numbers_sum[i-1])