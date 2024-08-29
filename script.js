var plusbtns=document.querySelectorAll(".plus")
function incriment(e){
    plusbtn = e.target
    div_element = plusbtn.parentElement
    para_element=div_element.querySelector("p")
    para_value=Number(para_element.innerHTML)
    para_value++
    para_element.innerHTML=para_value
    var tr_element =div_element.parentElement.parentElement
    var unit_price_element = tr_element.querySelector(".unitPrice")
    var price_element = tr_element.querySelector(".price")
    var unit_price_value = Number (unit_price_element.innerHTML)
    var price_value = unit_price_value * para_value
    price_element.innerHTML = price_value

    var tableelement=tr_element.parentElement 
    var total_element=tableelement.querySelector("#total")
    var total_value=Number(total_element.innerHTML)
    total_value+=unit_price_value
    total_element.innerHTML=total_value
}
for (let i = 0; i < plusbtns.length; i++) {
    plusbtns[i].addEventListener("click",incriment)
    
}
var moinbtns=document.querySelectorAll(".minus")
function disincriment(e){
    moinbtn = e.target
    div_element = moinbtn.parentElement
    para_element=div_element.querySelector("p")
    para_value=Number(para_element.innerHTML)
    if(para_value>0){
    para_value--}
    para_element.innerHTML=para_value
    var tr_element =div_element.parentElement.parentElement
    var unit_price_element = tr_element.querySelector(".unitPrice")
    var price_element = tr_element.querySelector(".price")
    var unit_price_value = Number (unit_price_element.innerHTML)
    var price_value = unit_price_value * para_value
    price_element.innerHTML = price_value
    var tableelement=tr_element.parentElement 
    var total_element=tableelement.querySelector("#total")
    var total_value=Number(total_element.innerHTML)
    total_value-=unit_price_value
    total_element.innerHTML=total_value
    

}
for (let i = 0; i < moinbtns.length; i++) {
    moinbtns[i].addEventListener("click",disincriment)
    
}



var like_btns=document.querySelectorAll(".like")
function changecolor(e) {
    like_btn=e.target
    if(like_btn.style.color =="red"){
        like_btn.style.color = "#424242"
    }
    else {
        like_btn.style.color =  "red"
    }
}
    for (let i = 0; i< like_btns.length; i++) {
        like_btns[i].addEventListener("click",changecolor)
    }
    var dele_btns=document.querySelectorAll(".delete")
    function supprimer(e) {
        dele_btns=e.target
        var row=dele_btns.parentElement.parentElement.parentElement.parentElement
        row. remove()
    }
        for (let i = 0; i< dele_btns.length; i++) {
            dele_btns[i].addEventListener("click",supprimer)
        }






