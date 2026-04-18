/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Voucher {
  id: string;
  title: string;
  type: 'pdf' | 'qr' | 'image' | 'text';
  content?: string;
  fileName?: string;
  orderNumber?: string;
  previewUrl?: string;
}

export interface Location {
  name: string;
  googleMapUrl?: string;
  address?: string;
}

export interface TimelineItem {
  id: string;
  time?: string;
  title: string;
  description?: string;
  location?: Location;
  vouchers?: Voucher[];
  status?: 'pending' | 'completed' | 'current';
  transportInfo?: {
    type: 'train' | 'bus' | 'flight' | 'car' | 'walk';
    details: string[];
    platforms?: string;
    exitInfo?: string;
  };
  details?: string[];
}

export interface DayItinerary {
  day: number;
  date: string;
  title: string;
  items: TimelineItem[];
  notes?: string;
}

export interface TripData {
  hotel: Location;
  days: DayItinerary[];
}
