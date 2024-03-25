# Belly Button Biodiversity Dashboard

This repository contains an interactive dashboard built to explore the Belly Button Biodiversity dataset. The dataset catalogs the microbes that colonize human navels, revealing insights into microbial diversity across individuals.

## Overview

The dashboard is built using D3.js library for data visualization and JavaScript for interactivity. It consists of three main components:

1. **Horizontal Bar Chart**: Displays the top 10 operational taxonomic units (OTUs) found in an individual's sample. It utilizes dropdown menu to select different samples. The bar chart represents the abundance of each OTU, with hovertext providing additional information.

2. **Bubble Chart**: Visualizes each sample by plotting OTU IDs on the x-axis, sample values on the y-axis, and marker size representing sample values. Marker colors are determined by OTU IDs, and text values provide OTU labels.

3. **Sample Metadata Display**: Shows demographic information of the selected individual. Each key-value pair from the metadata JSON object is displayed.

## Deployment

The dashboard is deployed using GitHub Pages and can be accessed [here]([link_to_dashboard](https://masihqadir007.github.io/belly-button-challenge/)).

## Usage

To use the dashboard, follow these steps:

1. Open the deployed dashboard link.
2. Use the dropdown menu to select a sample.
3. Explore the data visualizations and sample metadata displayed on the page.
4. Observe how the plots update dynamically when a new sample is selected.

## Repository Structure

The repository structure is as follows:

- **index.html**: HTML file containing the structure of the dashboard.
- **app.js**: JavaScript file containing the logic for data manipulation and interactivity.
- **style.css**: CSS file for styling the dashboard elements.
- **samples.json**: Dataset containing the Belly Button Biodiversity data.
- **README.md**: This file providing information about the project and its usage.

## Dependencies

- D3.js library
- Web browser with JavaScript enabled



