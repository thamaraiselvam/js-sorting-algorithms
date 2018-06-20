var inputs = [100, 70, 60, 40, 30];
console.log(bubbleSort(inputs));

function bubbleSort(inputs) {

    var sorted = false;
    while (!sorted) {
        localsortFlag = false;
        for (var j = 0; j < inputs.length; j++) {
            console.log('Comparing ' + inputs[j] + ' and ' + inputs[j + 1]);
            if (inputs[j] > inputs[j + 1]) {
                localsortFlag = true;
                console.log('swapping ' + inputs[j] + ' and ' + inputs[j + 1]);
                [inputs[j], inputs[j + 1]] = [inputs[j + 1], inputs[j]];
            }
        }

        if (localsortFlag === false) {
            sorted = true;
        }
    }

    return inputs;
}