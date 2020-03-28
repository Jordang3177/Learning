package edu.indiana.graves5.a290finalproject;

import android.os.Bundle;
import android.app.Activity;
/*
A290FinalProjectSudokuAbout.java

This is the About page for Sudoku that lists out what Sudoku is and how to play the game.

Created by: Jordan Graves
Created on: 2/13/2019
Last Modified by: Jordan Graves
Last Modified on: 3/1/2019
Assignment/Project: A290 Android Development Final Project
 */
public class A290FinalProjectSudokuAbout extends Activity{
    //References the Layout file that is needed to show the dialog.
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.a290_final_project_sudoku_about);
    }
}
