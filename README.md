# 게시판 만들기
## 프로젝트 목적
- Node.js에 익숙해지자
- rest api를 이해해보자
- mongodb를 사용해보자
- 구조를 갖춰 개발을 해보자
***
## 프로젝트 구조
.<br>
├── package.json<br>
├── app.js<br>
│ └── **여기는 서버 실행 & 기본 설정**<br>
├── public<br>
│ └── **여기는 html등의 파일 있는 곳인데 지금은 없어도 됨**<br>
├── routes<br>
│ └── **여기는 router들이 있는 곳**<br>
├── model<br>
│  └── **여기는 db 관련 코드 있는 곳** <br>
***
## 데이터베이스 스키마
``` js
{
    index: Number,
    title: String,
    content: String,
    date: Date
} 
```
- index: 게시물이 몇 번째 게시물인지 지정함. 1부터 차례로 증가. 당연히 중복 불가능.
- title: 게시글의 제목
- content: 게시글의 내용
- date: 게시글을 업로드한 날짜와 시간
***
## API
### 1. index를 받아서 index에 해당하는 게시물의 제목과 내용을 응답으로 준다.<br>
- 요청:
GET /board/{index}<br> 
- 응답: 
``` json
{
    "title": "제목 예시",
    "content": "내용 예시"
}
```

### 2. 제목과 내용을 받아서 index를 매기고 현재 시간을 가져와서 db에 넣는다.<br>
- 요청: POST /board<br> 
- 응답: status 201

### 3. 제목과 내용과 index를 받아서 index에 해당하는 게시물의 제목과 내용을 요청 받은 것으로 업데이트한다.<br>
- 요청: PUT /board/{index}
- 응답: status 200

### 4. index를 받아서 index에 해당하는 게시물을 삭제한다.
- 요청: DELETE /board/{index}
- 응답: status 204