import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { labsData } from '../data/labs';
import { Monitor, Users, Clock, CheckCircle, XCircle } from 'lucide-react';

export default function DashboardPage() {
  const [timeFilter, setTimeFilter] = useState<string>('all');

  const filteredLabs = timeFilter === 'all' 
    ? labsData 
    : labsData.filter(lab => lab.nextFreeSlot?.includes(timeFilter));

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Campus Dashboard</h2>
            <p className="mt-1 text-sm text-gray-500">
              Monitor lab availability and schedules in real-time
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
            >
              <option value="all">All Times</option>
              <option value="2:00">2:00 PM</option>
              <option value="3:00">3:00 PM</option>
              <option value="4:00">4:00 PM</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredLabs.map((lab) => (
            <div
              key={lab.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.02]"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Monitor className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">{lab.name}</h3>
                  </div>
                  {lab.status === 'Free' ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Free
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      <XCircle className="h-3 w-3 mr-1" />
                      Occupied
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    Capacity: {lab.capacity} seats
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    Next free: {lab.nextFreeSlot}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {lab.facilities.map((facility, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}