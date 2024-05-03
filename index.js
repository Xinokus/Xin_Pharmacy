let pill1 = document.getElementById("pill_1")
let pill2 = document.getElementById("pill_2")
let pill3 = document.getElementById("pill_3")

let prev = document.getElementById("prev")
let next = document.getElementById("next")

let count = 1

prev.addEventListener("click", () => {
    if(count == 1){
        pill1.style.opacity = 1
        pill1.style.scale = 1
        pill1.style.bottom = "0vh"
        pill1.style.left = "18.5vw"
        pill1.style.zIndex = 2

        pill2.style.opacity = 0.75
        pill2.style.scale = 0.75
        pill2.style.bottom = "3vh"
        pill2.style.right = "-13.5vw"
        pill2.style.zIndex = 1

        pill3.style.opacity = 0.75
        pill3.style.scale = 0.75
        pill3.style.bottom = "3vh"
        pill3.style.right = "32vw"
        pill3.style.zIndex = 1
        count -= 1        
        if(count == 0){
            count = 3
        }
        console.log(count);
    }
    else if(count == 3){
        pill1.style.opacity = 0.75
        pill1.style.scale = 0.75
        pill1.style.bottom = "3vh"
        pill1.style.left = "32vw"
        pill1.style.zIndex = 1

        pill2.style.opacity = 0.75
        pill2.style.scale = 0.75
        pill2.style.bottom = "3vh"
        pill2.style.right = "13.5vw"
        pill2.style.zIndex = 1

        pill3.style.opacity = 1
        pill3.style.scale = 1
        pill3.style.bottom = "0vh"
        pill3.style.right = "18.5vw"
        pill3.style.zIndex = 2
        count -= 1        
        console.log(count);
    }
    else if(count == 2){
        pill1.style.opacity = 0.75
        pill1.style.scale = 0.75
        pill1.style.bottom = "3vh"
        pill1.style.left = "5vw"
        pill1.style.zIndex = 1

        pill2.style.opacity = 1
        pill2.style.scale = 1
        pill2.style.bottom = "0vh"
        pill2.style.right = "0vw"
        pill2.style.zIndex = 2

        pill3.style.opacity = 0.75
        pill3.style.scale = 0.75
        pill3.style.bottom = "3vh"
        pill3.style.right = "5vw"
        pill3.style.zIndex = 0
        count -= 1        
        console.log(count);
    }
})
next.addEventListener('click', () => {
    if(count == 1){
        pill1.style.opacity = 0.75
        pill1.style.scale = 0.75
        pill1.style.bottom = "3vh"
        pill1.style.left = "32vw"
        pill1.style.zIndex = 1

        pill2.style.opacity = 0.75
        pill2.style.scale = 0.75
        pill2.style.bottom = "3vh"
        pill2.style.right = "13.5vw"
        pill2.style.zIndex = 1

        pill3.style.opacity = 1
        pill3.style.scale = 1
        pill3.style.bottom = "0"
        pill3.style.right = "18.5vw"
        pill3.style.zIndex = 2

        count += 1
        console.log(count)
    }
    else if(count == 2){
        pill1.style.opacity = 1
        pill1.style.scale = 1
        pill1.style.bottom = "0"
        pill1.style.left = "18.5vw"
        pill1.style.zIndex = 2

        pill2.style.opacity = 0.75
        pill2.style.scale = 0.75
        pill2.style.bottom = "3vh"
        pill2.style.right = "-13.5vw"
        pill2.style.zIndex = 1

        pill3.style.opacity = 0.75
        pill3.style.scale = 0.75
        pill3.style.bottom = "3vh"
        pill3.style.right = "32vw"
        pill3.style.zIndex = 1

        count += 1
        console.log(count)
    }
    else if(count == 3){
        pill1.style.opacity = 0.75
        pill1.style.scale = 0.75
        pill1.style.bottom = "3vh"
        pill1.style.left = "5vw"
        pill1.style.zIndex = 1

        pill2.style.opacity = 1
        pill2.style.scale = 1
        pill2.style.bottom = "0vh"
        pill2.style.right = "0vw"
        pill2.style.zIndex = 2

        pill3.style.opacity = 0.75
        pill3.style.scale = 0.75
        pill3.style.bottom = "3vh"
        pill3.style.right = "5vw"
        pill3.style.zIndex = 1

        count = 1
        console.log(count)
    }
})

let burgerMenu = document.getElementById('burgerMenu')
let burgerOpen = document.getElementById('burgerOpen')
let burgerItself = document.getElementById('burgerItself')
let burgerClose = document.getElementById('burgerClose')

burgerOpen.addEventListener('click', () => {

    burgerMenu.style.visibility = 'visible'
    burgerMenu.style.backdropFilter = 'blur(0.2vw)'
    burgerItself.style.right = '0'

})
burgerClose.addEventListener('click', () => {

    burgerMenu.style.visibility = 'hidden'
    burgerMenu.style.backdropFilter = 'blur(0vw)'
    burgerItself.style.right = '-30.1%'
    
})