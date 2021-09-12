// Тоглолгчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэлэе.
var activePlayer = 0;

// Тоглолгчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0,0];


// Тоглолгчийн ээлжинд цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.


// Програм эхлэхэд бэлтгэе
// Dom ашиглан ID аар нь хайж оллоо тус бүрийг нь 
document.getElementById("score-0").textContent="0";
window.document.getElementById('score-1').textContent = "0";
window.document.getElementById('current-0').textContent = "0";
window.document.getElementById('current-1').textContent = "0";

var diceDom= document.querySelector('.dice');

diceDom.style.display ="none";

document.querySelector('.btn-roll').addEventListener("click", function (){
    var diceNumber = Math.floor(Math.random()*6)+1; 

    diceDom.style.display ="block";
    diceDom.src = "dice-"+diceNumber+".png";

    // alert("Шуу буулаа: " +diceNumber)
});
