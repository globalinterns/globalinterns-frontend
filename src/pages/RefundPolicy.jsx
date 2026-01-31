import React from 'react';
import { Mail } from 'lucide-react';

const RefundPolicy = () => {
    return (
        <div className="pt-24 pb-16 px-6 lg:px-8 bg-white font-sans text-gray-900">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
                <p className="text-gray-500 mb-10 text-sm">Last Updated: January 2026</p>

                <section className="space-y-8 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                        We are committed to ensuring your satisfaction with any product, service, course, or workshop you have purchased from us. Please read the following terms carefully as they govern our refund policy.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Workshops</h2>
                        <p className="p-4 bg-gray-50 border-l-4 border-accent-orange text-gray-700">
                            No refunds or credits will be granted against payments related to workshops.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Courses</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                We do not offer refunds for courses. Please carefully consider your schedule and commitment before enrolling.
                            </li>
                            <li>
                                You may transfer your enrollment to a subsequent cohort. A nominal administrative fee will apply for such transfers.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact us</h2>
                        <p className="mb-4">
                            If you have any questions about our refund policy, please contact us by email at:
                        </p>
                        <a
                            href="mailto:contact@globalinterns.in"
                            className="inline-flex items-center gap-2 text-accent-orange font-semibold hover:text-orange-700 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            contact@globalinterns.in
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RefundPolicy;
