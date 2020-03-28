import random
number = random.randint(0,100)
guess = 0
while number != int(guess) :
    guess = input("Enter a number between 1 and 100\n")
    try:
            if int(guess) > number:
                print("Too high!")
            elif int(guess) < number:
                print("Too low!")
            else:
                print("You guessed it!")
    except:
            print("your guess is not a number!")

print("Guess the word that i'm thinking of letter by letter")

listofwords = ["hello", "sofa", "computer"]
thing = random.choice(listofwords)
if thing == "hello":
    answer = ["h", "e", "l", "l", "o"]
elif thing == "sofa":
    answer = ["s", "o", "f", "a"]
else:
    answer = ["c", "o", "m", "p", "u", "t", "e", "r"]


gathered = ""

userinput = ""
while gathered != thing:
    userinput = input("Guess the letter \n")
    if userinput == answer[0] and len(answer) != 1:
        answer.remove(userinput)
        gathered = gathered + userinput
        print("correct keep going, so far you have gotten " + gathered)
    elif userinput != answer[0]:
        print("Incorrect, keep trying!")
    else:
        answer.remove(userinput)
        gathered = gathered + userinput
        print("You guess the word right, it's " + gathered)


randomstuff = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
randomstuffagain = [1, "hello", 2, "wow", 3, "More things", 4, "Please stop :("]
print(random.randint(0, 10))
print(random.choice(randomstuff))
print(random.choice(randomstuffagain))
    
