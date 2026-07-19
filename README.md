# Discovery - Next.js 16 Auth Project

A professional, secure, and visually stunning authentication system built using Next.js 16 (App Router), Auth.js (NextAuth.js v5), and custom Vanilla CSS.

---

## 🚀 Getting Started

### 1. Local Configuration
Create a `.env.local` file in the root of the project to set up the authentication secrets. **Note: Never push this file to Git.**
```env
AUTH_SECRET="your-32-byte-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

### 2. Run the Development Server
Since this workspace runs on an Android/arm64 system where native Turbopack bindings are unavailable, the project is configured to use Webpack:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build for Production
To build the project for production:
```bash
npm run build
```

---

## 🛠️ Project Structure & Architecture

* **`/app/page.tsx`**: Beautiful landing page showing system active state.
* **`/app/login/page.tsx`**: Credentials-based login page with custom Vanilla CSS styles.
* **`/app/register/page.tsx`**: Registration page connecting to a local registration API.
* **`/app/dashboard/page.tsx`**: Protected dashboard page showing authenticated user details.
* **`/app/api/register/route.ts`**: API route to validate and record registered users.
* **`auth.ts` / `auth.config.ts`**: Auth.js (NextAuth.js v5) core configuration.
* **`proxy.ts`**: Next.js 16 proxy router for intercepting requests and routing sessions.
* **`users.json`**: Simple JSON file database store for credentials registration.

---

## ⚠️ Database Notice for Production Deployment

* **Mock DB Warning**: The current setup uses `users.json` as a mock file-based database for local development. Since serverless hosting environments (like Vercel or Netlify) have a read-only filesystem, **writing to `users.json` will fail in production**.
* **Production Recommendation**: Before deploying to Vercel/production, replace the JSON file operations in `auth.ts` and `app/api/register/route.ts` with a persistent database connection (e.g. Supabase, MongoDB, Postgres with Prisma or Drizzle).
