package edu.indiana.graves5.a290firstrealapplication;

/*
FirstRealAppMainActivity.java

This is the main file for the java project in which we have the onCreate and other methods to create the app.

Created by: Jordan Graves
Created on: 2/18/19
Last Modified by: Jordan Graves
Last Modified on: 2/18/19
Assignment/Project: A290 Android Development Homework Project 3
 */
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.view.Menu;
import android.view.View;
import android.content.Intent;
import android.view.View.OnClickListener;
import android.view.MenuInflater;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.util.Log;

public class FirstRealAppMainActivity extends AppCompatActivity implements OnClickListener {
    /*
    This creates the main functions for the application like the main buttons on the main page.
     */

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_first_real_app_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        View ContinueButton = findViewById(R.id.btn_Continue);
        ContinueButton.setOnClickListener(this);
        View NewButton = findViewById(R.id.btn_New);
        NewButton.setOnClickListener(this);
        View AboutButton = findViewById(R.id.btn_About);
        AboutButton.setOnClickListener(this);
        View ExitButton = findViewById(R.id.btn_Exit);
        ExitButton.setOnClickListener(this);
    }
    /*
    This creates the option page when the menu is clicked.
     */
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        super.onCreateOptionsMenu(menu);
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.menu_first_real_app_settings, menu);
        return true;
    }
    /*
    This creates the Settings menu.
     */
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.SettingsMenu:
                startActivity (new Intent(this, FirstRealAppPrefsActivity.class));
                return true;
        }
        return false;
    }
    /*
    This is the funciton used for when certain buttons on the main page are used.
     */
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.btn_About:
                Intent i = new Intent(this, FIrstRealAppAboutActivity.class);
                startActivity(i);
                break;
            case R.id.btn_New:
                openNewGameDialog();
                break;
            case R.id.btn_Exit:
                finish();
                break;
        }
    }

    private static final String TAG = "StartMainActivity";

    public void openNewGameDialog() {
        new AlertDialog.Builder(this)
                .setTitle(R.string.NewGameTitle)
                .setItems(R.array.difficulty,
                        new android.content.DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialogInterface, int i) {
                        startGame(i);
                    }
                        })
                .show();
    }

    public void startGame(int i){
        Log.d(TAG, "Clicked on " + i);
        Intent intent = new Intent(this, FirstRealAppGameActivity.class);
        intent.putExtra(FirstRealAppGameActivity.KEY_DIFFICULTY, i);
        startActivity(intent);
    }

}
