import Image from "next/image";
import localFont from "next/font/local";
import {Inter } from  "next/font/google";
import {VideoCard} from  "../components/VideoCard";


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({subsets:  ['latin']});

export default function Home() {
  return (
    <div>
      <VideoCard></VideoCard>

    </div>
  );
}
