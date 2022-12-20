import sys
input = sys.stdin.readline

number = int(input())
score = list(map(int,input().split()))
max_score = max(score)
# print(max_score)

# score.remove(max_score)
# print(score)

new_scores = []
for i in range(0,len(score)):
    new_score=score[i]/max_score*100
    new_scores.append(new_score)

# new_scores.append(max_score)
# print(new_scores)

sum = 0 
for i in new_scores:
    sum = sum + i

answer = sum / len(new_scores)
print(answer)


