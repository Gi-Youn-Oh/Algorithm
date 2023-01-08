import sys

input = sys.stdin.readline

n, m = map(int, input().split())

A = list(map(int, input().split()))
B = list(map(int, input().split()))

C = A + B
C.sort()
# 배열 문자열로 변환 " " 없으면 1/2/3 슬래시 생김
answer = " ".join(map(str, C))

print(answer)