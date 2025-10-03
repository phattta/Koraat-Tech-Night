"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../footer/page'
import { useState } from "react";

export default function Tictefs() {
    const [showInput, setShowInput] = useState(false);

    return (
        <div>
            <div className="relative z-0 flex items-center justify-center min-h-screen px-2 sm:px-6">
                <div className="rounded-2xl p-2 sm:p-6 md:p-10 w-full">
                    <h1 className="font-black text-3xl leading-[1.1] tracking-[-0.015em] text-center text-white mx-auto mt-4 mb-15 max-w-[15ch] xl:text-5xl">
                        ซื้อตั๋วเข้าร่วมงาน
                    </h1>
                    <div className="flex justify-center">
                        <Image
                            src="/Call-for-Ticket.png"
                            alt="Call for Volunteers"
                            width={1200}
                            height={942}
                            className="rounded-2xl max-w-6xl w-full h-auto"
                            priority
                        />
                    </div>
                    <section className="text-white py-16 px-6 sm:px-12 lg:px-24">
                        <div className="max-w-4xl mx-auto space-y-8">
                            <p className="mb-6 text-lg">
                                พร้อมแล้วหรือยังสำหรับการสัมผัสประสบการณ์ WordCamp Bangkok 2025 ถ้าพร้อมแล้ว ซื้อบัตรเข้าร่วมงานได้เลย!
                            </p>
                            <p className="mb-8 text-lg">
                                งานจะจัดขึ้นในวันที่{" "}
                                <a className="font-semibold">13-14 ธันวาคม 2568</a> ที่{" "}
                                <a className="font-semibold">สมาคมนิสิตเก่าจุฬาลงกรณ์มหาวิทยาลัย</a>
                            </p>
                            <ul className="list-disc text-lg list-inside space-y-2">
                                <li>วันที่ 14 ธันวาคม (Conference Day) จะเป็นวันสำหรับผู้เข้าร่วมงานทั่วไป ซึ่งต้องใช้ตั๋วในการเข้าร่วมงาน</li>
                                <li>ส่วนวันที่ 13 ธันวาคม (Contributor Day) จะมีตั๋วให้กดอีกครั้ง และจะมีการแจ้งกำหนดการให้ทราบในภายหลัง</li>
                            </ul>
                            <p className="text-lg">
                                คุณสามารถดูรายละเอียดเกี่ยวกับสถานที่ได้{" "}
                                <a href="#" className="text-blue-500 hover:text-blue-600 underline">
                                    ที่นี่
                                </a>
                            </p>
                            <div className="flex justify-center mt-6">
                                <hr className="border-t border-gray-400 w-1/4" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">
                                Buy Tickets
                            </h3>
                            <p className="mb-8 text-lg">
                                Ready for experiencing WordCamp Bangkok 2025? If so, buy the tickets, today!
                            </p>
                            <p className='text-lg'>
                                The event will be held on{" "}
                                <a className="font-bold">December 13-14, 2025,</a> at the{" "}
                                <a className="font-bold">Chulalongkorn University Alumni Association Hall.</a>
                            </p>
                            <ul className="list-disc text-lg list-inside space-y-2">
                                <li>Tickets are for the <a className="font-bold">Conference Day</a> on December 14th only.</li>
                                <li>December 13th is the <a className="font-bold">Contributor Day</a>, and tickets for this day will be available at a later date, with the schedule to be announced.</li>
                            </ul>
                            <p className='text-lg'>
                                You can find about Location detail{" "}
                                <a href="#" className="text-blue-500 hover:text-blue-600 font-bold underline">
                                    here.
                                </a>
                            </p>
                            <div className="flex justify-center mt-6">
                                <hr className="border-t border-gray-400 w-1/4" />
                            </div>
                            <div className="max-w-4xl space-y-6">
                                <div className="bg-green-200 p-5 shadow w-full">
                                    <h2 className="text-lg font-bold text-black flex items-center gap-2">
                                        <Image
                                            src="/icon-tickefs.svg"
                                            alt="Ticket Icon"
                                            width={24}
                                            height={24}
                                        /> Regular Ticket — 500 THB
                                    </h2>
                                    <p className="mt-6 text-lg text-gray-800 leading-relaxed">
                                        บัตร Regular ให้ท่านเข้าร่วม WordCamp Bangkok 2025 แบบครบทั้งงาน ฟังบรรยาย
                                        เรียนรู้ แชร์ไอเดีย จากผู้ใช้ นักออกแบบ และนักพัฒนา WordPress ทั้งในไทยและต่างประเทศ
                                    </p>
                                    <p className="mt-6 text-lg text-gray-800 leading-relaxed">
                                        The Regular Ticket gives you full access to WordCamp Bangkok 2025 — join talks, learn,
                                        and share ideas with WordPress users, designers, and developers from Thailand and around
                                        the world.
                                    </p>
                                    <p className="mt-6 bg-yellow-300 p-2 rounded text-lg text-gray-900">
                                        ราคาสบายกระเป๋า แค่ 500 บาท แต่ได้ประสบการณ์และคอนเนกชันแบบจัดเต็ม! //
                                        An amazing value — just THB 500 for knowledge, networking, and inspiration!
                                    </p>
                                </div>
                                <div className="bg-red-200 p-6 shadow">
                                    <h2 className="text-lg font-bold text-black flex items-center gap-2">
                                        <span className="text-yellow-500">⭐</span> Individual Sponsor Ticket — 1,500 THB
                                    </h2>
                                    <p className="mt-6 text-lg text-gray-800 leading-relaxed">
                                        อยากสนับสนุน WordCamp Bangkok 2025 ให้ยิ่งใหญ่ขึ้น? บัตร Individual Sponsor
                                        คือทางเลือกสำหรับท่าน! ท่านจะได้รับสิทธิ์เข้าร่วมทุกอย่างเหมือนบัตร Regular พร้อมทั้งรับ
                                        <span className="font-bold text-red-700">
                                            {" "}เสื้อยืด WordCamp Bangkok 2025 สุดพิเศษ
                                        </span>{" "}
                                        เหมาะสำหรับผู้ที่ได้รับประโยชน์จาก WordPress นี่คืออีกหนึ่งวิธีที่ยอดเยี่ยมในการตอบแทนชุมชน WordPress
                                    </p>
                                    <p className="mt-6 text-lg text-gray-800 leading-relaxed">
                                        Want to support WordCamp Bangkok 2025 even more? The Individual Sponsor Ticket is for you!
                                        You’ll get everything included in the Regular Ticket, plus an{" "}
                                        <span className="font-bold">exclusive WordCamp Bangkok 2025 t-shirt</span>. For those who
                                        have benefited from WordPress, this is a wonderful way to give back to the community.
                                    </p>
                                    <p className="mt-6 bg-yellow-300 p-2 rounded text-lg text-gray-900">
                                        ราคาเพียง 1,500 บาท ได้ทั้งเข้าร่วมงาน ได้เสื้อ และยังได้มีส่วนร่วมสนับสนุนชุมชน WordPress ไปพร้อมกัน! // Only THB 1,500 — enjoy the event, get the t-shirt, and give back to the WordPress community!
                                    </p>
                                </div>
                            </div>
                            <div className="bg-yellow-100 border border-yellow-300 text-gray-800 text-lg p-4 rounded">
                                <p>
                                    Before purchasing your tickets, please{" "}
                                    <a href="#" className="text-blue-500 hover:text-blue-600 underline">
                                        log in with your WordPress.org account
                                    </a>
                                    *.
                                </p>
                                <p>
                                    If you don’t have an account,{" "}
                                    <a href="#" className="text-blue-500 hover:text-blue-600 underline">
                                        please create one
                                    </a>
                                    .
                                </p>
                                <p className="italic text-black mt-2">
                                    * This is your account for{" "}
                                    <a href="#" className="text-blue-500 hover:text-blue-600 underline">
                                        the official WordPress.org website
                                    </a>
                                    , rather than your personal WordPress site.
                                </p>
                            </div>
                            <div className="text-black overflow-x-auto">
                                <table className="min-w-full border border-gray-200 rounded-sm overflow-hidden shadow bg-white">
                                    <thead>
                                        <tr className="bg-green-800 text-white text-left">
                                            <th className="px-4 py-3">Description</th>
                                            <th className="px-4 py-3">Price</th>
                                            <th className="px-4 py-3">Remaining</th>
                                            <th className="px-4 py-3">Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-gray-200">
                                            <td className="px-4 py-3 font-bold">Organizer, Sponsor, Speaker, Volunteer Ticket</td>
                                            <td className="px-4 py-3">฿ 500.00</td>
                                            <td className="px-4 py-3">0</td>
                                            <td className="px-4 py-3 text-black font-semibold">Sold out</td>
                                        </tr>
                                        <tr className="border-t border-gray-200">
                                            <td className="px-4 py-3 font-bold">Individual Sponsor</td>
                                            <td className="px-4 py-3">฿ 1,500.00</td>
                                            <td className="px-4 py-3">35</td>
                                            <td className="px-4 py-3">
                                                <select className="border border-gray-300 rounded px-2 py-1">
                                                    {[...Array(11).keys()].map((num) => (
                                                        <option key={num}>{num}</option>
                                                    ))}
                                                </select>
                                            </td>
                                        </tr>
                                        <tr className="border-t border-gray-200">
                                            <td className="px-4 py-3 font-bold">Regular Ticket</td>
                                            <td className="px-4 py-3">฿ 500.00</td>
                                            <td className="px-4 py-3">42</td>
                                            <td className="px-4 py-3">
                                                <select className="border border-gray-300 rounded px-2 py-1">
                                                    {[...Array(11).keys()].map((num) => (
                                                        <option key={num}>{num}</option>
                                                    ))}
                                                </select>
                                            </td>
                                        </tr>
                                        <tr className="border-t border-gray-200">
                                            <td colSpan={4} className="px-4 py-3 text-right text-md">
                                                {!showInput ? (
                                                    <a
                                                        href="#"
                                                        className="text-blue-500 hover:text-blue-600 underline"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setShowInput(true);
                                                        }}
                                                    >
                                                        Click here to enter a coupon code
                                                    </a>
                                                ) : (
                                                    <div className="flex justify-end gap-2">
                                                        <input
                                                            type="text"
                                                            placeholder="Enter coupon"
                                                            className="border rounded px-3 py-1"
                                                        />
                                                        <button
                                                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-full"
                                                            onClick={() => {
                                                                setShowInput(false);
                                                            }}
                                                        >
                                                            Apply Coupon
                                                        </button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="flex justify-end mb-15">
                                <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition">
                                    Register →
                                </button>
                            </div>
                            <p className='text-lg'>
                                การเข้าร่วมงาน WordCamp Bangkok 2025 นั้น ถือเป็นการยืนยันว่าคุณยินยอมที่จะปฏิบัติตาม{" "}
                                <a href="#" className="text-blue-500 hover:text-blue-600 underline">
                                    หลักปฏิบัติ (Code of Conduct)
                                </a> ของเรา
                            </p>
                            <p className='text-lg'>
                                By attending WordCamp Bangkok 2025, means you agree to abide by our{" "}
                                <a href="#" className="text-blue-500 hover:text-blue-600 underline">
                                    Code of Conduct
                                </a>
                            </p>
                            <div className="flex justify-center mt-[60px] mb-14">
                                <hr className="border-t border-gray-400 w-1/4" />
                            </div>
                            <div className="max-w-4xl space-y-6">
                                <div className="bg-blue-100 p-6 shadow max-w-4xl mx-auto">
                                    <h2 className="text-3xl font-bold text-orange-600 mb-6">คำถามที่ถามบ่อย</h2>

                                    <div className="text-black space-y-4">
                                        <details open className="group text-lg pb-3">
                                            <summary className="flex items-center cursor-pointer font-semibold text-gray-800">
                                                <span className="mr-2 transition-transform group-open:rotate-90">▶</span>
                                                เราสามารถชำระเงินค่าบัตรเข้าร่วมงาน WordCamp Bangkok 2025 ได้ที่ไหนบ้าง?
                                            </summary>
                                            <p className="mt-5 mb-4">
                                                การชำระเงินเพื่อซื้อบัตรเข้าร่วมงาน WordCamp Bangkok 2025 จะรับชำระได้ผ่านทางบัตรเครดิต หรือผ่าน PayPal เท่านั้น
                                            </p>
                                            <p>
                                                หากท่านพบปัญหาในการชำระเงิน ท่านสามารถติดต่อทีมงานของเราได้ที่หน้า{" "}
                                                <a href="#" className="text-blue-500 hover:text-blue-600 underline">Contact</a>
                                            </p>
                                        </details>
                                        <details open className="group text-lg pb-3">
                                            <summary className="flex items-center cursor-pointer font-semibold text-gray-800">
                                                <span className="mr-2 transition-transform group-open:rotate-90">▶</span>
                                                เราสามารถเอาบัตรเข้าร่วมงานไปให้คนอื่นได้หรือไม่?
                                            </summary>
                                            <p className="mt-2 text-gray-700">
                                                หลังจากที่ท่านซื้อบัตร WordCamp Bangkok 2025 เป็นที่เรียบร้อยแล้ว ท่านสามารถส่งต่อบัตร และ/หรือแก้ไขข้อมูลผู้เข้าร่วมงานได้ ผ่านทางลิงก์ที่ได้ในอีเมลยืนยันการซื้อบัตร โดยที่ท่านไม่จำเป็นต้องติดต่อทีมงานของเรา
                                            </p>
                                        </details>
                                        <details open className="group text-lg pb-3">
                                            <summary className="flex items-center cursor-pointer font-semibold text-gray-800">
                                                <span className="mr-2 transition-transform group-open:rotate-90">▶</span>
                                                บัตรทั้ง 2 แบบต่างกันอย่างไรบ้าง?
                                            </summary>
                                            <p className="mt-2 text-gray-700">
                                                บัตรทั้ง 2 แบบจะสามารถเข้าร่วมงานได้เหมือนกันทั้งคู่ อย่างไรก็ดี หากท่านต้องการสนับสนุนการจัดงานของเรา เราแนะนำให้ท่านซื้อบัตร Individual Sponsor ได้เลย
                                            </p>
                                        </details>
                                        <details open className="group text-lg pb-3">
                                            <summary className="flex items-center cursor-pointer font-semibold text-gray-800">
                                                <span className="mr-2 transition-transform group-open:rotate-90">▶</span>
                                                เราสามารถขอคืนเงินค่าบัตรได้หรือไม่?
                                            </summary>
                                            <p className="mt-2 text-gray-700">
                                                ได้ครับ หากท่านซื้อตั๋ว Regular แล้วจำเป็นต้องยกเลิกการเข้าร่วม สามารถขอคืนเงินเต็มจำนวนได้ โดยหลังจากที่บัตรถูกคืนแล้ว บัตรนั้นจะกลับเข้าสู่ระบบเพื่อให้คนอื่นซื้อได้อีกครั้ง ท่านสามารถส่งคำขอได้ที่หน้า{" "}
                                                <a href="#" className="text-blue-500 underline">Ticket Refund Request</a>
                                            </p>
                                        </details>
                                        <details open className="group text-lg pb-3">
                                            <summary className="flex items-center cursor-pointer font-semibold text-gray-800">
                                                <span className="mr-2 transition-transform group-open:rotate-90">▶</span>
                                                ขอใบแจ้งหนี้สำหรับการเข้าร่วม WordCamp Bangkok 2025 ได้อย่างไร?
                                            </summary>
                                            <p className="mt-2 text-gray-700">
                                                ท่านสามารถขอใบแจ้งหนี้ได้ โดยใช้แบบฟอร์มที่เราเตรียมไว้ แต่ต้องใช้อีเมลเดียวกับที่ท่านใช้ซื้อบัตร และท่านจะต้องซื้อตั๋วแล้วเท่านั้น ทีมงานจะใช้เวลาประมาณ 5 วันทำการในการออกใบแจ้งหนี้ให้กับท่าน กรุณาส่งคำขอที่หน้า{" "}
                                                <a href="#" className="text-blue-500 hover:text-blue-600 underline">Ticket Invoice Request</a>
                                            </p>
                                        </details>
                                    </div>
                                </div>

                                <div className="bg-neutral-200 p-6 shadow">
                                    <h2 className="text-3xl font-bold text-orange-600 mb-6">Frequently Asked Questions</h2>
                                    <div className="text-black space-y-4">
                                        <details open className="group text-lg pb-3">
                                            <summary className="flex items-center cursor-pointer font-semibold text-gray-800">
                                                <span className="mr-2 transition-transform group-open:rotate-90">▶</span>
                                                How can I pay the ticket fee of WordCamp Bangkok 2025?
                                            </summary>
                                            <p className="mt-5 mb-4">
                                                We accept payments for the WordCamp Bangkok 2025 ticket(s) via credit card or PayPal only.
                                            </p>
                                            <p>
                                                If you face any payment issue, feel free to{" "}
                                                <a href="#" className="text-blue-500 hover:text-blue-600 underline">Contact</a>
                                            </p>
                                        </details>
                                        <details open className="group text-lg pb-3">
                                            <summary className="flex items-center cursor-pointer font-semibold text-gray-800">
                                                <span className="mr-2 transition-transform group-open:rotate-90">▶</span>
                                                Can I transfer the ticket to other person?
                                            </summary>
                                            <p className="mt-2 text-gray-700">
                                                Of course! After you purchased the WordCamp Bangkok 2025 ticket(s), you can decide whether you want to transfer and/or change participant’s information via the link within confirmation email.
                                            </p>
                                            <p>
                                                You don’t need to contact us or ask us for permission.
                                            </p>
                                        </details>
                                        <details open className="group text-lg pb-3">
                                            <summary className="flex items-center cursor-pointer font-semibold text-gray-800">
                                                <span className="mr-2 transition-transform group-open:rotate-90">▶</span>
                                                What are the differences between two types of tickets?
                                            </summary>
                                            <p className="mt-2 text-gray-700">
                                                Both ticket types are identical of each other. However, if you want to support our works, we strongly recommend purchasing microsponsor ticket.
                                            </p>
                                        </details>
                                        <details open className="group text-lg pb-3">
                                            <summary className="flex items-center cursor-pointer font-semibold text-gray-800">
                                                <span className="mr-2 transition-transform group-open:rotate-90">▶</span>
                                                Can I request a refund for my ticket?
                                            </summary>
                                            <p className="mt-2 text-gray-700">
                                                Yes, you can! If you purchased a Regular ticket but cannot attend, you’re eligible for a full refund. Once refunded, your ticket will be released back into the pool for someone else to purchase. Please submit your request via the{" "}
                                                <a href="#" className="text-blue-500 hover:text-blue-600 underline">Ticket Refund Request</a>
                                            </p>
                                        </details>
                                        <details open className="group text-lg pb-3">
                                            <summary className="flex items-center cursor-pointer font-semibold text-gray-800">
                                                <span className="mr-2 transition-transform group-open:rotate-90">▶</span>
                                                How can I request an invoice for WordCamp Bangkok 2025?
                                            </summary>
                                            <p className="mt-2 text-gray-700">
                                                You can request an invoice by completing our form. Please note that you must use the same email address you used to purchase your ticket, and the request is only valid if you have already purchased the ticket. Our team will get back to you within 5 working days. Submit your request via the{" "}
                                                <a href="#" className="text-blue-500 hover:text-blue-600 underline">Ticket Invoice Request</a>
                                            </p>
                                        </details>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-[60px] mb-14">
                                <hr className="border-t border-gray-400 w-1/4" />
                            </div>
                            <section>
                                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                                    การบันทึกภาพในงาน WordCamp Bangkok 2025
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    ภายในงาน WordCamp Bangkok 2025 ทีมงานจะทำการ{" "}
                                    <span className="font-semibold">ถ่ายภาพนิ่งและวิดีโอ</span> เพื่อใช้สำหรับประชาสัมพันธ์
                                    และสร้างชุมชน WordPress ให้แข็งแกร่งขึ้น
                                </p>
                                <p className="text-lg leading-relaxed mt-4">
                                    เราขอถือว่าผู้เข้าร่วมงานทุกคนได้{" "}
                                    <span className="font-semibold text-black bg-yellow-300 px-1">ยินยอม</span>{" "}
                                    ให้ภาพของคุณปรากฏอยู่ในสื่อต่างๆ ที่ถูกบันทึกในระหว่างงานได้ เพื่อร่วมเป็นส่วนหนึ่งในการเก็บรักษาความทรงจำดีๆ ของงานนี้
                                </p>
                            </section>

                            <div className="flex justify-center mt-[60px] mb-14">
                                <hr className="border-t border-gray-400 w-1/4" />
                            </div>
                            <section>
                                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                                    Photography at WordCamp Bangkok 2025
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    Throughout WordCamp Bangkok 2025, our team will be capturing{" "}
                                    <span className="font-semibold">photos and videos</span> for promotional purposes and to help build a stronger WordPress community.
                                </p>
                                <p className="text-lg leading-relaxed mt-4">
                                    By attending the event, all participants grant their{" "}
                                    <span className="font-semibold text-black bg-yellow-300 px-1">consent</span>{" "}
                                    for their image to appear in the media recorded during the event, as part of our effort to preserve the great memories from WordCamp Bangkok.
                                </p>
                            </section>
                        </div>
                        <div className="flex justify-center mt-15">
                            <hr className="border-t border-gray-400 w-full max-w-212" />
                        </div>
                        <div className="text-lg text-white text-center my-12">
                            <h2 className="text-2xl sm:text-3xl font-extrabold">
                                Discover more from WordCamp Bangkok 2025
                            </h2>
                            <p className="text-white mt-2">
                                Subscribe to get the latest posts sent to your email.
                            </p>
                            <div className="mt-6 flex justify-center space-x-2 mb-25">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="px-4 py-2 border bg-gray-800 text-white border-sky-500 w-72 focus:outline-none focus:ring-2 focus:ring-black "
                                />
                                <button className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white transition">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div className="text-center mb-18 max-w-4xl mx-auto">
                            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6">Gold</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
                                <Link href="/sponsor/Automattic" className="block">
                                    <Image
                                        src="/logo-automattic.png"
                                        alt="Automattic"
                                        width={150}
                                        height={48}
                                        className="h-12 w-auto"
                                    />
                                </Link>
                                <Link href="/sponsor/Bluehost" className="block">
                                    <Image
                                        src="/logo-bluehost.png"
                                        alt="Bluehost"
                                        width={150}
                                        height={48}
                                        className="h-12 w-auto"
                                    />
                                </Link>
                                <Link href="/sponsor/Data_Rockie" className="block">
                                    <Image
                                        src="/logo-datarockie.png"
                                        alt="Datarockie"
                                        width={150}
                                        height={48}
                                        className="h-25 w-auto"
                                    />
                                </Link>
                                <Link href="/sponsor/hostingcom" className="block">
                                    <Image
                                        src="/logo-hosting_com.png"
                                        alt="Hosting com"
                                        width={150}
                                        height={48}
                                        className="h-25 w-auto"
                                    />
                                </Link>
                                <Link href="/sponsor/Kinsta" className="block">
                                    <Image
                                        src="/logo-kinsta.png"
                                        alt="Kinsta"
                                        width={150}
                                        height={48}
                                        className="h-22 w-auto"
                                    />
                                </Link>
                                <Link href="/sponsor/Ruk_com_Cloud" className="block">
                                    <Image
                                        src="/logo-rukcom.png"
                                        alt="Rukcom"
                                        width={150}
                                        height={48}
                                        className="h-22 w-auto"
                                    />
                                </Link>
                                <Link href="/sponsor/Woo" className="block">
                                    <Image
                                        src="/logo-commerce.png"
                                        alt="WooCommerce"
                                        width={150}
                                        height={48}
                                        className="h-10 w-auto"
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="text-center mb-18 max-w-4xl mx-auto">
                            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6">Silver</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
                                <Link href="/sponsor/Odds" className="block">
                                    <Image
                                        src="/logo-ood.png"
                                        alt="Automattic"
                                        width={150}
                                        height={48}
                                        className="h-25 w-auto"
                                    />
                                </Link>
                                <Link href="/sponsor/Pronto_Marketing" className="block">
                                    <Image
                                        src="/logo-pronto.png"
                                        alt="pronto"
                                        width={150}
                                        height={48}
                                        className="h-25 w-auto"
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="text-center max-w-4xl mx-auto">
                            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6">Bronze</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
                                <Link href="/sponsor/Elementor" className="block">
                                    <Image
                                        src="/logo-elemento.png"
                                        alt="elemento"
                                        width={150}
                                        height={48}
                                        className="h-25 w-auto"
                                    />
                                </Link>
                                <Link href="/sponsor/Seedwebs" className="block">
                                    <Image
                                        src="/logo-seedwebs.png"
                                        alt="seedwebs"
                                        width={150}
                                        height={48}
                                        className="h-25 w-auto"
                                    />
                                </Link>
                                <Link href="/sponsor/Thnic" className="block">
                                    <Image
                                        src="/logo-thnic.png"
                                        alt="thnic"
                                        width={150}
                                        height={48}
                                        className="h-25 w-auto"
                                    />
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}