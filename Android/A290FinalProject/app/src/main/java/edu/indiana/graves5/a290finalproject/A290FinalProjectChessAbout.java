package edu.indiana.graves5.a290finalproject;

import android.os.Bundle;
import android.app.Activity;

/*
A290FinalProjectChessAbout.java

This is the Chess About Page that will list out what Chess is about and giving the user the basic
information about the game.

Created by: Jordan Graves
Created on: 2/13/2019
Last Modified by: Jordan Graves
Last Modified on: 3/1/2019
Assignment/Project: A290 Android Development Final Project
 */

public class A290FinalProjectChessAbout extends Activity{
    //Referencing the layout view to see the main dialog.
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.a290_final_project_chess_about);
    }
}
