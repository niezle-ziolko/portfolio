import dynamic from "next/dynamic";

const HeaderForm = dynamic(() => import("./header-form"), { ssr: true });

export default function ContactForm() {
  return(
    <div>
      <HeaderForm />
    </div>
  );
};