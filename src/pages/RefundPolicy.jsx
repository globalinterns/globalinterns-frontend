import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="pt-24 pb-16 px-6 lg:px-8 bg-white font-sans text-gray-900">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
                <p className="text-gray-500 mb-10 text-sm">Last Updated: January 2026</p>

                <section className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                        Thank you for purchasing our programs at Global Interns. We strive to provide the best learning experience possible.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Refund Eligibility</h2>
                    <p className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 font-medium">
                        Refunds are ONLY applicable if the classes for the registered program are NOT conducted by Global Interns.
                    </p>
                    <p>
                        If the classes have commenced or if the student has accessed the learning materials, no refund request will be entertained.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Refund Process</h2>
                    <p>
                        If you are eligible for a refund under the condition stated above (classes not conducted), please contact our support team at <a href="mailto:support@globalinterns.com" className="text-blue-600 underline">support@globalinterns.com</a> with your transaction details.
                    </p>
                    <p>
                        Once your request is received and inspected, we will send you an email to notify you of the approval or rejection of your refund.
                        If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Late or Missing Refunds</h2>
                    <p>
                        If you haven’t received a refund yet, first check your bank account again.
                        Then contact your credit card company, it may take some time before your refund is officially posted.
                        Next, contact your bank. There is often some processing time before a refund is posted.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default RefundPolicy;
