# Pulse Studios™

Built by real people, real work, real passion. Everything here is hand-made, thought out, and crafted with intention.

## Project Overview

A full-stack web application with:
- **Shop System** - Purchase digital items and rewards
- **Roblox Integration** - Reward players in your Roblox game
- **Discord Integration** - Manage rewards and give items in Discord servers
- **AI Assistant** - Intelligent chatbot for customer support and interactions
- **Authentication** - Secure user accounts with OAuth2

## Tech Stack

### Backend
- **Node.js + Express** - REST API server
- **MongoDB** - Database for users, items, transactions
- **Axios** - HTTP client for Roblox/Discord APIs
- **OpenAI API** - AI assistant (ChatGPT)
- **JWT** - Authentication tokens

### Frontend
- **React 18** - UI components
- **Vite** - Fast build tool
- **Axios** - API requests
- **Tailwind CSS** - Styling

### External APIs
- **Roblox Open Cloud API** - Give items to players
- **Discord Bot API** - Server management and item distribution
- **OpenAI API** - AI assistant

## Project Structure

```
.
├── server/                 # Node.js Express backend
│   ├── config/            # Configuration files
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API endpoints
│   ├── services/          # Business logic
│   │   ├── roblox.js      # Roblox integration
│   │   ├── discord.js     # Discord bot integration
│   │   ├── shop.js        # Shop logic
│   │   └── ai.js          # AI assistant
│   ├── middleware/        # Auth, logging
│   └── app.js             # Express setup
├── client/                # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   └── App.jsx        # Main app
│   └── index.html
├── docs/                  # Documentation
├── .env.example           # Environment variables template
├── package.json           # Dependencies
└── docker-compose.yml     # Local dev environment
```

## Features

### 1. Shop System
- Browse and purchase digital items
- Multiple payment methods
- Instant delivery
- Transaction history

### 2. Roblox Integration
- Give items directly to Roblox players
- Track Roblox account linkage
- Verify ownership
- Real-time status updates

### 3. Discord Integration
- Discord bot for server commands
- Give roles/items to Discord members
- Verify Discord account linkage
- Leaderboards and stats

### 4. AI Assistant
- 24/7 customer support
- Product recommendations
- FAQ automation
- Natural language processing

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- Discord Bot Token
- Roblox Open Cloud API Key
- OpenAI API Key

### Installation

1. Clone repository
```bash
git clone https://github.com/DirectorMarty/Pulse-Studios-.git
cd Pulse-Studios-
```

2. Install dependencies
```bash
cd server && npm install
cd ../client && npm install
```

3. Setup environment variables
```bash
cp .env.example .env
# Edit .env with your API keys
```

4. Start development servers
```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev
```

5. Access the application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## API Documentation

See [API_DOCS.md](./docs/API_DOCS.md) for complete endpoint documentation.

## Configuration

See [CONFIGURATION.md](./docs/CONFIGURATION.md) for detailed setup guides for each integration.

## Contributing

Contributions welcome! Please follow our code style and submit PRs.

## License

Proprietary - All rights reserved
