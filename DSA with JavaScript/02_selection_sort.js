let arr = [23, 54, 34, 3, 5, 43, 10, 21, 90]
function selectionSort(data) {
    for (let i = data.length-1; i >= 0; i--) {
        let minId = i
        for (let j = i-1; j >=0; j--) {
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