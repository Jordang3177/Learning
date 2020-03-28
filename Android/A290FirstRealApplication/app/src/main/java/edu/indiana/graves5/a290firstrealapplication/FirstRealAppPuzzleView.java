package edu.indiana.graves5.a290firstrealapplication;

/*
FirstRealAppPuzzleView.java

This contains the board itself that the user will see when he looks at the game state.

Created by: Jordan Graves
Created on: 2/18/19
Last Modified by: Jordan Graves
Last Modified on: 2/18/19
Assignment/Project: A290 Android Development Homework Project 3
 */
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.Paint.FontMetrics;
import android.graphics.Paint.Style;
import android.util.Log;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;
import android.view.animation.AnimationUtils;

public class FirstRealAppPuzzleView extends View {
    private static final String TAG = "FirstRealAppPuzzleView";

    private final FirstRealAppGameActivity game;

    public FirstRealAppPuzzleView(Context context) {
        super(context);
        this.game = (FirstRealAppGameActivity) context;
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

}
