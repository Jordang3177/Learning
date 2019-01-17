
# The template for the story

STORY = "This morning %s woke up feeling %s. 'It is going to be a %s day!' Outside, a bunch of %s s were protesting to keep %s in stores. They began to %s to the rhythm of the %s, which made all the %s s very %s. Concerned, %s texted , who flew %s to %s and dropped %s in a puddle of frozen %s. %s woke up in the year %s, in a world where %s s ruled the world."

print"MAD LIBS has started!!!"


name =raw_input("Enter a name ")
adj1 =raw_input("Enter 1 adjective ")
adj2 =raw_input("enter 2nd adj ")
adj3 =raw_input("enter 3rd adj ")
verb =raw_input("enter a verb ")
noun1 =raw_input("enter a noun ")
noun2 =raw_input("enter 2nd noun ")
animal =raw_input("enter an animal ")
food =raw_input("enter a food ")
fruit =raw_input("enter a fruit ")
superhero =raw_input("enter a superhero ")
country =raw_input("enter a country ")
dessert =raw_input("enter a dessert ")
year =raw_input("enter a year ")

print STORY % (name, adj1, adj2, animal, food, verb, noun1, fruit, adj3, name, superhero, name, country, name, dessert, name, year, noun2)
