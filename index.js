let prev = document.getElementById('prev')
let next = document.getElementById('next')

let pill1 = document.getElementById('pill_1')
let pill2 = document.getElementById('pill_2')
let pill3 = document.getElementById('pill_3')
let pill4 = document.getElementById('pill_4')
let pill5 = document.getElementById('pill_5')
let pillDispenser = document.getElementById('pillDispenser')

let i = 3
let k = 0

prev.addEventListener("click", function(event){
    k += 16.67

    pill1.style.left = k + '%'
    pill2.style.left = k + '%'
    pill3.style.left = k + '%'
    pill4.style.left = k + '%'
    pill5.style.left = k + '%'
    
    if(i == 3){
        pill1.style.opacity = 1
        pill1.style.scale = 1

        pill2.style.opacity = 0.75
        pill2.style.scale = 0.75

        i += 1
    }

})
next.addEventListener("click", function(event){
    k -= 16.67

    pill1.style.left = k + '%'
    pill2.style.left = k + '%'
    pill3.style.left = k + '%'
    pill4.style.left = k + '%'
    pill5.style.left = k + '%'

    if(i == 1){
        pill5.style.opacity = 0.75
        pill5.style.scale = 0.75

        pill3.style.opacity = 1
        pill3.style.scale = 1

        i -= 1
        console.log(i);
    }
    if(i == 2){
        pill4.style.opacity = 0.75
        pill4.style.scale = 0.75

        pill5.style.opacity = 1
        pill5.style.scale = 1

        i -= 1
        console.log(i);
    }
    if(i == 3){
        pill4.style.opacity = 1
        pill4.style.scale = 1

        pill2.style.opacity = 0.75
        pill2.style.scale = 0.75

        i -= 1
        console.log(i);
    }
})