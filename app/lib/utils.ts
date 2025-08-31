
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes}m`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'Easy':
      return 'text-green-600 bg-green-50 border-green-200';
    case 'Medium':
      return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    case 'Hard':
      return 'text-red-600 bg-red-50 border-red-200';
    default:
      return 'text-gray-600 bg-gray-50 border-gray-200';
  }
}

export function getFrequencyColor(frequency: string): string {
  switch (frequency) {
    case 'Very High':
      return 'bg-red-500';
    case 'High':
      return 'bg-orange-500';
    case 'Medium':
      return 'bg-blue-500';
    default:
      return 'bg-gray-500';
  }
}
