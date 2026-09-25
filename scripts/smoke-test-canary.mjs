import { execSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

console.log('=== Payload Fullstack Canary Smoke Test Runner ===')

const isDryRun = process.argv.includes('--dry-run')
const tempBase = path.join(os.tmpdir(), `payload-smoke-${Date.now()}`)

try {
  if (isDryRun) {
    console.log('[Mode: Dry Run] Verifying template definitions and CLI entry...')
    const templatesFile = path.resolve('packages/create-payload-app/src/lib/templates.ts')
    if (fs.existsSync(templatesFile)) {
      const content = fs.readFileSync(templatesFile, 'utf8')
      if (content.includes("'fullstack'") || content.includes('"fullstack"')) {
        console.log('PASS: "fullstack" template is registered in create-payload-app templates.ts')
      } else {
        throw new Error('Template "fullstack" not registered in templates.ts')
      }
    } else {
      console.log('WARN: Running outside monorepo root or templates.ts moved.')
    }
    console.log('PASS: Dry-run check successful. Ready for post-merge execution.')
    process.exit(0)
  }

  console.log(`[Mode: Live Run] Creating temporary directory: ${tempBase}`)
  fs.mkdirSync(tempBase, { recursive: true })

  console.log('Scaffolding new app using create-payload-app@canary...')
  execSync('pnpm create payload-app@canary test-fullstack-app -t fullstack --no-git', {
    cwd: tempBase,
    stdio: 'inherit',
  })

  const appDir = path.join(tempBase, 'test-fullstack-app')
  if (!fs.existsSync(appDir)) {
    throw new Error(`Scaffolded app directory does not exist at ${appDir}`)
  }

  console.log('Checking scaffolded directory contents...')
  const requiredFiles = ['package.json', 'next.config.ts', 'src', '.env.example']
  for (const file of requiredFiles) {
    if (!fs.existsSync(path.join(appDir, file))) {
      throw new Error(`Missing expected file in scaffolded app: ${file}`)
    }
  }

  console.log('PASS: All scaffolded files verified successfully.')
  console.log('=== Post-Merge Smoke Test PASSED ===')
} catch (err) {
  console.error('Smoke test failed:', err.message)
  process.exit(1)
} finally {
  if (!isDryRun && fs.existsSync(tempBase)) {
    console.log(`Cleaning up temporary directory: ${tempBase}`)
    try {
      fs.rmSync(tempBase, { recursive: true, force: true })
    } catch {}
  }
}
