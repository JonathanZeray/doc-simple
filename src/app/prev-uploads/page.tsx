"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";

interface ResponseType {
  id: number;
  userId: string;
  result: string;
  timestamp: string;
}

export default function PrevUploadsPage() {
  const [responses, setResponses] = useState<ResponseType[]>([]);
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

  return (
    <div>
      <h1 className="font-bold text-xl">Your Previous Uploads</h1>
      {responses.length > 0 ? (
        <div className="flex flex-col gap-4">
          {responses.map((response) => (
            <div key={response.id}>
              <p>Result: {response.result}</p>
              <p>Date: {response.timestamp}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No previous uploads found.</p>
      )}
    </div>
  );
}
