import React from 'react';
import { facultyData } from '../data/faculty';
import FacultyCard from '../components/faculty/FacultyCard';
import MainLayout from '../components/layout/MainLayout';
import { Search } from 'lucide-react';

export default function FacultyPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Faculty Members
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Meet our distinguished faculty members and their ongoing research projects
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="search"
                placeholder="Search faculty..."
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {facultyData.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}