//bài 1
const p = document.createElement("p");
p.innerHTML = "nội dung bất kì"
p.id = "text";
p.style.color = "#777";
p.style.fontSize = "2rem";
p.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";
document.body.prepend(p);

//bài2
const ul = document.createElement("ul");
ul.innerHTML = "<li>Item 1</li> <li>Item 2</li> <li>Item 3</li>";
document.body.prepend(ul);
for(let i = 0; i < ul.children.length; i++) {
    ul.children[i].style.color = "blue"
}

//bài 3
const list = document.getElementById("list");
for(let i = 8; i <= 10; i++) {
    const li = document.createElement("li");
    li.innerHTML = "Item" + i
    list.append(li)
}
// chuyển li1 thành màu đỏ
list.children[0].style.color = "red"

//chuyển li3 có background màu xanh
list.children[2].style.backgroundColor = "green"

// xóa thẻ li4
list.removeChild(list.children[3])

const liNew = document.createElement("li")
liNew.innerText = "Li new"
const liIndex = document.querySelector("#list > li:nth-child(4)")
list.insertBefore(liNew, liIndex)