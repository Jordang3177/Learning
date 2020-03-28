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
A290FinalProjectChess.java

This is the Menu for the Chess Portion of the app.

Created by: Jordan Graves
Created on: 2/13/2019
Last Modified by: Jordan Graves
Last Modified on: 3/1/2019
Assignment/Project: A290 Android Development Final Project
 */

public class A290FinalProjectChess extends Activity implements OnClickListener{
    private static final String TAG = "Chess";
    //This is where I create all the instances that the buttons will be used for.
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.a290_final_project_chess);

        View ChessNewGameButton = findViewById(R.id.CMNewGame);
        ChessNewGameButton.setOnClickListener(this);
        View ChessAboutButton = findViewById(R.id.CMAbout);
        ChessAboutButton.setOnClickListener(this);
        View ChessMainMenuButton = findViewById(R.id.CMMainMenu);
        ChessMainMenuButton.setOnClickListener(this);
        View ChessExitButton = findViewById(R.id.CMExit);
        ChessExitButton.setOnClickListener(this);

    }

    //Giving purpose to those buttons as seen above.
    public void onClick(View v){
        switch (v.getId()) {
            case R.id.CMNewGame:
                openNewGameDialog();
                break;
            case R.id.CMAbout:
                Intent About = new Intent(this, A290FinalProjectChessAbout.class);
                startActivity(About);
                break;
            case R.id.CMMainMenu:
                Intent MainMenu = new Intent(this, A290FinalProject.class);
                startActivity(MainMenu);
                break;
            case R.id.CMExit:
                finish();
                break;
        }
    }

    //Creating a new Game dialog to ask if the user is sure that they want to go to the next game.
    private void openNewGameDialog() {
        new AlertDialog.Builder(this).setTitle(R.string.ChessName)
                .setItems(R.array.ChessContinue,
                        new DialogInterface.OnClickListener() {
                            public void onClick(
                                    DialogInterface dialogInterface, int i) {
                                startGame(i);
                            }
                        }).show();
    }


    //Starting the main game that will be viewed by the user.
    private void startGame(int i) {
        Log.d(TAG, "clicked on " + i);
        Intent intent = new Intent(A290FinalProjectChess.this, A290FinalProjectChessGame.class);
        startActivity(intent);
    }


}
