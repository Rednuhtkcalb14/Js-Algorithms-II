const books = require("./array.js")

function mergeSort(array, index=0) {

    // console.log(index)
    // console.log(array)

    if (array.length > 1) {
        const midle =  Math.floor(Math.floor(array.length/2))
        const firstSlice = mergeSort(array.slice(0, midle), index+1)
        const secondSlice = mergeSort(array.slice(midle, array.length), index+1)
        array = listUnion(firstSlice, secondSlice)
    }

    // console.log("Array depois do if")
    // console.log(array)
    // console.log()
    return array
}

function listUnion(list1, list2) {
    let indexList1 = 0
    let indexList2 = 0
    const finalList = []

    while (indexList1 < list1.length && indexList2 < list2.length) {
        let elementList1 = list1[indexList1]
        let elementList2 = list2[indexList2]

        if (elementList1.preco < elementList2.preco) {
            finalList.push(elementList1)
            indexList1++
        }
        else if (elementList2.preco < elementList1.preco) { 
            finalList.push(elementList2)
            indexList2++
        }
        else {
            finalList.push(elementList1)
            finalList.push(elementList2)
            indexList1++
            indexList2++
        }
    }


    return finalList.concat(indexList1 < list1.length? list1.slice(indexList1) : list2.slice(indexList2))
}

console.log(mergeSort(books))
