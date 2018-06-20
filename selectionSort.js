var inputs = [100, 70, 60, 40, 30];
console.log(selectionSort(inputs));

function selectionSort(inputs) {

    for (var i = 0; i < inputs.length; i++) {
        var smallIndex = i;
        for (var j = i + 1; j < inputs.length; j++) {
            console.log('Comparing ' + inputs[smallIndex] + ' and ' + inputs[j]);
            if (inputs[smallIndex] > inputs[j]) {
                smallIndex = j;
            }
        }

        if (smallIndex !== i) {
            console.log('Swapping ' + inputs[smallIndex] + ' and ' + inputs[i]);
            [inputs[i], inputs[smallIndex]] = [inputs[smallIndex], inputs[i]];
        }
    }

    return inputs;
}