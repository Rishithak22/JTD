// toggle code
var MenuItems = document.getElementById("MenuItems");

        MenuItems.style.maxHeight ="0px"
        function menutoggle(){
            if(MenuItems.style.maxHeight == '0px')
            {
                MenuItems.style.maxHeight = "200px"
            }
            else
            {
                MenuItems.style.maxHeight = "0px"
            }
        }

// product gallery 
var ProductImg = document.getElementById("ProductImg")
    var  SmallImg = document.getElementsByClassName("small-img")
    SmallImg[0].onclick = function(){
        ProductImg.src = SmallImg[0].src;
    }
    SmallImg[1].onclick = function(){
        ProductImg.src = SmallImg[1].src;
    }
    SmallImg[2].onclick = function(){
        ProductImg.src = SmallImg[2].src;
    }
    SmallImg[3].onclick = function(){
        ProductImg.src = SmallImg[3].src;
    }

//    js for toggle in accountpage

var LoginForm = document.getElementById("loginform");
var RegForm = document.getElementById("registerform");
var Indicator = document.getElementById("indicator");

    function register(){
        registerform.style.transform = "translateX(0px)";
        loginform.style.transform = "translateX(0px)";
        indicator.style.transform = "translateX(100px)";
    }
    function login(){
        registerform.style.transform = "translateX(300px)";
        loginform.style.transform = "translateX(300px)";
        indicator.style.transform = "translateX(0px)";
    }

