package edu.indiana.graves5.a290finalproject;


//Learned from this article https://www.androidauthority.com/lets-build-custom-keyboard-android-832362/

import android.app.Dialog;
import android.content.Context;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;


/*
A290FinalProjectSudokuKeyPad.java

This is where we show the Keypad and give it functionality.

Created by: Jordan Graves
Created on: 2/13/2019
Last Modified by: Jordan Graves
Last Modified on: 3/1/2019
Assignment/Project: A290 Android Development Final Project
 */
public class A290FinalProjectSudokuKeypad extends Dialog {

    private final View keys[] = new View[9];
    private View keypad;

    private final A290FinalProjectSudokuPuzzleView puzzleView;

    //Makes the Keypad based on the puzzleview for coloring.
    public A290FinalProjectSudokuKeypad(Context context, A290FinalProjectSudokuPuzzleView puzzleView) {
        super(context);
        this.puzzleView = puzzleView;
    }

    //This creates what is needed to be shown on the keypad.
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle(R.string.SudokuKeypadTitle);
        setContentView(R.layout.a290_final_project_sudoku_keypad);
        findViews();
        setListeners();
    }

    // Found KeyEvents here: https://developer.android.com/reference/android/view/KeyEvent

    //based on what is clicked on by the user it will make the tile that number.
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        int tile = 0;
        switch (keyCode) {
            case KeyEvent.KEYCODE_0:
                tile = 0;
                break;
            case KeyEvent.KEYCODE_1:
                tile = 1;
                break;
            case KeyEvent.KEYCODE_2:
                tile = 2;
                break;
            case KeyEvent.KEYCODE_3:
                tile = 3;
                break;
            case KeyEvent.KEYCODE_4:
                tile = 4;
                break;
            case KeyEvent.KEYCODE_5:
                tile = 5;
                break;
            case KeyEvent.KEYCODE_6:
                tile = 6;
                break;
            case KeyEvent.KEYCODE_7:
                tile = 7;
                break;
            case KeyEvent.KEYCODE_8:
                tile = 8;
                break;
            case KeyEvent.KEYCODE_9:
                tile = 9;
                break;
            default:
                return super.onKeyDown(keyCode, event);
        }
        return true;

    }

    //Returns what is shown in the tile.
    private void returnResult(int tile) {
        puzzleView.setSelectedTile(tile);
        dismiss();
    }



    //Finding the values that are used in the Keypad.
    private void findViews() {
        keypad = findViewById(R.id.SudokuKeypad);
        keys[0] = findViewById(R.id.SudokuKeyPad1);
        keys[1] = findViewById(R.id.SudokuKeyPad2);
        keys[2] = findViewById(R.id.SudokuKeyPad3);
        keys[3] = findViewById(R.id.SudokuKeyPad4);
        keys[4] = findViewById(R.id.SudokuKeyPad5);
        keys[5] = findViewById(R.id.SudokuKeyPad6);
        keys[6] = findViewById(R.id.SudokuKeyPad7);
        keys[7] = findViewById(R.id.SudokuKeyPad8);
        keys[8] = findViewById(R.id.SudokuKeyPad9);
    }

    //Have to set a listenter so that it can be clicked on and have a value to return.
    private void setListeners() {
        for (int i = 0; i < keys.length; i++) {
            final int t = i + 1;
            keys[i].setOnClickListener(new View.OnClickListener(){
                public void onClick(View v) {
                    returnResult(t);
                }});
        }
        keypad.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v) {
                returnResult(0);
            }});
    }
}
