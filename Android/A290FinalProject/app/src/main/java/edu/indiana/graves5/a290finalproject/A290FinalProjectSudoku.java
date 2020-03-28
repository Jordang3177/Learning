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
A290FinalProjectSudoku.java

This is the menu for the Sudoku part of the app

Created by: Jordan Graves
Created on: 2/13/2019
Last Modified by: Jordan Graves
Last Modified on: 3/1/2019
Assignment/Project: A290 Android Development Final Project
 */

public class A290FinalProjectSudoku extends Activity implements OnClickListener{
    private static final String TAG = "Sudoku";
    //Creating all the instances for the Sudoku menu buttons.
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.a290_final_project_sudoku);

        View SudokuNewGameButton = findViewById(R.id.SMNewGame);
        SudokuNewGameButton.setOnClickListener(this);
        View SudokuAboutButton = findViewById(R.id.SMAbout);
        SudokuAboutButton.setOnClickListener(this);
        View SudokuMainMenuButton = findViewById(R.id.SMMainMenu);
        SudokuMainMenuButton.setOnClickListener(this);
        View SudokuExitButton = findViewById(R.id.SMExit);
        SudokuExitButton.setOnClickListener(this);
    }

    //Giving them purpose.
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.SMNewGame:
                openNewGameDialog();
                break;
            case R.id.SMAbout:
                Intent About = new Intent(this, A290FinalProjectSudokuAbout.class);
                startActivity(About);
                break;
            case R.id.SMMainMenu:
                Intent MainMenu = new Intent(this, A290FinalProject.class);
                startActivity(MainMenu);
                break;
            case R.id.SMExit:
                finish();
                break;
        }
    }

    //Opennig a dialog to see what difficulty the user wants to be able to see.
    private void openNewGameDialog() {
        new AlertDialog.Builder(this).setTitle(R.string.SudokuGameTitle)
                .setItems(R.array.difficulty,
                        new DialogInterface.OnClickListener() {
                                public void onClick(
                                                DialogInterface dialogInterface, int i) {
                                        startGame(i);
                                }
                        }).show();
    }

    //Creating the game based on what it is the user clicked on for the difficulty
    private void startGame(int i) {
        Log.d(TAG, "clicked on " + i);
        Intent intent = new Intent(A290FinalProjectSudoku.this, A290FinalProjectSudokuGame.class);
        intent.putExtra(A290FinalProjectSudokuGame.KeyDifficulty, i);
        startActivity(intent);
    }
}
