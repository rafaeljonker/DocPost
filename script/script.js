
allbox = document.querySelectorAll(".telefone div")
alltarget = document.querySelectorAll("li span")

alltarget.forEach(element => {
  element.addEventListener("click", () => {
    alltarget.forEach(element => {
      element.classList.remove("bolaativa")
    })
    allbox.forEach(element => {
      element.classList.remove("bolaativa")
    })

    element.classList.add("bolaativa")
    if (element.classList.contains("ball1")) {
      const item1 = document.querySelector(".box1")
      item1.classList.add("bolaativa")
    }
    if (element.classList.contains("ball2")) {
      const item1 = document.querySelector(".box2")
      item1.classList.add("bolaativa")
    }
    if (element.classList.contains("ball3")) {
      const item1 = document.querySelector(".box3")
      item1.classList.add("bolaativa")
    }

  })
});

