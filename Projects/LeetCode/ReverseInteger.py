import sys

class ReverseInteger(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        number = str(x)
        lenNumber = len(number)
        i = len(number) - 1
        answer = ""

        while i >= 0:
            answer += number[i]
            i = i - 1
        lenanswer = len(answer)
        i = lenanswer - 1
        if answer[0] == '-':
            returnAnswer = answer[0] + int(answer[1:])
        else:
            returnAnswer = int(answer)
        print(returnAnswer)
        return returnAnswer


    reverse(123, 123)
    print(sys.maxsize)
    print(2 ** 31 - 1)