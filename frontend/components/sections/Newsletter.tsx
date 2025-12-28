"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Django API
    console.log("Newsletter subscription:", email);
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Stay Connected
        </h2>
        <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter to stay informed about parliamentary work, initiatives, and opportunities to get involved.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 rounded-md border border-white/20 bg-white/10 text-white placeholder-neutral-300 focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <button
              type="submit"
              className="btn btn-primary whitespace-nowrap"
            >
              {submitted ? "Subscribed!" : "Subscribe"}
            </button>
          </div>
        </form>

        <p className="text-sm text-neutral-300 mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

