# 8진수인 경우에는 수의 앞에 0이 주어지고, 16진수인 경우에는 0x가 주어진다.
# int(숫자, 진수)
# 8진수
# int(숫자, 8)

def convert (string_num):
    if string_num[0] == '0':
        if string_num[1] == 'x':
            return int(string_num, 16)
        else:
            return int(string_num, 8)
    else:
        return string_num

string_num = input()
print(convert(string_num))
