package edu.indiana.graves5.a290finalproject;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.Paint.FontMetrics;
import android.graphics.Paint.Style;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;

/*
A290FinalProjectSudokuPuzzleView.java

This is where all the coloration of the board comes from. I later want to add customization to the Keypad in here.

Created by: Jordan Graves
Created on: 2/13/2019
Last Modified by: Jordan Graves
Last Modified on: 3/1/2019
Assignment/Project: A290 Android Development Final Project
 */
public class A290FinalProjectSudokuPuzzleView extends View {
    private static final String TAG = "FirstRealAppPuzzleView";

    private final A290FinalProjectSudokuGame game;

    public A290FinalProjectSudokuPuzzleView(Context context) {
        super(context);
        this.game = (A290FinalProjectSudokuGame) context;
        setFocusable(true);
        setFocusableInTouchMode(true);
    }

    private float width;
    private float height;
    private int selX;
    private int selY;
    private final Rect selRect = new Rect();

    @Override
    protected void onSizeChanged(int w, int h, int oldw, int oldh) {
        width = w/9f;
        height = h/9f;
        getRect(selX, selY, selRect);
        Log.d(TAG, "onSizeChanged: width " + width + ", height " + height);
        super.onSizeChanged(w, h, oldw, oldh);
    }

    /*
    This will create the rectangle based on the height and width above.
     */
    private void getRect(int x, int y, Rect rect) {
        rect.set((int) (x * width), (int) (y * height), (int) (x * width + width), (int) (y * height + height));
    }
    /*
    Draws the board for the player to see with the specified colors
     */
    @Override
    protected void onDraw(Canvas canvas) {
        Paint background = new Paint();
        background.setColor(getResources().getColor(R.color.puzzleBackground));
        canvas.drawRect(0, 0, getWidth(), getHeight(), background);

        Paint dark = new Paint();
        dark.setColor(getResources().getColor(R.color.puzzleDark));
        Paint hilite = new Paint();
        hilite.setColor(getResources().getColor(R.color.puzzleHiLite));
        Paint light = new Paint();
        light.setColor(getResources().getColor(R.color.puzzleLight));

        for (int i = 0; i < 9; i++) {
            canvas.drawLine(0, i * height, getWidth(), i * height, light);
            canvas.drawLine(0, i * height + 1, getWidth(), i * height + 1, hilite);
            canvas.drawLine(i * width, 0, i * width, getHeight(), light);
            canvas.drawLine(i * width + 1, 0, i * width + 1, getHeight(), hilite);
        }

        for(int i = 0; i < 9; i++) {
            if(i % 3 != 0)
                continue;
            canvas.drawLine(0, i * height, getWidth(), i * height, dark);
            canvas.drawLine(0, i * height + 1, getWidth(), i * height + 1, hilite);
            canvas.drawLine(i * width, 0, i * width, getHeight(), dark);
            canvas.drawLine(i * width + 1, 0, i * width + 1, getHeight(), hilite);
        }

        Paint foreground = new Paint(Paint.ANTI_ALIAS_FLAG);
        foreground.setColor(getResources().getColor(R.color.puzzleForeground));
        foreground.setStyle(Style.FILL);
        foreground.setTextSize(height * 0.75f);
        foreground.setTextScaleX(width / height);
        foreground.setTextAlign(Paint.Align.CENTER);

        FontMetrics fm = foreground.getFontMetrics();

        float x = width / 2;

        float y = height / 2 - (fm.ascent + fm.descent) / 2;
        for(int i = 0; i < 9; i++) {
            for(int j = 0; j < 9; j++) {
                canvas.drawText(this.game.getTileString(i, j), i * width + x, j * height + y, foreground);
            }
        }
    }

    void setSelectedTile(int tile) {
        if (game.setTile(selX, selY, tile)) {
            invalidate();
        }
    }
    @Override
    public boolean onTouchEvent(MotionEvent event) {
        if (event.getAction() != MotionEvent.ACTION_DOWN) {
            return super.onTouchEvent(event);
        }
        selX = Math.min(Math.max(((int)(event.getX() / width)), 0), 8);
        selY = Math.min(Math.max(((int)(event.getY() / height)), 0), 8);
        game.displayTheKeypad(selX, selY);
        Log.d(TAG, "onTouchEvent: x = " + selX + ", y = " + selY);
        return true;
    }
}
