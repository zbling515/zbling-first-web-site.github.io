/*
document.querySelector("html").addEventListener("click", 
    () => { alert("别戳我，我怕疼。");    
    });
*/


/*切换图片*/
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/xiao1.png") {
    myImage.setAttribute("src", "images/xiao2.jpg");
  } 
  else if (mySrc === "images/xiao2.jpg") {
    myImage.setAttribute("src", "images/xiao3.png");
  }
  else if (mySrc === "images/xiao3.png") {
    myImage.setAttribute("src", "images/xiao4.png");
  }
  else {
    myImage.setAttribute("src", "images/xiao1.png");
  }
};


/*设置个性化用户欢迎界面*/

let myButton = document.querySelector("button");
let myHeading = document.querySelector("p[id='101']");

function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } 
  else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "欢迎，" + myName;
  }
}

if (!localStorage.getItem("name")) {
    setUserName();
}  //如果用户没有设置名字，就调用函数。
else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "欢迎，" + storedName;
} //如果用户已经设置了名字，就使用这个名字。

myButton.onclick = function () {
    setUserName();
  };