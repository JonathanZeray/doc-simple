"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";

interface ResponseType {
  id: number;
  userId: string;
  result: string;
  createdAt: string;
}

export default function PrevUploadsPage() {
  const [responses, setResponses] = useState<ResponseType[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const { userId } = useAuth();

  useEffect(() => {
    const fetchResponses = async () => {
      const res = await fetch(`/api/responses?userId=${userId}`);
      const data = await res.json();
      setResponses(data);
    };

    if (userId) {
      fetchResponses();
    }
  }, [userId]);

  const formatDate = (createdAt: string) => {
    const date = new Date(createdAt);
    return date.toLocaleString(undefined, {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-4/5 mx-auto">
      <h1 className="font-bold text-2xl sm:text-6xl my-4 sm:my-10 text-darkBrown text-center font-bebasNeue">
        Your Previous Uploads
      </h1>
      {responses.length > 0 ? (
        <div className="flex flex-col-reverse gap-4">
          {responses.map((response) => (
            <div key={response.id} className="border p-4 rounded-md shadow-md">
              <div className="flex justify-between items-center">
                <p className="text-darkGreen">
                  {formatDate(response.createdAt)}
                </p>
                <button
                  onClick={() => toggleExpand(response.id)}
                  className="text-darkGreen hover:underline"
                >
                  {expandedId === response.id ? "Hide" : "Read"}
                </button>
              </div>
              {expandedId === response.id && (
                <div className="mt-2">
                  <div className="flex flex-col w-4/5">
                    {response.result
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
                            {content && (
                              <p className="text-darkBrown">{content}</p>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No previous uploads found.</p>
      )}
    </div>
  );
}
