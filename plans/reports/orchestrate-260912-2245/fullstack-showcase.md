# Fullstack Starter Template Showcase & Community Launch Pack

## 1. Overview & Value Proposition

The **Payload Fullstack Template** (`templates/fullstack`) provides an enterprise-ready starter combining **Payload CMS** and **Next.js 16 App Router**. It delivers a complete publishing workflow, modular page builder blocks, refined Linear/Vercel-inspired design tokens, and rigorous URL security out of the box.

### Key Highlights

- **⚡ Next.js 16 App Router**: Server Components, streaming, and fully typed public routes (`/posts/[slug]`).
- **🧩 Modular Page Builder**: Reusable layout blocks (`Hero`, `FeatureGrid`, `CallToAction`) with dedicated schemas and React Server Component renderers.
- **🛡️ Secure By Default**:
  - Public queries automatically exclude draft content, preventing editorial leaks.
  - Hardened `safeHref` sanitizer eliminates open-redirect and XSS vectors (blocks protocol-relative URLs and all backslash variations like `https:\`, `/\`, etc.).
- **📦 Clean & Portable**: Explicit `"files"` packaging allowlist and pinned dependencies matching official Payload starters.
- **🚀 One-Command Setup**: Fully registered in `create-payload-app`.

---

## 2. Getting Started (For End Users)

```bash
# Initialize a new project with the fullstack starter
pnpm create payload-app@latest my-app -t fullstack

# Navigate to project and configure environment
cd my-app
cp .env.example .env

# Generate types and start the development server
pnpm generate:types
pnpm generate:importmap
pnpm dev
```

- **Admin Panel**: `http://localhost:3000/admin`
- **Public Site**: `http://localhost:3000`

---

## 3. Ready-to-Publish Channel Announcements

### Channel A: Discord (`#showcase` / `#announcements`)

```markdown
🚀 **New Starter Template: Payload Fullstack (Next.js 16 App Router)**

Hey everyone! We just submitted a new canonical starter template for Payload: **`fullstack`** (PR #18167)!

**What's included:**

- 🧩 **Modular Block Architecture**: Ready-to-use schemas & Server Component renderers for `Hero`, `FeatureGrid`, and `CallToAction`.
- 📝 **Editorial Collections**: Auth-enabled `Users`, `Posts` (with draft/published states), `Categories`, and `Media`.
- 🛡️ **Security Hardened**: URL sanitization preventing backslash & open-redirect bypasses; public routes query published posts only.
- ⚡ **Next.js 16 App Router**: Fully typed with Payload Local API.

Check out the PR and give your feedback: https://github.com/payloadcms/payload/pull/18167
```

### Channel B: X / Twitter

```text
Excited to introduce the new Fullstack Starter for @payloadcms + Next.js 16 App Router! 🔥

✨ Modular layout blocks (Hero, FeatureGrid, CTA)
🛡️ Built-in URL sanitization & secure draft filtering
📦 Fully typed with Payload Local API
⚡ 1-command init via create-payload-app

Check out PR #18167: https://github.com/payloadcms/payload/pull/18167
```

### Channel C: GitHub Discussions

```markdown
### Announcing the Canonical Fullstack Starter Template for Payload CMS

We have submitted Pull Request #18167 adding a canonical **Fullstack Starter** combining Payload CMS with the Next.js 16 App Router.

#### Motivation & Goals

Developers starting a content-driven application often need a clean separation between data modeling and frontend page building. This template establishes a best-practice foundation:

1. **Isolated Boundaries**: Collections, layout blocks, and routes are modularized with zero circular couplings.
2. **Enterprise Security**: Input validation via `safeHref` rejecting unsafe URL schemes, protocol-relative attacks, and backslash bypasses.
3. **Turnkey Developer Experience**: Ready to customize with pre-configured schemas, import maps, and contract test suites.

We invite the community and maintainers to test and review the PR: https://github.com/payloadcms/payload/pull/18167
```
