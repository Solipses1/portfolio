import Link from "next/link";
import Image from "next/image";

export type ProjectCardProps = {
  title: string;
  link: string;
  source: string;
  image: string;
};

export default function ProjectCard({
  title,
  link,
  image,
  source,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 basis-60 h-[350px] max-w-[350px] xl:h-[400px] xl:max-w-[400px]"
      >
        <div className="flex flex-col w-full h-full text-2xl xl:text-3xl rounded-lg">
          <Image
            src={image}
            alt=""
            width={350}
            height={400}
            className="object-cover rounded-lg"
          ></Image>
          <div className="text-yellow-300 text-center mt-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {title}
          </div>
        </div>
      </Link>
      <Link href={source} target="_blank" rel="noopener noreferrer">
        <div className="text-yellow-300 text-center mt-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          source code
        </div>
      </Link>
    </div>
  );
}
