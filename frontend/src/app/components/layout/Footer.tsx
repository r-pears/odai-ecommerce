// src/components/layout/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-base-200 text-base-content border-t border-base-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Customer Service */}
            <div>
              <h2 className="footer-title">Customer Service</h2>
              <ul className="space-y-2">
                <li><a className="link link-hover">Contact Us</a></li>
                <li><a className="link link-hover">Shipping Policy</a></li>
                <li><a className="link link-hover">Returns & Exchanges</a></li>
                <li><a className="link link-hover">FAQs</a></li>
                <li><a className="link link-hover">Track Order</a></li>
              </ul>
            </div>
  
            {/* Company */}
            <div>
              <h2 className="footer-title">Company</h2>
              <ul className="space-y-2">
                <li><a className="link link-hover">About Us</a></li>
                <li><a className="link link-hover">Careers</a></li>
                <li><a className="link link-hover">Our Stores</a></li>
                <li><a className="link link-hover">Blog</a></li>
                <li><a className="link link-hover">Affiliate Program</a></li>
              </ul>
            </div>
  
            {/* Legal */}
            <div>
              <h2 className="footer-title">Legal</h2>
              <ul className="space-y-2">
                <li><a className="link link-hover" href="/terms">Terms of Service</a></li>
                <li><a className="link link-hover" href="/terms/privacy">Privacy Policy</a></li>
                <li><a className="link link-hover">Cookie Policy</a></li>
                <li><a className="link link-hover">Accessibility</a></li>
              </ul>
            </div>
  
            {/* Newsletter */}
            <div>
              <h2 className="footer-title">Stay Updated</h2>
              <form className="form-control">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="input input-bordered w-full pr-16" 
                  />
                  <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                    Subscribe
                  </button>
                </div>
              </form>
              
              <div className="mt-4">
                <h3 className="font-medium mb-2">Secure Payments</h3>
                <div className="flex gap-3">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
  
          <div className="border-t border-base-300 mt-8 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex gap-4">
                <a className="btn btn-ghost btn-circle">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a className="btn btn-ghost btn-circle">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                  </svg>
                </a>
                <a className="btn btn-ghost btn-circle">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
  
              <div className="text-center md:text-left">
                <p className="text-sm">
                  © {new Date().getFullYear()} Your Store Name. All rights reserved.
                </p>
                <p className="text-xs mt-1">
                  Designed with ❤️ by Your Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }