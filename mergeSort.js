var inputs = [100, 70, 60, 40, 30];
console.log(mergeSort(inputs));

function mergeSort(inputs) {
    var inputLength = inputs.length;

    if (inputLength === 1) {
        return;
    }

    var midpoint = Math.floor(inputs.length / 2);
    var leftArray = inputs.slice(0, midpoint);
    var rightArray = inputs.slice(midpoint);

    mergeSort(leftArray);
    mergeSort(rightArray);


    merge(leftArray, rightArray, inputs);

    return inputs;

}

function merge(leftArray, rightArray, inputs) {
    var index = 0;
    while (rightArray.length && leftArray.length) {
        if (rightArray[0] < leftArray[0]) {
            inputs[index++] = rightArray.shift()
        } else {
            inputs[index++] = leftArray.shift();
        }
    }

    while (leftArray.length) {
        inputs[index++] = leftArray.shift();
    }

    while (rightArray.length) {
        inputs[index++] = leftArray.shift();
    }

}
