package edu.indiana.graves5.a290finalproject;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.TableLayout;
import android.widget.TableRow;
import android.widget.TextView;
import android.graphics.Color;
import android.view.View.OnClickListener;

/*
A290FinalProjectTicTacToeGame.java

This is where all the functionality is for the TicTacToe game and the board itself.

Created by: Jordan Graves
Created on: 2/13/2019
Last Modified by: Jordan Graves
Last Modified on: 3/1/2019
Assignment/Project: A290 Android Development Final Project
 */
public class A290FinalProjectTicTacToeGame extends AppCompatActivity implements OnClickListener{


    //Initializing Variables for use in the later methods.
    private int size;
    TableLayout mainBoard;
    TextView tv_turn;
    char [][] board;
    char turn;

    //Oncreate function to set the view of the board and find the parameters I need for the above variable.
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.a290_final_project_tictactoe_board);

        size = Integer.parseInt(getString(R.string.SizeOfBoard));
        board = new char [size][size];
        mainBoard = (TableLayout) findViewById(R.id.mainBoard);
        tv_turn = (TextView) findViewById(R.id.turn);

        resetBoard();
        tv_turn.setText("It is now " + turn + "'s turn to go");

        //This is initializing the board to make it so that the board is empty when it's created.
        //This will also set the current space to be what it was intenteded to be based on the click of
        //the user and whose turn it was.
        for(int i = 0; i<mainBoard.getChildCount(); i++){
            TableRow row = (TableRow) mainBoard.getChildAt(i);
            for(int j = 0; j<row.getChildCount(); j++){
                TextView tv = (TextView) row.getChildAt(j);
                tv.setText(R.string.none);
                tv.setOnClickListener(Move(i, j, tv));
            }
        }

        View TicTacToeResetButton = findViewById(R.id.TTTResetButton);
        TicTacToeResetButton.setOnClickListener(this);
        View TicTacToeBackButton = findViewById(R.id.TTTBackButton);
        TicTacToeBackButton.setOnClickListener(this);

    }

    //My two buttons for resetting the game and to go back to the main menu.
    public void onClick(View v){
        switch(v.getId()) {
            case R.id.TTTResetButton:
                Intent current = new Intent(this, A290FinalProjectTicTacToeGame.class);
                finish();
                startActivity(current);
                break;
            case R.id.TTTBackButton:
                Intent TicTacToeMenu = new Intent(this, A290FinalProjectTicTacToe.class);
                startActivity(TicTacToeMenu);
                break;
        }
    }

    //Resting the board to be the blank state with X starting first.
    protected void resetBoard(){
        if(turn == 'X'){
            turn = 'X';
        }
        else {
            turn = 'X';
        }
        for(int i = 0; i<size; i++){
            for(int j = 0; j<size; j++){
                board[i][j] = ' ';
            }
        }
    }

    //This will check the state of the game and seeing if someone has won the game based on that.
    protected int gameStatus(){

        for(int i = 0; i<size; i++){
            if(check_Row_Equality(i,'X'))
                return 1;
            if(check_Column_Equality(i, 'X'))
                return 1;
            if(check_Row_Equality(i,'O'))
                return 2;
            if(check_Column_Equality(i,'O'))
                return 2;
            if(check_Diagonal('X'))
                return 1;
            if(check_Diagonal('O'))
                return 2;
        }

        boolean boardFull = true;
        for(int i = 0; i<size; i++){
            for(int j= 0; j<size; j++){
                if(board[i][j]==' ')
                    boardFull = false;
            }
        }
        if(boardFull)
            return -1;
        else return 0;
    }

    //I have to find if someone won based on a diagonal victory.
    protected boolean check_Diagonal(char player){
        int count_Equal1 = 0,count_Equal2 = 0;
        for(int i = 0; i<size; i++)
            if(board[i][i]==player)
                count_Equal1++;
        for(int i = 0; i<size; i++)
            if(board[i][size-1-i]==player)
                count_Equal2++;
        if(count_Equal1==size || count_Equal2==size)
            return true;
        else return false;
    }

    //Checking to see if the someone won based on a row victory
    protected boolean check_Row_Equality(int r, char player){
        int count_Equal=0;
        for(int i = 0; i<size; i++){
            if(board[r][i]==player)
                count_Equal++;
        }

        if(count_Equal==size)
            return true;
        else
            return false;
    }

    //Checking if someone won based on a column victory.
    protected boolean check_Column_Equality(int c, char player){
        int count_Equal=0;
        for(int i = 0; i<size; i++){
            if(board[i][c]==player)
                count_Equal++;
        }

        if(count_Equal==size)
            return true;
        else
            return false;
    }

    protected boolean Cell_Set(int r, int c){
        return !(board[r][c]==' ');
    }

    //Stops the game so that the onclicklistener is now null and no the board can no longer be clicked from this state.
    protected void stopMatch(){
        for(int i = 0; i<mainBoard.getChildCount(); i++){
            TableRow row = (TableRow) mainBoard.getChildAt(i);
            for(int j = 0; j<row.getChildCount(); j++){
                TextView tv = (TextView) row.getChildAt(j);
                tv.setOnClickListener(null);
            }
        }
    }

    //This is the area where most of the work was done, in which it has to see what the cell was clicked and then
    //will set the cell according to whose turn it is and then if the game is over it will display the correct winner
    //or if it's a draw it will display that information as well.
    View.OnClickListener Move(final int r, final int c, final TextView tv){

        return new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if(!Cell_Set(r,c)) {
                    board[r][c] = turn;
                    if (turn == 'X') {
                        tv_turn.setTextColor(Color.BLUE);
                        tv.setText(R.string.X);
                        tv.setTextColor(Color.RED);
                        turn = 'O';
                    } else if (turn == 'O') {
                        tv_turn.setTextColor(Color.RED);
                        tv.setText(R.string.O);
                        tv.setTextColor(Color.BLUE);
                        turn = 'X';
                    }
                    if (gameStatus() == 0) {
                        tv_turn.setText("It is now " + turn + "'s turn to go");
                    } else if (gameStatus() == -1) {
                        tv_turn.setText("Game: Draw");
                        stopMatch();
                    } else {
                        if (turn == 'X') {
                            tv_turn.setTextColor(Color.BLUE);
                            tv_turn.setText("O Wins!");
                            stopMatch();
                        }
                        else {
                            tv_turn.setTextColor(Color.RED);
                            tv_turn.setText("X Wins!");
                            stopMatch();
                        }
                    }
                }
                else{
                    tv_turn.setText(tv_turn.getText()+"\nPlease choose a Cell Which is not already Occupied");
                }
            }
        };
    }

}