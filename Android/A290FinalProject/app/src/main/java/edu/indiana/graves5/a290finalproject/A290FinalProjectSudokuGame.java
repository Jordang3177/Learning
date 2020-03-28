package edu.indiana.graves5.a290finalproject;

import android.app.Activity;
import android.app.Dialog;
import android.os.Bundle;
import android.util.Log;
/*
A290FinalProjectSudokuGame.java

This is the main part of the Sudoku part of the app that will display the game as seen.

Created by: Jordan Graves
Created on: 2/13/2019
Last Modified by: Jordan Graves
Last Modified on: 3/1/2019
Assignment/Project: A290 Android Development Final Project
 */

public class A290FinalProjectSudokuGame extends Activity {
    //Listing out strings to be used later.
    private static final String TAG = "A290FinalProjectSudoku";
    public static final String KeyDifficulty = "edu.indiana.graves5.a290finalproject.difficulty";
    public static final int EasyDifficulty = 0;
    public static final int MediumDifficulty = 1;
    public static final int HardDifficulty = 2;

    private int puzzle[] = new int[9 * 9];
    private A290FinalProjectSudokuPuzzleView puzzleView;

    /*
    This will create the board that will be used for the user to play the game.
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.d(TAG, "onCreate");

        int diff = getIntent().getIntExtra(KeyDifficulty, EasyDifficulty);
        puzzle = getPuzzle(diff);

        puzzleView = new A290FinalProjectSudokuPuzzleView(this);
        setContentView(puzzleView);
        puzzleView.requestFocus();
    }

    //All the puzzles that are available, Will add more at a later date.

    private final String easyPuzzle =
            "360000000004230800000004200" +
                    "070460003820000014500013020" +
                    "001900000007048300000000045";
    private final String mediumPuzzle =
            "650000070000506000014000005" +
                    "007009000002314700000700800" +
                    "500000630000201000030000097";
    private final String hardPuzzle =
            "009000000080605020501078000" +
                    "000000700706040102004000000" +
                    "000720903090301080000000600";



    //Gets the tile at the specified index.
    private int getTile(int x, int y) {
        return puzzle[y * 9 + x];
    }

    //Returns the string of the thing at that tile.
    protected String getTileString(int x, int y) {
        int v = getTile(x, y);
        if (v == 0)
            return "";
        else
            return String.valueOf(v);
    }

    //Provides the puzzle based on what the user specified earlier
    private int[] getPuzzle(int diff) {
        String puz;
        switch (diff) {
            case HardDifficulty:
                puz = hardPuzzle;
                break;
            case MediumDifficulty:
                puz = mediumPuzzle;
                break;
            case EasyDifficulty:
            default:
                puz = easyPuzzle;
                break;
        }
        return fromPuzzleString(puz);
    }

    //Turns the puzzle from a string into a puzzle
    static protected int[] fromPuzzleString(String string) {
        int[] puz = new int[string.length()];
        for (int i = 0; i < puz.length; i++) {
            puz[i] = string.charAt(i) - '0';
        }
        return puz;
    }

    //This will change the tile to the needed one.
    private void changeTile(int x, int y, int z) {
        puzzle[y * 9 + x] = z;

    }

    //This will display the keypad for the user to see and click on.
    protected void displayTheKeypad(int x, int y) {
        Log.d(TAG, "showKeypad:");
        Dialog v = new A290FinalProjectSudokuKeypad(this, puzzleView);
        v.show();

    }


    //This sets the tile with the given value.
    protected boolean setTile(int x, int y, int value) {
        changeTile(x, y, value);
        return true;
    }
}
