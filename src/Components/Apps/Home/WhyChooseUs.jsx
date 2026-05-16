import React from "react";
import { Card } from "@heroui/react";
import { LuShieldCheck, LuMap, LuHeadphones } from "react-icons/lu";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Safe & Secure",
      description:
        "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
      icon: <LuShieldCheck className="size-8 text-cyan-500" />,
    },
    {
      title: "Expert Guides",
      description:
        "Local experts who bring destinations to life with authentic cultural insights.",
      icon: <LuMap className="size-8 text-cyan-500" />,
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock customer service to assist you wherever your journey takes you.",
      icon: <LuHeadphones className="size-8 text-cyan-500" />,
    },
  ];

  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            Why Choose <span className="text-cyan-500 italic">Wanderlust</span>
          </h2>
          <p className="text-gray-500 font-bold tracking-[0.3em] uppercase text-xs">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/3 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/[0.07] hover:border-cyan-500/30 transition-all duration-500 group"
            >
              <div className="space-y-6">
                {/* Icon Wrapper */}
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <div className="group-hover:text-black transition-colors">
                    {feature.icon}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
