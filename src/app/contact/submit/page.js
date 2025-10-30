import React from 'react'

export default function SuccessPage({ searchParams }) {
  return (
    <div className="max-w-2xl mx-auto text-white">
      <h1 className="text-4xl font-extrabold text-center mb-8">Contact</h1>

      <div className="p-6 rounded-lg shadow">
        <a href="/contact" className="text-black underline text-blue-500 hover:text-blue-600">Go back</a>

        <h2 className="text-2xl font-bold mt-4">Your message has been sent</h2>

        <p className="mt-6"><strong>Name:</strong> {searchParams.name}</p>
        <p className="mt-2"><strong>Email:</strong> {searchParams.email}</p>
        <p className="mt-2"><strong>Message:</strong> {searchParams.message}</p>
        <p className="mt-2"><strong>Consent:</strong> {searchParams.consent === "yes" ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}
