const arrays = require("./arrays")

const edFolha = arrays.edFolha
const edGalho = arrays.edGalho

function listUnion(list1, list2) {
    const finalList = []
    let indexList1 = 0
    let indexList2 = 0

    while (indexList1 < list1.length && indexList2 < list2.length){
        let elementList1 = list1[indexList1]
        let elementList2 = list2[indexList2]

        if (elementList1.preco > elementList2.preco) {
            finalList.push(elementList2)
            indexList2++
        } else if (elementList2.preco > elementList1.preco) {
            finalList.push(elementList1)
            indexList1++
        } else {
            finalList.push(elementList1)
            finalList.push(elementList2)
            indexList1++
            indexList2++
        }
    }
    while (indexList1 < list1.length) {
        finalList.push(list1[indexList1])
        indexList1++
    }
    while (indexList2 < list2.length) {
        finalList.push(list2[indexList2])
        indexList2++
    }

    return finalList
}

console.log(listUnion(edFolha, edGalho))
