
var unsortedArray = [4, 3, 2, 7, 10, 6];

bubbleSort(unsortedArray);

function bubbleSort (unsortedArray) {
  console.log(unsortedArray);

  var swapped = false;
  do {
    var swapped = false;

    console.log('inside do');
    for (var i = 0; i < unsortedArray.length -1; i++) {
      // console.log(unsortedArray[i]);
      var next = unsortedArray[i + 1];
      var current = unsortedArray[i];

      if(current > next) {
        console.log('swap');
        var swap = next;

        unsortedArray[i + 1] = current;
        unsortedArray[i] = swap;

        swapped = true;

        console.log(unsortedArray, i);
      }
    }
  } while (swapped);
}
