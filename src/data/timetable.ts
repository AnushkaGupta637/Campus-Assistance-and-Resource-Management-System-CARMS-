export interface TimeSlot {
  time: string;
  subject: string;
  subjectCode?: string;
  room?: string;
  faculty?: string;
}

export interface DaySchedule {
  [key: string]: TimeSlot[];
}

export const timetableData: Record<string, DaySchedule> = {
  'CSE-A': {
    Monday: [
      { time: '09:00-10:30', subject: 'Data Structures Lab', subjectCode: 'CSPC23', room: 'Lab 1', faculty: 'Dr. Smith' },
      { time: '10:30-12:00', subject: 'Computer Networks', subjectCode: 'CSPC24', room: '301', faculty: 'Dr. Johnson' },
      { time: '12:00-13:00', subject: 'LUNCH', room: 'Cafeteria' },
      { time: '14:00-15:30', subject: 'AI Workshop', subjectCode: 'CSPE45', room: 'Lab 2', faculty: 'Dr. Williams' }
    ],
    Tuesday: [
      { time: '09:00-10:30', subject: 'Database Systems', subjectCode: 'CSPC25', room: '302', faculty: 'Dr. Brown' },
      { time: '10:30-12:00', subject: 'Web Development', subjectCode: 'CSPE46', room: 'Lab 3', faculty: 'Dr. Davis' },
      { time: '12:00-13:00', subject: 'LUNCH', room: 'Cafeteria' },
      { time: '14:00-15:30', subject: 'Free', room: '-' }
    ],
    Wednesday: [
      { time: '09:00-10:30', subject: 'Artificial Intelligence', subjectCode: 'CSPC26', room: '303', faculty: 'Dr. Williams' },
      { time: '10:30-12:00', subject: 'Free', room: '-' },
      { time: '12:00-13:00', subject: 'LUNCH', room: 'Cafeteria' },
      { time: '14:00-15:30', subject: 'Network Security', subjectCode: 'CSPE47', room: '304', faculty: 'Dr. Miller' }
    ],
    Thursday: [
      { time: '09:00-10:30', subject: 'Free', room: '-' },
      { time: '10:30-12:00', subject: 'Cloud Computing', subjectCode: 'CSPC27', room: '305', faculty: 'Dr. Wilson' },
      { time: '12:00-13:00', subject: 'LUNCH', room: 'Cafeteria' },
      { time: '14:00-15:30', subject: 'Mobile App Development', subjectCode: 'CSPE48', room: 'Lab 4', faculty: 'Dr. Taylor' }
    ],
    Friday: [
      { time: '09:00-10:30', subject: 'Project Workshop', subjectCode: 'CSPR01', room: 'Lab 5', faculty: 'Dr. Anderson' },
      { time: '10:30-12:00', subject: 'Free', room: '-' },
      { time: '12:00-13:00', subject: 'LUNCH', room: 'Cafeteria' },
      { time: '14:00-15:30', subject: 'Research Seminar', subjectCode: 'CSPE49', room: '306', faculty: 'Dr. Thomas' }
    ]
  },
  'CSE-B': {
    Monday: [
      { time: '09:00-10:30', subject: 'Computer Networks', subjectCode: 'CSPC24', room: '307', faculty: 'Dr. Johnson' },
      { time: '10:30-12:00', subject: 'Data Structures Lab', subjectCode: 'CSPC23', room: 'Lab 6', faculty: 'Dr. Smith' },
      { time: '12:00-13:00', subject: 'LUNCH', room: 'Cafeteria' },
      { time: '14:00-15:30', subject: 'Web Development', subjectCode: 'CSPE46', room: 'Lab 7', faculty: 'Dr. Davis' }
    ],
    Tuesday: [
      { time: '09:00-10:30', subject: 'AI Workshop', subjectCode: 'CSPE45', room: 'Lab 8', faculty: 'Dr. Williams' },
      { time: '10:30-12:00', subject: 'Database Systems', subjectCode: 'CSPC25', room: '308', faculty: 'Dr. Brown' },
      { time: '12:00-13:00', subject: 'LUNCH', room: 'Cafeteria' },
      { time: '14:00-15:30', subject: 'Network Security', subjectCode: 'CSPE47', room: '309', faculty: 'Dr. Miller' }
    ],
    Wednesday: [
      { time: '09:00-10:30', subject: 'Cloud Computing', subjectCode: 'CSPC27', room: '310', faculty: 'Dr. Wilson' },
      { time: '10:30-12:00', subject: 'Artificial Intelligence', subjectCode: 'CSPC26', room: '311', faculty: 'Dr. Williams' },
      { time: '12:00-13:00', subject: 'LUNCH', room: 'Cafeteria' },
      { time: '14:00-15:30', subject: 'Project Workshop', subjectCode: 'CSPR01', room: 'Lab 9', faculty: 'Dr. Anderson' }
    ],
    Thursday: [
      { time: '09:00-10:30', subject: 'Mobile App Development', subjectCode: 'CSPE48', room: 'Lab 10', faculty: 'Dr. Taylor' },
      { time: '10:30-12:00', subject: 'Research Seminar', subjectCode: 'CSPE49', room: '312', faculty: 'Dr. Thomas' },
      { time: '12:00-13:00', subject: 'LUNCH', room: 'Cafeteria' },
      { time: '14:00-15:30', subject: 'Free', room: '-' }
    ],
    Friday: [
      { time: '09:00-10:30', subject: 'Free', room: '-' },
      { time: '10:30-12:00', subject: 'Project Workshop', subjectCode: 'CSPR01', room: 'Lab 11', faculty: 'Dr. Anderson' },
      { time: '12:00-13:00', subject: 'LUNCH', room: 'Cafeteria' },
      { time: '14:00-15:30', subject: 'Cloud Computing', subjectCode: 'CSPC27', room: '313', faculty: 'Dr. Wilson' }
    ]
  }
};