package edu.indiana.graves5.myfirstdialog;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.app.AlertDialog;
import android.app.Dialog;
import android.content.DialogInterface;
import android.view.View;
import android.widget.Toast;

/*MyFirstDialogMainActivity.java
Contains all the main coding elements for this activity.
There is now a onCreateDialog method which will enable the dialog box and do what it needs to for each click

Created by: Jordan Graves
Created on: 2/2/2019
Last Modified by: Jordan Graves
Last Modified on: 2/7/2019
Assignment/Project: A290 Android Development Homework Project 2
Part of: MyFirstDialog
 */

public class MyFirstDialogMainActivity extends AppCompatActivity {
    CharSequence[] items = { "Google", "Apple", "Microsoft"};
    boolean[] itemsChecked = new boolean [items.length];

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_my_first_dialog_main);
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

    @SuppressWarnings("deprecation")
    protected void onClick(View v) {
        /*This is a deprecated option, but we are going to use it anyway
        we do this with the "Quick Fix" to suppress the warning
         */
        showDialog(0);
    }

    protected Dialog onCreateDialog(int id) {
        switch (id) {
            /*Using a simple switch-case construct to control the creation
            and behaviour of our Dialog box
             */
            case 0:
                return new AlertDialog.Builder(this)
                        .setIcon(R.drawable.ic_action_name)

                        /*This creates the dialog with the basic features of "OK"
                        and "Cancel" buttons as well as a title
                         */
                        .setTitle("This is a dialog with some simple text...")

                        /*Each action or button click, requires a ClickListener
                        so we have to enable or create one so it is ready to react
                        to user input
                         */

                        .setPositiveButton("OK",
                                new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int whichButton)
                            {
                                /*Using Toast to briefly that "OK" button was clicked

                                 */
                                Toast.makeText(getBaseContext(),
                                        "OK Clicked", Toast.LENGTH_SHORT).show();
                            }
                                }
                                )
                        .setNegativeButton("Cancel",
                                new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int whichButton)
                            {
                                /*Using Toast to briefly display that "Cancel" Button was clicked

                                 */
                                Toast.makeText(getBaseContext(),
                                        "Cancel clicked!", Toast.LENGTH_SHORT).show();
                            }
                                })
                        .setMultiChoiceItems(items, itemsChecked,
                                new DialogInterface.OnMultiChoiceClickListener() {
                            public void onClick(DialogInterface dialog,
                                                int which, boolean isChecked) {
                                /*Using our boolean to confirm the state of each of our 3 options,
                                set in our item list, and then using Toast to briefly display that each
                                one has been "Checked" or "Unchecked"
                                 */
                                Toast.makeText(getBaseContext(),
                                        items[which] + (isChecked ? " checked!":" unchecked!"),
                                        Toast.LENGTH_SHORT).show();
                            }
                                })
                        /* We need to actually create this entire "case" with these properties, once
                        the button is clicked
                         */
                        .create();
        }
        /*No return values are expected, so we return null

         */
        return null;
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_my_first_dialog_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
