import { execSync } from 'node:child_process'

console.log('=== Checking Payload PR #18167 Status ===')

try {
  const prJson = execSync(
    'gh pr view 18167 --repo payloadcms/payload --json number,title,state,isDraft,reviewDecision,reviewRequests,comments,url',
    { encoding: 'utf8' },
  )
  const pr = JSON.parse(prJson)

  console.log(`PR: #${pr.number} - ${pr.title}`)
  console.log(`URL: ${pr.url}`)
  console.log(`State: ${pr.state} (Draft: ${pr.isDraft ? 'Yes' : 'No'})`)
  console.log(`Review Decision: ${pr.reviewDecision || 'PENDING'}`)

  const reviewers = (pr.reviewRequests || [])
    .map((r) => r.login || r.name || r.slug)
    .filter(Boolean)
  console.log(`Requested Reviewers: ${reviewers.length > 0 ? reviewers.join(', ') : 'None'}`)
  console.log(`Total Comments: ${pr.comments ? pr.comments.length : 0}`)

  console.log('\n--- CI Checks ---')
  const checksOutput = execSync('gh pr checks 18167 --repo payloadcms/payload', {
    encoding: 'utf8',
  })
  console.log(checksOutput.trim())

  console.log('\n=== Check Complete: Upstream PR is Healthy ===')
} catch (err) {
  console.error('Failed to fetch PR status:', err.message)
  process.exit(1)
}
