# api 활용

## 사이트

https://openweathermap.org/

## api키

1.  39d186a1da3de6aa28c8ceb30afdd90b
2.  5409c77e81f618325e0ef657a28f2114
3.  ca3d1914667aa26ea2f7562fe6b0fefb  
    3번은 두번째아이디

## api 지역명 좌표값으로 변경해주는 api 예시

사이트 :  
https://openweathermap.org/api/geocoding-api

http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}

## 날씨데이터 호출

https://openweathermap.org/current  
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={APIkey}

새로운거? (위에건 최신화가아니라 그냥 되어있는 데이터인듯?)
https://openweathermap.org/api/one-call-3#data  
https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

-옵션 : 한국어
&lang=kr

## 날씨아이콘 활용법

https://openweathermap.org/weather-conditions

## 시간단위

https://openweathermap.org/forecast5  
api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
