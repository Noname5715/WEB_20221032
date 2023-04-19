var close_time;//시간 정보
var close_time2=10; //10초 설정

clearTimeout(close_time);//재호출 정지
close_time=setTimeout("close_window()",10000); // 1/1000 초 지정, 바로 시작
show_time();//실시간 시간 보여주기.

function show_time(){
	let divClock=document.getElementById('Time');
	divClock.innerText=close_time2;//10초마다 삽입
	close_time2--;
	setTimeout(show_time,1000);//1초마다 갱신(1초당 1000)
}

function close_window(){
	window.close();//윈도우 닫기
}

window.onload=showWindow;