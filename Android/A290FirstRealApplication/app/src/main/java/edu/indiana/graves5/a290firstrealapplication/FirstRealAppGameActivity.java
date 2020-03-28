package edu.indiana.graves5.a290firstrealapplication;

/*
FirstRealAppGameActivity.java

This contains the major game elements for creating the board of Sudoku based on the puzzle given.

Created by: Jordan Graves
Created on: 2/18/19
Last Modified by: Jordan Graves
Last Modified on: 2/18/19
Assignment/Project: A290 Android Development Homework Project 3
 */
import android.app.Activity;
import android.app.Dialog;
import android.os.Bundle;
import android.util.Log;
import android.view.Gravity;
import android.widget.Toast;

public class FirstRealAppGameActivity extends Activity {
    private static final String TAG = "FirstRealAppGameActivit";

    public static final String KEY_DIFFICULTY = "edu.indiana.graves5.a290firstrealapplication.difficulty";
    public static final int DIFFICULTY_EASY = 0;
    public static final int DIFFICULTY_MEDIUM = 1;
    public static final int DIFFICULTY_HARD = 2;

    private int puzzle[];

    private FirstRealAppPuzzleView puzzleView;

    /*
    This will create the board that will be used for the user to play the game.
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.d(TAG, "onCreate");

        int diff = getIntent().getIntExtra(KEY_DIFFICULTY, DIFFICULTY_EASY);
        puzzle = getPuzzle(diff);
        calculateUsedTiles();

        puzzleView = new FirstRealAppPuzzleView(this);
        setContentView(puzzleView);
        puzzleView.requestFocus();
    }

    private final int used[][][] = new int[9][9][];

    /*
    This will get the used tiles that we have on the board.
     */
    protected int[] getUsedTiles(int x, int y) {
        return used[x][y];
    }

    private void calculateUsedTiles() {
        for(int x = 0; x < 9; x++) {
            for(int y = 0; y < 9; y++) {
                used[x][y] = calculateUsedTiles(x, y);
            }
        }
    }
    /*
    This is used to store the UsedTiles to store them in the used matrix we made.
     */
    private int[] calculateUsedTiles(int x, int y) {
        int c[] = new int[9];
        for (int i = 0; i < 9; i++) {
            if(i == x)
                continue;
            int t = getTile(i, y);
            if (t != 0)
                c[t - 1] = t;
        }
        for (int i = 0; i < 9; i++) {
            if(i == y)
                continue;
            int t = getTile(i, x);
            if(t != 0)
                c[t - 1] = t;
        }
        int startx = (x / 3) * 3;
        int starty = (y / 3) * 3;
        for(int i = startx; i < startx + 3; i++) {
            for (int j = starty; j < starty + 3; j++) {
                if(i == x && j == y)
                    continue;
                int t = getTile(i, j);
                if (t != 0)
                    c[t - 1] = t;
            }
        }
        int nused = 0;
        for(int t : c) {
            if(t != 0)
                nused++;
        }
        int c1[] = new int[nused];
        nused = 0;
        for (int t : c) {
            if(t != 0)
                c1[nused++] = t;
        }
        return c1;
    }
    /*
    These are the strings for the puzzles based on difficulty.
     */
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
    /*
    This returns the difficulty of the puzzle that the user specified.
     */
    private int[] getPuzzle(int diff) {
        String puz;
        switch(diff) {
            case DIFFICULTY_HARD:
                puz = hardPuzzle;
                break;
            case DIFFICULTY_MEDIUM:
                puz = mediumPuzzle;
                break;
            case DIFFICULTY_EASY:
            default:
                puz = easyPuzzle;
                break;
        }
        return fromPuzzleString(puz);
    }
    /*
    Makes the puzzle into a readable string.
     */
    static protected int[] fromPuzzleString(String string) {
        int[] puz = new int[string.length()];
        for(int i = 0; i < puz.length; i++) {
            puz[i] = string.charAt(i) - '0';
        }
        return puz;
    }

    private int getTile(int x, int y) {
        return puzzle[y * 9 + x];
    }

    protected String getTileString(int x, int y) {
        int v = getTile(x, y);
        if(v == 0)
            return "";
        else
            return String.valueOf(v);
    }
}
