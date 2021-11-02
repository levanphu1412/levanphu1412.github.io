let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

// Lọc ra các học sinh là nam
const isMale = grades => {
    return grades.filter(ele => ele.sex === 'M')
}

// Lọc ra các học sinh là nữ
const isFemale = grades => {
    return grades.filter(ele => ele.sex === 'F')
}

// Tính trung bình grade của 1 mảng bất kỳ
const avgGrade = grades => {
    return grades.reduce((sum, ele) => (sum + ele.grade), 0) / grades.length
}

// Lấy giá trị grade lớn nhất trong mảng grades
const isMax = grades => {
    return Math.max(...grades.map(std => std.grade))
}

// Lấy giá trị grade nhỏ nhất trong mảng grades
const isMin = grades => {
    return Math.min(...grades.map(std => std.grade))
}

// lấy giá trị name bắt đầu bằng 'J'
const getName = grades => {
    return grades.filter(n => n.name.charAt(0) === 'J')
}


// 1. Tìm thứ hạng trung bình của cả lớp 
console.log("Trung bình cả lớp: ", avgGrade(grades));

// 2. Tìm thứ hạng trung bình của nam trong lớp 
console.log("Trung bình Nam:", avgGrade(isMale(grades)));

// 3. Tìm thứ hạng trung bình của nữ trong lớp 
console.log("Trung bình Nam:", avgGrade(isFemale(grades)));

// 4. Tìm thứ hạng của nam cao nhất trong lớp 
console.log("thứ hạng của nam cao nhất trong lớp: " + isMax(isMale(grades)));

// 5. Tìm thứ hạng của nữ cao nhất trong lớp 
console.log("thứ hạng của nữ cao nhất trong lớp: " + isMax(isFemale(grades)));

// 6. Tìm thứ hạng thấp nhất của Nam trong lớp 
console.log("thứ hạng thấp nhất của Nam trong lớp: " + isMin(isMale(grades)));

// 7. Tìm thứ hạng thấp nhất của Nữ trong lớp 
console.log("thứ hạng thấp nhất của Nữ trong lớp: " + isMin(isFemale(grades)));

// 8. Tìm thứ hạng cao nhất của cả lớp 
console.log("thứ hạng cao nhất của cả lớp: " + isMax(grades));

// 9. Tìm thứ hạng thấp nhất của cả lớp
console.log("thứ hạng thấp nhất của cả lớp: " + isMin(grades))

// 10. Lấy ra danh sách tất cả học viên nữ trong lớp
console.log(isFemale(grades))

// 11. Sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
// let sortByName = grades.map((grade, index, grades) => {
//     return grade.name
// });

// console.log(sortByName.sort())
const sortByName = grades => {
    return grades.sort(function(a, b) {
        return a.name.localeCompare(b.name)
    })
}
console.log(sortByName(grades))
// 12. Sắp xếp thứ hạng học viên theo chiều giảm dần
const sortBygrade = grades => {
    return grades.sort(function(a, b) {return b.grade - a.grade})
}
console.log(sortBygrade(grades));

// 13. Lấy ra học viên nữ có tên bắt đầu bằng "J"
console.log(getName(isFemale(grades)))

// 14. Lấy ra top 5 người có thứ hạng cao nhất
function getTop5(arr) {
    let count = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
        count++;
        if(count == 5) {
            break;
        }
    }

    return result;
}
console.log(sortBygrade(getTop5(grades)))
