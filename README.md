# Image-Engine

> image utilities toolset that handles image resizing, rotating, and other utilities.

## Contents

1. [About](https://github.com/latif-essam/image-engine/edit/main/README.md#about)
2. [Setup & Run](https://github.com/latif-essam/image-engine/edit/main/README.md#setup--run)
3. [APIs Endpoints](https://github.com/latif-essam/image-engine/edit/main/README.md#apis--endpoints)
4. [Available Scripts](https://github.com/latif-essam/image-engine/edit/main/README.md#available-scripts)
5. [Tools & Pakages used in this App](https://github.com/latif-essam/image-engine/edit/main/README.md#tools--pakages-used-in-this-app)

## About

Image-Engine is a an Image Processing API application that provides various features for image mainpulation.

## Setup & Run

- clone the repo `git clone https://github.com/latif-essam/image-engine.git`
- run `npm i` to install all the depnencies
- go to [http://localhost:5000/info](http://localhost:5000/info) and follow the instructions provided on how to use the app.

## APIs & Endpoints

| route                                                     | functionality / description                   |
| --------------------------------------------------------- | --------------------------------------------- |
| `/`                                                       | Main Route                                    |
| `/api`                                                    | API utilities & features                      |
| `/info`                                                   | instructions on how to use the app's features |
| `/invalid`                                                | handles invalid url / bad requests            |
| `/api/engine`                                             | Display engine features                       |
| `/api/engine/holder?width=400,height=250`                 | Provide Placeholder Image                     |
| `/api/engine/resizer?filename=autom&width=400&height=500` | Resize given image with given dimentions      |
| `/api/engine/rotator?filename=autom&angle=45`             | Rotate given image with a given angle         |

## Available Scripts

> Note :you have to prefix each command with `npm run scriptName`

| scripts  | frunctionality                                                          |
| -------- | ----------------------------------------------------------------------- |
| build    | build typescript project files to JS files in build directory           |
| jasmine  | run jasmine tests on compiled Js files                                  |
| test     | run build script and then test the production build with jasmine script |
| start    | fires nodemon to run the TS project                                     |
| lint:fix | run eslint to fix problems                                              |
| prettier | run prettier script                                                     |

## Tools & Pakages used in this App

- [canvas](https://www.npmjs.com/package/canvas);
- [express](http://expressjs.com/)
- [jasmine](https://jasmine.github.io/)
- [jasmine-spec-reporter](https://www.npmjs.com/package/jasmine-spec-reporter)
- [sharp](https://sharp.pixelplumbing.com/)
