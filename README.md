# Open Register Company Status & Financials API

Company status and filed financials from open business registers: Norway, Finland, Ireland, Estonia, Latvia, Romania, Poland.

**Try it (free tier for evaluation):** [https://rapidapi.com/193market/api/open-register-company-status-financials](https://rapidapi.com/193market/api/open-register-company-status-financials) · also on [api.market](https://api.market/store/193market/open-register-company-status-financials)

Search a company by name or registration number and get its legal status (active, in liquidation, bankrupt, struck off), legal form, industry code and filed financial figures (revenue, profit, assets, equity, liabilities, employees) with simple year-on-year signals, from open business-register data in selected countries: Norway, Finland, Ireland, Estonia, Latvia, Romania and Poland. Each answer says what that country's register does and does not record.

## Who uses it

Credit, procurement and KYB teams onboarding Nordic, Baltic, Irish, Romanian or Polish companies; platforms that need one search across seven registers.

## Quick start

Subscribe to the free BASIC plan on RapidAPI, copy your `X-RapidAPI-Key`, then:

```bash
curl "https://open-register-company-status-financials.p.rapidapi.com/v1/companies/search?name=Nokia&country=FI&limit=3" \
  -H "X-RapidAPI-Key: $RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: open-register-company-status-financials.p.rapidapi.com"
```

Python and Node examples are in [`examples/`](examples/). Both read the key from the `RAPIDAPI_KEY` environment variable.

Other calls worth trying:
- Status, key facts and filed financials for one company (Norway, org number): `GET /v1/companies/NO/923609016`
- Which registers are covered and how fresh: `GET /v1/countries`

## Example response

`GET /v1/companies/search?name=Nokia&country=FI&limit=3` — Find a company by name in one country:

```json
{
  "query": {
    "name": "Nokia",
    "normalised": "NOKIA",
    "country": "FI",
    "include_closed": false
  },
  "found": true,
  "results": [
    {
      "match_score": 1.0,
      "shared_words": [
        "NOKIA"
      ],
      "id": "FI:0112038-9",
      "country": "FI",
      "company_id": "0112038-9",
      "id_name": "Business ID (Y-tunnus)",
      "name": "Nokia Oyj",
      "legal_form": "Julkinen osakeyhtiö",
      "legal_form_class": "public_limited_company",
      "status": "active",
      "status_detail": "Registered in the Trade Register",
      "status_date": null,
      "registered_date": "1896-12-19",
      "closed_date": null,
      "region": "Espoo",
      "nace": "70100",
      "other_ids": {
        "euid": "FIFPRO.0112038-9",
        "vat": "FI01120389"
      },
      "register_as_of": "2026-09-20",
      "insolvency_recorded": true
    }
  ],
  "attribution": {
    "notice": "Not affiliated with or endorsed by any business register. Figures are as filed by the companies and published by each register; they are not audited or verified by this API. Signals are simple arithmetic on those figures, not credit ratings or advice. Legal entities only; if you find a record about a natural person, report it through the marketplace support channel for removal.",
    "sources": "Each company names its register; full list at GET /v1/countries."
  }
}
```

## Endpoints

| Method | Path | What it does | Parameters (* required) |
|---|---|---|---|
| GET | `/health` | Health check |  |
| GET | `/v1/companies/search` | Find a company by name | `name`*, `country`, `include_closed`, `threshold`, `limit` |
| GET | `/v1/companies/{country}/{company_id}` | Legal status, key facts and filed financial figures for one company | `country`*, `company_id`*, `years` |
| GET | `/v1/countries` | Which registers are covered and how fresh they are |  |

The full OpenAPI 3 specification is in [`openapi.json`](openapi.json).

## Plans

| Plan | Price | Included per month |
|---|---|---|
| BASIC | free | a small monthly quota for evaluation |
| PRO / ULTRA / MEGA | from $49 / month | larger monthly quotas, per-request overage, higher rate limits |

Current prices are always on the [RapidAPI pricing page](https://rapidapi.com/193market/api/open-register-company-status-financials/pricing). Error responses (4xx/5xx) are not charged on api.market.

## Data source and licence

Romania Ministry of Finance (data.gov.ro, CC BY 4.0); Ireland CRO (CC BY 4.0); Norway Bronnoysund (NLOD 2.0); Finland PRH (CC BY 4.0); Latvia Register of Enterprises (CC0 1.0); Estonia RIK (CC BY 4.0); Poland KRS (public domain). Sole traders and partnerships excluded.

Every response carries an `attribution` object naming the source and the changes made (translation, normalisation, filtering, aggregation). This API is an independent product and is not affiliated with or endorsed by any government agency or regulator.

## Support

Questions, missing fields, or a use case the current plans do not fit: open an issue in this repository or use the Discussions tab on the RapidAPI listing.
