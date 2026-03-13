import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 md:p-0">
      {/* Main Container */}
      <main className="w-full max-w-7xl min-h-[800px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* ===== LEFT: Marketing Section ===== */}
        <section className="hidden md:flex md:w-1/2 bg-slate-950 p-12 lg:p-20 flex-col justify-between relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none bg-mesh-gradient" />

          <div className="relative z-10">
            {/* Brand Logo */}
            <div className="flex items-center space-x-2 mb-16">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/50">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">
                CampusIQ
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl font-bold marketing-gradient-text leading-tight mb-6">
              Smart Circular Intelligence
            </h1>
            <p className="text-slate-400 text-lg lg:text-xl mb-12 max-w-md">
              Never miss an important campus announcement again.
            </p>

            {/* Feature List */}
            <ul className="space-y-6">
              <li className="flex items-center space-x-4 group">
                <div className="w-10 h-10 flex-shrink-0 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-slate-700/50 transition-colors">
                  <svg
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <span className="text-slate-300 font-medium">
                  AI powered circular search
                </span>
              </li>

              <li className="flex items-center space-x-4 group">
                <div className="w-10 h-10 flex-shrink-0 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-slate-700/50 transition-colors">
                  <svg
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <span className="text-slate-300 font-medium">
                  Ask questions about notices using chat
                </span>
              </li>

              <li className="flex items-center space-x-4 group">
                <div className="w-10 h-10 flex-shrink-0 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-slate-700/50 transition-colors">
                  <svg
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <span className="text-slate-300 font-medium">
                  Smart deadline reminders
                </span>
              </li>

              <li className="flex items-center space-x-4 group">
                <div className="w-10 h-10 flex-shrink-0 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-slate-700/50 transition-colors">
                  <svg
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <span className="text-slate-300 font-medium">
                  Organized circular rooms for departments
                </span>
              </li>

              <li className="flex items-center space-x-4 group">
                <div className="w-10 h-10 flex-shrink-0 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-slate-700/50 transition-colors">
                  <svg
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <span className="text-slate-300 font-medium">
                  Instant updates from administrators
                </span>
              </li>
            </ul>
          </div>

          {/* Footer */}
          <div className="relative z-10 text-slate-500 text-sm">
            © 2025 CampusIQ. Empowering campus communications.
          </div>
        </section>

        {/* ===== RIGHT: Clerk Sign-In Section ===== */}
        <section className="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-white">
          <div className="w-full max-w-md flex flex-col items-center">
            {/* Mobile Logo (shown only on small screens) */}
            <div className="flex items-center space-x-2 mb-8 md:hidden">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base">C</span>
              </div>
              <span className="text-slate-900 font-bold text-xl tracking-tight">
                CampusIQ
              </span>
            </div>

            {/* Clerk SignIn Component */}
            <SignIn
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "shadow-none w-full",
                },
              }}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
