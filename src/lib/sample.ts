// All data below is ILLUSTRATIVE sample data. No real system, customer or incident.
export const SAMPLE_LOG = `2026-03-14T09:41:07.212Z INFO  checkout-api  req=7f3a order=ord_1042 start
2026-03-14T09:41:07.498Z WARN  checkout-api  db pool wait 412ms (active=20/20)
2026-03-14T09:41:08.011Z ERROR checkout-api  TimeoutError: acquire connection timed out after 5000ms
2026-03-14T09:41:08.012Z ERROR checkout-api  POST /v1/orders 503 duration=5011ms
2026-03-14T09:41:08.240Z WARN  payments-worker  retry 2/5 order=ord_1042
2026-03-14T09:41:09.730Z ERROR checkout-api  TimeoutError: acquire connection timed out after 5000ms
2026-03-14T09:41:10.100Z INFO  deploy-bot  release v2.18.0 rolled out at 09:36:52Z`;

export const SAMPLE_RESULT = {
  findings: [
    { kind: "Observed", text: "Repeated TimeoutError acquiring DB connections (pool at 20/20)." },
    { kind: "Observed", text: "POST /v1/orders returned 503 after ~5 s." },
    { kind: "Observed", text: "Release v2.18.0 was rolled out ~4 minutes before the first error." },
    { kind: "Observed", text: "payments-worker is retrying the same order." },
  ],
  hypothesis: {
    title: "Connection pool exhaustion after release v2.18.0",
    confidence: "Hypothesis — not verified",
    body:
      "The error pattern is consistent with connections being held longer than before, or the pool being sized too small for current load. Retries from payments-worker may be amplifying pressure.",
  },
  checks: [
    "Compare pool size and idle timeout between v2.17.x and v2.18.0 configs.",
    "Inspect long-running or idle-in-transaction queries on the database.",
    "Check whether the release introduced a code path that skips releasing connections.",
    "Review payments-worker retry/backoff settings for retry amplification.",
  ],
  report: `INCIDENT SUMMARY (DRAFT — requires engineer review)
Impact:     Intermittent 503s on POST /v1/orders (sample data).
Symptoms:   DB connection acquisition timeouts; pool saturated (20/20).
Evidence:   See observed log lines 2–6.
Hypothesis: Pool exhaustion following v2.18.0 (unverified).
Next steps: Run the diagnostic checks above, confirm, then decide on rollback or config change.`,
};
