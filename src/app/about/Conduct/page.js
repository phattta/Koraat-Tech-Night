// app/about/what-is-wordcamp/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
    title: "What is WordCamp?",
    description: "รู้จักงาน WordCamp และบทบาทของชุมชน WordPress",
};

export default function Page() {
    return (
        <main className="mx-auto text-white max-w-3xl px-4 py-12 leading-8">
            <h1 className="text-5xl font-extrabold text-center mb-10">
                Code of Conduct
            </h1>

            <h2 className="text-3xl font-extrabold mb-4">
                1. Purpose
            </h2>
            <p className="text-lg">WordCamp Bangkok 2025 believes our community should be truly open for everyone. As such, we are committed to providing a friendly, safe and welcoming environment for all, regardless of gender, sexual orientation, disability, ethnicity, religion, age, caste, social class, preferred operating system, programming language, or text editor, among other identifying characteristics.</p>
            <p className="text-lg mt-4">This code of conduct outlines our expectations for participant behavior as well as the consequences for unacceptable behavior.</p>
            <p className="text-lg mt-4">We invite all sponsors, volunteers, speakers, attendees, and other participants to help us realize a safe and positive conference experience for everyone.</p>

            <h2 className="text-3xl font-extrabold mb-4 mt-4">
                2. Open Source Citizenship
            </h2>
            <p className="text-lg">A supplemental goal of this code of conduct is to increase open source citizenship by encouraging participants to recognize and strengthen the relationships between what we do and the community at large.</p>
            <p className="text-lg mt-4">In service of this goal, “WordCamp Bangkok 2025 organizers will be taking nominations for exemplary citizens throughout the event and will recognize select participants after the conference on the website.</p>
            <p className="text-lg mt-4">If you see someone who is making an extra effort to ensure our community is welcoming, friendly, and encourages all participants to contribute to the fullest extent, we want to know.</p>

            <h2
                id="expected-behavior"
                className="text-3xl font-extrabold mt-8 mb-3"
            >
                3. Expected Behavior
            </h2>

            <ul className="list-disc pl-6 text-lg leading-7 space-y-2">
                <li>Be considerate, respectful, and collaborative.</li>
                <li>Refrain from demeaning, discriminatory or harassing behavior and speech.</li>
                <li>
                    Be mindful of your surroundings and of your fellow participants. Alert
                    conference organizers if you notice a dangerous situation or someone in
                    distress.
                </li>
                <li>
                    Participate in an authentic and active way. In doing so, you help to create
                    WordCamp Bangkok 2025 and make it your own.
                </li>
            </ul>

            <h2 className="text-3xl font-extrabold mb-4 mt-4">
                4. Unacceptable Behavior
            </h2>
            <p className="text-lg">Unacceptable behaviors include: intimidating, harassing, abusive, discriminatory, derogatory or demeaning conduct by any attendees of WordCamp Bangkok 2025 and related events. All WordCamp Bangkok 2025 venues may be shared with members of the public; please be respectful to all patrons of these locations.</p>
            <p className="text-lg mt-4">Harassment includes: offensive verbal comments related to gender, sexual orientation, race, religion, disability; inappropriate use of nudity and/or sexual images in public spaces (including presentation slides); deliberate intimidation, stalking or following; harassing photography or recording; sustained disruption of talks or other events; inappropriate physical contact, and unwelcome sexual attention.</p>

            <h2 className="text-3xl font-extrabold mb-4 mt-4">
                5. Consequences Of Unacceptable Behavior
            </h2>
            <p className="text-lg">Unacceptable behavior will not be tolerated whether by other attendees, organizers, venue staff, sponsors, or other patrons of WordCamp Bangkok 2025 venues.</p>
            <p className="text-lg mt-4">Anyone asked to stop unacceptable behavior is expected to comply immediately.</p>
            <p className="text-lg mt-4">If a participant engages in unacceptable behavior, the conference organizers may take any action they deem appropriate, up to and including expulsion from the conference without warning or refund.</p>

            <h2 className="text-3xl font-extrabold mb-4 mt-4">
                6. What To Do If You Witness Or Are Subject To Unacceptable Behavior
            </h2>
            <p className="text-lg">If you are subject to unacceptable behavior, notice that someone else is being subject to unacceptable behavior, or have any other concerns, please notify a conference organizer as soon as possible.</p>
            <p className="text-lg mt-4">The WordCamp Bangkok 2025 team will be available to help participants contact venue security or local law enforcement, to provide escorts, or to otherwise assist those experiencing unacceptable behavior to feel safe for the duration of the conference. Any volunteer can connect you with a conference organizer. You can also come to the special registration desk in the lobby and ask for the organizers.</p>

            <h2 className="text-3xl font-extrabold mb-4 mt-4">
                7. Scope
            </h2>
            <p className="text-lg">We expect all conference participants (sponsors, volunteers, speakers, attendees, and other guests) to abide by this code of conduct at all conference venues and conference-related social events.</p>

            <h2 className="text-3xl font-extrabold mb-4 mt-4">
                8. Contact Information
            </h2>
            <p className="text-lg">Contact info here! Make sure this includes a way to access the organizers during the event.</p>

            <h2 className="text-3xl font-extrabold mb-4 mt-4">
                9. License And Attribution
            </h2>
            <p className="text-lg">This Code of Conduct is a direct swipe from the awesome work of Open Source Bridge, but with our event information substituted. The original is available at Open Source Bridge 2018 [archived] and is released under a Creative Commons Attribution-ShareAlike license.</p>

            <h2 className="text-3xl font-extrabold mb-4 mt-4">
                Statement about Socials or Supplemental Events (where applicable)
            </h2>
            <p className="text-lg">Social and supplemental events are intended to provide networking and additional educational opportunities, as well as an opportunity to unwind after a full WordCamp. They should also be places where attendees can feel safe and secure.</p>
            <p className="text-lg mt-4">We want you to enjoy yourself at these events, and we want you to do so safely. If you experience a Code of Conduct violation, see a violation, are concerned about the well-being, safety or behavior of another attendee, or have a general question (we understand that violations are not always obvious!) contact us immediately by notifying a WordCamp organizer or emailing report@wordcamp.org. For in-person events, if you need help or are unable to comfortably or safely remove yourself from a situation you do not want to be in, organizers will prioritize assisting you immediately and discretely. Some examples are: not feeling well; your transportation arrangements fall through; you are intoxicated, you are alone or with someone you do not trust, you are overwhelmed, you have experienced or witnessed a Code of Conduct violation. Please ask any nearby event volunteer or organizer to help you.</p>
        </main>
    );
}