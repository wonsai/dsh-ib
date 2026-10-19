# 대구서부고등학교 IB DP 학부모 안내 웹페이지

## 프로젝트 개요
대구서부고등학교 IB 디플로마 프로그램(DP) 홍보 책자를 바탕으로 제작한 **모바일 최적화 세로형 스크롤 정적 웹페이지**입니다.

---

## 현재 완성된 기능

### 1차 제작
- 모바일 최적화 index.html (세로형 스크롤, viewport max-scale=1.0)
- CSS Custom Properties 기반 디자인 시스템
- JavaScript 인터랙션 (아코디언, 스크롤 네비게이션, IntersectionObserver 애니메이션)
- 반응형 레이아웃 (320px~1024px+)

### 2차 수정 (12개 항목 완료)
- 전체 폰트 확대 (body 17px 기준)
- 히어로 섹션 로고 삽입
- DP 운영 현황 표 기수/연도 수정 (기수 +1, 입학연도 +1)
- 성찰하는 사람 아이콘 fa-spa로 교체
- 교육과정 인용 문구 삭제
- IB 물리학 영어/SL만, IB 생물학 → IB 생명과학
- 아코디언 "IB 자연과학" → "IB 과학"
- 내부평가 막대 그래프 붉은색 (.eval-fill-ia)
- DP 이수 시간 SL 12학점, HL 18학점
- IB의 날 삭제
- 연혁 배지: 학교로고+텍스트+IB로고 레이아웃
- 푸터: 학교로고+텍스트+IB로고 레이아웃

### 3차 수정 (완료)
- 학교 로고 SVG 정밀 재현 (images/logo-school.svg)
  - 네이비 원 테두리 (#0a3d73), 4개 리본 (연두+하늘), 한국어/영어 원호 텍스트
- IB 로고 SVG 정밀 재현 (images/logo-ib.svg)
  - 그라디언트 구체, 다국어 원호 텍스트, 중앙 "ib" 타이포그래피, ® 기호
- **브랜드 가이드라인 준수: 두 로고 사이 얇은 세로 구분선** 3곳 적용
  - 히어로 섹션 (흰색 반투명선)
  - 연혁 배지 박스 (흰색 반투명선)
  - 푸터 (검은색 반투명선)

---

## 파일 구조

```
index.html              ← 메인 페이지
css/
  style.css             ← 전체 스타일 (구분선, 로고, 반응형 포함)
js/
  main.js               ← 아코디언, 스크롤 네비, IntersectionObserver
images/
  logo-school.svg       ← 학교 로고 SVG (네이비 원, 4개 리본)
  logo-ib.svg           ← IB World School 로고 SVG (그라디언트 구체)
  logo-ib.png           ← 구 IB 로고 (미사용, 유지)
README.md
```

---

## 주요 진입점

| 경로 | 설명 |
|------|------|
| `index.html` | 단일 페이지 전체 (모바일 세로 스크롤) |
| `#hero` | 히어로 섹션 (로고 + 타이틀) |
| `#about` | DP 소개 |
| `#learner` | 학습자상 |
| `#curriculum` | 교육과정 (아코디언) |
| `#assessment` | 평가 방식 |
| `#schedule` | DP 운영 현황 |
| `#history` | 연혁 |
| `#contact` | 문의처 |

---

## 기술 스택

- HTML5 / CSS3 (Custom Properties, Flexbox, Grid)
- JavaScript ES6+ (IntersectionObserver, scroll events)
- Google Fonts: Noto Sans KR (300~800)
- Font Awesome 6.4.0 (CDN)
- SVG 로고 직접 재현 (외부 이미지 CORS 제한 대응)

---

## 미구현 / 향후 개선 사항

- [ ] 실제 학교 로고/IB 로고 PNG 파일 직접 사용 (CORS 해결 시)
- [ ] 다크모드 지원
- [ ] 다국어(영어) 버전
- [ ] 입학 문의 폼 연동

---

## 빌드 상태
- **마지막 검증**: PlaywrightConsoleCapture ✅ (콘솔 오류 없음)
- **배포**: Publish 탭에서 원클릭 배포 가능
