import Link from "next/link";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="app-container">
      <div className="hero">
        <div className="badge">
          <span>✨</span> Discovery Platform Active
        </div>
        <h1 className="hero-title">
          Discover the Future of Generative AI IQ
        </h1>
        <p className="hero-subtitle">
          Secure, seamless, and state-of-the-art authentication system designed for modern intelligent workflows. Explore the dashboard or authenticate to access custom tools.
        </p>

        <div className="hero-ctas">
          {session ? (
            <Link href="/dashboard" className="btn-primary">
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link href="/login" className="btn-primary">
                Get Started
              </Link>
              <Link href="/register" className="btn-secondary">
                Create Account
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
