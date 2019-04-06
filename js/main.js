$(function () {
    var example_inputs = [
        [0x0, 0xB, 0xA, 0x3, 0x2, 0x8, 0x4, 0x7, 0x6, 0x5, 0x1, 0x9],
        [0x0, 0xA, 0x9, 0x8, 0x1, 0xA, 0x3, 0x9, 0x2, 0x0, 0x1, 0x1],
        [0x1, 0x6, 0x3, 0x8, 0x9, 0x4, 0x0, 0xA, 0x5, 0x2, 0xB, 0x7],
        [0x1, 0x9, 0x8, 0x4, 0x1, 0xB, 0x3, 0x8, 0x2, 0x6, 0x2, 0x5],
        [0x2, 0x9, 0x7, 0xB, 0x4, 0x0, 0x1, 0x6, 0x3, 0x8, 0xA, 0x5],
        [0x2, 0x6, 0x1, 0x0, 0x9, 0x4, 0x8, 0x7, 0x8, 0x6, 0x2, 0x6],
        [0x3, 0x4, 0x5, 0x7, 0x1, 0x9, 0x2, 0x0, 0x6, 0x8, 0xB, 0xA],
        [0x3, 0x5, 0x6, 0xA, 0xA, 0x0, 0x2, 0x3, 0xB, 0x7, 0x2, 0x4],
        [0x4, 0xB, 0x6, 0x0, 0x7, 0x9, 0xA, 0x2, 0x1, 0x8, 0x3, 0x5],
        [0x4, 0x0, 0xB, 0x0, 0x6, 0x5, 0x6, 0x6, 0x7, 0x1, 0x0, 0xA],
        [0x5, 0x2, 0x8, 0x1, 0xA, 0xB, 0x3, 0x4, 0x7, 0x9, 0x0, 0x6],
        [0x5, 0x7, 0x5, 0x0, 0x6, 0x8, 0x4, 0xB, 0x8, 0x9, 0x3, 0x4],
        [0x6, 0x9, 0x8, 0x7, 0x2, 0xB, 0x3, 0xA, 0x5, 0x4, 0x1, 0x0],
        [0x6, 0xA, 0x2, 0x3, 0x0, 0x5, 0x3, 0x0, 0x4, 0x7, 0x8, 0x1],
        [0x7, 0x0, 0x1, 0xA, 0x6, 0x9, 0x3, 0x5, 0x4, 0x2, 0xB, 0x8],
        [0x7, 0x8, 0x5, 0x2, 0x8, 0x6, 0x1, 0x0, 0x3, 0x4, 0x2, 0x9],
        [0x8, 0x7, 0x3, 0xA, 0x9, 0x4, 0x2, 0x5, 0xB, 0x1, 0x6, 0x0],
        [0x8, 0xA, 0x1, 0x5, 0x9, 0x3, 0x4, 0x7, 0x9, 0x0, 0x8, 0x5],
        [0x9, 0x0, 0xB, 0x3, 0x4, 0x2, 0x7, 0x5, 0x6, 0x1, 0x8, 0xA],
        [0x9, 0x9, 0xB, 0x5, 0x3, 0x5, 0x1, 0xA, 0x3, 0x3, 0xA, 0xB],
        [0xA, 0x4, 0x0, 0xB, 0x5, 0x8, 0x6, 0x1, 0x7, 0x9, 0x2, 0x3],
        [0xA, 0x3, 0x9, 0x5, 0x9, 0xA, 0x2, 0x2, 0xA, 0x4, 0x4, 0x4],
        [0xB, 0x8, 0xA, 0x4, 0x6, 0x3, 0x7, 0x9, 0x0, 0x1, 0x5, 0x2],
        [0xB, 0x6, 0x0, 0x0, 0x5, 0xA, 0x6, 0x2, 0x7, 0xB, 0x2, 0x3],
    ];

    // Choose random example index
    var randIndex = Math.floor(Math.random() * example_inputs.length)


    var mergeSortComplete = false;
    var quickSortComplete = false;
    var insertSortComplete = false;

    function raceManager() {
        var MergeSortArray = example_inputs[randIndex];
        var insertionArray = example_inputs[randIndex];
        while (!mergeSortComplete && !quickSortComplete && !insertSortComplete) {
            mergeSortStep(MergeSortArray);
            insertionSort(insertionArray);

        }
    }


    // -------------------------- Start merge sort ----------------------------
    // global variables to  keep state for function
    mergeFirstRun = true;
    mergeIndex = 0;
    var tempMerge = new Array();
    var isMerge = false;
    var mergeDepth = 0;
    var i_m = 0;
    var j_m = 0;
    var k_m = 0;
    var d1 = false;
    var ar = new Array();
    //

    function mergeSortStep(array) {
        if (array.length < 2) {
            return array;
        }

        if (mergeFirstRun) {
            for (i_m = 0; i_m < array.length; i_m++) {
                tempMerge.push([array[i_m]]);
            }
            mergeFirstRun = false
            mergeDepth = 1
            i_m = array.length
        }

        if (mergeDepth == 1) {
            ar = [];
            if (i_m > 1) {
                if (d1 == true) {
                    i_m = Math.floor((i_m + 1) / 2);
                }
                j_m = 0;
                k_m = 0;
                d1 = true
                mergeDepth = 2;
            } else {
                console.log("complete!")
                mergeSortComplete = true;
                $('div.merge-results').append("<b>Complete!</b> <br>[" + tempMerge[0].toString() + "]<br>");
                console.log(tempMerge[0]);
            }
        }
        if (mergeDepth == 2) {
            if (k_m < i_m) {
                if (tempMerge[k_m].length > 0 && tempMerge[k_m + 1].length > 0) {
                    if (tempMerge[k_m][0] < tempMerge[k_m + 1][0]) {
                        ar.push(tempMerge[k_m].shift());
                    } else {
                        ar.push(tempMerge[k_m + 1].shift());
                    }
                } else {
                    ar = ar.concat(tempMerge[k_m]);
                    ar = ar.concat(tempMerge[k_m + 1]);
                    tempMerge[j_m] = ar;
                    ar = [];
                    j_m++;
                    k_m += 2;
                }
            } else {
                ar = [];
                mergeDepth = 1;
            }
        }
        if (!mergeSortComplete) {
            $('div.merge-results').append("[" + tempMerge[0].toString() + "]<br>");
        }
    }

    // -------------------- End merge sort ----------------------------

    // -------------------------- Start insertion sort --------------------------
    var current = 1;
    var saveit = 0;
    var smallest = 0;
    var insertionDepth = 0;
    var insertionFirstRun = true;
    var firstInsIteration = true;

    function insertionSort(array) {
        if (insertionFirstRun) {
            smallest = array[0];
            insertionFirstRun = false
            insertionDepth = 1;
        }

        if (insertionDepth == 1) {
            if (current < array.length) {
                saveit = array[current];
                smallest = current - 1;

                if (!firstInsIteration) {
                    current++
                }
                firstInsIteration = false;
                insertionDepth = 2;
            } else {
                console.log("complete!");
                insertSortComplete = true;
                $('div.insertion-results').append("<b>Complete!</b> <br>[" + array.toString() + "]<br>");
                return array;
            }
        }

        if (insertionDepth == 2) {
            if (smallest >= 0 && array[smallest] > saveit) {
                array[smallest + 1] = array[smallest];
                smallest = smallest - 1;
            } else {
                insertionDepth = 1;
                array[smallest + 1] = saveit;
                $('div.insertion-results').append("[" + array.toString() + "]<br>");
            }
        }

    }
    // -------------------------- End insertion sort ----------------------------
    // Show selected input
    $('div.chosen-array').html("<b>Chosen Input: </b> [" + example_inputs[randIndex].toString() + "]");


    // show original in all cols
    $('div.og-array').html("[" + example_inputs[randIndex].toString() + "]");

    raceManager();


});