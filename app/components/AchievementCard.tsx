import { Achievement } from "@/types/achievement.type";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

export default function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <Link href={achievement.url} target="_blank"  className="hover:no-underline" >
      <Card className="p-6 transition duration-300 hover:scale-105 hover:transform">
        <div className="flex items-center space-x-6">
          <div className="flex-shrink-0">
            <Image
              src={achievement.icon}
              alt={`${achievement.name} icon`}
              width={60}
              height={60}
              className="custom-svg-icon"
            />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">{achievement.name}</h4>
            <p className="mt-1 text-sm text-gray-400">{achievement.description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
