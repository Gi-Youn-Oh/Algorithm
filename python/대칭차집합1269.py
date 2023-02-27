#set을 이용하면 차집합을 구할 수 있다.
n, m = map(int, input().split())

a = set(map(int, input().split()))
b = set(map(int, input().split()))

print(len(a-b) + len(b-a))