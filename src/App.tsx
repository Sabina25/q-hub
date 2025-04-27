import { ArrowRight, Heart, Book, Users, MapPin, Phone, Mail, Youtube, Instagram } from 'lucide-react';
import { Logo } from './components/Logo';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#40B5AD]/30 via-[#2A6F97]/20 to-[#1A1A1A]/10">
      <div className="container mx-auto px-4 py-16">
        <nav className="flex items-center justify-between mb-16 animate-slide-in">
          <Logo />
          <div className="flex items-center gap-6">
            <a href="#goals" className="text-gray-800 hover:text-[#40B5AD] transition-colors">Goals</a>
            <a href="#about" className="text-gray-800 hover:text-[#40B5AD] transition-colors">About</a>
            <a href="#contact" className="text-gray-800 hover:text-[#40B5AD] transition-colors">Contact</a>
            <button className="bg-[#40B5AD] text-white px-4 py-2 rounded-lg hover:bg-[#3AA399] transition-colors">
              Get Started
            </button>
          </div>
        </nav>

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-float">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
            From the Heart of Crimea to the Soul of Ukraine —{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#40B5AD] to-[#2A6F97]">
              Growing Stronger Together
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl">
            Join us in building a resilient civil society rooted in freedom, dignity, and unity.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#40B5AD] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#3AA399] transition-colors animate-pulse-slow">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-[#40B5AD] text-gray-800 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#40B5AD]/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div id="goals" className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {[
            {
              icon: <Heart className="w-6 h-6 text-[#40B5AD]" />,
              title: "National Identity",
              description: "Strengthen national identity and civic values among the youth of Crimea and Ukraine."
            },
            {
              icon: <Book className="w-6 h-6 text-[#40B5AD]" />,
              title: "Growth & Education",
              description: "Promote personal, cultural, and professional growth through education, collaboration, and community initiatives."
            },
            {
              icon: <Users className="w-6 h-6 text-[#40B5AD]" />,
              title: "Community Empowerment",
              description: "Empower communities to build a resilient and sustainable civil society rooted in freedom, dignity, and unity."
            }
          ].map((goal, index) => (
            <div 
              key={goal.title}
              className="bg-white/60 backdrop-blur-lg p-6 rounded-xl hover:transform hover:scale-105 transition-transform duration-300 animate-scale-in shadow-lg"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-[#40B5AD]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {goal.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{goal.title}</h3>
              <p className="text-gray-700">
                {goal.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center animate-float" style={{ animationDelay: '200ms' }}>
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Community Collaboration"
            className="rounded-xl shadow-2xl"
          />
        </div>

        <div id="about" className="mt-24 bg-white/60 backdrop-blur-lg rounded-2xl p-8 md:p-12 animate-scale-in shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">About Q-Hub</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "English",
                content: [
                  "Q-Hub is a non-governmental organization dedicated to strengthening civil society, fostering national identity, and encouraging cultural, professional, and personal development.",
                  "We work with residents of Crimea, platform members, and citizens across Ukraine to support continuous self-growth and community empowerment."
                ]
              },
              {
                title: "Українською",
                content: [
                  "Q-Hub — неурядова організація, що працює над зміцненням громадянського суспільства, утвердженням національної самосвідомості та підтримкою культурного, професійного й особистісного розвитку.",
                  "Ми об'єднуємо резидентів платформи, мешканців Криму та громадян України для постійного самовдосконалення та розвитку спільнот."
                ]
              },
              {
                title: "Qırımtatarca",
                content: [
                  "Q-Hub — cemiyetniñ quvetlenmesine, milliy kimlikniñ mustahkemlenmesine ve medeniy, ihtisasiy hem şahsiy ösüvge yardim etken bir qeyri-hükümet teşkilâtıdır.",
                  "Biz platforma rezidentlerini, Qırım ahalisi ve Ukraina vatandaşlarını birleştirip, daimiy inkişaf ve cemaatni quvetlendirmege çalışamız."
                ]
              }
            ].map((section, index) => (
              <div 
                key={section.title}
                className="bg-white/40 p-6 rounded-xl hover:bg-white/60 transition-colors shadow-md"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{section.title}</h3>
                {section.content.map((paragraph, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mt-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div id="contact" className="mt-24 bg-white/60 backdrop-blur-lg rounded-2xl p-8 md:p-12 animate-scale-in shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  icon: <MapPin className="w-6 h-6 text-[#40B5AD]" />,
                  title: "Address",
                  content: "ул. Омельяновича-Павленко, 9, Kyiv, Ukraine"
                },
                {
                  icon: <Phone className="w-6 h-6 text-[#40B5AD]" />,
                  title: "Mobile",
                  content: "+380 95 681 2469",
                  href: "tel:+380956812469"
                },
                {
                  icon: <Mail className="w-6 h-6 text-[#40B5AD]" />,
                  title: "Email",
                  content: "hub.qirim@gmail.com",
                  href: "mailto:hub.qirim@gmail.com"
                }
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className="flex items-start gap-4 hover:transform hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-[#40B5AD]/10 p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold mb-1 text-gray-900">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-gray-700 hover:text-[#40B5AD] transition-colors">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-700">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {[
                {
                  icon: <Youtube className="w-6 h-6 text-[#40B5AD]" />,
                  title: "YouTube",
                  content: "Visit our channel",
                  href: "https://www.youtube.com/channel/UCSIXH6hN17r5M4eK0KR2pAw"
                },
                {
                  icon: <Instagram className="w-6 h-6 text-[#40B5AD]" />,
                  title: "Instagram",
                  content: "@q_hub",
                  href: "https://instagram.com/q_hub"
                }
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className="flex items-start gap-4 hover:transform hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: `${(index + 3) * 200}ms` }}
                >
                  <div className="bg-[#40B5AD]/10 p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold mb-1 text-gray-900">{item.title}</h3>
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#40B5AD] transition-colors"
                    >
                      {item.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;