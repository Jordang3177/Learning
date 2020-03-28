import random
sentence = "*greeting how is your *time *noun? Is it *adj?"
sentence = sentence.split()
adjectives = ["good", "bad", "awesome", "hard", "fantastic"]
nouns = ["Jordan", "James", "Michael", "Stan", "Mike", "Leonard"]
greetings = ["Hello there,", "Howdy,", "Hi,", "Welcome,", "Come on in,"]
times = ["night", "day", "week", "month", "year", "morning", "afternoon",
         "evening"]
indexCount = 0
for word in sentence:
    if "*adj" in word:
        adjectiveChoice = random.choice(adjectives)
        sentence[indexCount] = adjectiveChoice + "?"
    if "*noun" in word:
        nounChoice = random.choice(nouns)
        sentence[indexCount] = nounChoice + "?"
    if "*greeting" in word:
        greetingChoice = random.choice(greetings)
        sentence[indexCount] = greetingChoice
    if "*time" in word:
        timeChoice = random.choice(times)
        sentence[indexCount] = timeChoice
    indexCount += 1
st = ""
for word in sentence:
    st += word + " "
print(st)
