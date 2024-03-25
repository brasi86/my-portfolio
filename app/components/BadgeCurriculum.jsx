import Image from "next/image";

export default function BadgeCurriculum({ img, desc }) {
  return (
    <div className="flex gap-2 items-center">
      <div className="relative w-12 h-12">
        <Image src={img} alt="alt" fill />
      </div>
      <p className="flex-1">{desc}</p>
    </div>
  );
}
