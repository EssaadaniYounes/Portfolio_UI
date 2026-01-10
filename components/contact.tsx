'use client'
import { cn } from "@/lib/utils";
import { useForm, ValidationError } from '@formspree/react';
import FramerWrapper from "./providers/framer-wrapper";
export default function Contact() {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMS_PREE_FORM_ID!);

    return <FramerWrapper>
        <h2 id="contact" className={cn("text-6xl md:text-9xl font-bold uppercase mb-16")}>
            Let{`'`}s <br /> <span className="text-[#b6b4bd33]">Connect</span>
        </h2>
        <form onSubmit={handleSubmit} className={cn("space-y-10 mt-4")}>
            <div className="flex items-start justify-between gap-4">
                <div className="w-full">
                    <label htmlFor="name" className="block text-[#888] my-2">
                        Full name
                    </label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Full name"
                        id="name"
                        className="p-2 w-full rounded border bg-[#b6b4bd33] outline-none border-transparent focus:border-[#334df5ff] mb-2 focus:outline-none"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm text-red-500" />
                </div>
                <div className="w-full">
                    <label htmlFor="email" className="block text-[#888] my-2">
                        Email
                    </label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="p-2 w-full rounded border bg-[#b6b4bd33] outline-none border-transparent focus:border-[#334df5ff] mb-2 focus:outline-none"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-red-500" />
                </div>
            </div>
            <div className="mt-2">
                <label htmlFor="message" className="block text-[#888] mb-2">
                    Message
                </label>
                <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    id="message"
                    className="p-2 w-full rounded border bg-[#b6b4bd33] outline-none border-transparent focus:border-[#334df5ff] mb-2 focus:outline-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-red-500" />
            </div>
            <button disabled={state.submitting} type="submit" className="bg-[#334df5ff] text-white px-4 py-2 rounded w-full block">
                Send
            </button>
            {state.succeeded && <p>Thanks for reaching out!</p>}
            {(state as any).error && <p>{(state as any).error as string}</p>}
        </form>
    </FramerWrapper>
}