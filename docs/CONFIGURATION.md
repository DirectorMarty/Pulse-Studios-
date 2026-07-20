# Configuration Guide

## 1. Roblox Open Cloud Integration

### Get Your API Key
1. Go to https://www.roblox.com/develop
2. Create a new experience/game
3. Go to API Keys section
4. Generate an Open Cloud API Key
5. Add to `.env`: `ROBLOX_API_KEY=your_key`

### Setup Universe & Place ID
- Get your Universe ID from game settings
- Get your Place ID from game URL
- Add to `.env`

### Roblox Integration Features
- Give items to players directly
- Verify player ownership
- Track transactions

---

## 2. Discord Bot Integration

### Create Discord Bot
1. Go to https://discord.com/developers/applications
2. Create "New Application"
3. Go to "Bot" section
4. Click "Add Bot"
5. Copy token → add to `.env`: `DISCORD_BOT_TOKEN=your_token`
6. Get Client ID → add to `.env`: `DISCORD_CLIENT_ID=your_id`

### Configure Permissions
- Manage Roles
- Send Messages
- Manage Members
- View Channels

### Invite Bot to Server
```
https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot
```

### Discord Integration Features
- Give roles to members
- Distribute items
- Verify member ownership
- Leaderboards

---

## 3. OpenAI API Setup

### Get API Key
1. Go to https://platform.openai.com
2. Sign up or log in
3. Create API key
4. Add to `.env`: `OPENAI_API_KEY=your_key`

### AI Features
- Customer support chatbot
- Product recommendations
- FAQ automation
- Natural language understanding

---

## 4. Database (MongoDB)

### Option A: Local MongoDB
```bash
# Install MongoDB Community
# Run mongod service
# Connection: mongodb://localhost:27017/pulse-studios
```

### Option B: MongoDB Atlas (Cloud)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Add to `.env`: `MONGODB_URI=mongodb+srv://...`

---

## 5. Optional: Payment Processing

### Stripe Setup
1. Create account at https://stripe.com
2. Get keys from dashboard
3. Add to `.env`:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_PUBLISHABLE_KEY`
