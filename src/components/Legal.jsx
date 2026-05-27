import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LegalLayout = ({ title, children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-linen pt-40 pb-20 px-8 md:px-20"
        >
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-12 tracking-tight">
                    {title}
                </h1>
                <div className="prose prose-neutral prose-lg text-charcoal/80 font-sans leading-relaxed space-y-8">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

export const PrivacyPolicy = () => (
    <LegalLayout title="Privacy Policy">
        <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal/40 mb-4">Introduction</h2>
            <p>
                At Bravo Design Agency, we respect your privacy and are committed to protecting your personal data in compliance with the Protection of Personal Information Act (POPIA) of South Africa.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal/40 mb-4">Data We Collect</h2>
            <p>
                We only collect minimal personal information necessary to facilitate communication and project management:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Name and Company Name</li>
                <li>Email Address</li>
                <li>Project details and budget preferences provided via our contact form.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal/40 mb-4">How We Store It</h2>
            <p>
                Your data is stored securely using Firebase (Google Cloud Infrastructure), employing industry-standard encryption and access controls to ensure your information remains confidential.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal/40 mb-4">Our Commitment</h2>
            <p>
                We never sell, rent, or trade your personal information with third parties. Data is used solely for the purpose of responding to your inquiries and providing our strategic design services.
            </p>
        </section>
    </LegalLayout>
);

export const TermsAndConditions = () => (
    <LegalLayout title="Terms & Conditions">
        <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal/40 mb-4">Project Commencement</h2>
            <p>
                To secure a project slot and commence work, a <strong>50% non-refundable deposit</strong> is required. Work will only begin once the deposit has cleared in our account.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal/40 mb-4">Revisions</h2>
            <p>
                Quality takes focus. Each project phase includes up to <strong>two (2) rounds of revisions</strong>. Additional revisions beyond this scope will be billed at our standard hourly rate.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal/40 mb-4">Copyright & Ownership</h2>
            <p>
                Ownership and copyright of final deliverables are transferred to the client only upon <strong>receipt of final payment</strong> in full. We reserve the right to display the work in our professional portfolio.
            </p>
        </section>
    </LegalLayout>
);

export const RefundPolicy = () => (
    <LegalLayout title="Refund Policy">
        <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal/40 mb-4">Deposit Policy</h2>
            <p>
                Due to the creative nature of our work and the administrative time allocated to project kickoff, <strong>all deposits are non-refundable</strong> once work has commenced or a project slot has been reserved.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal/40 mb-4">Service Satisfaction</h2>
            <p>
                We are committed to excellence. If you are unsatisfied with the direction of a project, we encourage open dialogue during the revision phases to align the creative output with your strategic goals.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal/40 mb-4">Cancellation</h2>
            <p>
                Should a project be cancelled by the client before completion, the client will be liable for work completed up to the date of cancellation, in addition to the non-refundable deposit.
            </p>
        </section>
    </LegalLayout>
);
