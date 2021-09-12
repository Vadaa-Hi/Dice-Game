// Тоглолгчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэлэе.
var activePlayer = 0;

// Тоглолгчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0,0];


// Тоглолгчийн ээлжинд цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random()*6)+1; 

// Програм эхлэхэд бэлтгэе
// Dom ашиглан ID аар нь хайж оллоо тус бүрийг нь 
window.document.querySelector('#score-0').textContent = 0;
window.document.querySelector('#score-1').textContent = 0;
window.document.querySelector('#current-0').textContent = 0;
window.document.querySelector('#current-1').textContent = 0;
document.querySelector('.dice').style.display ="none";


console.log('Шооо: '+ dice);