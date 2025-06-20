"use client";

import { Mail, PhoneCall, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Oval } from "react-loader-spinner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setResponseMessage(null);

    const { name, email, phone, message } = formData;

    // Basic validation
    if (!name || !email || !phone || !message) {
      setResponseMessage("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setResponseMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setResponseMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-6 py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* FORM SECTION */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Write a Message
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name*"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-100 p-3 rounded border border-gray-300 outline-none text-black placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email*"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-100 p-3 rounded border border-gray-300 outline-none text-black placeholder-gray-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone*"
              value={formData.phone}
              onChange={handleChange}
              className="bg-gray-100 p-3 rounded border border-gray-300 outline-none text-black placeholder-gray-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject..."
              value={formData.subject}
              onChange={handleChange}
              className="bg-gray-100 p-3 rounded border border-gray-300 outline-none text-black placeholder-gray-500"
            />
          </div>

          <textarea
            name="message"
            placeholder="Enter your Message*"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="bg-gray-100 p-3 rounded border border-gray-300 w-full outline-none text-black placeholder-gray-500"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded inline-flex items-center transition-all duration-300 cursor-pointer"
          >
            {loading ? (
              <Oval color="white" strokeWidth={4} height={20} width={20} />
            ) : (
              <>
                <Send size={18} className="mr-2" /> Send Message
              </>
            )}
          </button>

          {responseMessage && (
            <p className="text-md font-medium text-gray-700 mt-4">
              {responseMessage}
            </p>
          )}
        </div>

        {/* CONTACT INFO SECTION */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Let’s work together
          </h2>

          <a
            href="tel:04023240629"
            className="flex items-start gap-4 group cursor-pointer"
          >
            <div className="p-4 rounded bg-black group-hover:bg-yellow-400 transition-all">
              <PhoneCall className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Have any question?</h3>
              <p className="text-sm leading-relaxed">
                Phone: 040-23240629
                <br />
                040-66669067
              </p>
            </div>
          </a>

          <a
            href="mailto:info@taskforceinteriors.com"
            className="flex items-start gap-4 group cursor-pointer"
          >
            <div className="p-4 rounded bg-black group-hover:bg-yellow-400 transition-all">
              <Mail className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Send email</h3>
              <p className="text-sm leading-relaxed">
                info@taskforceinteriors.com
              </p>
            </div>
          </a>

          <a
            href="https://www.google.com/maps/place/3-5-823,+Hyderabad+Business+Centre,+Hyderguda,+Hyderabad,+500029"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 group cursor-pointer"
          >
            <div className="p-4 rounded bg-black group-hover:bg-yellow-400 transition-all">
              <MapPin className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Our Address</h3>
              <p className="text-sm leading-relaxed">
                #3-5-823, Ground Floor,
                <br />
                Hyderabad Business Center,
                <br />
                Hyderguda, Hyderabad - 500029
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
