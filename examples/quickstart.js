// Open Register Company Status & Financials API — quick start (Node 18+, built-in fetch).
// Set RAPIDAPI_KEY to the key shown on open-register-company-status-financials at rapidapi.com after subscribing to the free plan.
const HOST = "open-register-company-status-financials.p.rapidapi.com";
const KEY = process.env.RAPIDAPI_KEY;

async function call(path) {
  const res = await fetch(`https://${HOST}${path}`, {
    headers: { "X-RapidAPI-Key": KEY, "X-RapidAPI-Host": HOST },
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return res.json();
}

// Find a company by name in one country
call("/v1/companies/search?name=Nokia&country=FI&limit=3").then((d) => console.log(JSON.stringify(d, null, 2).slice(0, 2000)));
