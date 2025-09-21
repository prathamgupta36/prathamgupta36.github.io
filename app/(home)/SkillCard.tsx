import Card from "@/components/Card";
import DevIcon from "@/components/DevIcon";
import Image from "next/image";

const SkillCard = ({ name, icon }: { name: string; icon: string }) => {
  const isCustomSvg = icon.startsWith("/icons/");

  return (
    <Card className="bg-foreground p-5 text-center transition duration-300 hover:scale-105 hover:transform flex flex-col items-center justify-center">
      {isCustomSvg ? (
        <Image src={icon} alt={`${name} icon`} width={50} height={50} className="custom-svg-icon" />
      ) : (
        <DevIcon icon={icon} size={50} />
      )}
      <p className="mt-5">{name}</p>
    </Card>
  );
};

export default SkillCard;