let Recepies ={
    pancakes: {
       name: 'Pancakes',
       ingredients: ['milk', 'sugar', 'salt', 'flour', 'butter', 'oil'],
       img: "https://cook-dream.ru/wp-content/uploads/2020/04/pankejki.jpg",
       ccal: '1000',
       easy: 'easy',
       time: '1 hour',
       meal: ['breakfast', 'dessert']},
    cheesecake: {
        name: 'Cheesecake',
       ingredients: ['milk', 'sugar', 'salt', 'flour', 'butter', 'oil'],
       img: "https://bigpicture.ru/wp-content/uploads/2016/01/Cheesecakes05.jpg",
       ccal: '1000',
       easy: 'easy',
       time: '5 hour',
       meal: ['dessert']},
    oat:{
       name: 'Oatmeal',
       ingredients: ['milk', 'sugar', 'salt', 'flour', 'butter', 'oil'],
       img: "https://avatars.mds.yandex.net/i?id=06ae5938c91a1eb1280922a7e9df8cc3-4602005-images-thumbs&n=13",
       ccal: '1000',
       easy: 'easy',
       time: '10 min',
       meal: ['breakfast']}
    }
let all = document.querySelector("[class=search]")
let one = document.querySelector("[class=s]")
let items = document.querySelectorAll("[class=item]")

for (i of items) {
    let n = i.title
    let recipt = Recepies[n]
    i.querySelector("[class=title]").innerText=recipt.name
    i.querySelector('img').src = recipt.img
    i.querySelector('[class="item-data"]').innerText += recipt.ccal
    i.querySelector('[class="view_button"]').title=n
    i.querySelector('[class="view_button"]').addEventListener("click", (e) => {
         n = e.target.title
         recipt=Recepies[n]
        fill(recipt)
        ShowOne()
    })
}
function fill(recipt){
    one.querySelector('.photo').querySelector('img').src=recipt.img
    console.log(recipt.img)
    one.querySelector('.title').innerText=recipt.name
    one.querySelector('.easy').querySelector('p').innerText=recipt.easy
    one.querySelector('.time').querySelector('p').innerText=recipt.easy
    one.querySelector('.ccal').querySelector('p').innerText=recipt.easy

}
function ShowOne (){
    all.style.display="none"
    one.style.display=""
}
function ShowAll(){
    all.style.display=""
    one.style.display="none"
    for (i of items){
      i.style.display=""
    }
}


const searchForm = document.querySelector('form')
let searchQuery
searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    searchQuery = e.target.querySelector('input').value
    for (i in Recepies){
        j=Recepies[i]
        if (!(j.name.includes(searchQuery))){
           test= document.querySelector('[title=' + i + ']') 
           test.style.display="none"}
        else {
            test = document.querySelector('[title =' + i + ']')
            test.style.display=''}
    }
})
const breakfast = document.querySelector('.breakfast')
breakfast.addEventListener('click', (e) => {
    e.preventDefault()
    for (i in Recepies) {
        let j=Recepies[i]
        for (h of j.meal){
        if (!('breakfast' == h)){
            test= document.querySelector('[title=' +i +']') 
            test.style.display="none"}
        else {
            test = document.querySelector('[title=' + i + ']')
            test.style.display=''
            break
        }
    }
}
})

const lunch = document.querySelector('.lunch')
lunch.addEventListener('click', (e) => {
    e.preventDefault()
    for (i in Recepies) {
        let j=Recepies[i]
        for (h of j.meal){
        if (!('lunch' == h)){
            test= document.querySelector('[title=' + i + ']') 
            test.style.display="none"}
        else {
            test = document.querySelector('[title=' + i + ']')
            test.style.display=''
            break}
    }}
})

const dinner = document.querySelector('.dinner')
dinner.addEventListener('click', (e) => {
    e.preventDefault()
    for (i in Recepies) {
        let j=Recepies[i]
        for (h of j.meal){
        if (!('dinner' == h)){
            test= document.querySelector('[title=' + i + ']') 

            test.style.display="none"}
        else {
            test = document.querySelector('[title=' + i + ']')
            test.style.display=''
            break
        }
    }}})

const drink = document.querySelector('.drink')
drink.addEventListener('click', (e) => {
    e.preventDefault()
    for (i in Recepies) {
        let j=Recepies[i]
        console.log(j.meal)
        console.log('drink' in j.meal)
        for (h of j.meal){
        if (!('drink' == h)){
            test= document.querySelector('[title=' + i + ']') 
            console.log(test)
            test.style.display="none"}
        else {
            test = document.querySelector('[title=' + i + ']')
            test.style.display=''
            console.log("else"+test)}
            break
        }
    }
})

const dessert = document.querySelector('.dessert')
dessert.addEventListener('click', (e) => {
    e.preventDefault()
    for (i in Recepies) {
        let j=Recepies[i]
        console.log(j.meal)
        console.log('dessert' in j.meal)
        for (h of j.meal){
        if (!('dessert' == h)){
            test= document.querySelector('[title=' + i + ']') 
            console.log(test)
            test.style.display="none"}
        else {
            test = document.querySelector('[title=' + i + ']')
            test.style.display=''
            console.log("else"+test)}
        }
    }
})

const show_all = document.querySelector('[title=show_all]')
show_all.addEventListener('click', ShowAll)
