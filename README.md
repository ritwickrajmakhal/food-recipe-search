 
# Food Recipe Search App

![image](https://github.com/user-attachments/assets/e6b11cf8-f759-4657-a69b-9457af7eb67e)

A simple React application to search for food recipes using the Edamam API.

## Table of Contents

- Introduction
- Features
- Installation
- Usage
- Contributing

## Introduction

The Food Recipe App allows users to search for food recipes by entering a search term. The app fetches data from the Edamam API and displays the recipes along with their images and ingredients.

## Features

- Search for food recipes by keyword
- Display recipe images and ingredients
- Responsive design

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ritwickrajmakhal/food-recipe-search.git
    ```
2. Navigate to the project directory:
    ```sh
    cd food-recipe-search
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Create a `.env` file in the root directory and add your Edamam API credentials:
    ```env
    REACT_APP_EDAMAM_APP_ID=your_app_id
    REACT_APP_EDAMAM_API_KEY=your_api_key
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

3. Enter a search term in the search bar and click the search button to find recipes.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature-branch
    ```
5. Open a pull request.
