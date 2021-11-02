const p = document.querySelector("p");
p.innerHTML = p.innerHTML
    .split(" ")
    .map((i) =>
        i.replace(/[,\.!?']/g, "").length > 8
            ? `<b style="background-color : yellow">${i}</b>`
            : i
    )
    .join(" ");

p.insertAdjacentHTML("afterend", "<a href='http://www.facebook.com' target='blank'>facebook</a>")

p.innerHTML= p.innerHTML.replace(/'?'/g, '🤔').replace(/'!'/g, '😲')