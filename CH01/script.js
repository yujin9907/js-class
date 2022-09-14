let num = 1;
let num2 = 1.5; // var 쓰지마 옛날에 쓰던 거고 거지같음 
let str = "안녕";
let str2 = '안녕'; // "" '' 구분 안 함
let str3 = `내 변호는 ${num}`; // 숫자 1 옆에 있는 햅틱 jsp el 표현식이랑 겹침, 톰캣이 먼저 실행됨으로 jsp el 표현식 우선, 근데 톰캣이 이거 읽으면 터짐, 그래서 링크해서 씀(파일 분리해서)
let isOK=true;

console.log("정수",num);
console.log("실수",num2);
console.log("문자",str);
console.log("문자2",str2);
console.log("문자3",str3);
console.log("불리언",isOK);

// 타입 크기나 뭐 없음. 전부 레퍼런스 변수임 eeeeeeeeeasy

// 배열
