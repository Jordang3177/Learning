package edu.indiana.graves5.a290finalproject;

import android.os.Bundle;
import android.app.Activity;
import android.view.View;
import android.content.Intent;
import android.view.View.OnClickListener;
import android.content.DialogInterface;
import android.app.AlertDialog;
import android.util.Log;
/*
A290FinalProjectTicTacToe.java

This is the main part of the TicTacToe App to be seen from the menu.

Created by: Jordan Graves
Created on: 2/13/2019
Last Modified by: Jordan Graves
Last Modified on: 3/1/2019
Assignment/Project: A290 Android Development Final Project
 */

public class A290FinalProjectTicTacToe extends Activity implements OnClickListener {
    private static final String TAG = "TicTacToe";

    //This creates the menu buttons for the Menu.
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.a290_final_project_tictactoe);

        View TicTacToeNewGameButton = findViewById(R.id.TTTNewGame);
        TicTacToeNewGameButton.setOnClickListener(this);
        View TicTacToeAboutButton = findViewById(R.id.TTTAbout);
        TicTacToeAboutButton.setOnClickListener(this);
        View TicTacToeMainMenuButton = findViewById(R.id.TTTMainMenu);
        TicTacToeMainMenuButton.setOnClickListener(this);
        View TicTacToeExitButton = findViewById(R.id.TTTExit);
        TicTacToeExitButton.setOnClickListener(this);

    }

    //Creates the functionality for the menu buttons.
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.TTTNewGame:
                openNewGameDialog();
                break;
            case R.id.TTTAbout:
                Intent About = new Intent(this, A290FinalProjectTicTacToeAbout.class);
                startActivity(About);
                break;
            case R.id.TTTMainMenu:
                Intent MainMenu = new Intent(this, A290FinalProject.class);
                startActivity(MainMenu);
                break;
            case R.id.TTTExit:
                finish();
                break;
        }

    }

    //Creates the Dialog that will pop up when you click on the New Game button
    private void openNewGameDialog() {
        new AlertDialog.Builder(this).setTitle(R.string.TicTacToeName)
                .setItems(R.array.TicTacToeContinue,
                        new DialogInterface.OnClickListener() {
                            public void onClick(
                                    DialogInterface dialogInterface, int i) {
                                startGame(i);
                            }
                        }).show();
    }

    //Creates the Start of the game state.
    private void startGame(int i) {
        Log.d(TAG, "clicked on " + i);
        Intent intent = new Intent(A290FinalProjectTicTacToe.this, A290FinalProjectTicTacToeGame.class);
        startActivity(intent);
    }
}
