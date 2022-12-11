const cells = document.querySelectorAll(".cell")

cells.forEach((cell)=>{
cell.addEventListener("click",(e)=>{
    e.target.classList.add("cross")
})
})