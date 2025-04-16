import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - Sellby Store',
    description: 'Learn how Sellby Store collects, uses, and protects your personal information. Your privacy is important to us.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="card bg-base-100 shadow-xl p-6">
                <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
                <p className="mb-4 text-lg">
                    At <span className="font-bold">Sellby Store</span>, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information.
                </p>
                <div className="divider"></div>
                <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
                <p className="mb-4 text-base">
                    We collect personal information that you provide to us, such as your name, email address, and payment details, when you make a purchase or sign up for an account.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
                <p className="mb-4 text-base">
                    We use your information to process transactions, provide customer support, and improve our services. We may also use your email address to send promotional offers, which you can opt out of at any time.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">3. Sharing Your Information</h2>
                <p className="mb-4 text-base">
                    We do not sell or rent your personal information to third parties. However, we may share your information with trusted partners to process payments or deliver products.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">4. Data Security</h2>
                <p className="mb-4 text-base">
                    We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">5. Your Rights</h2>
                <p className="mb-4 text-base">
                    You have the right to access, update, or delete your personal information. Please contact us at{' '}
                    <a href="mailto:support@sellby.com" className="text-primary link link-hover">
                        support@sellby.com
                    </a>{' '}
                    for assistance.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">6. Changes to This Policy</h2>
                <p className="mb-4 text-base">
                    We may update this Privacy Policy from time to time. Please review this page periodically for changes.
                </p>
                <div className="divider"></div>
                <p className="mt-6 text-center text-base">
                    If you have any questions about this Privacy Policy, please contact us at{' '}
                    <a href="mailto:support@sellby.com" className="text-primary link link-hover">
                        support@sellby.com
                    </a>.
                </p>
            </div>
        </div>
    );
}