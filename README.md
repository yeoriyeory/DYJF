단양 육포 공방 (가칭) 공식 홈페이지
HTML·CSS·JavaScript만으로 만든 정적 웹사이트입니다. 서버·결제·로그인 기능은 없고, 구매는 네이버 스마트스토어에서 처리합니다.
my-site/
├─ index.html     ← 페이지 내용(문구, 구조)
├─ style.css      ← 디자인(색, 글꼴, 배치)
├─ script.js      ← 스마트스토어 주소·제품 상태·가격 설정 (맨 위 SITE_CONFIG)
├─ README.md      ← 이 문서
├─ DESIGN.md      ← 디자인 기획서
└─ images/        ← 사진을 넣는 폴더 (직접 만들기)
​
사진 파일 이름 (images 폴더에 이 이름으로 저장하면 자동 표시)
파일명
위치
hero.jpg
맨 위 대표 이미지
garlic.jpg / chili.jpg / blackgarlic.jpg
제품 카드 3종
story.jpg
브랜드 스토리
process-1.jpg ~ process-6.jpg
개발 과정 6단계
final.jpg
맨 아래 구매 유도
사진이 없으면 "이미지 교체 예정" 자리표시자가 보이고 레이아웃은 깨지지 않습니다. 사진은 가로 1200px 이내, 500KB 이하로 줄이면 빠릅니다. 실제 판매 제품이 아닌 AI 이미지를 제품 사진 자리에 넣지 마세요.
결과물 D. 배포 가이드 (초보자용, GitHub Pages 무료 이용 기준)
0. 먼저 읽어 주세요: 무료 조건과 확인이 필요한 점
GitHub 공식 문서에서 확인한 내용 (2026-10-13 확인)
무료 요금제(GitHub Free)에서는 공개(Public) 저장소로 GitHub Pages를 쓸 수 있습니다. 비공개(Private) 저장소로 Pages를 쓰려면 유료 요금제가 필요하다고 안내되어 있습니다. → 이 가이드는 Public 저장소만 사용합니다.
사이트 크기는 1GB 이하, 월 대역폭은 100GB(소프트 제한), 배포는 시간당 약 10회(소프트 제한)로 안내되어 있습니다. 이 홈페이지는 사진을 줄여 올리면 훨씬 작습니다.
사진 업로드: 브라우저에서 파일당 25MiB 이하, 한 번에 100개까지입니다.
⚠ 확정할 수 없는 부분 (직접 확인하세요)
상업적 이용 조건: GitHub 문서에는 Pages를 "온라인 사업을 운영하는 무료 웹호스팅", "전자상거래 사이트", "상거래를 주된 목적으로 하는 사이트"로 쓰는 것은 의도·허용되지 않는다는 취지의 문구가 있습니다. 이 홈페이지는 자체 결제·장바구니가 없고 결제는 네이버 스마트스토어에서 처리하는 브랜드 소개 사이트지만, 판매로 이어지는 안내 페이지이기도 합니다. GitHub가 이를 허용 범위로 보는지는 제가 확정할 수 없습니다. 공개 전에 아래 공식 문서를 직접 읽고 판단하세요.
https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
앞으로도 무료인지: 현재 조건을 확인했을 뿐, 영구 무료나 요금 정책 유지를 보장할 수 없습니다. 정책이 바뀌면 이 가이드도 달라질 수 있습니다.
공개 저장소: 올린 파일(index.html, script.js 등)은 누구나 볼 수 있습니다. 비밀번호·개인 연락처·개인정보는 올리지 마세요. (사이트에 표시되는 사업자 정보는 어차피 공개 정보입니다.)
메뉴 이름·화면 모양은 GitHub가 바꿀 수 있습니다. 아래는 공식 문서 기준이며, 화면이 다르면 비슷한 이름의 메뉴를 찾아 주세요.
배포에 걸리는 시간은 공식 문서에 명시되어 있지 않습니다. 보통 몇 분 안에 반영되는 경우가 많지만, 더 걸릴 수 있습니다.
1단계. 파일 저장하기
컴퓨터 바탕화면에 my-site 폴더를 만듭니다. (우클릭 → 새로 만들기 → 폴더)
받은 index.html, style.css, script.js를 그 폴더에 넣습니다.
my-site 안에 images 폴더를 하나 더 만듭니다. (사진은 나중에 넣어도 됩니다.)
파일 이름은 영문 소문자 그대로 두세요. 사진은 위 표의 이름(garlic.jpg 등)과 대소문자까지 똑같아야 합니다. (Garlic.JPG는 인터넷 서버에서 안 보일 수 있습니다.)
2단계. 내 컴퓨터에서 먼저 확인하기
my-site 폴더의 index.html을 더블클릭하면 크롬/엣지에서 열립니다.
스마트폰 화면은 크롬에서 F12 → 왼쪽 위 휴대폰 아이콘을 눌러 확인할 수 있습니다.
한글이 깨지면 안 됩니다. 메모장으로 고쳐 저장할 때는 인코딩을 UTF-8로 선택하세요.
3단계. GitHub 계정 만들기
인터넷에서 github.com 접속 → 오른쪽 위 Sign up
이메일, 비밀번호, 사용자 이름(영문)을 입력합니다. 사용자 이름이 공개 주소에 들어갑니다. 예: danyang-jerky
이메일로 온 인증 코드를 입력하면 가입이 완료됩니다.
4단계. 저장소(Repository) 만들기
로그인 후 화면 오른쪽 위 + 아이콘 → New repository
Repository name에 영문 이름을 입력합니다. 예: jerky-site
이름을 사용자이름.github.io로 정하면 주소가 https://사용자이름.github.io/로 짧아지는 것이 일반적입니다. (선택)
공개 범위에서 Public을 선택합니다. (무료 Pages는 Public 저장소 기준입니다.)
Add a README file 등 다른 옵션은 체크하지 않아도 됩니다.
아래 초록색 Create repository 클릭
5단계. 파일 올리기
새 저장소 화면에서 uploading an existing file 링크를 클릭합니다. 안 보이면 파일 목록 위의 Add file → Upload files를 클릭합니다.
my-site 안의 파일 3개와 images 폴더를 끌어다 놓습니다. (my-site 폴더 자체가 아니라 안의 내용물입니다. index.html이 저장소 맨 위 단계에 있어야 합니다.) 끌어다 놓기가 어려우면 choose your files를 클릭해 선택합니다.
Commit message에는 첫 업로드처럼 짧게 적어도 됩니다.
같은 화면 아래에서 현재 브랜치(main)에 바로 올리는 방식을 선택하고 Commit changes를 클릭합니다. (선택지에 따라 버튼 이름이 Propose changes로 보이면 새 브랜치로 올리는 방식이니, main에 직접 올리는 쪽을 고르세요.)
저장소 첫 화면에 index.html, style.css, script.js가 보이면 성공입니다.
6단계. GitHub Pages 켜기
저장소 위쪽의 Settings 탭을 클릭합니다. (안 보이면 ... 또는 드롭다운 메뉴 안에 있습니다.)
왼쪽 사이드바의 Code, planning, and automation 섹션에서 Pages를 클릭합니다.
Build and deployment → Source에서 Deploy from a branch를 선택합니다.
바로 아래 브랜치 드롭다운(기본값 None)에서 main을 선택합니다.
폴더 드롭다운은 / (root) 그대로 둡니다.
Save를 클릭합니다.
7단계. 공개 주소 확인
몇 분 뒤 Settings → Pages 화면을 새로고침하면 위쪽에 사이트 주소가 표시됩니다. 처음에는 바로 안 나올 수 있습니다.
주소 형태는 보통 https://사용자이름.github.io/저장소이름/ 입니다. (표시된 주소를 그대로 쓰세요.)
그 주소를 휴대폰에서도 열어 홈페이지가 보이는지 확인합니다.
안 열리면 저장소 위쪽 Actions 탭에서 배포 작업이 진행 중인지, 실패했는지 확인하세요. 공식 문서에 따르면 배포는 이 작업(워크플로)으로 진행됩니다.
맞춤 도메인(예: 내 이름.com)은 선택사항입니다. 없어도 기본 주소로 운영할 수 있고, 도메인을 사면 별도 비용이 듭니다.
정책은 바뀔 수 있고 영구 무료는 보장되지 않습니다. 파일 원본은 항상 내 컴퓨터에 따로 보관하세요. 정적 사이트라 다른 호스팅으로 옮기기도 쉽습니다. (다른 무료 호스팅의 조건은 이 가이드에서 확인하지 않았습니다.)
8단계. 스마트스토어 링크 연결
스마트스토어에서 상품 페이지를 열고 주소창의 주소를 복사합니다. (예: https://smartstore.naver.com/...)
GitHub 저장소 첫 화면에서 script.js 파일을 클릭합니다.
파일 화면 오른쪽 위의 연필 아이콘(Edit this file) 을 클릭합니다.
맨 위 smartstore: 부분의 "SMARTSTORE_URL_HERE"를 따옴표 안에서 실제 주소로 바꿉니다.
따옴표 "와 쉼표 ,는 지우지 마세요. YOUR_STORE_HERE 같은 글자가 남아 있으면 자리표시자로 보고 버튼이 켜지지 않습니다.
main: "<https://smartstore.naver.com/YOUR_STORE_HERE>",
garlic: "<https://smartstore.naver.com/YOUR_STORE_HERE/products/PRODUCT_ID_HERE>",
​
같은 파일에서 제품이 실제로 팔리기 시작하면 products:에서 status: "dev"를 "soon"(출시 예정) 또는 "selling"(판매 중)으로 바꿉니다. "selling"이면서 그 제품의 주소도 입력된 경우에만 제품 카드 구매 버튼이 켜집니다. 첫 화면·모바일 하단 바·맨 아래 버튼은 main 주소가 있고 판매 중인 제품이 하나 이상일 때만 '육포 만나보기'에서 '스마트스토어에서 구매하기'로 바뀝니다. 주소는 https://로 시작하는 네이버 주소(naver.com, naver.me)만 인정되며, 그 외 주소는 무시되고 브라우저 콘솔(F12)에 경고가 표시됩니다.
가격이 확정되면 price: "100g 12,000원"처럼 입력합니다. (아직 모르면 비워두세요.)
오른쪽 위 초록색 Commit changes... 버튼을 클릭하고, 나타나는 창에서 Commit changes를 한 번 더 클릭합니다. (버튼 이름은 화면에 따라 조금 다를 수 있습니다.)
9단계. 사진과 문구 수정
사진 추가: 저장소에서 images 폴더를 클릭 → Add file → Upload files로 올린 뒤 Commit changes. 위 표의 파일 이름과 같아야 하고, 같은 이름이 있으면 교체됩니다. 파일당 25MiB 이하, 되도록 500KB 이하로 줄이세요.
문구 수정: index.html 클릭 → 연필 아이콘 → 고칠 글자를 찾아(Ctrl+F) 수정 → Commit changes. <, >로 둘러싸인 부분(태그)은 건드리지 마세요.
제품 정보(중량·원산지·소비기한 등): index.html에서 확인 후 입력이라고 적힌 곳을 확인된 내용으로만 바꿉니다.
사업자 정보: 푸터의 입력 필요를 실제 정보로 바꿉니다.
색상 변경: style.css 맨 위 :root의 # 색 코드를 바꿉니다.
10단계. 수정 후 재배포
파일을 고치고 Commit changes를 누르면, Pages가 같은 브랜치(main)의 변경을 다시 배포하는 것이 일반적입니다. 별도 버튼은 필요 없습니다.
저장소 위쪽 Actions 탭에서 배포 작업이 끝났는지 확인합니다. (진행 중이면 노란색, 끝나면 초록색 표시가 일반적입니다.)
몇 분 뒤 공개 주소를 열고 Ctrl+F5(휴대폰은 새로고침 2번)로 반영을 확인합니다.
반영이 안 되면: 올린 파일이 main 브랜치에 있는지, Settings → Pages의 Branch가 main인지, Actions에 오류가 없는지 확인하세요.
배포 횟수는 시간당 약 10회 수준의 소프트 제한이 안내되어 있으니, 수정은 모아서 한 번에 올리는 것이 좋습니다.
참고한 공식 문서 (2026-10-13)
https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
영상 추가하기
script.js의 videos: [ ] 안에 한 줄 추가합니다.
videos: [
  { title: "맛평가 현장 기록", id: "유튜브영상ID" },
  { title: "제품 개발 과정",   id: "유튜브영상ID" }
]
​
결과물 E. 출시 전 체크리스트
콘텐츠 정확성

최종 브랜드명 확정 (상표 검색, 상호, 도메인 확인) → index.html 전체의 "단양 육포 공방" 교체

실제 제품·원재료·포장 사진 적용 (images/), 자리표시자 라벨이 사라졌는지 확인

제품별 판매 상태 확인 (dev / soon / selling)

판매 가격 확인 (지원서 12,000~15,000원/100g, 이후 8,900원 언급 → 어느 쪽인지 확정)

스마트스토어 주소 입력, 제품별 상품 페이지 링크 확인

원산지·원재료·알레르기 유발 물질 확인

영양정보·필수 식품 표시사항(제조원, 소비기한, 보관방법 등) 확인

개발 과정 6단계 상태 배지가 현재 사실과 맞는지 확인

맛평가 안내 문구 유지 (시제품 평가 · 최종 제품 만족도 아님 · 전국 대표 조사 아님)

사업자 정보, 통신판매업 신고번호, 고객 문의 방법 입력

배송·교환·반품 정책, 개인정보처리방침 링크 입력
기능 테스트

모바일(실제 폰)에서 전체 스크롤, 햄버거 메뉴 열기/닫기

PC 크롬·엣지·사파리에서 레이아웃 확인

모든 버튼 클릭: 육포 만나보기, 제품 카드 구매, 하단 구매, 푸터 링크

유튜브 영상 재생, 재생 안 될 때 'YouTube에서 보기' 링크

사진 없이도, 사진 넣은 뒤에도 레이아웃 정상

키보드 Tab으로 이동 가능한지, 글자 가독성
