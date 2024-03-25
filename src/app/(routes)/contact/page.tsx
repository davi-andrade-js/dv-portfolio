import Sidebar from "@/app/components/Sidebar";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <>
      <main className=" flex flex-row justify-between">
        <Sidebar activeSection={"contact"} />

        <div className="flex flex-col w-40 text-base font-poppinsRegular h-fit justify-end items-end space-y-4">
          <ol className="flex flex-col items-end">
            <li>
              <a
                href="https://github.com/davi-andrade-js"
                target="_blank"
                rel="noreferrer"
                className="flex"
              >
                GitHub
                <ArrowUpRight />
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
                <ArrowUpRight />
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
