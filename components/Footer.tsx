// import Link from "next/link";
// import { Heart, Phone, Mail, MapPin } from "lucide-react";
// import {FaLinkedinIn as Linkedin,FaInstagram as Instagram,FaTwitter as Twitter,} from "react-icons/fa";

// import { companyInfo } from "@/data/company";
// import { navLinks } from "@/data/navigation";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-slate-900 text-slate-300">
//       <div className="container-custom mx-auto section-padding">
//         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
//           {/* Brand */}
//           <div className="space-y-5">
//             <Link href="/" className="flex items-center gap-2.5">
//               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500">
//                 <Heart className="h-5 w-5 text-white fill-white" />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-lg font-bold text-white leading-none">
//                   SMP <span className="text-blue-400">Surgitech</span>
//                 </span>
//                 <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400 leading-none mt-0.5">
//                   Advancing Cardiovascular Care
//                 </span>
//               </div>
//             </Link>
//             <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
//               Your trusted partner in cardiovascular care. Delivering excellence in medical devices across Central India.
//             </p>
//             <div className="flex gap-3">
//               {[Linkedin, Instagram, Twitter].map((Icon, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-blue-700 hover:text-white transition-all duration-300"
//                 >
//                   <Icon className="h-4 w-4" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
//               Quick Links
//             </h3>
//             <ul className="space-y-3">
//               {navLinks.map((link) => (
//                 <li key={link.href}>
//                   <Link
//                     href={link.href}
//                     className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Products */}
//           <div>
//             <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
//               Our Products
//             </h3>
//             <ul className="space-y-3 text-sm text-slate-400">
//               {["Stents", "Balloons", "Catheters", "Guidewires", "Interventional Products"].map(
//                 (item) => (
//                   <li key={item}>
//                     <Link
//                       href="/products"
//                       className="hover:text-blue-400 transition-colors"
//                     >
//                       {item}
//                     </Link>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
//               Contact Us
//             </h3>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3 text-sm">
//                 <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
//                 <span>{companyInfo.contact.phone}</span>
//               </li>
//               <li className="flex items-start gap-3 text-sm">
//                 <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
//                 <span>{companyInfo.contact.email}</span>
//               </li>
//               <li className="flex items-start gap-3 text-sm">
//                 <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
//                 <span>{companyInfo.address.primary}</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-xs text-slate-500">
//             &copy; {currentYear} SMP Surgitech. All Rights Reserved.
//           </p>
//           <div className="flex gap-6 text-xs text-slate-500">
//             <Link href="#" className="hover:text-slate-300 transition-colors">
//               Privacy Policy
//             </Link>
//             <Link href="#" className="hover:text-slate-300 transition-colors">
//               Terms & Conditions
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {FaLinkedinIn as Linkedin,FaInstagram as Instagram,FaTwitter as Twitter,} from "react-icons/fa";
import { companyInfo } from "@/data/company";
import { navLinks } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom mx-auto section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative h-18 w-58">
                <Image
                  src="/img/logo.png"
                  alt="SMP Surgitech"
                  fill
                  className="object-contain brightness-200"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Your trusted partner in cardiovascular care. Delivering excellence in medical devices across Central India.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-blue-700 hover:text-white transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Our Products
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {["Stents", "Balloons", "Catheters", "Guidewires", "Interventional Products"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/products"
                      className="hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                <span>{companyInfo.contact.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                <span>{companyInfo.contact.email}</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                <span>{companyInfo.address.primary}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} SMP Surgitech. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}