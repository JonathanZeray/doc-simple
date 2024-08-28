# Doc-simple (In Other Words)

**Doc-simple**, also known as **In Other Words**, is an application designed to bridge the gap between technical language and everyday understanding. Using OpenAI's API, it simplifies and translates documents written in complex legal or technical jargon into plain language across multiple languages.

## Features

- **Document Simplification:** Upload a PNG, JPG, or WEBP image of a document, and the app will simplify the content into everyday language.
- **Multi-language Support:** Choose from five languages—English, Swedish, Spanish, French, or Russian—to translate and simplify your document.
- **User Accounts:** Register or log in to access your document history and re-download past uploads.

## Technologies Used

This project leverages a variety of modern technologies:

- **Frontend:** React, Next.js, Framer Motion, Tailwind CSS
- **Backend:** Vercel Postgres, Drizzle ORM
- **API Integration:** OpenAI API for text simplification and translation
- **Authentication:** Clerk for user authentication

## Installation and Setup

To clone and run this project locally, you'll need to:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/doc-simple.git
   cd doc-simple
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file in the root directory. You will need the following keys:

   - PostgreSQL Database Key
   - OpenAI API Key
   - Clerk API Key
   - Additional keys as required

4. Run the development server:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000`.

## Usage

1. **Register or Log In:** Access the homepage after logging in.
2. **Upload Document:** Scroll down to find the upload section, where you can upload your document in PNG, JPG, or WEBP format.
3. **Translation and Simplification:** Choose your desired language, and the app will process and display the simplified text.
4. **View Upload History:** Access the "Uploads" section from the navbar to view your previous uploads.

### Limitations

- **Image Formats:** The app currently only supports JPG, PNG, and WEBP formats due to OpenAI API limitations.
- **Output Variability:** The format of the simplified text may vary depending on the language selected, influenced by the response from OpenAI's API.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a Pull Request.

**Areas of Interest:**

- Adding support for converting HEIC images (the default iPhone format) to JPG/PNG/WEBP.

## License

This project is licensed under the [MIT License](LICENSE).
