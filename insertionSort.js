var inputs = [100, 70, 60, 40, 30];
console.log(insertionSort(inputs));

function insertionSort(inputs) {
    for (var i = 0; i < inputs.length; i++) {
        var currentUnsorteditem = inputs[i];
        console.log('currentUnsorteditem ' + currentUnsorteditem);
        for (var j = i; j > 0 && currentUnsorteditem < inputs[j - 1]; j--) {
            inputs[j] = inputs[j - 1];
        }

        inputs[j] = currentUnsorteditem;
    }

    return inputs;
}
