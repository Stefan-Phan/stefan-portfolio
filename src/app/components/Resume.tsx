import Image from "next/image"; // Import the Image component
import resume from "../public/images/resume.png";

export default function ResumeDisplay() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Image
        src={resume}
        alt="Resume"
        width={800}
        height={600}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}
