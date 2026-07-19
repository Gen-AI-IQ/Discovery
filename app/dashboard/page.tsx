import { auth } from "@/auth";
import { logOut } from "../actions";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div className="app-container">
      <div className="dashboard-container">
        <header className="dashboard-header">
          <div>
            <h1 className="title" style={{ fontSize: "1.75rem", marginBottom: 0 }}>
              Discovery Space
            </h1>
            <p className="subtitle" style={{ fontSize: "0.85rem" }}>
              Secure Session Active
            </p>
          </div>
          <form action={logOut}>
            <button className="btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }} type="submit">
              🔐 Log Out
            </button>
          </form>
        </header>

        <section>
          <div className="user-card">
            <div className="avatar">
              {session?.user?.name ? session.user.name[0].toUpperCase() : "U"}
            </div>
            <div className="user-info">
              <span className="user-name">{session?.user?.name || "User"}</span>
              <span className="user-email">{session?.user?.email}</span>
            </div>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "0.5rem" }}>
              Session Metadata
            </h2>
            <p className="subtitle" style={{ marginBottom: "1rem" }}>
              Below is the raw JSON token payload generated securely by Auth.js (NextAuth.js v5):
            </p>
            <div className="code-container">
              <pre>{JSON.stringify(session, null, 2)}</pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
