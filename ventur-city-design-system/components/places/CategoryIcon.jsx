import React from 'react';
import { Icon } from '../core/Icon.jsx';
export const CATEGORIES = {
  food: { label: 'Food & Drink', icon: 'food' },
  nightclub: { label: 'Nightclub', icon: 'nightclub' },
  shopping: { label: 'Shopping', icon: 'shopping' },
  beauty: { label: 'Beauty', icon: 'beauty' },
  wellness: { label: 'Wellness', icon: 'wellness' },
  entertainment: { label: 'Entertainment', icon: 'entertainment' },
  outdoors: { label: 'Outdoors', icon: 'outdoors' },
  services: { label: 'Services', icon: 'services' },
};
export function CategoryIcon({ category = 'food', size = 24, color = 'currentColor', style }) {
  const c = CATEGORIES[category] || CATEGORIES.food;
  return <Icon name={c.icon} size={size} color={color} style={style} />;
}
