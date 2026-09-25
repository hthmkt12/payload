# Job Output: verify-upstream-comment-readiness

- **Job ID**: `verify-upstream-comment-readiness`
- **Auth Verification**: PASS (`gh auth status` verified account `hthmkt12` with scopes `repo`, `workflow`)
- **Target PR**: `#18167` on `payloadcms/payload`
- **Payload File**: `scripts/pr-comment-draft.md`
- **Executable Command for User**:
  ```bash
  gh pr comment 18167 --repo payloadcms/payload --body-file scripts/pr-comment-draft.md
  ```
- **Verdict**: PR comment payload verified and ready to execute upon user approval.
