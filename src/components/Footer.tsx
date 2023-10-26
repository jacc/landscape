import React, { useEffect, useState } from "react";
import type { StreamingData } from "../types/api";
import FooterActivity from "./FooterActivity"; // Ensure FooterActivity is also converted to React

interface Social {
  name: string;
  href: string;
}

const socials: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/jacc",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/1afond",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jacklafond",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/jlaf",
  },
];

const Footer: React.FC = () => {
  const [streamingData, setStreamingData] = useState<StreamingData>({
    streaming: null,
  });

  const [presenceData, setPresenceData] = useState<any>({
    presence: null,
  });

  useEffect(() => {
    const fetchStreamingData = async () => {
      const response = await fetch("https://jacklink.fly.dev/music/streaming");
      const data = (await response.json()) as StreamingData;
      setStreamingData(data);
    };

    const fetchPresenceData = async () => {
      const response = await fetch("https://jacklink.fly.dev/fun/discord");
      const data = (await response.json()) as any;
      setPresenceData(data);
    };

    fetchStreamingData();
    fetchPresenceData();
  }, []);

  return (
    <footer className="absolute bottom-0 w-full border-t md:flex grid justify-center md:justify-between p-4 xl:pr-[7rem] xl:pl-[7rem]">
      <div className="flex justify-center md:justify-start">
        <FooterActivity streaming={streamingData} presence={presenceData} />
      </div>
      <div className="flex gap-3 justify-center md:justify-end">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            className="flex gap-2 text-gray-10 hover:text-gray-12 transition-colors duration-200"
          >
            {social.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
