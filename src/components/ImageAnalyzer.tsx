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
        <div className="max-w-4xl mx-auto flex justify-center h-full py-12">
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
                alt="An image of uploaded document"
                className="mb-8 w-1/3 object-contain"
                width={250}
                height={100}
              />
            ) : null}
            {/*             <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="mt-4 p-2 border rounded"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="sv">Swedish</option>
              <option value="ru">Russian</option>
            </select> */}
            <div className="flex flex-col items-center">
              <h4 className="font-semibold font-bebasNeue text-xl">
                Choose what language you want your response in
              </h4>
              <div>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`px-2 m-1  ${
                    language === "en" ? "border-2 border-blue-500" : ""
                  } rounded-md`}
                >
                  <EngFlag />
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("sv")}
                  className={`px-2 m-1 ${
                    language === "sv" ? "border-2 border-blue-500" : ""
                  } rounded-md`}
                >
                  <SweFlag />
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("fr")}
                  className={`px-2 m-1 ${
                    language === "fr" ? "border-2 border-blue-500" : ""
                  } rounded-md`}
                >
                  <FrFlag />
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("es")}
                  className={`px-2 m-1 ${
                    language === "es" ? "border-2 border-blue-500" : ""
                  } rounded-md`}
                >
                  <EsFlag />
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("ru")}
                  className={`px-2 m-1  ${
                    language === "ru" ? "border-2 border-blue-500" : ""
                  } rounded-md`}
                >
                  <RuFlag />
                </button>
              </div>
            </div>

            {submitted && (
              <p className="text-slate-800">
                {submitted && !response ? (
                  "Processing..."
                ) : (
                  <p className="py-4">{response}</p>
                )}
              </p>
            )}

            <div className="flex flex-row">
              <button
                className={`${
                  submitted || !file ? "opacity-50" : "hover:bg-gray-100"
                } bg-white mr-4 text-slate-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow`}
                type="submit"
                disabled={submitted || !file}
              >
                Simplify
              </button>

              <button
                className="bg-white hover:bg-red-100 text-red-800 font-semibold py-2 px-4 border border-red-400 rounded shadow"
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
          </form>
        </div>
      </SignedIn>
    </>
  );
}
