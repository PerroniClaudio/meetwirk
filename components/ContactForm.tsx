"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {};

interface FormData {
  business: string;
  email: string;
  message: string;
}

function ContactForm({}: Props) {
  const [formData, setFormData] = useState<FormData>({
    business: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const request = fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const response = await request;
    const data = await response.json();
  };

  return (
    <section className="w-full bg-gradient-to-b from-torch-800 to-torch-500 p-8 lg:p-16">
      <div className="container mx-auto px-4 flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-bold drop-shadow-md text-center">
          Entra in contatto con i nostri esperti
        </h1>
        <h3 className="text-2xl font-semibold text-center">
          Scegli la migliore qualità audio con le nostre cuffie e i dispositivi
          per sale riunioni.{" "}
        </h3>
        <h3 className="text-xl font-semibold text-center">
          Compila il nostro form di contatto per maggiori informazioni e preventivi.
        </h3>
        <Dialog>
          <DialogTrigger id="contact-us" className="bg-neutral-800 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-neutral-900 transition-colors duration-300 text-4xl">
            Contattaci
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contattaci</DialogTitle>
              <DialogDescription>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => handleSubmit(e)}>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="business">Nome</label>
                    <input
                      type="text"
                      name="business"
                      id="business"
                      className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none"
                      value={formData.business}
                      onChange={(e) => handleChange(e)}
                      placeholder="Mario rossi"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="business">Email aziendale</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none"
                      value={formData.email}
                      onChange={(e) => handleChange(e)}
                      placeholder="nome@azienda.com"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message">Ulteriori informazioni</label>
                    <textarea
                      name="message"
                      id="message"
                      className="block w-full h-44 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none"
                      value={formData.message}
                      onChange={(e) => handleChangeTextarea(e)}
                      required></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-neutral-900 hover:bg-neutral-700 w-full p-4 text-primary-400 rounded font-bold text-gray-50">
                    Contattaci
                  </button>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

export default ContactForm;
