# Taekuk Ahn — Portfolio

백엔드 및 AI 자동화 개발자 안태국의 포트폴리오 웹사이트입니다.

외부 API, 데이터 수집, LLM, 배치 처리와 운영 자동화를 실제 서비스로 연결한 경험을 소개합니다.

## Tech Stack

- Astro 5
- TypeScript
- Tailwind CSS
- GitHub Actions
- GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

프로덕션 빌드는 다음 명령으로 확인합니다.

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
├── components/
├── data/
│   ├── profile.json
│   ├── projects.json
│   └── skills.json
├── layouts/
├── pages/
└── styles/

public/
└── images/
```

## Deployment

`main` 브랜치에 변경 사항을 반영하면 GitHub Actions를 통해 GitHub Pages에 배포됩니다.
