
import type { ReactElement } from 'react';
import type { IconProps } from './constants';

export interface RoadmapItem {
  id: string;
  phase: string;
  title: string;
  description: string;
  icon: ReactElement<IconProps>;
  color: string;
}

export interface NavLink {
  href: string;
  label: string;
}
