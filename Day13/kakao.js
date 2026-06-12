//지도를 보여줄 div 요소 찾기
var container= document.getElementById('map');

//지도의 위치나 줌레벨 정도를 옵션으로 미리 지정
var options= {
    center: new kakao.maps.LatLng(37.4859, 126.9298),
    level: 3, //1~25
}

//지도객체를 만들고 보여주기
var map= new kakao.maps.Map(container, options);
//========================
// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.4859, 126.9298); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
 marker.setMap(null);   

//----------------------------------------

var imageSrc = './image/ms18.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(32, 34), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.4859, 126.9298); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  

//--------------------------------------------------


// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
    {
        title: '가야위드안아파트', 
        latlng: new kakao.maps.LatLng(37.4868370443123, 126.930139843268)
    },
    {
        title: '스타벅스', 
        latlng: new kakao.maps.LatLng(37.486115693210124, 126.9292246587757)
    },
    {
        title: '하나감자탕', 
        latlng: new kakao.maps.LatLng(37.4851194673625, 126.92821082076014)
    },
    {
        title: '김기철의 장수왕만두찐빵',
        latlng: new kakao.maps.LatLng(37.48517225691783, 126.92984459193215)
    }
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
}

//==========================================