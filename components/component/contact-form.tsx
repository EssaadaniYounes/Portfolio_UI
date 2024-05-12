import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import EmailContent from "../partials/EmailContent";
import { SubmitButton } from "../partials/SubmitButton";

export function ContactForm() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const from = formData.get("email");
    const message = formData.get("message");
    console.log({
      name,
      from,
      message,
      new: name!.toString().split(" ").join("_"),
    });
    if (!name || !from || !message) return;
    console.log("Sending");
    const res = await resend.emails.send({
      from: `${name.toString().split(" ").join("_")}@resend.dev`,
      to: "essaadani.yo@gmail.com",
      subject: "Contact From Portfolio",
      react: (
        <EmailContent
          name={name.toString()}
          from={from.toString()}
          message={message.toString()}
        />
      ),
    });
    console.log(res);
  }
  return (
    <section
      id="contact"
      className="w-full max-w-3xl mx-auto py-12 md:py-16 lg:py-20"
    >
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl  text-gray-700 dark:text-gray-200  ">
            Get in Touch
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Have a question or want to work together? Fill out the form below
            and I{"'"}ll get back to you as soon as possible.
          </p>
        </div>
        <form action={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="space-y-1">
              <Label className="dark:text-gray-300" htmlFor="name">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                className="dark:bg-gray-950 dark:placeholder:text-gray-300 dark:text-gray-300"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="space-y-1">
              <Label className="dark:text-gray-300" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                className="dark:bg-gray-950 dark:placeholder:text-gray-300 dark:text-gray-300"
                placeholder="john.Do@hotmail.fr"
                type="email"
              />
            </div>
          </div>
          <div className="space-y-1">
            <Label className="dark:text-gray-300" htmlFor="message">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              className="dark:bg-gray-950 dark:placeholder:text-gray-300 dark:text-gray-300"
              placeholder="Your message..."
              rows={5}
            />
          </div>
          <SubmitButton label="Submit" />
        </form>
      </div>
    </section>
  );
}
