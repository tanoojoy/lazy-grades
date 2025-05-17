// File: pages/404.js
export default function Custom404() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-white text-black dark:bg-gray-900 dark:text-white">
        <h1 className="text-4xl font-bold mb-4">Oops! Page not found 😢</h1>
        <p className="text-lg mb-6">You seem lost... or maybe You're not.</p>
        <p className="text-lg mb-6">If you aren't lost, try another subdomain. Cmon, I'm a student trying stuff out what could possibly be a subdomain i created?</p>
        <a href="/" className="text-indigo-600 underline hover:text-indigo-800">← Go home</a>
      </div>
    );
  }
  