import { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_0e9c8ms", // from EmailJS dashboard
        "template_sgivwu9", // from EmailJS dashboard
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "IO3HBRrAY8IExl31t" 
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dmohapatra291@gmail.com",
      href: "mailto:dmohapatra291@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+91) 7064074291",
      href: "tel:(+91) 7064074291",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Odisha, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/debesh-26",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/debesh-mohapatra-650070205/",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/DebeshMohapatr7",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <section id="contact" className="py-section bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's discuss your next project or explore opportunities to work
              together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
                <p className="text-muted-foreground mb-6">
                  Have a project in mind? I'd love to hear about it. Send me a
                  message and let's start a conversation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-muted/20 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-muted/20 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-muted/20 border-border focus:border-primary"
                />

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-muted/20 border-border focus:border-primary resize-none"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-3 rounded-lg-custom glow transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Contact Information
                </h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out through any of the following channels.
                  I'm always open to discussing new opportunities.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center p-4 card-glass rounded-lg-custom hover:shadow-glow transition-all duration-300 group"
                  >
                    <info.icon
                      size={24}
                      className="text-primary mr-4 group-hover:scale-110 transition-transform"
                    />
                    <div>
                      <div className="font-medium">{info.label}</div>
                      <div className="text-muted-foreground text-sm">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 card-glass rounded-full hover:shadow-glow transition-all duration-300 group ${social.color}`}
                    >
                      <social.icon
                        size={24}
                        className="group-hover:scale-110 transition-transform"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <div className="card-glass p-6 rounded-lg-custom">
                  <h4 className="text-lg font-semibold mb-2">
                    Available for freelance
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    I'm currently available for freelance projects and
                    consulting work. Let's build something amazing together!
                  </p>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm text-green-400">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
