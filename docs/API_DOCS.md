# Pulse Studios API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All requests (except /auth/register and /auth/login) require JWT token:
```
Authorization: Bearer <token>
```

---

## Auth Endpoints

### Register
```
POST /auth/register
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

### Login
```
POST /auth/login
{
  "email": "string",
  "password": "string"
}

Response:
{
  "token": "jwt_token",
  "user": { ... }
}
```

### Discord OAuth
```
GET /auth/discord?code=discord_auth_code
```

### Roblox OAuth
```
GET /auth/roblox?code=roblox_auth_code
```

---

## Shop Endpoints

### Get All Items
```
GET /shop/items

Response:
[
  {
    "id": "item_1",
    "name": "Exclusive Skin",
    "price": 4.99,
    "description": "...",
    "image": "url"
  }
]
```

### Purchase Item
```
POST /shop/purchase
{
  "itemId": "item_1",
  "deliveryMethod": "roblox" | "discord" | "both"
}
```

### Purchase History
```
GET /shop/history
```

---

## Integration Endpoints

### Give Roblox Item
```
POST /integrations/roblox/give-item
{
  "userId": "roblox_user_id",
  "itemId": "item_id",
  "quantity": 1
}
```

### Give Discord Role
```
POST /integrations/discord/give-role
{
  "memberId": "discord_member_id",
  "roleId": "discord_role_id"
}
```

---

## AI Assistant Endpoints

### Chat
```
POST /ai/chat
{
  "message": "string"
}

Response:
{
  "reply": "assistant response"
}
```

### Support
```
POST /ai/support
{
  "issue": "string",
  "category": "billing" | "technical" | "general"
}
```
