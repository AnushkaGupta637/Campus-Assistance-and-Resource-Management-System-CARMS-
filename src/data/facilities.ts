export interface FacilitySchedule {
  name: string;
  openTime: string;
  closeTime: string;
  currentStatus: 'open' | 'closed';
}

export const facilitiesData: Record<string, FacilitySchedule> = {
  gym: {
    name: 'University Gym',
    openTime: '06:00',
    closeTime: '22:00',
    currentStatus: 'open'
  },
  library: {
    name: 'Central Library',
    openTime: '08:00',
    closeTime: '23:00',
    currentStatus: 'open'
  }
};

export const messMenu = {
  Monday: {
    breakfast: ['Idli', 'Sambar', 'Chutney', 'Tea/Coffee'],
    lunch: ['Rice', 'Dal', 'Mixed Vegetables', 'Curd', 'Roti'],
    dinner: ['Rice', 'Dal Fry', 'Paneer Curry', 'Roti', 'Ice Cream']
  },
  // Add other days...
};