Hi team (@denolfe @AlessioGr @jacobsfletch @JarrodMFlesch),

Gentle check-in on this PR. All automated CI checks are passing, and we've completed thorough standalone verification:

- **Boundary Isolation**: Zero runtime imports from `test/_community` or uncompiled packages.
- **Standalone Build & Consumer Tests**: Verified external compilation with Next.js 16 App Router + Turbopack.
- **E2E & Unit Test Coverage**: 12/12 unit tests + 7/7 standalone Playwright E2E tests passing.
- **Packaging Allowlist**: Explicit `files` array in `package.json` preventing build artifact leaks.

Everything is green and ready whenever you have bandwidth to review. Happy to address any feedback or adjustments!
