# strip([chars]) : 인자로 전달된 문자를 String의 왼쪽과 오른쪽에서 제거합니다.
# lstrip([chars]) : 인자로 전달된 문자를 String의 왼쪽에서 제거합니다.
# rstrip([chars]) : 인자로 전달된 문자를 String의 오른쪽에서 제거합니다.
# 인자 없으면 공백 제거, 문자열을 끝에 공백이 있기 때문에 제거 해야함

# inser 시간복잡도 O(n) append , pop 시간복잡도 O(1)
# 문자 추가, 삭제는 무조건 커서 왼쪽
# 커서는 왼쪽 오른쪽

# append 와 pop을 이용하기 위해 stack 을 두개로 나누어 저장 후 합친다.
import sys

left=list(input())
right=[]
M=int(input())

for i in range(M):
    com=sys.stdin.readline().split()

    if com[0]=='L':
        if left:
            right.append(left.pop())
    elif com[0]=='D':
        if right:
            left.append(right.pop())
    elif com[0]=='B':
        if left:
            left.pop()
    elif com[0]=='P':
        left.append(com[1])

right.reverse()
for i in left+right: 
    print(i,end='')