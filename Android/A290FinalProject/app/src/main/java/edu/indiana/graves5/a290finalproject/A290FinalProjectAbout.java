package edu.indiana.graves5.a290finalproject;

import android.os.Bundle;
import android.app.Activity;
/*
A290FinalProjectAbout.java

This is the Main About Page for my Project that describes what this app is about.

Created by: Jordan Graves
Created on: 2/13/2019
Last Modified by: Jordan Graves
Last Modified on: 3/1/2019
Assignment/Project: A290 Android Development Final Project
 */

public class A290FinalProjectAbout extends Activity{
    //Referencing the the layout page that has all the dialog on it.
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.a290_final_project_main_about);
    }
}
