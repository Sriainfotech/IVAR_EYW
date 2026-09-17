// Ivar-branded corporate meal pricing — new pricing tiers created for the
// corporate-orders calculator/pricing table/inquiry form (Ivar has no prior
// corporate pricing to reuse). Edit here to update everywhere it's used.

export const CORPORATE_PLANS = [
  {
    id: "breakfast",
    label: "Breakfast",
    pricePerPersonPerDay: 149,
    timing: "7:00 AM – 10:00 AM",
    features: ["Daily Healthy Breakfast Bowl", "Fresh Ingredients", "Rotating Menu", "Office Delivery"],
  },
  {
    id: "lunch",
    label: "Lunch",
    pricePerPersonPerDay: 199,
    timing: "12:00 PM – 2:30 PM",
    features: ["Daily Lunch Bowl", "Balanced Nutrition", "Veg & Non-Veg Options", "Office Delivery"],
  },
  {
    id: "dinner",
    label: "Dinner",
    pricePerPersonPerDay: 199,
    timing: "7:00 PM – 9:30 PM",
    features: ["Daily Wholesome Dinner Bowl", "Light & Nutritious", "Veg & Non-Veg Options", "Office Delivery"],
  },
  {
    id: "full-day",
    label: "Full-Day",
    pricePerPersonPerDay: 499,
    timing: "7:00 AM – 10:00 AM · 12:00 PM – 2:30 PM · 7:00 PM – 9:30 PM",
    features: ["Breakfast Bowl", "Lunch Bowl", "Dinner Bowl", "Priority Delivery"],
    bestValue: true,
  },
];

export const CORPORATE_MIN_PEOPLE = 10;
export const CORPORATE_MAX_PEOPLE = 50;
export const CORPORATE_DELIVERY_RATE_PER_KM = 11;

export const CORPORATE_DURATIONS = [
  { id: "1-day", label: "1 Day", days: 1 },
  { id: "weekly", label: "Weekly (5 Days)", days: 5 },
  { id: "monthly-20", label: "Monthly (20 Days)", days: 20 },
  { id: "monthly-30", label: "Monthly (30 Days)", days: 30 },
];

export const CORPORATE_SUBSCRIPTION_TIERS = [
  { id: "weekly", label: "Weekly Plan", sub: "5 Working Days", features: ["Flexible Orders", "Team Meal Planning", "Fresh Daily Preparation"] },
  { id: "monthly", label: "Monthly Plan", sub: "20 Working Days", features: ["Best Value Pricing", "Dedicated Scheduling", "Consistent Employee Meals"] },
  { id: "quarterly", label: "Quarterly Wellness Plan", sub: "3 Months", features: ["Employee Wellness Program", "Priority Support", "Long-Term Planning"] },
];

export function findPlan(id) {
  return CORPORATE_PLANS.find((p) => p.id === id);
}

export function findDuration(id) {
  return CORPORATE_DURATIONS.find((d) => d.id === id);
}
