import type { ReactElement } from 'react';

export interface RoadmapItem {
  id: string;
  phase: string;
  title: string;
  description: string;
  icon: ReactElement<{ className?: string }>;
  color: string;
}

export interface NavLink {
  href: string;
  label: string;
}
