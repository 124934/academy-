import React, { useState } from 'react';
import { Check, Users, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/academyData';

interface TuitionCalculatorProps {
  onSelectPlan: (planName: string, priceText: string) => void;
}

type CurrencyCode = 'USD' | 'GBP' | 'EUR' | 'CAD' | 'AUD' | 'AED' | 'PKR';

const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = {
  USD: '$',
  GBP: '£',
  EUR: '€',
  CAD: 'CA$',
  AUD: 'AU$',
  AED: 'AED ',
  PKR: 'Rs. '
};

export const TuitionCalculator: React.FC<TuitionCalculatorProps> = ({ onSelectPlan }) => {
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [siblingCount, setSiblingCount] = useState<number>(1);

  const calculateTotal = (basePrice: number) => {
    if (siblingCount === 1) return basePrice;
    if (siblingCount === 2) {
      return Math.round(basePrice + basePrice * 0.9);
    }
    return Math.round(basePrice + basePrice * 0.9 + basePrice * 0.85);
  };

  return (
    <section id="pricing" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase">
            <span>Fee Plans</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
            Transparent Tuition with Family Discounts
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Affordable monthly tuition plans tailored for kids and adults worldwide.
          </p>
        </div>

        {/* Currency & Sibling Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white/85 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xs mb-10">
          
          {/* Currency Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">
              Currency:
            </span>
            {(['USD', 'GBP', 'EUR', 'CAD', 'AUD', 'AED', 'PKR'] as CurrencyCode[]).map((cur) => (
              <button
                key={cur}
                onClick={() => setCurrency(cur)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  currency === cur
                    ? 'bg-emerald-900 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cur}
              </button>
            ))}
          </div>

          {/* Sibling Counter */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-700">
              <Users className="w-3.5 h-3.5 text-emerald-800" />
              <span>Students:</span>
            </div>
            <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200 text-xs">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => setSiblingCount(num)}
                  className={`px-3 py-1 rounded-md transition-all font-semibold ${
                    siblingCount === num
                      ? 'bg-white text-emerald-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {num} {num > 1 ? (num === 2 ? '(10% off)' : '(15% off)') : ''}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const rawBasePrice = plan.prices[currency] || plan.prices['USD'];
            const calculatedTotal = calculateTotal(rawBasePrice);
            const symbol = CURRENCY_SYMBOLS[currency];
            const priceDisplay = `${symbol}${calculatedTotal.toLocaleString()}`;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 relative ${
                  plan.isPopular
                    ? 'bg-white/95 backdrop-blur-md shadow-xl border-2 border-emerald-800 ring-4 ring-emerald-800/10'
                    : 'bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-xs hover:shadow-md'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-900 text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{plan.recommendedFor}</p>
                  </div>

                  {/* Price Tag */}
                  <div className="my-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tabular-nums">
                        {priceDisplay}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ month</span>
                    </div>
                    {siblingCount > 1 && (
                      <p className="text-[11px] text-emerald-700 font-medium mt-1">
                        Includes sibling discount for {siblingCount} students
                      </p>
                    )}
                    <p className="text-xs text-emerald-800 font-semibold mt-2">
                      {plan.classesPerWeek} Days / Week · 30 min per session
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan.name, priceDisplay)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-semibold transition-all shadow-xs flex items-center justify-center gap-2 active:scale-98 ${
                      plan.isPopular
                        ? 'bg-emerald-900 hover:bg-emerald-950 text-white shadow-md'
                        : 'bg-slate-100 hover:bg-emerald-900 hover:text-white text-slate-800'
                    }`}
                  >
                    <span>Choose Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Month-to-month flexibility
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
