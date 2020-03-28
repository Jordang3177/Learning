package edu.indiana.graves5.a290firstrealapplication;
/*
FirstRealAppPrefsActivity.java

This is used for the settings bar, so it's created when the app launches.

Created by: Jordan Graves
Created on: 2/18/19
Last Modified by: Jordan Graves
Last Modified on: 2/18/19
Assignment/Project: A290 Android Development Homework Project 3
 */
import android.os.Bundle;
import android.preference.PreferenceActivity;

public class FirstRealAppPrefsActivity extends PreferenceActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        addPreferencesFromResource(R.xml.settings);
    }
}
