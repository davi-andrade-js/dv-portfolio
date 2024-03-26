import Sidebar from "@/components/Sidebar";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <>
      <main className="z-10 flex flex-row justify-between">
        <Sidebar activeSection={"contact"} />

        <div className="font-poppinsRegular flex h-fit w-40 flex-col items-end justify-end space-y-4 text-base">
          <ol className="flex flex-col items-end">
            <li>
              <a
                href="https://github.com/davi-andrade-js"
                target="_blank"
                rel="noreferrer"
                className="flex"
              >
                GitHub
                <ArrowUpRight className="w-4" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/davi-andrade-js/"
                target="_blank"
                rel="noreferrer"
                className="flex"
              >
                LinkedIn
                <ArrowUpRight className="w-4" />
              </a>
            </li>
          </ol>

          <ol className="flex flex-col items-end">
            <li>
              <p>(75) 99857-6430</p>
            </li>
            <li>
              <p>dv.andrade04@gmail.com</p>
            </li>
          </ol>
        </div>
      </main>
    </>
  );
}
