import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="flex flex-col w-1/2 text-yellow-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-3xl xl:text-5xl gap-y-6 xl:gap-y-8 rounded-md p-4">
        <div className="flex justify-between">
          <div>Email</div>
          <div>knock007@alumni.umn.edu</div>
        </div>
        <div className="flex justify-between">
          <div>Phone</div>
          <div>612-481-1450</div>
        </div>
        <div className="flex justify-between">
          <div>LinkedIn</div>
          <Link
            href="https://linkedin.com/in/jordenknock"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>linkedin.com/in/jordenknock</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
