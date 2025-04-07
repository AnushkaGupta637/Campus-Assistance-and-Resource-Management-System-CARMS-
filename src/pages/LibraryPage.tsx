import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const books = [
  { title: 'Introduction to Algorithms', author: 'Cormen et al.', available: true },
  { title: 'Clean Code', author: 'Robert C. Martin', available: false },
  { title: 'Artificial Intelligence: A Modern Approach', author: 'Russell & Norvig', available: true },
];

const timetable = [
  { day: 'Monday', time: '9:00 AM - 6:00 PM' },
  { day: 'Tuesday', time: '9:00 AM - 6:00 PM' },
  { day: 'Wednesday', time: '9:00 AM - 6:00 PM' },
  { day: 'Thursday', time: '9:00 AM - 6:00 PM' },
  { day: 'Friday', time: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function LibraryPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Library</h1>

        {/* Timetable Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Library Timetable</h2>
          <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Day</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Opening Hours</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {timetable.map((entry, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{entry.day}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{entry.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Book Availability Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Book Availability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
                <h3 className="text-xl font-semibold">{book.title}</h3>
                <p className="text-gray-600">Author: {book.author}</p>
                <span className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full ${
                  book.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {book.available ? 'Available' : 'Not Available'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
