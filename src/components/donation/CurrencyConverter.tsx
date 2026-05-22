'use client';

import { useState, useEffect } from 'react';
import { ArrowLeftRight, RefreshCw, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CurrencyEntry {
  code: string;
  name: string;
  flag: string;
  noDecimals: boolean;
}

const CURRENCIES: CurrencyEntry[] = [
  { code: 'UGX', name: 'Ugandan Shilling',    flag: '🇺🇬', noDecimals: true  },
  { code: 'GBP', name: 'British Pound',        flag: '🇬🇧', noDecimals: false },
  { code: 'EUR', name: 'Euro',                 flag: '🇪🇺', noDecimals: false },
  { code: 'CAD', name: 'Canadian Dollar',      flag: '🇨🇦', noDecimals: false },
  { code: 'AUD', name: 'Australian Dollar',    flag: '🇦🇺', noDecimals: false },
  { code: 'NZD', name: 'New Zealand Dollar',   flag: '🇳🇿', noDecimals: false },
  { code: 'CHF', name: 'Swiss Franc',          flag: '🇨🇭', noDecimals: false },
  { code: 'SEK', name: 'Swedish Krona',        flag: '🇸🇪', noDecimals: false },
  { code: 'NOK', name: 'Norwegian Krone',      flag: '🇳🇴', noDecimals: false },
  { code: 'DKK', name: 'Danish Krone',         flag: '🇩🇰', noDecimals: false },
  { code: 'KES', name: 'Kenyan Shilling',      flag: '🇰🇪', noDecimals: true  },
  { code: 'TZS', name: 'Tanzanian Shilling',   flag: '🇹🇿', noDecimals: true  },
  { code: 'RWF', name: 'Rwandan Franc',        flag: '🇷🇼', noDecimals: true  },
  { code: 'NGN', name: 'Nigerian Naira',       flag: '🇳🇬', noDecimals: true  },
  { code: 'GHS', name: 'Ghanaian Cedi',        flag: '🇬🇭', noDecimals: false },
  { code: 'ZAR', name: 'South African Rand',   flag: '🇿🇦', noDecimals: false },
  { code: 'AED', name: 'UAE Dirham',           flag: '🇦🇪', noDecimals: false },
  { code: 'SAR', name: 'Saudi Riyal',          flag: '🇸🇦', noDecimals: false },
  { code: 'INR', name: 'Indian Rupee',         flag: '🇮🇳', noDecimals: false },
  { code: 'SGD', name: 'Singapore Dollar',     flag: '🇸🇬', noDecimals: false },
  { code: 'JPY', name: 'Japanese Yen',         flag: '🇯🇵', noDecimals: true  },
  { code: 'CNY', name: 'Chinese Yuan',         flag: '🇨🇳', noDecimals: false },
  { code: 'BRL', name: 'Brazilian Real',       flag: '🇧🇷', noDecimals: false },
  { code: 'MXN', name: 'Mexican Peso',         flag: '🇲🇽', noDecimals: false },
];

// ─── Cache ────────────────────────────────────────────────────────────────────

const CACHE_KEY = 'hsf_fx_v1';
const CACHE_TTL = 3_600_000; // 1 hour

interface FxCache {
  rates: Record<string, number>;
  date: string;
  ts: number;
}

function readCache(): FxCache | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const entry = JSON.parse(raw) as FxCache;
    if (Date.now() - entry.ts > CACHE_TTL) return null;
    return entry;
  } catch {
    return null;
  }
}

function writeCache(rates: Record<string, number>, date: string): void {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ rates, date, ts: Date.now() }));
  } catch {
    // ignore write errors (private browsing etc.)
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmtLocal(amount: number, noDecimals: boolean): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: noDecimals ? 0 : 2,
    maximumFractionDigits: noDecimals ? 0 : 2,
  }).format(amount);
}

function fmtRate(rate: number, noDecimals: boolean): string {
  if (rate >= 1000) {
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(rate);
  }
  if (noDecimals) {
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(rate);
  }
  return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 }).format(rate);
}

// ─── Component ───────────────────────────────────────────────────────────────

interface CurrencyConverterProps {
  usdAmount: number;
  onUsdChange: (usd: number) => void;
}

type ConvertMode = 'see' | 'enter';

interface OpenERResponse {
  result: 'success' | 'error';
  rates: Record<string, number>;
  time_last_update_utc: string;
}

export default function CurrencyConverter({ usdAmount, onUsdChange }: CurrencyConverterProps): React.JSX.Element {
  const [rates, setRates]           = useState<Record<string, number> | null>(null);
  const [rateDate, setRateDate]     = useState('');
  const [loading, setLoading]       = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [currency, setCurrency]     = useState('UGX');
  const [mode, setMode]             = useState<ConvertMode>('see');
  const [localInput, setLocalInput] = useState('');

  useEffect(() => {
    const cached = readCache();
    if (cached) {
      setRates(cached.rates);
      setRateDate(cached.date);
      setLoading(false);
      return;
    }
    fetch('https://open.er-api.com/v6/latest/USD')
      .then((r) => r.json() as Promise<OpenERResponse>)
      .then((data) => {
        if (data.result === 'success') {
          writeCache(data.rates, data.time_last_update_utc);
          setRates(data.rates);
          setRateDate(data.time_last_update_utc);
        } else {
          setFetchError(true);
        }
      })
      .catch(() => setFetchError(true))
      .finally(() => setLoading(false));
  }, []);

  // Don't render at all if the API is unreachable
  if (fetchError) return <></>;

  const selectedEntry  = CURRENCIES.find((c) => c.code === currency) ?? CURRENCIES[0]!;
  const rate           = rates?.[currency] ?? null;
  const localEquiv     = rate != null && usdAmount > 0 ? usdAmount * rate : null;
  const parsedLocal    = parseFloat(localInput);
  const usdEquiv       = rate != null && !isNaN(parsedLocal) && parsedLocal > 0
    ? parsedLocal / rate
    : null;
  const roundedUsd     = usdEquiv != null ? Math.max(1, Math.round(usdEquiv)) : null;

  function handleCurrencyChange(code: string): void {
    setCurrency(code);
    setLocalInput('');
  }

  function handleUseDonation(): void {
    if (roundedUsd) {
      onUsdChange(roundedUsd);
      setMode('see');
    }
  }

  const rateLabel = rate != null
    ? `1 USD = ${fmtRate(rate, selectedEntry.noDecimals)} ${currency}`
    : null;

  const updatedLabel = rateDate
    ? `Updated ${new Date(rateDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
    : null;

  return (
    <div className="rounded-xl border border-warm-gray-200 overflow-hidden bg-white">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-forest-green-50 border-b border-warm-gray-100">
        <div className="flex items-center gap-2">
          <ArrowLeftRight size={14} className="text-forest-green-500" />
          <span className="text-sm font-semibold text-forest-green-800">Currency Converter</span>
        </div>
        {loading
          ? <RefreshCw size={13} className="animate-spin text-warm-gray-400" />
          : updatedLabel && <span className="text-xs text-warm-gray-400">{updatedLabel} · Live rates</span>
        }
      </div>

      {/* Mode tabs */}
      <div className="grid grid-cols-2 border-b border-warm-gray-100">
        {(['see', 'enter'] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={cn(
              'py-2.5 text-xs font-semibold transition-colors',
              mode === m
                ? 'bg-white text-forest-green-700 border-b-2 border-forest-green-500'
                : 'bg-warm-white text-warm-gray-500 hover:text-warm-gray-700',
            )}
          >
            {m === 'see' ? 'See in your currency' : 'Give in local currency'}
          </button>
        ))}
      </div>

      <div className="p-5 space-y-4">

        {/* Currency selector */}
        <div className="flex items-center gap-3">
          <label htmlFor="fx-currency" className="text-xs font-medium text-warm-gray-500 shrink-0">
            Currency
          </label>
          <select
            id="fx-currency"
            value={currency}
            onChange={(e) => handleCurrencyChange(e.target.value)}
            className="flex-1 text-sm border border-warm-gray-200 rounded-lg px-3 py-2 bg-white focus:border-forest-green-400 focus:outline-none focus:ring-1 focus:ring-forest-green-100 text-warm-gray-900"
          >
            {CURRENCIES.map(({ code, name, flag }) => (
              <option key={code} value={code}>{flag} {name} ({code})</option>
            ))}
          </select>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex items-center justify-center gap-2 py-5 text-sm text-warm-gray-400">
            <RefreshCw size={14} className="animate-spin" /> Fetching live rates…
          </div>
        ) : rate == null ? (
          <p className="text-sm text-warm-gray-400 text-center py-4">Rate not available for {currency}</p>
        ) : mode === 'see' ? (

          /* ── See mode: USD → local ── */
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-forest-green-50 rounded-xl px-4 py-4 text-center">
                <p className="text-xs text-warm-gray-500 mb-1">You&apos;re donating</p>
                <p className="text-2xl font-black font-serif text-forest-green-700 leading-tight">
                  {usdAmount > 0 ? `$${usdAmount.toLocaleString('en-US')}` : '—'}
                </p>
                <p className="text-xs font-semibold text-forest-green-500 mt-0.5">USD</p>
              </div>
              <div className="bg-amber-50 rounded-xl px-4 py-4 text-center">
                <p className="text-xs text-warm-gray-500 mb-1">
                  {selectedEntry.flag} In {currency}
                </p>
                <p className="text-2xl font-black font-serif text-amber-700 leading-tight">
                  {localEquiv != null ? fmtLocal(localEquiv, selectedEntry.noDecimals) : '—'}
                </p>
                <p className="text-xs font-semibold text-amber-500 mt-0.5">{currency}</p>
              </div>
            </div>
            {rateLabel && (
              <p className="text-center text-xs text-warm-gray-400">
                {rateLabel}{updatedLabel && ` · ${updatedLabel}`}
              </p>
            )}
          </div>

        ) : (

          /* ── Enter mode: local → USD ── */
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                step="any"
                value={localInput}
                onChange={(e) => setLocalInput(e.target.value)}
                placeholder={`Enter ${currency} amount…`}
                className="flex-1 px-4 py-3 border-2 border-forest-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green-100 text-warm-gray-900 font-semibold text-lg"
              />
              <span className="text-sm font-bold text-warm-gray-600 shrink-0">{currency}</span>
            </div>

            {usdEquiv != null && roundedUsd != null ? (
              <div className="flex items-center justify-between bg-forest-green-50 border border-forest-green-100 rounded-xl px-4 py-4 gap-3">
                <div>
                  <p className="text-xs text-warm-gray-500 mb-0.5">Equals</p>
                  <p className="text-xl font-black font-serif text-forest-green-700">
                    ${roundedUsd.toLocaleString('en-US')} <span className="text-sm font-semibold">USD</span>
                  </p>
                  {usdEquiv !== roundedUsd && (
                    <p className="text-xs text-warm-gray-400 mt-0.5">
                      Exact: ${usdEquiv.toFixed(2)} → rounded to ${roundedUsd}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleUseDonation}
                  className="shrink-0 bg-forest-green-600 hover:bg-forest-green-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors leading-tight text-center"
                >
                  Donate<br />${roundedUsd} →
                </button>
              </div>
            ) : localInput && (
              <p className="text-xs text-warm-gray-400 text-center py-1">
                Enter an amount above to see the USD equivalent
              </p>
            )}

            {rateLabel && (
              <p className="text-center text-xs text-warm-gray-400">
                {rateLabel}{updatedLabel && ` · ${updatedLabel}`}
              </p>
            )}
          </div>
        )}

        {/* Disclaimer */}
        {!loading && rate != null && (
          <div className="flex items-start gap-2 pt-1 border-t border-warm-gray-100">
            <Info size={11} className="text-warm-gray-300 mt-0.5 shrink-0" />
            <p className="text-xs text-warm-gray-400 leading-relaxed">
              Rates are indicative and updated daily via open exchange-rate data. Your bank&apos;s
              rate may differ slightly. All donations are processed in USD.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
