<?php
    header("Content-Type: text/html; charset=utf-8");

    //사용자가 GET방식으로 보낸 데이터 받기

    $name=$_GET['name'];
    $message=$_GET['msg'];

    //$name,$message 변수에 있는 데이터를 Database에 저장하기
    //Database는 엑셀같은 구조를 가진 프로그램
    //그래서 데이터를 저장하려면.. 구조를 가진 표(table)을 만들어야함
    //닷홈 호스팅을 사용하면 이미 Database가 설치되어 있음
    //미리 표를 만들어놓고 데이터만 삽입하는 것이 가능
    //데이터를 삽입하는 작업은 SQL 이라는 데이터 베이스 전용 언어를 사용

    //MySQL DBMS에 접속해 memo 테이블에 이름$name,메세지$message 데이터를 삽입하기
    //1. MySQL에 접속하기
    $db=mysqli_connect('localhost','sb2026aix','a1s2d3f4!','sb2026aix'); // DB 서버 URL,DB 접속 아이디,DB 접속 비번,DB명 
    //mysqi_connect()<<i 꼭 쓰기!!(향상 버전)/'localhost'='127.0.0.1'=내 컴퓨터
    //$db or $conn

    //2.DB안에서 한글이 깨지지않도록 요청
    mysqli_query($db,'set names utf8');

    
    //3.원하는 CRUD 작업을 요청하는 질의문 만들고 요청
    $sql="INSERT INTO memo(name,message) VALUES('$name','$message')";
    $result=mysqli_query($db,$sql); //쿼리문이 성공하면 TRUE 실패하면 FALSE를 리턴
    if($result){
        echo "메모글 저장이 완료 되었습니다.";
    }else{
        echo"메모글 저장에 실패했습니다. 다시 시도해주세요.";
    }

    //4.연결 종료
    mysqli_close($db);

?>