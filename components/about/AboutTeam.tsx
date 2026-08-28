import Image from "next/image";
import { Mail } from "lucide-react";
import { FaLinkedinIn as Linkedin } from "react-icons/fa";


export default function AboutTeam() {
  const team = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Founder & Director",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
      bio: "20+ years in cardiovascular medical devices distribution",
    },
    {
      name: "Priya Patel",
      role: "Operations Head",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
      bio: "Expert in supply chain management & logistics",
    },
    {
      name: "Amit Kumar",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80",
      bio: "Specialized in interventional cardiology devices",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Our Leadership
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to advancing cardiovascular care across India.
          </p>
          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-sm font-medium text-blue-600 mb-2">{member.role}</p>
                <p className="text-sm text-slate-500 mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-200 text-slate-600 hover:bg-blue-700 hover:text-white transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-200 text-slate-600 hover:bg-blue-700 hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}