import sys 
input = sys.stdin.readline

# 소인수분해할 값
n = int(input())

# 소인수분해할 값이 1이면 빈 줄 출력
if n == 1:
    print('')

# 2부터 n까지 나누어 떨어지는 수를 찾는다.
for i in range(2, n+1):
    if n % i == 0:
        # 나누어 떨어지는 수를 출력하고
        while (n % i) == 0:
            print(i)
            # 나누어 떨어지는 수로 나누어 n 값을 갱신한다.
            n = n / i