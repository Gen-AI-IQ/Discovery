# MASTER CONTEXT & PRODUCT REQUIREMENTS DOCUMENT (PRD)

---

## PART 1: MASTER CONTEXT - VMD GenIQ

### 1. Executive Summary & Brand Vision
* **Entity Name:** VMD GenIQ (Legal Name: VMD GenIQ Consulting)
* **Business Structure:** Sole Proprietorship registered in Tamil Nadu, India.
* **Target Market:** Global B2B Enterprises (US, UK, Europe, Middle East) and International IT Recruiters.
* **Core Vision:** To operate as a premium, full-stack tech and AI consultancy that bridges the gap between legacy IT infrastructure and cutting-edge GenAI capabilities.
* **Brand Vibe:** Authoritative, highly technical, modern, and reliable. The brand positions itself alongside global tech boutiques rather than generic offshore IT vendors.

### 2. The 3 Business Pillars
VMD GenIQ is built on a scalable three-pillar framework:
* **Pillar 1: Tech Staffing & Resource Augmentation (PHASE 1 FOCUS):** Supplying high-end technical talent, AI engineers, and consultants to global clients and recruiters on a contract or B2B retainer basis.
* **Pillar 2: High-End AI Consulting & Services (Phase 2):** Providing custom GenAI integrations, data architecture, and software development services directly to enterprise clients.
* **Pillar 3: AI Products & SaaS (Phase 3):** Developing proprietary software solutions, tools, and digital products for scalable recurring revenue.

### 3. Phase 1 Execution Constraints
* **Current State:** The business is currently operating strictly in **Phase 1**.
* **Primary Activity:** Staffing, technical consulting, and positioning for initial B2B contracts via global tech recruiters.
* **Digital Focus:** Launching a lean, high-conversion "digital business card" website rather than a massive corporate portal.

### 4. Legal & Operational Foundation (India)
The business has completed its foundational legal setup in India to operate globally and receive foreign currency compliantly:
* **MSME Registration:** Officially registered as a Micro-Enterprise under the Ministry of MSME (URN: UDYAM-TN-34-0116628).
* **Registered Address:** Operating from a residential/home-office setup in Chengalpattu District, Tamil Nadu.
* **Address Compliance:** Secured a formalized, notarized No Objection Certificate (NOC) on government stamp paper from the property owner to ensure smooth government approvals.
* **GST Strategy:** Pursuing voluntary GST registration for B2B credibility.
* **Export Compliance:** Will file a Letter of Undertaking (LUT) on the GST portal to enable "Zero-Rated Supply" (0% tax) on cross-border service exports.
* **Banking:** Establishing a dedicated Current Account using the Udyam Certificate as proof of business entity.

### 5. Digital Presence & Tech Stack (The Lean Setup)
The digital infrastructure is designed to be highly professional but extremely cost-effective (near-zero recurring hosting costs):
* **Domain Name:** Utilizing a low-cost, professional domain extension (`.in` for budget/local anchor, or `.dev` for premium tech positioning).
* **DNS & Security:** Managed via Cloudflare for reliable routing and free SSL/HTTPS encryption.
* **Web Hosting:** Deployed as a static site via GitHub Pages or Cloudflare Pages (Zero-cost hosting).
* **Professional Email:** Configured via Zoho Mail's "Forever Free" tier to provide custom domain addresses (e.g., `founder@vmdgeniq.in`) mapped via MX/SPF records in Cloudflare.

### 6. Brand Identity & Design Language
* **Primary Colors:** Deep Navy (Trust/Corporate), Tech Blue (Innovation), and Crisp White (Modern/Clean).
* **Typography:** Clean, sans-serif fonts (e.g., Inter, Roboto, or Montserrat) to communicate digital native expertise.
* **Logo Concept:** Minimalist and geometric.
* **Social Footprint:** Initial presence limited to highly optimized LinkedIn profiles (Company Page and Founder Profile), with placeholders secured on X/Twitter and Facebook.

---

## PART 2: INFRASTRUCTURE DEPLOYMENT ROADMAP

### 1. Domain Registration Strategy
* **.in Domain:** Generally the most cost-effective option for an Indian-based consultancy, often priced at a few hundred rupees for the first year.
* **.dev Domain:** Built specifically for developers and tech projects. Requires HTTPS (SSL encryption) for the site to load in browsers, managed for free via Cloudflare.
* **Avoid "Free" Domains:** Avoid gimmicks requiring expensive long-term hosting packages. Use a low-cost custom domain from a reliable registrar (Namecheap, Porkbun, or Cloudflare Registrar) for a professional B2B image.

### 2. Professional Email (Zoho Mail Setup)
Use your custom domain with Zoho Mail's "Forever Free" plan:
* **Verification:** Verify domain ownership by adding TXT records in Cloudflare.
* **Routing:** Add MX (Mail Exchange) and security records (SPF, DKIM, DMARC) in Cloudflare to enable mail delivery.
* **Capacity:** Supports up to 5 users with 5GB of storage per user.

### 3. Step-by-Step Deployment Guide
1. **Register Domain:** Buy your `.in` or `.dev` domain through a reputable registrar.
2. **Setup DNS & Security:** Point domain nameservers to **Cloudflare** for secure routing and free SSL.
3. **Deploy Website:** Push website static files to a GitHub repository and deploy using GitHub Pages or Cloudflare Pages.
4. **Configure Email:** Verify domain on Zoho Mail, add MX/TXT/SPF records to Cloudflare DNS, and activate mailboxes.
