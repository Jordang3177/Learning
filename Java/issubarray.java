
public class issubarray {
	//This will check to see if array2 is a subset of array1.
	static boolean Subsetofarray(int array1[], 
			int array2[], int length1, int length2)
	{
		// initializing integers to use later in for loops
		int i = 0;
		int j = 0;
		
		// for loop to check the elements in the second array
		// this loop will stop once it reaches the end
		// of the second array
		for(i = 0; i < length2; i++)
		{
			
			//This for loop is used to make sure that it is checking
			//each element in array1
			//we are nesting the loops so that they will check
			// the first element of one array against every element
			// in the second array and then move on to the next one.
			for (j = 0; j < length1; j++)
			
				//This is for when it finds the element that matches
				// both arrays and then will break the for loops.
				if(array2[i] == array1[j])
					break;
			
			//if we get here then that means that the above inner
			//loop was executed to it's fullest extent and it
			//didn't find an element in one array that matches
			//the other array.
			if (j == length1)
				return false;
		}
		
		//if we finally get to here then that means that
		//all elements in array2 are in array1.
		return true;
	}
	
	
	public static void main(String args[])
	{
		// Initializing both arrays for this problem
		int array1[] = {11, 1, 13, 21, 3, 7};
		int array2[] = {11, 3, 7, 1};
		int array3[] = {1, 2, 3, 4, 5, 6};
		int array4[] = {6, 7, 8};
		
		int length1 = array1.length;
		int length2 = array2.length;
		int length3 = array3.length;
		int length4 = array4.length;
		
		//This will run the above mentioned function
		//and depending on what it returns will show up a 
		//specified string that is based on that output.
		//all of these below are just tests to make sure it works
		//properly.
		if(Subsetofarray(array1, array2, 
				         length1, length2))
			System.out.println("array2 is a subset"
					+ " of array1");
		else
			System.out.println("array2 is not a subset"
					+ " of array1");
		
		if(Subsetofarray(array3, array4, length3, length4))
			System.out.println("array4 is a subset of array3");
		else
			System.out.println("array4 is not a subset of array3");
		
		if(Subsetofarray(array1, array4, length1, length4))
			System.out.println("array4 is a subset of array1");
		else
			System.out.println("array4 is not a subset of array1");
	}
		
}


