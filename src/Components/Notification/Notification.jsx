import React from 'react';

const Notification = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto my-10">
        <h2 className="text-xl md:2xl lg:text-4xl font-bold text-center text-red-500 mb-10">
          Notifications/ <span className="text-red-400 ">Coupon</span>
        </h2>
        <ul className="space-y-4  border-blue-500 bg-blue-50 ">
          <li className="p-4 rounded-lg shadow-md border-l-4">
            <p className="font-medium">
              New Hot Wheels Track Set - 20% OFF!
            </p>
            <p className="text-gray-500 text-sm">Just Now</p>
          </li>
        </ul>
        <ul className="space-y-4 my-4  border-blue-500 bg-blue-50 ">
          <li className="p-4 rounded-lg shadow-md border-l-4">
            <p className="font-medium">
              New Fisher-Price Learning Tablet - 15% OFF!
            </p>
            <p className="text-gray-500 text-sm">Just Now</p>
          </li>
        </ul>
        <ul className="space-y-4  border-blue-500 bg-blue-50">
          <li className="p-4 rounded-lg shadow-md border-l-4">
            <p className="font-medium">
              New Barbie Dreamhouse - 10% OFF!
            </p>
            <p className="text-gray-500 text-sm">Just Now</p>
          </li>
        </ul>
      </div>
        </div>
    );
};

export default Notification;