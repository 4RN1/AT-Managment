import Image from "next/image";
import StatCards from "../components/dashboard/StatCards";
import { SiSpeedtest } from "react-icons/si";
import Priority from "../components/dashboard/Priority";

export default function Home() {
  return (
    <div className="mx-10">
    <section className="grid grid-cols-4 gap-5 mt-10 mb-5">
      <StatCards
        title="სატესტო"
        icon={<SiSpeedtest size={30} />}
        iconBgColor="#2D8610"
        stat={250}
      />

      <StatCards
        title="სატესტო"
        icon={<SiSpeedtest size={30} />}
        iconBgColor="#2D8647"
        stat={1250}
      />

      <StatCards
        title="სატესტო"
        icon={<SiSpeedtest size={30} />}
        iconBgColor="#2D8647"
        stat={550}
      />

      <StatCards
        title="სატესტო"
        icon={<SiSpeedtest size={30} />}
        iconBgColor="#2D8647"
        stat={50}
      />
    </section>

      <section>
        <Priority />
      </section>





      </div>
  );
}
