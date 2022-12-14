import sys
input = sys.stdin.readline
num = int(input())
target = int(input())
A = list(map(int,input().split()))
A.sort()
count = 0
i,j = 0,num-1 
while i < j:
    if A[i] +A [j] == target:
        count +=1
        i +=1
        j -=1
    elif A[i] + A[j] < target:
        i +=1
    else:
        j -=1
print(count)
# for i in A:
#     for j in A:
#         if (i==j):
#             pass
#         if i+j == target:
#             count +=1

# 고유 번호 정렬
# 양끝 값 (0, num-1) 시작 둘의 합이 m과 같으면 count +1 위치 이동(+1, -1)
# 양끝 값에서 시작해서 둘의 합이 m보다 작으면 i +1
# m보다 크면 작게 j -1
        

