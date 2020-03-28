package edu.indiana.graves5.a290finalproject;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.content.Intent;
import android.view.View.OnClickListener;
/*
A290FinalProject.java

This is the main menu for the App that I have developed titled Game Blitz

Created by: Jordan Graves
Created on: 2/13/2019
Last Modified by: Jordan Graves
Last Modified on: 3/1/2019
Assignment/Project: A290 Android Development Final Project
 */


public class A290FinalProject extends AppCompatActivity implements OnClickListener{

    //Creating the instances for each button that could be clicked.
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.a290_final_project_main_activity);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        View MainMenuSudoku = findViewById(R.id.MMSudoku);
        MainMenuSudoku.setOnClickListener(this);
        View MainMenuTicTacToe = findViewById(R.id.MMTicTacToe);
        MainMenuTicTacToe.setOnClickListener(this);
        View MainMenuChess = findViewById(R.id.MMChess);
        MainMenuChess.setOnClickListener(this);
        View MainMenuAbout = findViewById(R.id.MMAbout);
        MainMenuAbout.setOnClickListener(this);
        View MainMenuExit = findViewById(R.id.MMExit);
        MainMenuExit.setOnClickListener(this);
    }

    //Giving functionality to those buttons that are clicked.
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.MMSudoku:
                Intent Sudoku = new Intent(this, A290FinalProjectSudoku.class);
                startActivity(Sudoku);
                break;
            case R.id.MMTicTacToe:
                Intent TTT = new Intent(this, A290FinalProjectTicTacToe.class);
                startActivity(TTT);
                break;
            case R.id.MMChess:
                Intent Chess = new Intent(this, A290FinalProjectChess.class);
                startActivity(Chess);
                break;
            case R.id.MMAbout:
                Intent About = new Intent(this, A290FinalProjectAbout.class);
                startActivity(About);
                break;
            case R.id.MMExit:
                finish();
                break;
        }
    }
}
