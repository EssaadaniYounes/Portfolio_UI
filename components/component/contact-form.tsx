import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const from = formData.get("email");
    const message = formData.get("message");
    if (!name || !from || !message) return;
    console.log("Sending");
    const res = await resend.emails.send({
      from: from.toString(),
      to: "essaadani.yo@gmail.com",
      subject: "Contact From Portfolio",
      html: `<h1>${name.toString()}</h1><p>${message.toString()}</p>`,
    });
  }
  return (
    <section className="w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Have a question or want to work together? Fill out the form below
            and we{"'"}ll get back to you as soon as possible.
          </p>
        </div>
        <form action={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="example@email.com" type="email" />
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message..." rows={5} />
          </div>
          <Button className="w-full sm:w-auto" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
