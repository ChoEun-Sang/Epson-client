# AIGOO (아이고)

**프로젝트 소개** <br/>
 AIGOO는 아티스트와 영어권 팬의 손편지 소통 및 한국어 학습 앱입니다. <br/>Epson Connect API를 활용하여 손편지를 스캔하고 인쇄합니다. <br/> Germini AI를 사용하여 OCR로 추출한 텍스트를 번역하고, 맞춤형 학습 자료를 제공합니다. <br/>
 
<br/>

**개발기간** <br/>
2024.06.07 ~ 2024.06.23 <br/>

<br/>

**DEMO** <br/>
[AIGOO 페이지 바로가기](https://www.aigoo.online/) <br/>

<br/>

**테스트 계정** <br/>
ID: aigoo@gmail.com PW: aigoo <br/>



## 사용 기술

**Development**

<p>
<img src="https://img.shields.io/badge/NEXT.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" />
<img src="https://img.shields.io/badge/Zustand-43B02A?style=flat-square&logo=Zustand&logoColor=white" />
<img src="https://img.shields.io/badge/TailwindCss-06B6D4?style=flat-square&logo=TailwindCss&logoColor=white" />
<img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=reactquery&logoColor=white" />
<br />
</p>

**Tools**

<p>
<img src="https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white"/>
<img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white" />
<img src="https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/>
<img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=discord&logoColor=white" />
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white" />
</p>

<br/>

## 기능 소개 및 시연

### Epson 복합기 등록과 스캔 요청
AIGOO 서비스에서 편지 등록을 2가지 방식으로 지원합니다. <br/>
하나는 Epson 복합기로 스캔하여 등록하기, 다른 하나는 이미지 파일 등록입니다.<br/>
지금 보이는 화면은 Epson 복합기로 스캔하여 편지를 등록하는 모습입니다. <br/>
1. Epson 복합기 계정을 등록하고, Epson Connect API를 사용해 해당 스캔에 요청을 보냅니다.
2. 복합기에서 스캔 설정을 완료한 후
3. 'Pressed' 버튼을 클릭하면 편지가 업로드됩니다. 
<img src="https://github.com/AIGOO-Epson/frontend/assets/128155681/a5b1645e-6ed4-4635-859f-766c2d0722cf" alt="편지 스캔 영상" width="240">


<br/>

### 편지 키워드 저장과 AI 학습 자료 생성
'MailBox' 페이지에서 등록된 편지를 확인할 수 있습니다. <br/>
스캔 후 등록까지 시간이 소요되기 때문에 'pending'상태일 때 disabled 처리됩니다. <br/>
편지 등록이 완료되면 스캔 원본을 확인할 수 있고, OCR를 활용해 추출된 텍스트를 Germini AI로 번역을 제공합니다. <br/>
문장마다 키워드를 확인하고 저장할 수 있습니다. <br/>
저장된 키워드를 바탕으로 학습 자료를 생성합니다. AI 학습자료는 'Notes' 페이지에서 확인할 수 있습니다. <br/>


<img src="https://github.com/AIGOO-Epson/frontend/assets/128155681/9ec593ea-f0ee-42ae-95e2-d5c10929548c" alt="편지 키워드 저장 및 학습 자료 생성 영상" width="240">

<br/>

## 개발 팀원 소개

|<a href="https://github.com/cdm1263"><img src="https://avatars.githubusercontent.com/u/122417731?v=4" width=150px alt="차동민" />|<a href="https://github.com/BearHumanS"><img src="https://avatars.githubusercontent.com/u/115094069?v=4" width=150px alt="남기훈" />|<a href="https://github.com/ChoEun-Sang"><img src="https://avatars.githubusercontent.com/u/128155681?v=4" width=150px alt="조은상" />|
|:---------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------:|
|                                             **[차동민](https://github.com/cdm1263)**                                             |                                             **[남기훈](https://github.com/BearHumanS)**                                             |                                             **[조은상](https://github.com/ChoEun-Sang)**                                             |
|프로젝트 팀장 <br/> 편지 상세 페이지 <br/> 키워드 선택 및 저장 페이지| 메인 페이지 <br/> 편지 스캔 및 보내기 페이지 <br/> 헤더 및 네비게이션 제작| 우편함 페이지 <br/> AI 학습자료 페이지 <br/> 학습자료 폼 제작|
<br/>

## 시작하기

### clone project
```bash
$ git@github.com:AIGOO-Epson/frontend.git
```
### open project
```bash
$ cd frontend
```
### install
```bash
$ npm install
```
### start
```bash
$ npm run dev
```
<br />
