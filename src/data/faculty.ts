export interface Subject {
  name: string;
  year: 1 | 2 | 3 | 4;
}

export interface Faculty {
  id: string;
  name: string;
  department: string;
  image: string;
  projectTitle: string;
  experience: number;
  subjects: Subject[];
  office: string;
  email: string;
}

export const facultyData: Faculty[] = [
  {
    id: 'f1',
    name: 'Dr. Ananya Mehta',
    department: 'Computer Science',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    projectTitle: 'AI-Driven Mental Health Monitoring System',
    experience: 12,
    subjects: [
      { name: 'Introduction to Programming', year: 1 },
      { name: 'Data Structures', year: 2 },
      { name: 'Artificial Intelligence', year: 3 },
      { name: 'Deep Learning Applications', year: 4 }
    ],
    office: 'Room 401',
    email: 'ananya.mehta@university.edu'
  },
  {
    id: 'f2',
    name: 'Prof. Rahul Verma',
    department: 'Computer Science',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    projectTitle: 'Blockchain for Educational Record Security',
    experience: 9,
    subjects: [
      { name: 'Computer Fundamentals', year: 1 },
      { name: 'Operating Systems', year: 2 },
      { name: 'Blockchain Technology', year: 3 },
      { name: 'Cybersecurity & Compliance', year: 4 }
    ],
    office: 'Room 402',
    email: 'rahul.verma@university.edu'
  },
  {
    id: 'f3',
    name: 'Dr. Sneha Kapoor',
    department: 'Computer Science',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    projectTitle: 'Natural Language Processing for Indian Languages',
    experience: 11,
    subjects: [
      { name: 'Communication Skills', year: 1 },
      { name: 'Python Programming', year: 2 },
      { name: 'NLP and Text Mining', year: 3 },
      { name: 'Research Methodology', year: 4 }
    ],
    office: 'Room 403',
    email: 'sneha.kapoor@university.edu'
  },
  {
    id: 'f4',
    name: 'Prof. Karan Shah',
    department: 'Computer Science',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    projectTitle: 'IoT-Based Smart Campus Automation',
    experience: 8,
    subjects: [
      { name: 'Digital Logic Design', year: 1 },
      { name: 'Microcontrollers', year: 2 },
      { name: 'IoT & Embedded Systems', year: 3 },
      { name: 'Capstone Project Guidance', year: 4 }
    ],
    office: 'Room 404',
    email: 'karan.shah@university.edu'
  }
];