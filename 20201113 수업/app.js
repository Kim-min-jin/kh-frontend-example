/*class 클로저 {
    멤버;
    생성자(파라미터){
        멤버 = 파라미터
    }
    메서드(){

    }
}


function 생성자(파라미터){
    function 메서드(){
    }
    return 메서드
}



function countdown(x) {
    let data = startAt;
    function counter(){
        console.log(data--)
    }
    return counter
}

const counter = conuntdown(10)
counter()
counter()
counter()

counter()
*/


function count(x){
    let data = x;
    function counter(){
        console.log(`${data++}회 호출됨`)
    }
    return counter
}

const counter = count(1)
counter()
counter()
counter()
counter()





/*
const dd = 'ㅇㅇ'
function outer(){
    const name = '밖에 있어요' // 유효 범위
    function closure(){       // 클로저  
        const inner = '내부에'
        console.log(`${name}, ${inner}, ${dd}`)
    
    }
    return closure
}

const f1 = outer()
f1()
*/
