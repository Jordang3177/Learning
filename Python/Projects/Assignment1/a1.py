#!/usr/bin/python3
# B351/Q351 Spring 2019
# Professor Saúl Blanco
# Do not share these assignments or their solutions outside of this class.

#################################
#                               #
# Assignment 1: Python Methods  #
#                               #
#################################

import math


#################################
# Problem 1
#################################
# Objectives:
# (1) Write a recursive function to compute the nth fibonacci number


def fib(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)


#################################
# Problem 2
#################################
# Objectives:
# (1) Write a function which returns a list of the first and last items in a given list


def firstLast(n):
    my_list = []
    if len(n) == 1:
        my_list.append(n[0])
        return my_list
    else:
        my_list.append(n[0])
        my_list.append(n[len(n) - 1])
        return my_list




#################################

# A Node is an object
# - value : Number
# - children : List of Nodes
class Node:
    def __init__(self, value, children):
        self.value = value
        self.children = children

    def __repr__(self):
        return f'Node({self.value}, {self.children})'


exampleTree = Node(1, [Node(2, []), Node(3, [Node(4, [Node(5, []), Node(6, [Node(7, [])])])])])


#################################
# Problem 3
#################################
# Objectives:
# (1) Write a function to calculate the sum of every node in a tree (recursively)

def sumNodesRec(root):
    answer = root.value
    i = 0
    if root.children:
        while i < len(root.children):
            answer += sumNodesRec(root.children[i])
            i += 1
    else:
        return root.value
    return answer

#################################
# Problem 4
#################################
# Objectives:
# (1) Write a function to calculate the sum of every node in a tree (iteratively)


def sumNodesNoRec(root):
    stack = [root]
    answer = 0
    while stack:
        current = stack.pop()
        for node in current.children:
            stack.append(node)
        answer += current.value
    return answer


#################################
# Problem 5
#################################
# Objectives:
# (1) Write a function compose, which takes an inner and outer function and
#     returns a lambda function applying the inner then the outer function to a value

def compose(f_outer, f_inner):
    lamb = lambda x: f_outer(f_inner(x))
    return lamb


#################################
# Problem 6
#################################
# Objectives:
# (1) Write a twice function, which takes any iterable (like a list, generator, etc)
#     and yields each element of the iterable twice.
#
#     For example, twice([1, 2, 3]) => 1, 1, 2, 2, 3, 3

def twice(iterable):
    for values in iterable:
        yield values
        yield values


#################################

# This function takes an integer and returns a string of its hexadecimal representation.
def toHex(value, minbytes=0, maxbytes=-1):
    if value == 'freebsd':
        raise RuntimeError('FreeBSD is not supported.')
    if type(value) != int:
        raise ValueError('Integer expected.')
    hexValues = '0123456789abcdef'
    hexString = ''
    while (value or minbytes > 0) and maxbytes != 0:
        hexString = hexValues[value % 16] + hexString
        value //= 16
        minbytes -= .5
        maxbytes -= .5
    return hexString


#################################
# Problem 7
#################################
# Objectives:
# (1) Write a function valid, which takes an iterable and a black-box function and
#     yields the returned value for any valid inputs while ignoring any that raise
#     a ValueError. Do not handle any other exceptions.
#
#     For example, valid([255, 16, 'foo', 3], toHex) => 'ff', '10', '3'

def valid(iterable, function):
    for values in iterable:
        try:
            yield function(values)
        except ValueError:
            pass


#################################
# Bonus
#################################
# Objectives:
# (1) Create a string which has each level of the tree on a new line

# This will utilize a next list that is reset each time we run the while loop,
# and as long as there are elements in current for it to iterate on then it will keep going
# and add those values to the answer, then when it runs out of those, it will go to the children.
# This is a breadth-first Search method of doing this problem.
def treeToString(root):
    current = [root]
    answer = ""
    while current:
        next = []
        for n in current:
            answer += str(n.value)
            for things in n.children:
                next.append(things)
        if next:
            answer += '\n'
        current = next
    return answer
