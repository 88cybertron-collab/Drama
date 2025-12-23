# Drama Streaming Website

A Chinese drama streaming website built with Next.js, inspired by donghub.vip and powered by the DramaDash API.

## Features

- Browse featured and trending dramas
- Search functionality
- Drama detail pages with episode listings
- Video player interface
- Responsive design
- Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd drama-streaming
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy automatically

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

## API Integration

The website uses a mock implementation of the DramaDash API. To integrate with the real API:

1. Update the `baseURL` in `lib/dramaDash.js`
2. Implement proper authentication
3. Handle real API responses

## Project Structure

```
drama-streaming/
├── app/
│   ├── api/
│   ├── drama/
│   ├── search/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── lib/
│   └── dramaDash.js
├── next.config.js
└── package.json
```

## Technologies Used

- Next.js 14
- React 18
- Tailwind CSS (via CDN)
- Axios for API calls
- UUID for device ID generation

## License

MIT License
