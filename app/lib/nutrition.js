const ACTIVITY_MULTIPLIER = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  "very-active": 1.725,
  athlete: 1.9,
};

const GOAL_KCAL_ADJUSTMENT = {
  "fat-loss": -500,
  "weight-loss": -400,
  maintenance: 0,
  "muscle-gain": 300,
  "healthy-eating": 0,
};

const GOAL_PROTEIN_PER_KG = {
  "fat-loss": 2.0,
  "weight-loss": 1.8,
  maintenance: 1.4,
  "muscle-gain": 2.2,
  "healthy-eating": 1.4,
};

export function calcBMI(weightKg, heightCm) {
  const heightM = heightCm / 100;
  return Math.round((weightKg / (heightM * heightM)) * 10) / 10;
}

export function calcBMR({ gender, weightKg, heightCm, age }) {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return Math.round(gender === "male" ? base + 5 : gender === "female" ? base - 161 : base - 78);
}

export function calcTDEE(bmr, activityLevel) {
  return Math.round(bmr * (ACTIVITY_MULTIPLIER[activityLevel] ?? 1.2));
}

export function calcTargetKcal(tdee, goal) {
  return Math.max(1200, tdee + (GOAL_KCAL_ADJUSTMENT[goal] ?? 0));
}

export function calcHealthyWeightRange(heightCm) {
  const heightM = heightCm / 100;
  return [Math.round(18.5 * heightM * heightM), Math.round(24.9 * heightM * heightM)];
}

export function calcMacros(targetKcal, weightKg, goal) {
  const proteinG = Math.round(weightKg * (GOAL_PROTEIN_PER_KG[goal] ?? 1.4));
  const proteinKcal = proteinG * 4;
  const fatKcal = targetKcal * 0.28;
  const fatG = Math.round(fatKcal / 9);
  const carbsKcal = Math.max(0, targetKcal - proteinKcal - fatKcal);
  const carbsG = Math.round(carbsKcal / 4);
  const fiberG = Math.round((targetKcal / 1000) * 14);
  return { proteinG, carbsG, fatG, fiberG, kcal: Math.round(targetKcal) };
}

export function calcNutritionScore(input, bmi) {
  let score = 70;
  if (bmi >= 18.5 && bmi <= 24.9) score += 15;
  else if (bmi < 18.5 || (bmi > 24.9 && bmi <= 27)) score += 5;
  if (input.sleepHours >= 7) score += 5;
  if (input.waterLitres >= 2.5) score += 5;
  if (input.activityLevel !== "sedentary") score += 5;
  return Math.max(30, Math.min(98, score));
}

export function computeCoreNumbers(input) {
  const bmi = calcBMI(input.weightKg, input.heightCm);
  const bmr = calcBMR(input);
  const tdee = calcTDEE(bmr, input.activityLevel);
  const targetKcal = calcTargetKcal(tdee, input.goal);
  const healthyWeightRangeKg = calcHealthyWeightRange(input.heightCm);
  const macros = calcMacros(targetKcal, input.weightKg, input.goal);
  const nutritionScore = calcNutritionScore(input, bmi);
  return { bmi, bmr, tdee, targetKcal, healthyWeightRangeKg, macros, nutritionScore };
}
