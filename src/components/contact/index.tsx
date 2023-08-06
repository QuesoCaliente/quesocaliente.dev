import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  return (
    <section className="bg-[#0f0f13]">
      <div className="mx-10 flex flex-col items-center justify-center gap-3 py-20 lg:mx-auto">
        <h2 className="my-10 text-center text-2xl font-normal text-slate-100 md:text-3xl lg:text-4xl">
          Contacto
        </h2>
        <form
          className="mx-auto flex w-full flex-col items-center justify-center gap-3 text-slate-100"
          method="POST"
          action="https://formspree.io/f/xkneaqbn"
        >
          <InputGroup
            id="email"
            label={"Correo electrónico"}
            placeholder="admin@quesocaliente.dev"
            isRequired
          />
          <InputGroup
            id="subject"
            label={"Asunto"}
            placeholder="what is your message about?"
            isRequired
          />
          <InputGroup
            id="message"
            label={"Mensaje"}
            placeholder="Your message"
            isRequired
            textarea
          />
          <button
            disabled
            type="submit"
            className={`transition-color disabled:cursor-not-allowed disabled:text-gray-300 my-4 w-full max-w-2xl rounded-lg border-2 border-slate-100 bg-slate-100 py-2 px-5 text-gray-700`}
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

interface IInputGroup {
  label: string;
  id: string;
  isRequired?: boolean;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  textarea?: boolean;
}

const InputGroup = ({
  label,
  id,
  isRequired,
  placeholder,
  type = "text",
  textarea,
}: IInputGroup) => {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-2">
      <label htmlFor={id}>
        {label}
        {isRequired && "*"}
      </label>
      {!textarea ? (
        <input
          autoComplete="off"
          type={type}
          className="w-full max-w-2xl rounded-lg py-2 px-4 text-gray-600 outline-none"
          id={id}
          required={isRequired}
          placeholder={placeholder && placeholder}
          name={id}
        />
      ) : (
        <textarea
          className="w-full max-w-2xl resize-none rounded-lg text-gray-600 py-2 px-4 outline-none"
          id={id}
          placeholder={placeholder}
          required={isRequired}
          name={id}
        ></textarea>
      )}
    </div>
  );
};
