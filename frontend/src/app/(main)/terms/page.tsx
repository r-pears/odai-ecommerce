import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Terms of Service - Sellby Store',
    description: 'Read the terms and conditions for using Sellby Store. Learn about your rights and responsibilities as a user.',
};

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="card bg-base-100 shadow-xl p-6">
                <h1 className="text-4xl font-bold text-center mb-6">Terms of Service</h1>
                <p className="mb-4 text-lg">
                    Welcome to <span className="font-bold">Sellby Store</span>! By using our website, you agree to the following terms and conditions.
                </p>
                <div className="divider"></div>
                <h2 className="text-2xl font-semibold mt-6 mb-4">1. General Terms</h2>
                <p className="mb-4 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">2. Privacy Policy</h2>
                <p className="mb-4 text-base">
                    We value your privacy. Please review our{' '}
                    <a href="/terms/privacy" className="text-primary link link-hover">
                        Privacy Policy
                    </a>{' '}
                    for more details.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">3. Payment and Refunds</h2>
                <p className="mb-4 text-base">
                    All payments are processed securely. Refunds are subject to our refund policy.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">4. Changes to Terms</h2>
                <p className="mb-4 text-base">
                    We reserve the right to update these terms at any time. Please check this page periodically for updates.
                </p>
                <div className="divider"></div>
                <p className="mt-6 text-center text-base">
                    If you have any questions about these terms, please contact us at{' '}
                    <a href="mailto:support@sellby.com" className="text-primary link link-hover">
                        support@sellby.com
                    </a>.
                </p>
            </div>
        </div>
    );
}