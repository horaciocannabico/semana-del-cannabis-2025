import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import heroImage from "@assets/generated_images/LogoSemanaCan.png";
import heroVideo from "@assets/generated_videos/Intro.mp4"; // tu video
import { useState } from "react";

export default function Hero() {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/80 to-primary/60"
    >
      <video
        src={heroVideo}
        autoPlay
        muted
        className="absolute min-h-[80vh] top-0 left-0 w-full h-full object-contain"
        style={{
          backgroundColor: "#000000",
        }}
        onEnded={(e) => {
          const videoElement = e.target;
          videoElement.pause(); // se queda congelado en último frame
          videoElement.currentTime = videoElement.duration; // asegura que sea el último frame
        }}
      />


    </section>
  );
}