import React from 'react';
import { FaTruck, FaInfoCircle } from 'react-icons/fa';
import SignOutButton from '@/app/auth/SignOutButton';

export default function Dashboard() {
  return (
    <main className="container mx-auto p-6">
      {/* Dashboard Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold m-0">Welcome, Carrier!</h1>
        <button className="btn btn-primary">View Profile</button>
        <SignOutButton />
      </header>

      {/* Featured Loads from ShipmentX TMS */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Featured Loads from ShipmentX TMS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Load Cards */}
          <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Load #12345</h3>
            <p className="text-gray-500 flex items-center"><FaTruck className="mr-2" /> Origin: Los Angeles, CA</p>
            <p className="text-gray-500 flex items-center"><FaTruck className="mr-2" /> Destination: Dallas, TX</p>
            <p className="text-gray-500 flex items-center"><FaInfoCircle className="mr-2" /> Load Size: Full Truckload</p>
            <button className="btn btn-primary w-full mt-4">Quote Now</button>
          </div>
        </div>
      </section>

      {/* Available Loads */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Available Loads</h2>
        {/* Filters */}
        <div className="flex space-x-4 mb-6">
          <input type="text" className="input input-bordered" placeholder="Search by Origin" />
          <input type="text" className="input input-bordered" placeholder="Search by Destination" />
          <select className="select select-bordered">
            <option>Full Truckload</option>
            <option>LTL</option>
          </select>
          <button className="btn btn-primary">Filter</button>
        </div>
        {/* Loads Table */}
        <table className="table table-auto w-full">
          <thead className="bg-gray-100">
            <tr>
              <th>Load ID</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Size</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#6789</td>
              <td>Chicago, IL</td>
              <td>Miami, FL</td>
              <td>Partial</td>
              <td><button className="btn btn-sm btn-outline">View</button></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Quotes Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Quotes</h2>
      </section>
    </main>
  );
}
