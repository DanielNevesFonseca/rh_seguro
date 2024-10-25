"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef<HTMLFormElement | null>(null);

  const handleEmail = (e: FormEvent) => {
    e.preventDefault();

    if (name === "") {
      return alert("Digite seu nome/empresa.");
    } else if (email === "") {
      return alert("Digite seu email.");
    }

    if (form.current) {
      console.log(form.current);
      emailjs
        .sendForm("service_5tcr338", "template_dy2hns4", form.current, {
          publicKey: "DI0UwfaLBHbYwzfqJ",
        })
        .then(
          () => {
            alert("Mensagem enviada com sucesso!");
          },
          (error) => {
            alert("Erro ao enviar mensagem, tente novamente.");
            console.error("FAILED...", error);
          }
        );
    }

    setMessage("");
    setEmail("");
    setName("");
  };

  return (
    <form ref={form} onSubmit={handleEmail} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label className="font-bold font-raleway" htmlFor="nome">
          Seu Nome/Empresa
        </label>
        <input
          id="nome"
          name="user_name"
          className="p-3 rounded-lg focus:outline-1 focus:outline-secondary-500 border border-secondary-200"
          type="text"
          placeholder="Empresa XYZ"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          value={name}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold font-raleway" htmlFor="email">
          Seu E-mail
        </label>
        <input
          id="email"
          name="user_email"
          className="p-3 rounded-lg focus:outline-1 focus:outline-secondary-500 border border-secondary-200"
          type="email"
          placeholder="Seu melhor email"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          value={email}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold font-raleway" htmlFor="message">
          Descrição
        </label>
        <textarea
          id="message"
          name="message"
          className="p-3 rounded-lg focus:outline-1 focus:outline-secondary-500 border border-secondary-200 resize-none min-h-40"
          placeholder="Conte para a gente um pouco dos desafios que sua empresa está enfrentando..."
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
          value={message}
        ></textarea>
      </div>

      <button
        type="submit"
        className="capitalize border text-white bg-primary-500 border-primary-500 px-6 py-3 rounded text-center"
      >
        Enviar
      </button>
    </form>
  );
};
