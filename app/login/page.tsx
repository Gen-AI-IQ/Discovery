"use client";

import { useActionState } from "react";
import Link from "next/link";
import { authenticate } from "../actions";

export default function LoginPage() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <div className="app-container">
      <div className="glass-card">
        <div className="header">
          <h1 className="title">Welcome Back</h1>
          <p className="subtitle">Sign in to your Discovery account</p>
        </div>

        {errorMessage && (
          <div className="alert alert-error">
            <span>⚠️</span> {errorMessage}
          </div>
        )}

        <form action={formAction}>
          <div className="form-group">
            <label className="label" htmlFor="email">
              Email Address
            </label>
            <input
              className="input"
              id="email"
              type="email"
              name="email"
              placeholder="name@example.com"
              required
              disabled={isPending}
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="input"
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              required
              disabled={isPending}
            />
          </div>

          <button className="btn-primary" type="submit" disabled={isPending}>
            {isPending ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="oauth-divider">or continue with</div>

        <div className="oauth-group">
          <button className="btn-secondary" type="button" disabled>
            <span>🌐</span> Google (Demo)
          </button>
          <button className="btn-secondary" type="button" disabled>
            <span>🐙</span> GitHub (Demo)
          </button>
        </div>

        <p className="footer-text">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="link">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
