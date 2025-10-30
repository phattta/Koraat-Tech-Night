"use client";

import { useState } from "react";

export default function AuthPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white relative mt-2">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">
                    KORAT <span className="text-orange-500">TECH</span>
                </h1>
                <div className="text-sm font-normal text-gray-400">NIGHT 2025</div>
            </div>

            <div className="w-full max-w-md p-8 bg-zinc-900/90 rounded-lg shadow-lg">
                {/* Header */}
                <div className="text-center mb-2">
                    <h2 className="text-2xl font-bold">Welcome</h2>
                    <p className="text-sm text-gray-400">Join the tech community in Korat</p>
                </div>

                {/* Tabs */}
                <div className="flex mb-4">
                    <button className="flex-1 py-2 text-2xl rounded-lg text-white">
                        Login
                    </button>
                </div>

                {/* Form */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="your.email@example.com"
                            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-orange-500"
                        />
                    </div>
                    <div className="relative">
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-orange-500 pr-12"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-10 text-gray-400 hover:text-white"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <button className="w-full py-3 rounded-lg bg-orange-500 hover:bg-orange-600 font-semibold transition">
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center">
                    <hr className="flex-1 border-zinc-700" />
                    <span className="px-2 text-gray-400 text-sm">OR CONTINUE WITH</span>
                    <hr className="flex-1 border-zinc-700" />
                </div>

                {/* Google Auth Button */}
                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Sign in with Google
                </button>

                {/* Event Info */}
                <p className="text-center text-sm text-gray-400 mt-6">
                    30 August 2025 | 17:00–20:30 <br />
                    Yujou Izakaya, Nakhonratchasima
                </p>
            </div>
            <p className="text-center text-xs text-gray-500 mt-4">
                A gathering to inspire technology and connect the tech community
            </p>
        </div>
    );
}
