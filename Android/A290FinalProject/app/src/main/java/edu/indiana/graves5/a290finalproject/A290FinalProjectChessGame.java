package edu.indiana.graves5.a290finalproject;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

/*
A290FinalProjectChessGame.java

This is the part of the app where the Chess Board sits, Currently there is no funtionality to play the game
only a layout file to see the game board.

Created by: Jordan Graves
Created on: 2/13/2019
Last Modified by: Jordan Graves
Last Modified on: 3/1/2019
Assignment/Project: A290 Android Development Final Project
 */

public class A290FinalProjectChessGame extends AppCompatActivity {
    //Referencing the Layout file to see the board.
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.a290_final_project_chess_board);
    }
}
