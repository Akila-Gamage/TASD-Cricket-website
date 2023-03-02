/* <!-- ...............Background_color_dropdown_menu..................................................................................... --> */
function change1(list){
    var val1=list.options[list.selectedIndex].value;
    document.body.style.background=val1;
}
/* <!-- ................Font_color_dropdown_menu............................................................................................ --> */
function change2(list){
    var val2=list.options[list.selectedIndex].value;
    document.getElementById("h1").style.color=val2;
    document.getElementById("h2-1").style.color=val2;
    document.getElementById("h2-2").style.color=val2;
    document.getElementById("h2-3").style.color=val2;
    document.getElementById("h2-4").style.color=val2;
    document.getElementById("h2-5").style.color=val2;
    document.getElementById("h2-6").style.color=val2;
    document.getElementById("h5-1").style.color=val2;
    document.getElementById("h5-2").style.color=val2;
    document.getElementById("h5-3").style.color=val2;
    document.getElementById("h5-4").style.color=val2;
    document.getElementById("h5-5").style.color=val2;
    document.getElementById("h5-6").style.color=val2;
    document.getElementById("p").style.color=val2;    
    document.getElementById("p2-1").style.color=val2;    
    document.getElementById("p2-2").style.color=val2;    
    document.getElementById("p2-3").style.color=val2;    
    document.getElementById("p2-4").style.color=val2;    
    document.getElementById("p2-5").style.color=val2;    
    document.getElementById("p2-6").style.color=val2;    


}
/* <!-- ..............popups_onlclick.............................................................................................................................. --> */

const popup1 = document.querySelector('#popup1')
const openPopup1 = document.querySelector('.card1');
const closePopup1 = document.querySelector('.close-button1');

openPopup1.addEventListener('click',()=>{
    popup1.showModal();
})
closePopup1.addEventListener('click',()=>{
    popup1.close();
})

const popup2 = document.querySelector('#popup2')
const openPopup2 = document.querySelector('.card2');
const closePopup2 = document.querySelector('.close-button2');

openPopup2.addEventListener('click',()=>{
    popup2.showModal();
})
closePopup2.addEventListener('click',()=>{
    popup2.close();
})

const popup3 = document.querySelector('#popup3')
const openPopup3 = document.querySelector('.card3');
const closePopup3 = document.querySelector('.close-button3');

openPopup3.addEventListener('click',()=>{
    popup3.showModal();
})
closePopup3.addEventListener('click',()=>{
    popup3.close();
})

const popup4 = document.querySelector('#popup4')
const openPopup4 = document.querySelector('.card4');
const closePopup4 = document.querySelector('.close-button4');

openPopup4.addEventListener('click',()=>{
    popup4.showModal();
})
closePopup4.addEventListener('click',()=>{
    popup4.close();
})

const popup5 = document.querySelector('#popup5')
const openPopup5 = document.querySelector('.card5');
const closePopup5 = document.querySelector('.close-button5');

openPopup5.addEventListener('click',()=>{
    popup5.showModal();
})
closePopup5.addEventListener('click',()=>{
    popup5.close();
})

const popup6 = document.querySelector('#popup6')
const openPopup6 = document.querySelector('.card6');
const closePopup6 = document.querySelector('.close-button6');

openPopup6.addEventListener('click',()=>{
    popup6.showModal();
})
closePopup6.addEventListener('click',()=>{
    popup6.close();
})


