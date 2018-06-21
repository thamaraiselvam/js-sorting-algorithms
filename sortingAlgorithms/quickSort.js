var items = [100, 70, 60, 40, 30];

console.log(quickSort(items, 0, items.length - 1));

function quickSort(items, leftIndex, rightIndex) {
    var pivotIndex;

    if (items.length > 1) {
        pivotIndex = partition(items, leftIndex, rightIndex);
        if (leftIndex < pivotIndex - 1) {
            quickSort(items, leftIndex, pivotIndex - 1)
        }

        if (pivotIndex < rightIndex) {
            quickSort(items, pivotIndex, rightIndex)
        }
    }

    return items;
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)];
    var l = left;
    var r = right;

    while (l <= r) {
        if (items[l] < pivot) {
            l++;
        }

        if (items[r] > pivot) {
            r--;
        }

        if (l <= r) {
            swap(items, l, r);
            l++;
            r--;
        }
    }

    return l;
}

function swap(items, l, r) {
    tmpLeft = items[l]
    items[l] = items[r]
    items[r] = tmpLeft
}