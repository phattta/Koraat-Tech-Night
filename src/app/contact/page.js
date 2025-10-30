"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) newErrors.name = "Name (required)";

    if (!email) {
      newErrors.email = "Email (required)";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!message) newErrors.message = "Message (required)";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const params = new URLSearchParams({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      }).toString();

      router.push(`/contact/submit?${params}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-4xl text-white font-extrabold text-center mb-8">Contact</h1>

      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="block font-semibold text-white">
            Name <span className="opacity-60">(required)</span>
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 w-full rounded border px-3 py-2 text-white"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-red-600 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold text-white">
            Email <span className="opacity-60">(required)</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full rounded border px-3 py-2 text-white"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-red-600 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block font-semibold text-white">
            Message <span className="opacity-60">(required)</span>
          </label>
          <textarea
            id="message"
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-2 w-full rounded border px-3 py-2 text-white"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-red-600 text-sm mt-1">
              {errors.message}
            </p>
          )}
        </div>

        <p className="text-xs opacity-70 text-white">
          BY SUBMITTING YOUR INFORMATION, YOU&apos;RE GIVING US PERMISSION TO
          EMAIL YOU. YOU MAY UNSUBSCRIBE AT ANY TIME.
        </p>

        {Object.keys(errors).length > 0 && (
          <div className="bg-red-700 text-white p-4 rounded text-sm">
            <p className="font-bold">
              ⚠️ Please make sure all fields are valid. You need to fix{" "}
              {Object.keys(errors).length}{" "}
              {Object.keys(errors).length === 1 ? "error" : "errors"}.
            </p>
            <ul className="list-disc ml-6 mt-2">
              {Object.values(errors).map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        <button
          type="submit"
          className="w-full rounded bg-black text-white py-3 font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}