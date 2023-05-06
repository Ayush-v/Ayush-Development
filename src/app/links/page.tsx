import Image from "next/image";
import profilePic from "../../../public/ayush-profile.png";

export default function Home() {
  return (
    <>
      <main className="mx-auto mt-24 max-w-screen-md px-6">
        <div className="mx-auto w-fit overflow-hidden rounded-full border border-white border-opacity-50 bg-black/70 p-2">
          <Image
            src={profilePic}
            alt="Profile"
            priority
            className="h-28 w-28"
          />
        </div>
        <div className="my-8 space-y-4">
          <h1 className="text-center text-4xl font-bold">Ayush</h1>
          <p className="text-justify text-lg opacity-80">
            Experienced UI/UX and Frontend Developer. Passionate about building
            excellent software that improves the lives of those around me.
          </p>
          <div className="flex items-center justify-center gap-6">
            <button className="rounded-md border px-4 py-2">Website</button>
            <button className="flex items-center gap-3 rounded-md border px-4 py-2">
              <span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              Email
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center rounded-lg border p-4">
            <Image
              src={profilePic}
              alt="Profile"
              priority
              className="h-20 w-20"
            />
            <div>
              <h3>Lorem, ipsum.</h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <button className="border">
              <svg
                width="45"
                height="45"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
