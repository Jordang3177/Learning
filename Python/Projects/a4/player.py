import math

class BasePlayer:
    def __init__(self, depthLimit):
        self.depthLimit = depthLimit

    # TODO
    # Assign integer scores to the three terminal states
    # P2_WIN_SCORE < DRAW_SCORE < P1_WIN_SCORE
    # Access these with "self.DRAW_SCORE", etc.
    P1_WIN_SCORE = 10000
    P2_WIN_SCORE = -10000
    DRAW_SCORE = 500
    # Returns a heuristic for the board position
    # Good positions for 0 pieces should be positive and
    # good positions for 1 pieces should be negative
    # for all boards, P2_WIN_SCORE < heuristic(b) < P1_WIN_SCORE
    def heuristic(self, board):
        return 0


class ManualPlayer(BasePlayer):
    def __init__(self, depthLimit=None):
        BasePlayer.__init__(self, depthLimit)

    def findMove(self, board):
        opts = " "
        for c in range(board.WIDTH):
            opts += " "+(str(c+1) if len(board.board[c]) < board.HEIGHT else ' ')+"  "
        print(opts)

        while True:
            col = input("Place a "+('O' if board.turn == 0 else 'X')+" in column: ")
            try: col = int(col) - 1
            except ValueError: continue
            if col >= 0 and col < board.WIDTH and len(board.board[col]) < board.HEIGHT:
                return col


class PlayerMM(BasePlayer):
    #TODO
    # performs minimax on board with depth.
    # returns the best move and best score as a tuple
    def minimax(self, board, depth):
        terminal = board.isTerminal
        if(terminal == 0):
            return(None, self.P1_WIN_SCORE)
        elif(terminal == 1):
            return(None, self.P2_WIN_SCORE)
        elif(terminal == -1):
            return(None, self.DRAW_SCORE)
        elif(terminal == None and depth == 0):
            return(None, self.heuristic(board))
        else:
            A = list(board.getValidMoves())
            C = []
            for moves in A:
                C.append(self.minimax(board.getChild(moves), depth - 1)[1])
            if(len(C) != 0):
                if(board.turn == 0):
                    return (A[C.index(max(C))], max(C))
                else:
                    return (A[C.index(min(C))], min(C))
            else:
                return(None, self.heuristic(board))
    def findMove(self, board):
        move, score = self.minimax(board, self.depthLimit)
        return move

class PlayerAB(BasePlayer):
    #TODO
    # performs minimax on board with depth.
    # alpha represents the score of max's current strategy
    # beta  represents the score of min's current strategy
    # in a cutoff situation, return the score that resulted in the cutoff
    # returns the best move and best score as a tuple
    def minimax_ab(self, board, depth, alpha, beta):
        raise NotImplementedError
    def findMove(self, board):
        move, score = self.minimax_ab(board, depth, -math.inf, math.inf)
        return move

class PlayerDP(PlayerAB):
    ''' A version of PlayerAB that implements dynamic programming
        to cache values for its heuristic function, improving performance. '''
    def __init__(self, depthLimit):
        PlayerAB.__init__(self, depthLimit)

        self.resolved = {}

    #TODO
    #if a saved heuristic value exists in self.resolved for board.state, returns that value
    #otherwise, uses BasePlayer.heuristic to get a heuristic value and saves it under board.state
    def heuristic(self, board):
        raise NotImplementedError


#######################################################
###########Example Subclass for Testing
#######################################################

#This will inherit your findMove from above, but will override the heuristic function with
#a new one; you can swap out the type of player by changing X in "class TestPlayer(X):"
class TestPlayer(BasePlayer):
    #define your new heuristic here
    def heurisitic(self):
        pass
