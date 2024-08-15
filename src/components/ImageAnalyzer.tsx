"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import { SignedIn, useAuth } from "@clerk/nextjs";
import {
  EsFlag,
  SweFlag,
  EngFlag,
  RuFlag,
  FrFlag,
} from "../../public/icons/FlagIcons";
import { ImagePlaceholder } from "@/ui/ImagePlaceholder";

export default function ImageAnalyzer() {
  const { userId } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [inputKey, setInputKey] = useState(new Date().toString());
  const [language, setLanguage] = useState("en");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const formData = new FormData();
    formData.append("file", file as File);
    formData.append("userId", userId as string);
    formData.append("language", language);

    const res = await fetch("/api/analyze", {
      method: "POST",
      body: formData,
    });

    const result = await res.text();
    setResponse(result);
  };

  return (
    <>
      <SignedIn>
        <div className="max-w-4xl mx-auto flex justify-center h-full py-16">
          <form
            onSubmit={onSubmit}
            className="flex flex-col items-center gap-8"
          >
            <input
              key={inputKey}
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.length) {
                  setFile(e.target?.files[0]);
                  setImage(URL.createObjectURL(e.target?.files[0]));
                } else {
                  setFile(null);
                  setImage(null);
                }
              }}
            />
            {image ? (
              <Image
                src={image}
                alt="Uploaded document"
                className="object-contain"
                width={250}
                height={100}
              />
            ) : (
              <div className="flex flex-col items-center justify-center bg-gray-200 w-60 h-64 rounded-lg">
                <div className="bg-white w-52 h-56 flex flex-col items-center justify-center rounded-lg gap-2">
                  <span className="w-4/5 h-4 bg-gray-200 mb-8 rounded-md"></span>
                  <span className="w-1/2 h-2 bg-gray-200 rounded-md"></span>
                  <span className="w-2/3 h-2 bg-gray-200 rounded-md"></span>
                  <span className="w-2/3 h-2 bg-gray-200 rounded-md"></span>
                  <span className="w-2/3 h-2 bg-gray-200 rounded-md"></span>
                  <span className="w-2/3 h-2 bg-gray-200 rounded-md mb-2"></span>
                  <span className="w-1/2 h-2 bg-gray-200 rounded-md"></span>
                  <span className="w-2/3 h-2 bg-gray-200 rounded-md"></span>
                  <span className="w-2/3 h-2 bg-gray-200 rounded-md"></span>
                  <span className="w-2/3 h-2 bg-gray-200 rounded-md"></span>
                </div>
              </div>
            )}

            <div className="flex flex-col items-center">
              <h4 className="font-semibold font-bebasNeue text-lg text-darkBrown">
                Choose what language you want your response in
              </h4>
              <div>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`px-2 m-1  ${
                    language === "en" ? "border-2 border-darkGreen" : ""
                  } rounded-md`}
                >
                  <EngFlag />
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("sv")}
                  className={`px-2 m-1 ${
                    language === "sv" ? "border-2 border-darkGreen" : ""
                  } rounded-md`}
                >
                  <SweFlag />
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("fr")}
                  className={`px-2 m-1 ${
                    language === "fr" ? "border-2 border-darkGreen" : ""
                  } rounded-md`}
                >
                  <FrFlag />
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("es")}
                  className={`px-2 m-1 ${
                    language === "es" ? "border-2 border-darkGreen" : ""
                  } rounded-md`}
                >
                  <EsFlag />
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("ru")}
                  className={`px-2 m-1  ${
                    language === "ru" ? "border-2 border-darkGreen" : ""
                  } rounded-md`}
                >
                  <RuFlag />
                </button>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <button
                className={`${
                  submitted || !file ? "opacity-40" : "hover:opacity-90"
                } px-4 py-1 bg-darkBrown text-white  text-xl w-fit rounded-lg shadow-xl`}
                type="submit"
                disabled={submitted || !file}
              >
                Submit
              </button>

              <button
                className="bg-white hover:bg-red-100 text-red-800 font-semibold text-xl px-4 py-1 border border-red-400 rounded-lg shadow"
                type="button"
                onClick={() => {
                  setFile(null);
                  setImage(null);
                  setResponse("");
                  setSubmitted(false);
                  setInputKey(new Date().toString());
                  setLanguage("en");
                }}
              >
                Reset
              </button>
            </div>
            <div className="flex flex-col w-4/5">
              {submitted && !response ? (
                <p className="text-center">Processing..</p>
              ) : (
                response
                  .split("\n- ")
                  .filter((line) => line.trim() !== "")
                  .map((line, index) => {
                    const parts = line
                      .split("\n")
                      .filter((part) => part.trim() !== "");
                    const title = parts[0];
                    const content = parts.slice(1).join(" ").trim();

                    return (
                      <div key={index} className="py-2">
                        <h4 className="font-bold text-lg text-darkBrown">
                          {title}
                        </h4>
                        {content && <p className="text-darkBrown">{content}</p>}
                      </div>
                    );
                  })
              )}
            </div>
          </form>
        </div>
      </SignedIn>
    </>
  );
}
