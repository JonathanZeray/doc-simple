"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import { SignedIn, useAuth } from "@clerk/nextjs";

export default function ImageAnalyzer() {
  const { userId } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [inputKey, setInputKey] = useState(new Date().toString());

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const formData = new FormData();
    formData.append("file", file as File);
    formData.append("userId", userId as string);

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
        <div className="max-w-4xl">
          {image ? (
            <Image
              src={image}
              alt="An image of uploaded document"
              className="mb-8 w-1/3 object-contain"
              width={250}
              height={100}
            />
          ) : null}

          <form onSubmit={onSubmit}>
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

            <p className="py-8 text-slate-800">
              {submitted && !response ? "Processing..." : response}
            </p>

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
