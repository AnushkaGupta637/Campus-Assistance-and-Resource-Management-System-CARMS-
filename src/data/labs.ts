export interface LabSchedule {
  id: string;
  name: string;
  status: 'Free' | 'Occupied';
  nextFreeSlot?: string;
  capacity: number;
  facilities: string[];
}

export const labsData: LabSchedule[] = [
  {
    id: 'lt1',
    name: 'LT-1',
    status: 'Free',
    nextFreeSlot: '2:00 PM - 4:00 PM',
    capacity: 60,
    facilities: ['Projector', 'Smart Board', 'AC']
  },
  {
    id: 'lt2',
    name: 'LT-2',
    status: 'Occupied',
    nextFreeSlot: '4:00 PM - 6:00 PM',
    capacity: 60,
    facilities: ['Projector', 'Smart Board', 'AC']
  },
  {
    id: 'lt3',
    name: 'LT-3',
    status: 'Free',
    nextFreeSlot: '2:00 PM - 4:00 PM',
    capacity: 60,
    facilities: ['Projector', 'Smart Board', 'AC']
  },
  {
    id: 'redhat',
    name: 'RedHat Lab',
    status: 'Occupied',
    nextFreeSlot: '3:00 PM - 5:00 PM',
    capacity: 40,
    facilities: ['Linux Workstations', 'Smart Board', 'AC']
  }
];