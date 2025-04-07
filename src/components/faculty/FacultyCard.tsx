import React from 'react';
import { Faculty } from '../../data/faculty';
import { BookOpen, Mail, MapPin } from 'lucide-react';

interface FacultyCardProps {
  faculty: Faculty;
}

export default function FacultyCard({ faculty }: FacultyCardProps) {
  const subjectsByYear = faculty.subjects.reduce((acc, subject) => {
    if (!acc[subject.year]) {
      acc[subject.year] = [];
    }
    acc[subject.year].push(subject.name);
    return acc;
  }, {} as Record<number, string[]>);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img
          src={faculty.image}
          alt={faculty.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-xl font-bold text-white">{faculty.name}</h3>
          <p className="text-gray-200 text-sm">{faculty.department}</p>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Current Project
          </h4>
          <p className="mt-1 text-gray-900">{faculty.projectTitle}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Experience
          </h4>
          <p className="mt-1 text-gray-900">{faculty.experience} years</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Subjects Taught
          </h4>
          <div className="space-y-2">
            {[1, 2, 3, 4].map((year) => (
              <div key={year} className="border-l-2 border-blue-500 pl-3">
                <h5 className="text-sm font-medium text-gray-700">
                  {year === 4 ? 'Final' : `${year}${year === 1 ? 'st' : year === 2 ? 'nd' : 'rd'}`} Year
                </h5>
                <p className="text-sm text-gray-600">{subjectsByYear[year]?.[0] || '-'}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            {faculty.office}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="h-4 w-4 mr-2" />
            {faculty.email}
          </div>
        </div>
      </div>
    </div>
  );
}