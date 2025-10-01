'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { GovCard } from '@/components/ui/GovCard';
import { GovButton } from '@/components/ui/GovButton';
import { MessageSquare, Mail, User, Building, CircleCheck as CheckCircle } from 'lucide-react';

export default function Feedback() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const content = {
    en: {
      title: 'Feedback & Support',
      subtitle: 'Share your feedback or request technical assistance',
      name: 'Full Name',
      namePlaceholder: 'Enter your full name',
      email: 'Email Address',
      emailPlaceholder: 'your.email@example.com',
      department: 'Department / Organization',
      departmentPlaceholder: 'Select your department',
      message: 'Message',
      messagePlaceholder: 'Describe your feedback, issue, or question...',
      submit: 'Submit Feedback',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      thankyou: 'Thank You for Your Feedback!',
      successMessage: 'We have received your message and will respond within 2-3 business days.',
      submitAnother: 'Submit Another Query',
      departments: [
        'Ministry of Tribal Affairs',
        'State Forest Department',
        'District Administration',
        'Gram Sabha / Panchayat',
        'NGO / Civil Society',
        'Academic / Research',
        'Other',
      ],
    },
    hi: {
      title: 'फीडबैक और सहायता',
      subtitle: 'अपना फीडबैक साझा करें या तकनीकी सहायता का अनुरोध करें',
      name: 'पूरा नाम',
      namePlaceholder: 'अपना पूरा नाम दर्ज करें',
      email: 'ईमेल पता',
      emailPlaceholder: 'your.email@example.com',
      department: 'विभाग / संगठन',
      departmentPlaceholder: 'अपना विभाग चुनें',
      message: 'संदेश',
      messagePlaceholder: 'अपना फीडबैक, समस्या या प्रश्न वर्णन करें...',
      submit: 'फीडबैक जमा करें',
      required: 'यह फील्ड आवश्यक है',
      invalidEmail: 'कृपया एक वैध ईमेल पता दर्ज करें',
      thankyou: 'आपके फीडबैक के लिए धन्यवाद!',
      successMessage: 'हमें आपका संदेश प्राप्त हो गया है और हम 2-3 व्यावसायिक दिनों में जवाब देंगे।',
      submitAnother: 'एक और प्रश्न जमा करें',
      departments: [
        'जनजातीय मामलों का मंत्रालय',
        'राज्य वन विभाग',
        'जिला प्रशासन',
        'ग्राम सभा / पंचायत',
        'एनजीओ / नागरिक समाज',
        'शैक्षणिक / अनुसंधान',
        'अन्य',
      ],
    },
  };

  const t = content[language];

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t.required;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.required;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t.invalidEmail;
    }

    if (!formData.department) {
      newErrors.department = t.required;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.required;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', department: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-govBg py-8 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6">
          <GovCard className="text-center">
            <div className="w-24 h-24 bg-govSuccess/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-govSuccess" aria-hidden="true" />
            </div>
            <h1 className="text-3xl font-bold text-primary mb-4">{t.thankyou}</h1>
            <p className="text-lg text-gray-700 mb-4">{t.successMessage}</p>
            <p className="text-sm text-gray-600 mb-8">
              {language === 'en' ? 'Reference ID:' : 'संदर्भ आईडी:'}{' '}
              <span className="font-mono font-semibold">FRA-{Date.now().toString().slice(-8)}</span>
            </p>
            <GovButton variant="primary" size="lg" onClick={handleReset}>
              {t.submitAnother}
            </GovButton>
          </GovCard>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-govBg py-8 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">{t.title}</h1>
          <p className="text-gray-600 text-lg">{t.subtitle}</p>
        </div>

        <GovCard>
          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.name} <span className="text-govError">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder={t.namePlaceholder}
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                      errors.name ? 'border-govError focus:border-govError' : 'border-gray-300 focus:border-primary'
                    }`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                </div>
                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-govError" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.email} <span className="text-govError">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder={t.emailPlaceholder}
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                      errors.email ? 'border-govError focus:border-govError' : 'border-gray-300 focus:border-primary'
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                </div>
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-govError" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.department} <span className="text-govError">*</span>
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" aria-hidden="true" />
                  <select
                    id="department"
                    value={formData.department}
                    onChange={(e) => {
                      setFormData({ ...formData, department: e.target.value });
                      if (errors.department) setErrors({ ...errors, department: '' });
                    }}
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none ${
                      errors.department ? 'border-govError focus:border-govError' : 'border-gray-300 focus:border-primary'
                    }`}
                    aria-invalid={!!errors.department}
                    aria-describedby={errors.department ? 'department-error' : undefined}
                  >
                    <option value="">{t.departmentPlaceholder}</option>
                    {t.departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.department && (
                  <p id="department-error" className="mt-2 text-sm text-govError" role="alert">
                    {errors.department}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.message} <span className="text-govError">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" aria-hidden="true" />
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder={t.messagePlaceholder}
                    rows={6}
                    maxLength={500}
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none ${
                      errors.message ? 'border-govError focus:border-govError' : 'border-gray-300 focus:border-primary'
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                </div>
                <div className="flex justify-between items-center mt-2">
                  {errors.message ? (
                    <p id="message-error" className="text-sm text-govError" role="alert">
                      {errors.message}
                    </p>
                  ) : (
                    <div></div>
                  )}
                  <p className="text-sm text-gray-600">
                    {formData.message.length}/500 {language === 'en' ? 'characters' : 'अक्षर'}
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <GovButton variant="primary" size="lg" type="submit" className="w-full">
                  {t.submit}
                </GovButton>
              </div>
            </div>
          </form>
        </GovCard>

        <div className="mt-6 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg font-bold text-primary mb-4">
            {language === 'en' ? 'Contact Information' : 'संपर्क जानकारी'}
          </h2>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-gray-700">{language === 'en' ? 'Email:' : 'ईमेल:'}</p>
              <p className="text-gray-600">support@tribal.nic.in</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">{language === 'en' ? 'Helpline:' : 'हेल्पलाइन:'}</p>
              <p className="text-gray-600">1800-XXX-XXXX (Toll Free)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">{language === 'en' ? 'Office Hours:' : 'कार्यालय समय:'}</p>
              <p className="text-gray-600">
                {language === 'en' ? 'Monday - Friday, 9:00 AM - 6:00 PM IST' : 'सोमवार - शुक्रवार, सुबह 9:00 बजे - शाम 6:00 बजे IST'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
