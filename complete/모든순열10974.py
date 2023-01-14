n = int(input())
temp = []

# print(*A) => A의 개수만큼 출력
def dfs():
    if len(temp) == n: # 탈출 조건
        print(*temp)
        return
    for i in range(1, n + 1):
        if i not in temp:
            temp.append(i)
            dfs()
            temp.pop()

dfs()