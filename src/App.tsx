import { Award, BarChart3, CheckCircle, Facebook, Globe, Instagram, Mail, Phone, TrendingUp, Users, X } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-8 h-8 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-900">نجاح للاستشارات</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">خدماتنا</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">من نحن</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">تواصل معنا</a>
            </div>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              احجز استشارة مجانية
            </button>
          </div>
        </div>
      </nav>

      <section className="relative bg-gradient-to-bl from-emerald-50 to-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                نحول أفكارك إلى نجاحات حقيقية
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                نساعد الشركات والمؤسسات على تحقيق أهدافها الاستراتيجية من خلال حلول استشارية مبتكرة ومخصصة
              </p>
              <div className="flex gap-4">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all text-lg font-semibold shadow-lg hover:shadow-xl">
                  ابدأ مشروعك الآن
                </button>
                <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors text-lg font-semibold border-2 border-emerald-600">
                  تعرف علينا
                </button>
              </div>
              <div className="flex gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold text-emerald-600">+500</div>
                  <div className="text-gray-600">مشروع ناجح</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-600">+300</div>
                  <div className="text-gray-600">عميل راضٍ</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-600">15+</div>
                  <div className="text-gray-600">سنة خبرة</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-100 p-4 rounded-xl">
                      <TrendingUp className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">نمو الإيرادات</div>
                      <div className="text-2xl font-bold text-gray-900">+250%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-4 rounded-xl">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">كفاءة الفريق</div>
                      <div className="text-2xl font-bold text-gray-900">+180%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-100 p-4 rounded-xl">
                      <Award className="w-8 h-8 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">رضا العملاء</div>
                      <div className="text-2xl font-bold text-gray-900">98%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">خدماتنا الاستشارية</h2>
            <p className="text-xl text-gray-600">حلول شاملة لنمو أعمالك وتطويرها</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: "الاستشارات الاستراتيجية",
                description: "نساعدك على وضع خطط استراتيجية واضحة لتحقيق أهدافك طويلة المدى",
                color: "emerald"
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "تطوير الأعمال",
                description: "نعمل على تحسين العمليات وزيادة الكفاءة التشغيلية لشركتك",
                color: "blue"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "إدارة الموارد البشرية",
                description: "استشارات شاملة لبناء فرق عمل قوية وفعالة",
                color: "amber"
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "التوسع والنمو",
                description: "نرشدك في خطوات التوسع ودخول أسواق جديدة بثقة",
                color: "rose"
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "الجودة والامتياز",
                description: "تطبيق معايير الجودة العالمية في جميع جوانب عملك",
                color: "violet"
              },
              {
                icon: <CheckCircle className="w-12 h-12" />,
                title: "إدارة المشاريع",
                description: "نضمن تنفيذ مشاريعك في الوقت المحدد وبأعلى جودة",
                color: "teal"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className={`text-${service.color}-600 mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">لماذا نجاح للاستشارات؟</h2>
              <p className="text-xl mb-8 leading-relaxed text-emerald-50">
                نحن فريق من الخبراء المتخصصين في مجال استشارات الأعمال، نجمع بين الخبرة العميقة والفهم الشامل للسوق المحلي والعالمي
              </p>
              <div className="space-y-4">
                {[
                  "خبرة تزيد عن 15 عامًا في السوق",
                  "فريق من الاستشاريين المعتمدين دوليًا",
                  "نهج مخصص لكل عميل حسب احتياجاته",
                  "نتائج ملموسة ومضمونة",
                  "دعم مستمر بعد انتهاء المشروع"
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-300 flex-shrink-0" />
                    <span className="text-lg">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 space-y-6">
              <div className="bg-white text-gray-900 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-2xl font-bold text-emerald-600">
                    م.أ
                  </div>
                  <div>
                    <div className="font-bold">محمد أحمد</div>
                    <div className="text-sm text-gray-500">مدير تنفيذي</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "تعاملنا مع نجاح للاستشارات كان نقطة تحول لشركتنا. ساعدونا في زيادة إيراداتنا بنسبة 200% في أقل من سنة"
                </p>
              </div>
              <div className="bg-white text-gray-900 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600">
                    أ.ع
                  </div>
                  <div>
                    <div className="font-bold">أحمد علي</div>
                    <div className="text-sm text-gray-500">مدير عام</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "فريق محترف وملتزم. أعطونا حلولًا عملية وقابلة للتطبيق ساعدتنا على تحسين كفاءة فريقنا بشكل كبير"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">تواصل معنا</h2>
            <p className="text-xl text-gray-600">دعنا نساعدك في تحقيق أهدافك</p>
          </div>
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">الاسم الكامل</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  placeholder="+966 XX XXX XXXX"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">الخدمة المطلوبة</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all">
                  <option>اختر الخدمة</option>
                  <option>الاستشارات الاستراتيجية</option>
                  <option>تطوير الأعمال</option>
                  <option>إدارة الموارد البشرية</option>
                  <option>التوسع والنمو</option>
                  <option>أخرى</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">رسالتك</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                  placeholder="أخبرنا كيف يمكننا مساعدتك..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-4 rounded-lg hover:bg-emerald-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                إرسال الطلب
              </button>
            </form>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">اتصل بنا</div>
                  <div className="font-semibold">+966 50 123 4567</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">راسلنا</div>
                  <div className="font-semibold">info@najah.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Globe className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">موقعنا</div>
                  <div className="font-semibold">الرياض، السعودية</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-8 h-8 text-emerald-500" />
                <span className="text-xl font-bold">نجاح للاستشارات</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                شريكك الموثوق في رحلة النجاح والتميز
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-emerald-500 transition-colors">خدماتنا</a></li>
                <li><a href="#about" className="hover:text-emerald-500 transition-colors">من نحن</a></li>
                <li><a href="#contact" className="hover:text-emerald-500 transition-colors">تواصل معنا</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">خدماتنا</h3>
              <ul className="space-y-2 text-gray-400">
                <li>الاستشارات الاستراتيجية</li>
                <li>تطوير الأعمال</li>
                <li>إدارة الموارد البشرية</li>
                <li>التوسع والنمو</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">تابعنا</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors"
                  aria-label="X"
                >
                  <X className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 نجاح للاستشارات. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
