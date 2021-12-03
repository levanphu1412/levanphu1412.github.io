const arr = ['+', '-', '*']


const timeEl = document.querySelector(".time")
const score = document.querySelector(".score")


const primaryNumber = document.querySelector("#primary-number")
const operator = document.querySelector("#operator")
const secondaryNumber = document.querySelector("#secondary-number")
const result = document.querySelector("#result")



function random() {
    primaryNumber.innerText = Math.floor(Math.random() * 10) + 1;
    secondaryNumber.innerText = Math.floor(Math.random() * 10) + 1;
    const randomElement = Math.floor(Math.random() * arr.length)
    operator.innerText = arr[randomElement]
    times = 30;
    updateTime();
}

let sc = 0;
function updateScore() {
    sc++;
    score.innerText = `${sc}`
}

let times = 30;
function updateTime() {
    times--
    timeEl.innerText = `00:${times}`
    if(times == 0){
        
        alert(`Điểm của bạn là ${score.innerText}`)
        clearInterval(timeInterval)
    }
}
let timeInterval = setInterval(updateTime, 1000)


document.addEventListener('keydown', function(event){
    if(event.keyCode == 13 ){
        if(operator.innerText == '+') {
            if(Number(primaryNumber.innerText) + Number(secondaryNumber.innerText) == result.value) {
                result.value =""
                updateScore();
                random();
                console.log("success")
            }else {
                alert("kết quả sai, cần nhập lại")
            }
        }else if(operator.innerText == '-') {
            if(Number(primaryNumber.innerText) - Number(secondaryNumber.innerText) == result.value) {
                result.value =""
                updateScore();
                random()
                console.log("success")
            }else{
                alert("kết quả sai, cần nhập lại")
            }
        }else {
            if(Number(primaryNumber.innerText) * Number(secondaryNumber.innerText) == result.value) {
                updateScore();
                result.value =""
                random();
                console.log("success")
            }else{
                alert("kết quả sai, cần nhập lại")
            }
        }
    }
})



