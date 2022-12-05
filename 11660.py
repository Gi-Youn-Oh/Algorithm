import sys
input = sys.stdin.readline
# 행렬 크기 n 합계산회수 m
n,m = map(int,input().split())
# 배열 만들기
Array = [list(map(int,input().split())) for _ in range(n)]
# 0으로 누적합 배열 만들어 두기 세팅
sum_Array = [[0] * (n+1) for i in range(n+1)]

# 누적합 배열 채우기
for i in range(1,n+1):
    for j in range(1,n+1):
        sum_Array[i][j]=sum_Array[i][j-1]+sum_Array[i-1][j] -sum_Array[i-1][j-1] + Array[i-1][j-1]
# 해당 칸을 제외한 나머지 칸 누적합 더해주고 빠진 해당 칸 값 더해주기

# 계산할 변수 받기
for _ in range(m):
    x1, y1, x2, y2 = map(int, input().split())
# 받은 변수로 해당 누적합 계산
    print(sum_Array[x2][y2] - sum_Array[x1-1][y2] - sum_Array[x2][y1-1] + sum_Array[x1-1][y1-1])

# 해당 누적합 칸 - 행-1 칸 누적합 - 열 -1칸 누적합 + 두번빠진 행-1칸 열 -1칸 더해주기