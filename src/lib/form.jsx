import { useState } from "react";
import { useFormStatus } from "react-dom";

import Icon from "./icon";

export function Input({
  label,
  id,
  value,
  onChange,
  name,
  type = "text",
  as = "input",
  rows = 2,
  required = false
}) {
  const [touched, setTouched] = useState(false);

  const hasValue = !!value;
  const isTextarea = as === "textarea";
  const InputComponent = isTextarea ? "textarea" : "input";

  const isFloating = hasValue;
  const showError = touched && required && !hasValue;

  const error = 15;

  return (
    <div className="w-full mb-8">
      <div className="relative">
        <InputComponent
          id={id}
          name={name}
          required={required}
          type={!isTextarea ? type : undefined}
          value={value}
          placeholder=""
          className={`
            peer w-full 
            ${showError ? "border-[#f33] bg-[rgba(255,51,51,0.1)]" : "border-font-third"}
          `}
          onChange={onChange}
          onBlur={() => setTouched(true)}
          rows={isTextarea ? rows : undefined}
        />

        <label
          htmlFor={id}
          className={`
            absolute
            left-4
            duration-200
            transition-all
            pointer-events-none
            ${showError ? "text-[#f33]" : ""}
            ${
              isFloating
                ? "top-1 text-sm -translate-y-0"
                : isTextarea
                  ? "top-4 text-base -translate-y-0"
                  : "top-1/2 -translate-y-1/2 text-base"
            }
            peer-focus:top-1
            peer-focus:text-sm
            peer-focus:-translate-y-0
          `}
        >
          {label}
        </label>
      </div>

      {showError && (
        <span className="u1 mt-1 px-1 gap-1 text-sm text-[#f33] absolute">
          <Icon
            width={error}
            height={error}
            aria-hidden="true"
            src="/assets/icons/39vboDrIDC.svg"
          />

          Wprowadź {label}
        </span>
      )}
    </div>
  );
};

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="px-4 py-2 w-full rounded-lg"
    >
      {pending ? "Wysyłanie..." : "Prześlij formularz"}
    </button>
  );
};