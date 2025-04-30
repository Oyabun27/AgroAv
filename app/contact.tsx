'use client';

import { useState, useTransition, useCallback } from "react";
import { FiUser, FiMail, FiMessageSquare, FiFacebook , FiPhone  } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPending, startTransition] = useTransition();
  const [showSuccess, setShowSuccess] = useState(false);

  const fieldLabels: Record<string, string> = {
    name: "Nom",
    email: "Email",
    subject: "Sujet",
    message: "Message"
  };

  const validateField = (name: string, value: string): string => {
    let error = "";
    if (name === "name") {
      if (!value.trim() || value.length < 2 || !/^[A-Za-z\s]+$/.test(value)) {
        error = "Le nom doit contenir au moins 2 caractères et uniquement des lettres";
      }
    } else if (name === "email") {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        error = "Veuillez entrer une adresse email valide";
      }
    } else if (name === "subject") {
      if (value.length > 100) {
        error = "Le sujet ne peut pas dépasser 100 caractères";
      }
    } else if (name === "message") {
      if (value.length < 10) {
        error = "Le message doit contenir au moins 10 caractères";
      } else if (value.length > 500) {
        error = "Le message ne peut pas dépasser 500 caractères";
      }
    }
    return error;
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = Object.keys(formData).reduce((acc: Record<string, string>, field) => {
      const error = validateField(field as keyof typeof formData, formData[field as keyof typeof formData]);
      if (error) acc[field] = error;
      return acc;
    }, {} as Record<string, string>);

    if (Object.keys(newErrors).length === 0) {
      startTransition(async () => {
        try {
          await new Promise(resolve => setTimeout(resolve, 1500));
          console.log("Form submitted:", formData);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 3000);
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className=" py-4">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 text-center py-5"> Nos réseaux sociaux !</h1>
            <ul>
              <li className="flex text-2xl gap-1.5 px-0.5 "> <FiPhone className="text-4xl text-black px-0.5"/> +229 01 97 20 56 57 </li>
              <li className="flex text-2xl gap-1.5 "> 
              <a 
              href="https://wa.me/2290197205657" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            ><FaWhatsapp className=" text-5xl text-green-500" /> +229 01 97 20 56 57  </a>  </li>
              <li className="flex text-2xl gap-1.5">
              <a 
              href="https://www.facebook.com/Agroav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
                 <FiFacebook  className=" text-5xl  text-blue-600" /> Agroav </a> </li>
            </ul>
          </div>
<div>
<h1 className="text-3xl font-extrabold text-gray-900 text-center py-5"> Partenaire(s)</h1>
          <Image
            src="/images/tillou.png"
            alt="Famille heureuse"
            width={500}
            height={200}
            className="rounded-[94px]"
          />
</div>
        
        </div>
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Contactez Nous!</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {(['name', 'email', 'subject', 'message'] as Array<keyof typeof formData>).map((field) => (
            <div key={field}>
              <label className="flex items-center text-sm font-medium text-gray-700">
                {field === 'name' && <FiUser className="mr-2" />}
                {field === 'email' && <FiMail className="mr-2" />}
                {field === 'message' && <FiMessageSquare className="mr-2" />}
                {fieldLabels[field]}
              </label>
              {field === 'message' ? (
                <textarea
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  rows={4}
                  className={`mt-1 block w-full px-3 py-2 border ${errors[field] ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500`}
                  aria-describedby={errors[field] ? `${field}-error` : undefined}
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${errors[field] ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500`}
                  aria-describedby={errors[field] ? `${field}-error` : undefined}
                />
              )}
              {errors[field] && <p id={`${field}-error`} className="mt-1 text-sm text-red-600">{errors[field]}</p>}
            </div>
          ))}
          <button type="submit" disabled={isPending} className="w-full bg-[#2A9D8F] text-white py-2 rounded-md shadow-md hover:bg-green-500 transition disabled:bg-gray-400">
            {isPending ? "En Cours" : "Envoyez Un Message"}
          </button>
        </form>
        {showSuccess && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg" role="alert" aria-live="polite">
            Message Envoyé avec succès!
          </div>
        )}
      </div>
      </div>
      

     
    </section>
  );
}
