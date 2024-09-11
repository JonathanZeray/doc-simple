export default function About() {
  return (
    <>
      <section className="px-6 sm:px-4 py-12 max-w-4xl mx-auto flex flex-col gap-5 text-darkBrown">
        <h1 className="text-5xl font-clash-display-bold">About</h1>
        <div>
          <p className=" text-lg">
            <span className="font-clash-display-semibold"> In Other Words</span>
            , is built with a simple goal - to make complex documents easier to
            understand.
            <br />
            Whether it’s legal contracts, technical instructions, or dense
            jargon, many people struggle to grasp the meaning of important
            information when it&#39;s filled with too complicated terms.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-3xl font-semibold">Why</h2>
          <p className=" text-lg">
            In Other Words was inspired by my own experience growing up, helping
            my parents by translating complicated documents. <br />
            It’s also built for anyone who feels overwhelmed by technology and
            AI, thinking it is only for tech experts. <br />
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-3xl font-semibold">How</h2>
          <p className=" text-lg">
            Using{" "}
            <span className="font-clash-display-semibold">OpenAI’s API</span>,
            In Other Words translates your document into plain language. <br />
            The app supports{" "}
            <span className="font-clash-display-semibold">five languages</span>
            —English, Swedish, Spanish, French, and Russian—making it accessible
            to non-native speakers as well.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-3xl font-semibold">For</h2>
          <ul className="list-disc list-inside  text-lg">
            <li>
              <span className="font-clash-display-semibold">
                Non-native speakers
              </span>
              : If you&#39;re reading a document in a language that isn&#39;t
              your first, In Other Words can translate, simplify and store it
              for you.
            </li>
            <li>
              <span className="font-clash-display-semibold">
                Non-tech-savvy individuals
              </span>
              : If AI or ChatGPT feels too complex and far-fetched, this app is
              an easy first step to make it more approachable.
            </li>
            <li>
              <span className="font-clash-display-semibold">
                Everyday users
              </span>
              : If you’ve ever needed to understand something in plain terms, In
              Other Words can help in just a few clicks.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-3xl font-semibold">Tech</h2>
          <ul className="list-disc list-inside text-lg">
            <li>
              <span className="font-clash-display-semibold">Frontend</span>:
              Next.js, Framer Motion, Tailwind CSS
            </li>
            <li>
              <span className="font-clash-display-semibold">Backend</span>:
              Next.js, Vercel Postgres, Drizzle ORM
            </li>
            <li>
              <span className="font-clash-display-semibold">API</span>: OpenAI
              API for text simplification and translation
            </li>
            <li>
              <span className="font-clash-display-semibold">
                Authentication
              </span>
              : Clerk for user authentication
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
