import { Facebook, Instagram, Linkedin, Mountain, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-gray-400" />
            <span className="text-gray-300 font-semibold text-lg"> Why does it feel like night today?</span>
          </div>
          <p className="text-sm">
           Somethin' in here's not right today Why am I so uptight today? Paranoia's all I got left I don't know what stressed me first Or how the pressure was fed
          </p>
        </div>
        <div className="flex flex-col gap-2">
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-gray-300 font-semibold">But I know just what it feels like</h4>
          <Link className="hover:text-gray-300 transition-colors" href="#">
          To have
          </Link>
          <Link className="hover:text-gray-300 transition-colors" href="#">
          a voice
          </Link>
          <Link className="hover:text-gray-300 transition-colors" href="#">
          in the back
          </Link>
          <Link className="hover:text-gray-300 transition-colors" href="#">
          of my head
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-gray-300 font-semibold">Legal</h4>
          <Link className="hover:text-gray-300 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="hover:text-gray-300 transition-colors" href="#">
            Privacy Policy
          </Link>
          <Link className="hover:text-gray-300 transition-colors" href="#">
            Cookie Policy
          </Link>
          <Link className="hover:text-gray-300 transition-colors" href="#">
            Accessibility
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">© 2024 Some incredible app. All rights reserved.</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link className="hover:text-gray-300 transition-colors" href="#">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link className="hover:text-gray-300 transition-colors" href="#">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link className="hover:text-gray-300 transition-colors" href="#">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link className="hover:text-gray-300 transition-colors" href="#">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
    );
  }
  