// 버튼0 누르면
// - 모든버튼에 붙은 orange 클래스명 제거
// - 버튼0에 orange 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// -div0에 show 클래스명 추가

// for(let i = 0; i < $('.tab-button').length; i++){
//     $('.tab-button').eq(i).on('click', function(){
//         탭열기(i)
//     });
// }

// $('.list').click(function (e) {
//     if (e.target == document.querySelectorAll('.tab-button')[0]) {
//         탭열기(0)
//     }
//     if (e.target == document.querySelectorAll('.tab-button')[1]) {
//         탭열기(1)
//     }
//     if (e.target == document.querySelectorAll('.tab-button')[2]) {
//         탭열기(2)
//     }
// })

$('.list').click(function (e) {
    탭열기(e.target.dataset.id)
})



function 탭열기(숫자) {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');
    $('div').removeClass('show');
    $('div').eq(숫자).addClass('show');
}

let car2 = { name: '소나타', price: [50000, 3000, 4000] }


document.querySelectorAll('span')[0].innerHTML = car2['name'];
document.querySelectorAll('span')[1].innerHTML = car2['price'][0];

const pants = [28, 30, 32, 34];
const shirts = [95, 100, 105];

const formSelect = document.querySelectorAll('.form-select')[0]
formSelect.addEventListener('input', function () {
    let value = formSelect.value
    if (value == '셔츠') {
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
        document.querySelectorAll('.form-select')[1].innerHTML = "";
        shirts.forEach(function(item){
            document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', `<option>${item}</option>`);
        })
    } else if (value == '바지') {
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
        document.querySelectorAll('.form-select')[1].innerHTML = "";
        pants.forEach(function(item){
            document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', `<option>${item}</option>` );
        })
    } else {
        document.querySelectorAll('.form-select')[1].classList.add('form-hide');
    }
});


const 출석부 = ['흥민', '영희', '철수', '철수'];

function 이름찾기 (item){
    for(let i = 0; i < 출석부.length; i++)
    if(item == 출석부[i]){ 
       return console.log('있어요')
    }
}

function 구구단(){
    for(i = 2; i <= 9; i++)
        for(j = 1; j < 10; j++)
    console.log(i*j)
}

$.get('https://codingapple1.github.io/price.json').done(function(data){
    console.log(data.price);
})