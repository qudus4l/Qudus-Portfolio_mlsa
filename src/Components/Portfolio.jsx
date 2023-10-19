/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/projects.png";

const imageAltText = "code on a computer screen";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Neural Style Transfer App",
    description:
      "The Neural Style Transfer Art App uses AI to apply artistic styles to images and videos, creating captivating transformations.",
    url: "https://qudus4l.github.io/portfolio_q/post/chapter-8/",
  },
  {
    title: "Landmark Classification & Tagging for Social Media",
    description:
      "The Landmark Classifier project employs AI and CNNs to recognize landmarks in photos, enhancing photo-sharing experiences through image recognition.",
    url: "https://qudus4l.github.io/portfolio_q/post/chapter-6/",
  },
  {
    title: "Handwritten Digits Classifier",
    description:
      "The Handwritten Digits Classifier, using PyTorch, prototypes accurate OCR for handwritten digits.",
    url: "https://qudus4l.github.io/portfolio_q/post/chapter-3/",
  },
  {
    title: "Predict Bike Sharing Demand",
    description:
      "The Bike Sharing Demand project with AutoGluon aims to predict bike-sharing demand by optimizing machine learning models for improved service operations.",
    url: "https://qudus4l.github.io/portfolio_q/post/chapter-4/",
  },
  {
    title: "Fake News Classifier",
    description:
      "The Fake News Classifier, developed in Python, prototypes a system for accurate detection and classification of real and fake news articles using natural language processing and a classification algorithm.",
    url: "https://qudus4l.github.io/portfolio_q/post/chapter-5/",
  },
  {
    title: "Flower Species Image Classifier Application",
    description:
      "The Flower Species Image Classifier utilizes CNNs to accurately identify flower species from images, having been trained on a diverse dataset of flower images.",
    url: "https://qudus4l.github.io/portfolio_q/post/chapter-2/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
