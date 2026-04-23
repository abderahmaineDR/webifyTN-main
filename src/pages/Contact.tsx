import { useState } from "react";
import { Mail, MapPin, Clock, ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ContactInfoCard from "@/components/ContactInfoCard";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/HeroSection";
import { useToast } from "@/hooks/use-toast";
import useScrollTop from "@/hooks/useScrollTop";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/locales/translations";

const Contact = () => {
  useScrollTop();
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = useTranslations(language);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return t.contact.validation.required;
        if (value.trim().length < 2) return t.contact.validation.nameTooShort;
        break;
      case "email":
        if (!value.trim()) return t.contact.validation.required;
        if (!emailRegex.test(value)) return t.contact.validation.invalidEmail;
        break;
      case "subject":
        if (!value.trim()) return t.contact.validation.required;
        break;
      case "message":
        if (!value.trim()) return t.contact.validation.required;
        if (value.trim().length < 10) return t.contact.validation.messageTooShort;
        break;
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};
    
    newErrors.name = validateField("name", formData.name);
    newErrors.email = validateField("email", formData.email);
    newErrors.subject = validateField("subject", formData.subject);
    newErrors.message = validateField("message", formData.message);
    
    setErrors(newErrors);
    
    // Return true if no errors
    return !Object.values(newErrors).some(error => error !== undefined);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    // Check if EmailJS is loaded
    if (!(window as any).emailjs) {
      toast({
        title: t.contact.toast.errorTitle,
        description: t.contact.toast.serviceError,
      });
      return;
    }
    
    // Prepare form data for EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    
    // Send the email using EmailJS
    (window as any).emailjs.send(
      "service_776n2y8",
      "template_3gnm0go",
      templateParams,
      "C7UNefMImXcsaj89b" // Public Key
    )
    .then((response: any) => {
      if (response.status === 200 || response.text === 'OK') {
        toast({
          title: t.contact.toast.successTitle,
          description: t.contact.toast.successMessage,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      }
    })
    .catch((error: any) => {
      console.error('Error sending email:', error);
      toast({
        title: t.contact.toast.errorTitle,
        description: t.contact.toast.errorMessage,
      });
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors({ ...errors, [name]: error });
    }
  };

  const contactInfo = [
    { 
      icon: Mail, 
      title: t.contact.info.emailTitle, 
      value: t.contact.info.emailValue,
      subtitle: t.contact.info.emailSubtitle
    },
    { 
      icon: MapPin, 
      title: t.contact.info.locationTitle, 
      value: t.contact.info.locationValue,
      subtitle: t.contact.info.locationSubtitle
    },
    { 
      icon: Clock, 
      title: t.contact.info.responseTitle, 
      value: t.contact.info.responseValue,
      subtitle: t.contact.info.responseSubtitle
    },
  ];

  const faqs = [
    {
      question: t.contact.faq.questions.q1,
      answer: t.contact.faq.questions.a1,
    },
    {
      question: t.contact.faq.questions.q2,
      answer: t.contact.faq.questions.a2,
    },
    {
      question: t.contact.faq.questions.q3,
      answer: t.contact.faq.questions.a3,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection className="hero-gradient py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="badge-pill mb-6 inline-block"
            >
              <MessageCircle className="w-4 h-4 inline-block mr-2" />
              {t.contact.hero.badge}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold hero-text-primary mb-6 leading-tight"
            >
              {t.contact.hero.title} <span className="text-gradient">{t.contact.hero.titleHighlight}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed hero-text-secondary"
            >
              {t.contact.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </HeroSection>

      {/* Contact Section */}
      <AnimatedSection className="section-spacing bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="card-elevated p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {t.contact.form.title}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.name.label}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-border'
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                    placeholder={t.contact.form.name.placeholder}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.email.label}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-border'
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                    placeholder={t.contact.form.email.placeholder}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.subject.label}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.subject ? 'border-red-500' : 'border-border'
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                    placeholder={t.contact.form.subject.placeholder}
                    aria-invalid={errors.subject ? 'true' : 'false'}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-sm text-red-500">
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.message.label}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-border'
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none`}
                    placeholder={t.contact.form.message.placeholder}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button type="submit" className="btn-primary w-full">
                  {t.contact.form.submit}
                </button>
              </form>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactInfoCard key={index} {...info} />
                ))}
              </div>

              {/* FAQ Section */}
              <div className="card-elevated p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  {t.contact.faq.title}
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-medium text-foreground">{faq.question}</span>
                        {openFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        )}
                      </button>
                      {openFaq === index && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                          className="mt-3 text-body text-sm"
                        >
                          {faq.answer}
                        </motion.p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Contact;
