# React-Project-wequiz

<br />

<div align="center">
  <img width="200" alt="logo" src="https://github.com/sophie925/wequiz-front/assets/89984685/b2cbd0b6-8eee-43e0-9646-85079d55d2e0.jpg" />
  <p>
    <br />
    누구나 함께 즐기는 초성게임, <strong>'위퀴즈'</strong>!
    <br />
    놀이용, 학습용 등 다양한 용도로 간단하게 즐길 수 있어요.
  </p>
</div>
<br />

---

## :bookmark_tabs: 목차
- [프로젝트 소개](#desktop_computer-프로젝트-소개)
- [실행 정보](#gear-실행-정보)
- [사용 기술](#cat-사용-기술)
- [디렉터리 구조](#bricks-디렉터리-구조)
- [주요 기능 및 화면 구성](#pushpin-주요-기능-및-화면-구성)
- [이후의 계획](#dart-이후의-계획)

<br />

## :desktop_computer: 프로젝트 소개
`React` 로 만든 초성게임 프로젝트로, 사용자 중심적으로 만들어진 서비스입니다.

누구나 쉽게 자신만의 퀴즈를 만들어 공개하고 공유할 수 있고, 다른 사용자들이 만든 퀴즈를 풀 수 있습니다.

<br />

## :gear: 실행 정보
프로젝트 확인은 **개발 주소로 직접 확인**하거나 **로컬 서버를 실행**해보실 수 있습니다.

#### 1. 개발 주소로 확인하는 경우
- **URL** : <https://dev.wequiz.co.kr><br />
- **테스트 계정** : (아이디) default@wequiz.com / (패스워드) test

#### 2. 로컬 서버를 실행하는 경우<br/>
: 로컬 서버 실행하기 전에 아래와 같이 필요합니다.
  - `react 18.2.0`
  - `node 18.15.0`
  - `yarn` or `npm`

: :sparkles: **시작하기**
  1. clone the repository
  ``` bash
  $ git clone https://github.com/sophie925/sorupiru-quiz-front.git
  ```
  2. install dependencies
  ``` bash
  $ yarn install or npm install
  ```
  3. start the project
  ``` bash
  $ cd sorupiru-quiz-front
  $ yarn start or npm run start
  ```
<br />

## :cat: 사용 기술

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config
![Yarn](https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white)

### Development
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white)
![styledcomponents](https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)

<br />

## :bricks: 디렉터리 구조

```
├── public/
├── src/
│   ├── assets/                       - font, imgaes 모음
│   ├── components/                   - page components, 그 외 components
│   ├── containers/                   - state 저장 및 관리
│   ├── lib/                          - 사용 api 관리
│   ├── moduales/                     - api와 연결된 reducer 목록
│   ├── pages/                        - 서비스에 사용되는 page 목록
│   ├── styles/                       - page style 관리(Styled Components)
│   └── utils/                        - validation 체크, 퀴즈 전용 함수 등
│
├── App.js                            - main page로 첫 화면 rendering
├── index.js                          - entry point, pages 라우팅 구성
├── README.md                         - 리드미(프로젝트 소개 및 관련 정보)
└── package.json                      - 사용 package 목록
```

<br />

## :pushpin: 주요 기능 및 화면 구성

<details>
  <summary>:heavy_check_mark: 메인페이지</summary>
  <br />
  
  - 권한(로그인 여부)에 따른 Header 및 화면 구성 변경
  - **반응형 Header 구현**
  - 사용자가 가장 최근에 진행 중인 퀴즈를 노출
  - 가장 인기 있는 퀴즈 상위 5개를 노출
  - 퀴즈에 대한 **좋아요, 북마크, 카카오톡 공유 기능** 제공
  
  
  |로그인전-메인(웹버전)|로그인전-메인(모바일버전)|
  |---|---|
  |![image](https://github.com/sophie925/wequiz-front/assets/89984685/c1831fb9-b9ad-46ac-a464-c22156550d6a.jpg)|![image](https://github.com/sophie925/wequiz-front/assets/89984685/18c7ec28-6abc-4e2d-b7eb-cce5fe560b86.jpg)|
  
  |로그인후-메인(웹버전)|로그인후-메인(모바일버전)|
  |---|---|
  |![image](https://github.com/sophie925/wequiz-front/assets/89984685/7344182a-7b8e-4e96-b27a-b78db3eb95fa.jpg)|![image](https://github.com/sophie925/wequiz-front/assets/89984685/60a6a0f1-c64d-4824-8838-bb97495bad71.jpg)|

  |좋아요|찜하기|공유하기|공유하기(팝업)-카카오톡|
  |---|---|---|---|
  |![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/90b53501-2620-435c-860f-8fb1b2ab2bb3)|![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/a24767d2-fa69-4be8-ac95-3c683db25416)|![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/8ade7271-5213-4745-912d-79d450c88ed1)|![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/3c75b053-5857-4282-95bd-3014591b8839)|
  <br />
</details>

<details>
  <summary>:heavy_check_mark: 로그인</summary>
  <br />
  
  - ID / PASSWORD 방식 로그인
  - **로그인 시 발급된 Access token** 으로 REST API 호출 전 **Axios의 interceptor 를 활용**해 검증
  - **Access token 만료 시 Refresh token 을 통한 토큰 갱신**
  - 이메일 인증을 통한 비밀번호 재설정
  
  |로그인|재설정용 이메일전송|비밀번호 재설정|
  |---|---|---|
  |![image](https://github.com/sophie925/wequiz-front/assets/89984685/3aa23983-a46e-4c6c-8923-31b7e72afac5.jpg)|![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/7a7d59e8-9fd9-4112-8a6e-eac77384cee3)|![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/b750ce17-46b1-405c-957f-a746f3bf08e0)|
  <br />
</details>

<details>
  <summary>:heavy_check_mark: 회원가입</summary>
  <br />

  - Authentication key 를 사용한 이메일 인증 방식 회원가입
  
  |회원가입|로딩화면|이메일전송|
  |---|---|---|
  |![image](https://github.com/sophie925/wequiz-front/assets/89984685/1ba021c7-c686-4719-91b2-7214a84da163.jpg)|![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/7d6ba6b5-2b2e-4400-8e46-a3a8fceb826f)|![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/6059b41c-0db6-4467-8434-a1ce076afcd1)|
  
  |이메일확인|계정생성|계정생성-필수체크|계정생성-전체체크|
  |---|---|---|---|
  |![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/272bde07-f720-4474-8c2b-9352a5ac78d6)|![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/c75bfd50-4649-49f3-aa6d-380caf762c72)|![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/311ac5f8-39c4-475d-a927-32570fce553f)|![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/56d0eb84-8d3c-429b-9cc7-208fb47224d3)|
  <br />
</details>

<details>
  <summary>:heavy_check_mark: 마이페이지</summary>
  <br />
  
  - 로그인 사용자 전용 페이지로, 진입 시 로그인 여부 확인
  - 회원정보 조회, 수정 및 비밀번호 변경 기능 제공
  - 북마크한 퀴즈 목록 모아보기 제공
  - 내가 만든 퀴즈 목록 및 상세조회 제공
  - 내 퀴즈 상태를 통해 시도한 퀴즈 개수, 정답률 등 제공
  
  |마이페이지|나의 정보|회원정보수정|비밀번호변경|
  |---|---|---|---|
  |![image](https://github.com/sophie925/wequiz-front/assets/89984685/e209c8da-d924-45b0-ba16-7e81bdca58e9.jpg)|![image](https://github.com/sophie925/wequiz-front/assets/89984685/fd1505b6-7059-431e-b877-8224a7bdd275.jpg)|![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/ab796d66-2104-449b-8b16-d56a35945e0b)|![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/6a31392f-ea8a-4ad2-a66a-00a65bb9cfc7)|
  
  |찜한 퀴즈|내 퀴즈|내 퀴즈(상세조회)|
  |---|---|---|
  |![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/2cfeb624-3803-453c-8cd6-870b39f52950)|![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/f8e8a406-180b-406d-900a-45c309d56d97)|![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/60f9a088-7ee9-4093-8a94-0bf1e152afe7)|
  <br />
</details>

<details>
  <summary>:heavy_check_mark: 퀴즈풀기</summary>
  <br />
  
  - **상태, 카테고리, 최신순/인기순 등 다양한 조회 조건 제공**
  - 퀴즈 목록에 **Intersection Observer를 이용한 무한스크롤 적용**
  - 타이머를 통한 시간 초과 기능
  - 풀던 퀴즈의 마지막 상태(정답/오답, 힌트 사용 여부) 저장을 통한 **이어하기 기능 제공**
  - 정답률, 정답, 오답의 개수를 퀴즈 결과 화면에서 표시
  
  |목록조회-기본|목록조회-상태조건|목록조회-카테고리조건|무한스크롤|
  |---|---|---|---|
  |![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/55fd0c53-2573-4f38-8fd9-6924745cea11)|![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/cb0a30f5-9496-4930-b75a-d0f82476105b)|![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/dc54603a-ea94-4cad-9a47-766a6e57e393)|![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/fe7f82ec-5e80-46f6-b502-840d77f7c361.jpg)|
  
  |퀴즈풀기(상세)|힌트조회|결과조회|답안지확인|
  |---|---|---|---|
  |![image](https://github.com/sophie925/wequiz-front/assets/89984685/31d5d768-7018-4f4a-8ce6-ef3934510675.jpg)|![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/2e54d28c-cefe-4584-82fc-40cd866df422)|![image](https://github.com/sophie925/wequiz-front/assets/89984685/59806fb4-cb25-4889-b015-4e7f3a12c055.jpg)|![image](https://github.com/sophie925/wequiz-front/assets/89984685/fe5990e9-1f10-4bb1-8453-adc262deff20.jpg)|
  
  |힌트사용(팝업)|정답|오답|시간초과|
  |---|---|---|---|
  |![image](https://github.com/sophie925/sorupiru-quiz-front/assets/89984685/b572801e-75d8-4499-800e-d4356187a22c)|![image](https://github.com/sophie925/wequiz-front/assets/89984685/2fee3188-0c55-4ccc-8116-1d46f9f41960.jpg)|![image](https://github.com/sophie925/wequiz-front/assets/89984685/7c5a33b5-e381-4b98-a7b0-35d3d018b181.jpg)|![image](https://github.com/sophie925/wequiz-front/assets/89984685/c67b9d29-e578-4ac1-9c0e-85b55cdd8eef.jpg)|
  <br />
</details>

<details>
  <summary>:heavy_check_mark: 퀴즈만들기</summary>
  <br />
  
  - 총 3단계로 진행: 기본정보 → 퀴즈 내용 → 최종 확인
    - 기본 정보 : 퀴즈 관련 정보(제목, 카테고리, 퀴즈개수, 공개여부 등 ) 작성
    - 퀴즈 정보 : 지정된 개수만큼 퀴즈(정답, 힌트) 리스트 작성
    - 최종 확인 : 앞서 작성했던 내용 확인 후 퀴즈 완성
  
  |기본정보|퀴즈정보|퀴즈완료안내(팝업)|최종확인|
  |---|---|---|---|
  |![image](https://github.com/sophie925/wequiz-front/assets/89984685/7e64c010-56e3-4aa7-ac5d-8fe65e4989c93.jpg)|![image](https://github.com/sophie925/wequiz-front/assets/89984685/45b8fbe0-385f-4682-a883-82e3213e38c7.jpg)|![image](https://github.com/sophie925/wequiz-front/assets/89984685/d24598a1-6592-491c-8054-aab8a1caa6ff.jpg)|![image](https://github.com/sophie925/wequiz-front/assets/89984685/dc65da36-1827-4aeb-8768-2f13aa3bc1ce.jpg)|
  <br />
</details>

<details>
  <summary>:heavy_check_mark: 공지사항</summary>
  <br />

  - 공지사항 목록 조회 및 상세조회, 등록, 수정 기능
  - 관리자 권한 여부에 따라 글쓰기 버튼 노출
  
  |공지사항 목록|공지사항 상세조회|공지사항 목록(관리자)|공지사항 목록|
  |---|---|---|---|
  |![image](https://github.com/sophie925/wequiz-front/assets/89984685/30a9352a-662b-4495-a378-f5ae0c6f932c.jpg)|![image](https://github.com/sophie925/wequiz-front/assets/89984685/2a9a40dc-247d-44f3-826a-505b105b3187.jpg)|![image](https://github.com/sophie925/wequiz-front/assets/89984685/18800fa8-de03-40ad-85ac-0a551cee6923.jpg)|![image](https://github.com/sophie925/wequiz-front/assets/89984685/aa2239bb-9a07-4cf4-afce-65076b07e90b.jpg)|
</details>

<br />

## :dart: 이후의 계획
- 출석체크, 포인트 기능
- 내 퀴즈 푼 사람 목록 조회
- 퀴즈 검색 기능
- 코드 리팩토링
- 앱  출시
