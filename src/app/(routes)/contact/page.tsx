import Sidebar from "@/components/Sidebar";
import { ArrowUpRight } from "lucide-react";

// TODO: refactor this component

export default function Contact() {
  return (
    <>
      <main className="z-10 flex h-full w-full flex-col justify-between md:flex-row">
        <Sidebar activeSection={"contact"} />

        <div className="font-poppinsRegular flex h-fit flex-col items-end justify-end space-y-4 text-sm md:w-40 md:text-base">
          <ol className="flex flex-col items-end">
            <li>
              <a
                href="https://github.com/davi-andrade-js"
                target="_blank"
                rel="noreferrer"
                className="flex"
              >
                GitHub
                <ArrowUpRight className="h-fit w-3 md:w-4" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/andrade-davi/"
                target="_blank"
                rel="noreferrer"
                className="flex"
              >
                LinkedIn
                <ArrowUpRight className="h-fit w-3 md:w-4" />
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
