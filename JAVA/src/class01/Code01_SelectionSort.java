package class01;

import java.util.Arrays;

public class Code01_SelectionSort {
  public static void selectionSort(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
      int minIndex = i;
      for (int j = i + 1; j < arr.length; j++) {
        if (arr[minIndex] > arr[j]) {
          minIndex = j;
        }
      }
      if (i != minIndex) {
        swap(arr, i, minIndex);
      }
    }
  }
  public static void swap(int[] arr, int i, int j) {
    arr[i] = arr[i] ^ arr[j];
    arr[j] = arr[i] ^ arr[j];
    arr[i] = arr[i] ^ arr[j];
  }
  // for test
  public static void main(String[] args) {
    int testTime = 500000;
    int maxSize = 100;
    int maxValue = 100;
    boolean succeed = true;
    for (int i = 0; i < testTime; i++) {
      int[] arr1 = generateRandomArray(maxSize, maxValue);
      int[] arr2 = copyArray(arr1);
      selectionSort(arr1);
      comparator(arr2);
      if (!isEqual(arr1, arr2)) {
        succeed = false;
        printArray(arr1);
        printArray(arr2);
        break;
      }
    }
    System.out.println(succeed ? "Nice!" : "Fucking fucked!");
  }

  public static int[] generateRandomArray(int maxSize, int maxValue) {
    int[] arr = new int[(int) Math.random() * (maxSize + 1)];
    for (int i = 0; i < arr.length; i++) {
      arr[i] =(int) (Math.random() * (maxValue + 1) - Math.random() * maxValue);
    }
    return arr;
  }

  public static int[] copyArray(int[] arr) {
    if (arr == null) {
      return null;
    }
    int[] newArr = new int[arr.length];
    for (int i = 0; i < arr.length; i++) {
      newArr[i] = arr[i];
    }
    return newArr;
  }

  public static void comparator(int[] arr) {
    Arrays.sort(arr);
  }

  public static boolean isEqual(int[] arr1, int[] arr2) {
    if ((arr1 == null && arr2 != null) || (arr1 != null && arr2 == null)) {
      return false;
    }
    if (arr1 == null && arr2 == null) {
      return true;
    }
    if (arr1.length != arr2.length) {
      return false;
    }
    for(int i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      }
    }
    return true;
  }

  public static void printArray(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + " ");
    }
    System.out.println();
  }
}

