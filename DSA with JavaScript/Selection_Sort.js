let arr = [23, 54, 34, 3, 5, 43, 10, 21, 90]
function selectionSort(data) {
    for (i = 0; i < data.length; i++) {
        let minId = i
        for (j = i + 1; j < data.length; j++) {
            if (data[j] < data[minId]) {
                minId = j
            }
        }
        let temp = data[minId]
        data[minId] = data[i]
        data[i] = temp
    }
}
selectionSort(arr)
console.log(arr)