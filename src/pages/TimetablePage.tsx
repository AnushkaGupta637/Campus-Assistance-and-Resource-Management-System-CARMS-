import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { timetableData } from '../data/timetable';
import { Clock, MapPin, User } from 'lucide-react';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const departments = Object.keys(timetableData);

export default function TimetablePage() {
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Class Timetable</h2>
            <p className="mt-1 text-sm text-gray-500">
              View and manage your weekly class schedule
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="min-w-full overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time / Day
                  </th>
                  {DAYS.map((day) => (
                    <th
                      key={day}
                      className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {timetableData[selectedDepartment][DAYS[0]].map((_, timeIndex) => (
                  <tr key={timeIndex} className="divide-x divide-gray-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium bg-gray-50">
                      {timetableData[selectedDepartment][DAYS[0]][timeIndex].time}
                    </td>
                    {DAYS.map((day) => {
                      const slot = timetableData[selectedDepartment][day][timeIndex];
                      const isLunch = slot.subject === 'LUNCH';
                      const isFree = slot.subject === 'Free';

                      return (
                        <td
                          key={day}
                          className={`px-6 py-4 ${
                            isLunch
                              ? 'bg-blue-50'
                              : isFree
                              ? 'bg-gray-50'
                              : 'bg-white'
                          }`}
                        >
                          {isLunch ? (
                            <div className="text-center font-medium text-blue-800">
                              LUNCH BREAK
                            </div>
                          ) : isFree ? (
                            <div className="text-center text-gray-500">-</div>
                          ) : (
                            <div className="space-y-1">
                              <div className="font-medium text-gray-900">
                                {slot.subject}
                                {slot.subjectCode && (
                                  <span className="ml-2 text-xs text-gray-500">
                                    ({slot.subjectCode})
                                  </span>
                                )}
                              </div>
                              {slot.faculty && (
                                <div className="flex items-center text-xs text-gray-500">
                                  <User className="h-3 w-3 mr-1" />
                                  {slot.faculty}
                                </div>
                              )}
                              {slot.room && (
                                <div className="flex items-center text-xs text-gray-500">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {slot.room}
                                </div>
                              )}
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          <p className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            All times are in 24-hour format
          </p>
        </div>
      </div>
    </MainLayout>
  );
}