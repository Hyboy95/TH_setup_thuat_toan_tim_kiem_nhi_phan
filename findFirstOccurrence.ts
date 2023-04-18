
function findFirstOccurrence (numbers: number[], target: number) {
    let low: number = 0;
    let high: number = numbers.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (target === numbers[mid]) {
            return mid;
        } else if (target < numbers[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

let data: number[] = [2,5,5,5,6,6,8,9,9];
let target: number = 5;
let index: number = findFirstOccurrence(data, target);

if (index !== -1) {
    console.log(`Phan tu ${target} xuat hien tai vi tri ${index}`);
} else {
    console.log(`Phan tu ${target} khong ton tai trong mang`);
}