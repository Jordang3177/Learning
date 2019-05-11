package edu.indiana.graves5.myfirstactivity;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.util.Log;
import android.view.Window;

/*
MyFirstActivityMainActivity.java

Contains the Java code for the Primary Activity in this project

Created by: Jordan Graves
Created on: 1/31/2019
Last Modified by: Jordan Graves
Last Modified on: 2/7/2019
Assignment Project: A290 Android Development Homework 2
Part of: MyFirstActivity, refers to content_my_first_activity_main.xml layout file.
 */

public class MyFirstActivityMainActivity extends AppCompatActivity {
    String tag = "Lifecycle";
    /* Called when the activity is first created. */

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.my_first_activity_main_activity);
        Log.d(tag, "In the onCreate() event");
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
    }

    /*
    onStart, onRestart, onResume, onPause, onStop, onDestroy

    This contains the code to make it so that when these are called and done it will be displayed in
    the logcat

    Created by: Jordan Graves
    Created on: 1/31/2019
    Last Modified by: Jordan Graves
    Last Modified on: 2/7/2019
    Assignment Project: A290 Android Development Homework 2
    Part of MyFirstActivity
     */
    public void onStart() {
        super.onStart();
        Log.d(tag, "In the onStart() event");
    }

    public void onRestart() {
        super.onRestart();
        Log.d(tag, "In the onRestart() event");
    }

    public void onResume() {
        super.onResume();
        Log.d(tag, "In the onResume() event");
    }

    public void onPause() {
        super.onPause();
        Log.d(tag, "In the onPause() event");
    }

    public void onStop() {
        super.onStop();
        Log.d(tag, "In the onStop() event");
    }

    public void onDestroy() {
        super.onDestroy();
        Log.d(tag, "In the onDestroy() event");
    }

}
