"use client";
import Form from "next/form";
import { useState } from "react";
import dynamic from "next/dynamic";

import { Input, SubmitButton } from "lib/form";

const HeaderForm = dynamic(() => import("./header-form"), { ssr: true });

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="u1 u22 h-full max-w-[512px]">
      <HeaderForm />

      <Form className="flex mt-4 flex-wrap">
        <Input
          id="name"
          as="input"
          name="name"
          type="text"
          label="Imię*"
          value={form.name}
          onChange={handleChange}
          required
        />

        <Input
          id="email"
          as="input"
          name="email"
          type="email"
          label="Adres e-mail*"
          value={form.email}
          onChange={handleChange}
          required
        />

        <Input
          id="phone"
          as="input"
          name="phone"
          type="tel"
          label="Numer telefonu komórkowego"
          value={form.phone}
          onChange={handleChange}
        />

        <Input
          id="message"
          as="textarea"
          name="message"
          label="Opis projektu, nazwa firmy, inne przydatne informacje*"
          value={form.message}
          onChange={handleChange}
          required
        />

        <SubmitButton />
      </Form>
    </div>
  );
};