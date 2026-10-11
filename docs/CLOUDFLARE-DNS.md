# Point deeptechcloud.online (Cloudflare) at the GitHub Pages site

GitHub Pages repo: `DeepTech-CL/deeptech-cloud-site` → default URL `https://deeptech-cl.github.io/deeptech-cloud-site/`.

## 1. DNS records in Cloudflare (DNS → Records)
Set every record below to **DNS only (grey cloud)** until GitHub has issued the HTTPS certificate.

| Type | Name | Content | Proxy |
|---|---|---|---|
| A | `@` | `185.199.108.153` | DNS only |
| A | `@` | `185.199.109.153` | DNS only |
| A | `@` | `185.199.110.153` | DNS only |
| A | `@` | `185.199.111.153` | DNS only |
| AAAA | `@` | `2606:50c0:8000::153` | DNS only |
| AAAA | `@` | `2606:50c0:8001::153` | DNS only |
| AAAA | `@` | `2606:50c0:8002::153` | DNS only |
| AAAA | `@` | `2606:50c0:8003::153` | DNS only |
| CNAME | `www` | `deeptech-cl.github.io` | DNS only |

Delete any older A/AAAA/CNAME records for `@` or `www` that point elsewhere. **Do not touch your MX / TXT (SPF, DKIM) records** — they carry your `deep@deeptechcloud.online` email.

## 2. GitHub
Settings → Pages → Custom domain = `deeptechcloud.online` (`public/CNAME` also carries it) →
wait for "DNS check successful", then tick **Enforce HTTPS**.

## 3. Build at the root path
Repo variable `CUSTOM_DOMAIN=true` makes the workflow build with an empty base path. Re-run the
"Deploy to GitHub Pages" workflow after changing it.

## 4. Optional: turn the Cloudflare proxy on afterwards
Once HTTPS works on GitHub, you may switch records to Proxied (orange cloud) with **SSL/TLS mode = Full (strict)**
(never "Flexible" — it causes redirect loops with GitHub Pages).

## Check
```bash
dig +short deeptechcloud.online A
curl -sI https://deeptechcloud.online | head -3
```
DNS can take from minutes up to a few hours to propagate.

## Domain verification (recommended)
Verify the domain with GitHub to prevent takeover: github.com → your profile → Settings → Pages → Add a domain, then add
the `_github-pages-challenge-DeepTech-CL` TXT record GitHub shows into Cloudflare.
