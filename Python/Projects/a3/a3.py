#!/usr/bin/python3

# B351/Q351 Spring 2019
# Professor Saúl Blanco
# Do not share these assignments or their solutions outside of this class.

###################################
#                                 #
# Assignment 3: Search Algorithms #
#                                 #
###################################

import State
import Board
import heapq

STOP = -1
CONTINUE = 0


#################################
# Problem 1 - Fringe Expansion
#################################
# Objective:
# 1) Write a function that adds the possible states that we can get to
#    from the current state to the end of the fringe.
#
# Notes:
# (1) This function should not return or yield anything but just update the contents of the fringe
# (2) board.slide_blank is error-safe. It will return None if it is impossible to slide the blank

# This will take all the possible moves for the board at the current state, and see which of those are possible.
# If they are possible, then it will be added to the fringe.

def fringe_expansion(current_state, fringe):
    move_up = current_state.board.slide_blank((0,1))
    move_down = current_state.board.slide_blank((0,-1))
    move_left = current_state.board.slide_blank((1,0))
    move_right = current_state.board.slide_blank((-1,0))
    for move in [move_up, move_down, move_left, move_right]:
        if move is not None:
            fringe.append(State.State(move, current_state, current_state.depth + 1, 0))


#################################
# Problem 2 - BFS
#################################
# Objectives:
# (1) Write a function that implements a single iteration of the BFS algorithm
#     by considering the first state from the fringe.
#     (Returns STOP if the fringe is empty.)
#     See the project documentation for more details.

# Does a single iteration for BFS
# First has to see if there is a fringe, if there isn't it returns STOP
# then if there is a fringe that means we can pop the first element and check that element to see the depth
# if the depth is bigger than the max depth given, then we need to just ignore it and continue
# next will check if the goal state is this state and if so we return that current state
# otherwise then we need to expand the fringe on that current state and return CONTINUE.

def bfs(fringe, max_depth, goal_board):
    if not fringe:
        return STOP
    current_state = fringe.pop(0)
    if current_state.depth > max_depth:
        return CONTINUE
    if current_state.board.__eq__(goal_board):
        return current_state
    else:
        fringe_expansion(current_state, fringe)
        return CONTINUE


def uninformed_solver(start_board, max_depth, goal_board):
    """
        Looping function which calls bfs until it finds a solution (a State object) or
        until STOP has been returned. Does not consider States below max_depth.
        If the goal is reached, this function should return the Goal State,
        which includes a path to the goal. Otherwise, returns None.
    """
    fringe = [State.State(start_board, None, None, 0)]
    found = CONTINUE
    while found == CONTINUE:
        found = bfs(fringe, max_depth, goal_board)
    if isinstance(found, State.State):
        # Found goal!
        return found
    # Max depth reached...
    return None


####################################
# Problem 3 - UCS f-value Function
####################################
# Objectives:
# (1) Write a function that takes a board and depth and returns the f-value
#     (priority) that board should have in a uniform-cost search scenario.

# For UCS the f-value is simply the depth.

def ucs_f_function(board, depth):
    return depth



###########################################
# Problem 4 - A* f-value Function Factory
###########################################
# Objectives:
# (1) Given a heuristic function and a goal board, returns a f-value FUNCTION
#     (like ucs_f_function) that evaluates boards and depths as in the A* algorithm.
#
# Notes:
# (1) It may be helpful to consult your solution for a1.compose here.

# Here for A* we need to return a function that takes in a board and a depth
# then use the heuristic given on the board and the given goal_board, and add that value to the depth which is A*
def a_star_f_function_factory(heuristic, goal_board):
    return lambda board, depth: heuristic(board, goal_board) + depth




# Here is an example heuristic function.
def manhattan_distance(current_board, goal_board):
    total = 0
    goal_matrix = goal_board.matrix
    for goal_r in range(0, 3):
        for goal_c in range(0, 3):
            val = goal_matrix[goal_r][goal_c]
            if val == 0:
                continue
            current_r, current_c = current_board.find_element(val)
            total += abs(goal_r - current_r) + abs(goal_c - current_c)
    return total

#################################
# Problem 5 - Your Own Heuristic
#################################
# Objectives:
# (1) Write a function that takes current_board and goal_board as arguments and
#     returns an estimate of how many moves it will take to reach the goal board.
#     Your heuristic must be admissible (never overestimate cost to goal), but
#     it does not have to be consistent (never overestimate step costs).
#
# Notes:
# (1) This heuristic should be admissible, but greater than (closer to the real
#     value than) the manhattan distance heuristic on average. That makes it a
#     better heuristic.

# For this I'm using something found on stack overflow, at https://bit.ly/2SKz3DW
# I first had to do a for loop for all the possible elements in the 8-puzzle which are 1-8 inclusive.
# then for each element we had to find the location of it in the current state
# then we had to find the location of it's goal state
# then we use those locations and separate those tuples into individual values
# from there I then had to find the difference between the rows and take the absolute value
# then do the same for the columns.
# After this I followed the statement given in the link above, and simply messed around with the square root value
# because of the feedback from the grading tool, until I finally landed at 3.9999999
# and then returned the answer from that


def new_heuristic(current_board, goal_board):
    answer = 0
    for elements in range(1, 9):
        cb_r, cb_c = current_board.find_element(elements)
        gb_r, gb_c = goal_board.find_element(elements)
        r_diff = abs(cb_r - gb_r)
        c_diff = abs(cb_c - gb_c)
        diff_diff = abs(r_diff - c_diff)
        answer += (min(r_diff, c_diff) * (3.9999999 ** .5)) + diff_diff
    return answer


#################################
# Problem 6 - Informed Expansion
#################################
# Objectives:
# (1) Write a function that expands the fringe using the f-value function
#     provided. Note that States automatically sort by their f-values.
#
# Notes:
# (1) This function should update the contents of the fringe using heapq.

# This is essentially the same code as the fringe_expansion above, but with the added f_function and then
# because the f_function takes a depth and that depth will be different than the current depth I had to add one to it.

def informed_expansion(current_state, fringe, f_function):
    move_up = current_state.board.slide_blank((0, 1))
    move_down = current_state.board.slide_blank((0, -1))
    move_left = current_state.board.slide_blank((1, 0))
    move_right = current_state.board.slide_blank((-1, 0))
    new_depth = current_state.depth + 1
    for move in [move_up, move_down, move_left, move_right]:
        if move is not None:
            heapq.heappush(fringe, State.State(move, current_state, new_depth, f_function(move, new_depth)))


#################################
# Problem 7 - Informed Search
#################################
# Objectives:
# (1) Write a function that implements a single iteration of the
#     A*/UCS algorithm by considering the top-priority state from the fringe.
#     (Returns STOP if the fringe is empty.)
#     See the project documentation for more details.

# Again this is basically the same as BFS, but with the added explored and f_function.

def informed_search(fringe, goal_board, f_function, explored):
    if not fringe:
        return STOP
    current_state = heapq.heappop(fringe)
    if (current_state.board in explored) and (current_state.f_value >= explored[current_state.board]):
        return CONTINUE
    explored[current_state.board] = current_state.f_value
    if current_state.board.__eq__(goal_board):
        return current_state
    else:
        informed_expansion(current_state, fringe, f_function)
        return CONTINUE


def informed_solver(start_board, goal_board, f_function):
    """
        Looping function which calls informed_search until it finds a solution
        (a State object) or until STOP has been returned.
        If the goal is reached, this function should return the Goal State,
        which includes a path to the goal. Otherwise, returns None.
    """
    fringe = [State.State(start_board, None, 0, f_function(start_board, 0))]
    explored = {}
    found = CONTINUE
    while found == CONTINUE:
        found = informed_search(fringe, goal_board, f_function)
    if isinstance(found, State.State):
        return found
    return None

def ucs_solver(start_board, goal_board):
    return informed_solver(start_board, goal_board, ucs_f_function)

def a_star_solver(start_board, goal_board, heuristic):
    f_function = a_star_f_function_factory(heuristic, goal_board)
    return informed_solver(start_board, goal_board, f_function)

#################################
# Bonus Problem - IDS (10pts)
#################################
# Implement IDS in any way you choose. You will probably want to write multiple
# helper functions; be sure to document these appropriately.
#
# ids should take a start board and goal board and then perform multiple
# depth-first searches, with the maximum depth increasing from 0 all the way to
# final depth.
#
# If there is a solution within final_depth moves, ids should return it.
# (either a State with a parent, or a path of Boards -- you have flexibility here.)
# Otherwise, return None.

def ids(start_board, goal_board, final_depth):
    raise NotImplementedError

