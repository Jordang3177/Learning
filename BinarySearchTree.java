/**
 * Starter code for lab5. This is an implementation of BinarySearchTree
 * for int data.
 *
 * Implement the remove() method using the algorithm described by your AI.
 *
 * @author Jordan Graves
 */

public class BinarySearchTree implements Tree {

    class Node {
        int data;
        Node left, right;

        Node(int key) {
            this(key, null, null);
        }

        Node(int data, Node left, Node right) {
            this.data = data;
            this.left = left;
            this.right = right;
        }

        boolean isLeaf() {
            return left == null && right == null;
        }
    }

    Node root;
    int n;

    /**
     *
     * Removes the key from this tree. Must run in O(h) time, where h
     * is the height of the tree.
     */
    public void remove(int key) {
        root = removeHelper(root, key);
        n--;
    }
    public Node removeHelper(Node p, int key)
    {
        if(p == null)
            return p;
        if(p.data < key)
        {
            p.right = removeHelper(p.right, key);
        }
        else if (p.data > key)
        {
            p.left = removeHelper(p.left, key);
        }
        else
        {
            if(p.left == null)
                return p.right;
            else if(p.right == null)
                return p.left;

            p.data = minimumValue(p.right);

            p.right = removeHelper(p.right, p.data);
        }
        return p;
    }

    public int minimumValue(Node p)
    {
        int answer = p.data;
        while(p.left != null) {
            answer = p.left.data;
            p = p.left;
        }
        return answer;
    }

    /**
     * Inserts the key into this tree. Runs in O(h) time, where h is
     * the height of the tree.
     */
    public void insert(int key) {
        n++;
        root = insertHelper(key, root);
    }

    private Node insertHelper(int key, Node p) {
        if (p == null)
            p = new Node(key);
        else if (key < p.data)
            p.left = insertHelper(key, p.left);
        else
            // if keys are unique, it must be the case that key > p.data
            p.right = insertHelper(key, p.right);
        return p;
    }

    /**
     * Returns true iff key is in this tree. Runs in O(h) time, where h is
     * the height of the tree.
     */
    public boolean contains(int key) {
        return containsHelper(key, root);
    }

    private boolean containsHelper(int key, Node p) {
        if (p == null)
            return false;
        if (key == p.data)
            return true;
        if (key < p.data)
            return containsHelper(key, p.left);
        return containsHelper(key, p.right);
    }

    /**
     * Returns the number of keys in this tree.
     */
    public int size() {
        return n;
    }

    /**
     * Testing.
     */
    public static void main(String... args) {
        int[] a = new int[] { 3, 9, 7, 2, 1, 5, 6, 4, 8 };
        int[] b = new int[] { 1, 6, 4, 5, 8, 9, 7, 2 };
        int[] c = new int[] { 3, 1, 4, 6, 9, 2, 5, 7};
        Tree bst = new BinarySearchTree();
        assert bst.isEmpty();
        for (int key : a)
            bst.insert(key);
        assert bst.size() == a.length;
        for (int key : a)
            assert bst.contains(key);
        bst.remove(3);
        for (int key : b)
            assert bst.contains(key);
        assert !bst.contains(3);
        int n = bst.size();
        for (int key : b) {
            assert bst.contains(key);
            bst.remove(key);
            assert !bst.contains(key);
            n--;
            assert n == bst.size();
        }
        assert bst.isEmpty();
        for(int key: c)
            bst.insert(key);
        bst.remove(3);
        assert !bst.contains(3);
        System.out.println("Passed all the basic tests...");


        
    }
}

interface Tree {
    void insert(int key);
    default void remove(int key) {
        throw new UnsupportedOperationException();
    }
    boolean contains(int key);
    int size();
    default boolean isEmpty() {
        return size() == 0;
    }
}

