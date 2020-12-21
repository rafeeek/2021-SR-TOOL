let adminpanal = document.getElementById("adminpanal")
let adminbtnSHO = document.getElementById("adminbtnSHO")
let adminbtnHID = document.getElementById("adminbtnHID")
let nameofsr = document.getElementById("nameofsr")
let funct = document.getElementById("onclick1")
let website = document.getElementById("website")
let tree = document.getElementById("tree")
let lasttree = document.getElementById("lasttree")
let alltoshow = document.getElementById("alltoshow")
let blackbox = document.getElementById("blackbox")
let blackbox1 = document.querySelector(".blackbox1")
let mostuse = document.getElementById("mostuse")
let textdirec = document.getElementById("textdirec")
let radioson = document.getElementById("radioson")
let allpackegebtn = document.querySelector(".allpackegebtn")
let darkmode = document.querySelector(".darkmode")
let darkpanal = document.querySelector(".darkpanal")




adminbtnSHO.addEventListener("click" , ()=>
{
    adminpanal.classList.replace("hide" , "show")
})
adminbtnHID.addEventListener("click" , ()=>
{
    adminpanal.classList.replace("show" , "hide")
})




var mystore = []

if(localStorage.getItem("allsrdatalocal") == null){
    mystore=[]
}else{
    mystore= JSON.parse(localStorage.getItem("allsrdatalocal"))
    showsrdata()
}



function srdata() {
    var onesr = {
        nameofsr : nameofsr.value,
        funct : funct.value,
        website : website.value,
        tree : tree.value,
        lasttree : lasttree.value,
    }
    mystore.push(onesr)
    localStorage.setItem("allsrdatalocal" , JSON.stringify(mystore))
    showsrdata()
    clear()

}

function showsrdata(){
    var hasala = ``
    var hasalajs = ``
    for (i=0 ; i< mystore.length ; i++ )
    {
        hasala += `<li><button onclick="${mystore[i].funct}()" class="btn btn-outline-primary btn-sm mr-2 mb-2">${mystore[i].nameofsr}</button></li>`
        hasalajs += `function ${mystore[i].funct}(){<br>
            var srlink =
                "${mystore[i].website}";<br>
            var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;<br>
            var Title = "&serviceTitle=${mystore[i].tree}";<br>
            var Problem = "&serviceInfoChar282=${mystore[i].lasttree}";<br>
            var secondaryMobile = "&serviceInfoChar272=0";<br>
            var cpeTypeselect = "&serviceInfoChar278=1";<br>
            var pre = "&serviceInfoChar276=2";<br>
            var FollowUP = document.getElementById("followup");<br>
            if (FollowUP.checked == true)<br> {
                FollowUP = "&serviceContent=${mystore[i].lasttree}";
            } else {
                FollowUP = "";
            }<br>
            window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);<br>
        }<br>`
    } 
    document.querySelector(".divtoshow").innerHTML = hasala + hasalajs 

}

function clear() {
    onclick1.value =""
    nameofsr.value =""
}


function myFunction(ee) {
    var  ul, li, a, i, txtValue;
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("button")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(ee.toUpperCase()) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


allpackegebtn.addEventListener("click" , ()=>{
    $(blackbox).fadeIn(500)
})
$(blackbox).hide(000)
document.addEventListener("click" , (e)=>{
    if(e.target == blackbox){
        $(blackbox).fadeOut(500)
    }else{
        
    }
})
document.addEventListener("click" , (e)=>{
    if(e.target == blackbox1){
       $(blackbox1).fadeOut(500)
    }else{
        
    }
})


function textdir() {
    mostuse.classList.remove("text-center")
    textdirec.innerHTML ="Center"
    textdirec.onclick = textcenterdir
}
function textcenterdir() {
    mostuse.classList.add("text-center")
    textdirec.innerHTML ="left"
    textdirec.onclick = textdir
}

function darkstyle() {
    let refoo = document.head.querySelector("#refo")
    refoo.href= "css/index_styledark.css"
}
function lightstyle() {
    let refoo = document.head.querySelector("#refo")
    refoo.href= "css/index_style.css"
}

$(blackbox1).hide()

darkmode.addEventListener("click",()=>{
    // blackbox1.classList.replace("hide","show")
    $(blackbox1).fadeIn(500)
})



let btngroup = document.querySelectorAll(".btn-group")
for(i=0 ; i<btngroup.length ; i++){
    btngroup[i].addEventListener("contextmenu" , wikilink)
}

function wikilink(e) {
    let openlink = e.path[0].attributes[0].nodeValue
    window.open(openlink , "_blank")
}


let allbtn  = document.querySelectorAll(".myUL li")
allbtn = Array.from(allbtn)
for(i=0 ; i<allbtn.length ; i++){
    allbtn[i].addEventListener("contextmenu", order)
}



