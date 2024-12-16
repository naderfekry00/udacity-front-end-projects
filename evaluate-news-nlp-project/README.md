# Natural Language Processing (NLP) Web Tool

This project is a web-based tool designed to analyze articles or blog posts using Natural Language Processing (NLP). The tool classifies content based on subjectivity (opinion vs. fact) and sentiment (positive, neutral, or negative tone). The application integrates with **MeaningCloud API** to perform this analysis.

## Features

- **NLP Analysis**: Classifies articles by subjectivity and sentiment.
- **Modern Development**: Uses Webpack, Express, and Service Workers for efficient, scalable development.
- **API Integration**: Connects to an external NLP API for content analysis.

## Project Dependencies

- **Node.js**: JavaScript runtime.
- **Express**: Web application framework.
- **Webpack**: Build tool for managing development and production environments.
- **Sass**: Preprocessor for CSS.
- **Dotenv**: To manage environment variables securely.
- **MeaningCloud API**: External service for NLP.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure API keys:

   - Sign up for [MeaningCloud API](https://www.meaningcloud.com/developer/sentiment-analysis).
   - Create a `.env` file in the project root:
     ```
     API_KEY=your-api-key
     ```
   - Add `.env` to `.gitignore` to keep your keys secure:
     ```bash
     echo ".env" >> .gitignore
     ```

4. Start the development server:

   ```bash
   npm run build-dev
   ```

5. To build the production version:

   ```bash
   npm run build-prod
   ```

6. Start the production server:
   ```bash
   npm start
   ```

## Usage

1. Open the app in your browser (default URL: `http://localhost:3000`).
2. Enter the URL of the article or blog post you want to analyze.
3. Submit the form to view the analysis results.
