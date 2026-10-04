const li = document.querySelectorAll("nav>ul>li")
const category = document.querySelectorAll(".category")

// ------- CATEGORY SELECTOR ------- //
li.forEach((val) => {
    val.addEventListener("click", () => {

        // ------- Reset List
        li.forEach((eachLi) => {
            eachLi.classList.remove("text-[#D3D6DB]!")
            eachLi.classList.remove("bg-[#3A4750]")
        })

        // ------- Reset Category
        category.forEach((eachCat) => {
            eachCat.classList.add("hidden")
            eachCat.classList.remove("flex")
        })

        // ------- Show Category
        let index = val.getAttribute("data-index")
        category[index].classList.remove("hidden")
        category[index].classList.add("flex")

        // ------- Show List
        val.classList.add("text-[#D3D6DB]!")
        val.classList.add("bg-[#3A4750]")
    })
})


// ------- ACCORDION ------- //
const openBtn = document.querySelectorAll("main>div>div>button")

openBtn.forEach((val, r) => {

    // ------- Setting the data status
    val.nextElementSibling.setAttribute("data-status", "off")

    // ------- Grab height then close the answers  
    val.nextElementSibling.setAttribute("data-h", val.nextElementSibling.clientHeight)
    let tempHeight = +val.nextElementSibling.getAttribute("data-h")
    val.nextElementSibling.style.height = "0px"

    val.addEventListener("click", () => {

        // ------- Reset Accordion
        openBtn.forEach((eachBtn, i) => {
            if (r != i) {
                eachBtn.nextElementSibling.style.height = "0px"
                eachBtn.nextElementSibling.setAttribute("data-status", "off")
                eachBtn.children[1].classList.remove("rotate-180")
            }
        })

        // ------- Show Accordion
        if (val.nextElementSibling.getAttribute("data-status") == "off") {
            val.nextElementSibling.style.height = (tempHeight + 20) + "px"
            val.nextElementSibling.setAttribute("data-status", "on")
            val.children[1].classList.add("rotate-180")

        } else {
            val.nextElementSibling.style.height = "0px"
            val.nextElementSibling.setAttribute("data-status", "off")
            val.children[1].classList.remove("rotate-180")
        }
    })
})

// ------- CATEGORY CLOSER ------- //
category.forEach((val, i) => {
    if (i != 0) {
        val.classList.add("hidden")
    }
})