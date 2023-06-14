document.getElementById("search_btn").addEventListener('click', search_message);

var search_array=[];
var fuc=['피자','치킨','라면'];
var i=0;

//search_message
function search_message(){
   let search_str = document.querySelector("#search_txt"); // 변수에 저장
	for(var j=0;j<3;j++){
		if(fuc[j] === search_str.value){
			alert("비속어");
			break;
		}
		else if(search_str.value.length==0){
		alert("검색어가 비어있습니다. 입력해주세요.");
	}
	else{	
		alert("검색을 수행합니다!");
		search_array.push(search_str.value);
		let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환
        //document.querySelector("#form_main").submit();
		//document.getElementById("search_message").innerHTML = search_str.value; // 태그에 값 추가
		i++;
	}
	}
	
	if(i>9){
		search_array.shift();
	}
	//10개 되면 과거 검색어 밀림
	
	
  
   console.log(search_array); // 콘솔에 출력
	console.log(i);
	
}
