# 안태국 (Taeguk Ahn) — Portfolio Website

> Astro + Tailwind CSS 로 만든 백엔드 개발자 안태국의 포트폴리오 사이트.

## 🛠 기술 스택

- **Astro 5** — 정적 사이트 빌더 (SEO 최강, 거의 0KB JS)
- **Tailwind CSS 3** — 유틸리티 퍼스트 CSS
- **TypeScript** — 타입 안정성
- **Pretendard Variable + JetBrains Mono** — 한글/모노스페이스 타이포

---

## 🚀 빠른 시작 (로컬에서 미리보기)

> **⚠️ Node.js 20+ 필요** — 시스템 Node가 18 이하라면 [nvm](https://github.com/nvm-sh/nvm) 으로 격리 환경을 만들어 쓰세요. (Python의 venv 개념과 동일)
>
> ```bash
> # nvm 설치 후
> nvm install 20
> nvm use    # .nvmrc 가 있어서 자동으로 20 선택됨
> ```

```bash
# 1) 의존성 설치
npm install

# 2) 개발 서버 실행 (http://localhost:4321 자동 오픈)
npm run dev

# 3) 정적 사이트 빌드 (./dist 폴더에 결과 생성)
npm run build

# 4) 빌드 결과 미리보기
npm run preview
```

---

## ✏️ 내용 수정하는 법

코드는 거의 손댈 일이 없어요. **3개의 JSON 파일** 만 수정하면 됩니다.

### 1) `src/data/profile.json`
- 이름, 연락처, 학력, 경력, 자격증, 핵심 요약 4문단

### 2) `src/data/skills.json`
- 기술 스택 그룹

### 3) `src/data/projects.json`
- 프로젝트 목록 (현재 8개 등록됨)
- 새 프로젝트 추가는 배열에 객체 하나 추가하면 끝

### 4) 이미지 추가
- `public/images/` 폴더에 PNG/JPG 파일 추가
- `projects.json` 의 `images[].src` 에 `/images/파일명.png` 으로 참조
- 자세한 가이드: [`public/images/README.md`](./public/images/README.md)

---

## 🎨 디자인 톤 변경

`tailwind.config.mjs` 의 `colors` 부분만 바꾸면 전체 톤이 일관되게 변경됩니다.

```js
colors: {
  accent: {
    light: '#0ea5e9',  // ← 라이트 모드 액센트 (현재 sky-500)
    dark: '#64ffda',   // ← 다크 모드 액센트 (현재 민트)
  },
  // ...
}
```

---

## 🌐 GitHub Pages 배포 가이드

### `ahntaekok.github.io` 메인 사이트로 배포 (확정)

1. GitHub 에 [**`ahntaekok.github.io`**](https://github.com/new) 라는 이름으로 **public** repo 생성 (README 추가 ✗ · .gitignore 추가 ✗ 그대로 빈 repo).
2. 로컬 폴더에서 main 브랜치 푸시:
   ```bash
   cd ~/Desktop/portfolio
   git init
   git add .
   git commit -m "feat: 포트폴리오 초기 커밋"
   git branch -M main
   git remote add origin https://github.com/ahntaekok/ahntaekok.github.io.git
   git push -u origin main
   ```
3. GitHub repo → **Settings → Pages** → **Source** 를 **GitHub Actions** 로 변경.
4. 1~2분 내 [`https://ahntaekok.github.io`](https://ahntaekok.github.io) 로 접속하면 사이트가 보입니다.

---

## 📂 폴더 구조

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── images/           ← 프로젝트 이미지 (README 참고)
├── src/
│   ├── components/       ← Astro 컴포넌트 (Hero, About, Skills 등)
│   ├── data/             ← ★ 본인이 수정할 JSON 파일 3개
│   │   ├── profile.json
│   │   ├── projects.json
│   │   └── skills.json
│   ├── layouts/
│   │   └── Layout.astro  ← 전역 레이아웃 + 테마 토글 + 마우스 spotlight
│   ├── pages/
│   │   └── index.astro   ← 메인 페이지 (섹션 조립)
│   └── styles/
│       └── global.css    ← 전역 Tailwind + 커스텀 클래스
├── .github/workflows/
│   └── deploy.yml        ← GitHub Pages 자동 배포 워크플로우
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## ✨ 사이트 기능

- 🌗 다크 / 라이트 모드 토글 (localStorage 기억)
- ✨ 마우스 따라다니는 spotlight 그라데이션 (다크 모드)
- 🎬 스크롤 시 페이드인 애니메이션 (IntersectionObserver)
- 🏷️ 프로젝트 태그 필터링
- 📱 모바일 완벽 대응 (Tailwind responsive)
- 🚀 거의 0KB JS — 빠른 로딩
- 🔍 메타 태그 / OG 태그로 SEO 최적화

---

## 📝 라이선스

개인 포트폴리오 — 본인 자유 사용. 디자인/구조는 참고/포크 가능.
