// Define the URL to fetch data from
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Function to build charts
function buildCharts(sample) {
    // Retrieve data from the specified URL
    d3.json(url).then(data => {
        // Extract sample data for the selected sample
        const sampleData = data.samples.find(entry => entry.id === sample);
        const { otu_ids, otu_labels, sample_values } = sampleData;

        // Prepare data for the bar chart (top 10 OTUs)
        const top10OTUs = otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
        const top10Values = sample_values.slice(0, 10).reverse();
        const top10Labels = otu_labels.slice(0, 10).reverse();

        // Build the bar chart
        const barData = {
            x: top10Values,
            y: top10OTUs,
            text: top10Labels,
            type: "bar",
            orientation: "h",
            marker: { color: "#3498db" }
        };

        const barLayout = {
            title: "Top 10 Bacteria Found",
            plot_bgcolor: "#ecf0f1",
            paper_bgcolor: "#ecf0f1",
            margin: { t: 50, l: 150 }
        };

        Plotly.newPlot("bar", [barData], barLayout);

        // Build the bubble chart
        const bubbleData = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Viridis"
            }
        };

        const bubbleLayout = {
            title: "Bacteria Per Sample",
            xaxis: { title: "OTU ID" },
            plot_bgcolor: "#ecf0f1",
            paper_bgcolor: "#ecf0f1",
            margin: { t: 50, l: 150 }
        };

        Plotly.newPlot("bubble", [bubbleData], bubbleLayout);
    });
}

// Function to display demographic information
function displayDemoInfo(sample) {
    // Retrieve metadata from the specified URL
    d3.json(url).then(data => {
        // Extract metadata for the selected sample
        const metaData = data.metadata.find(entry => entry.id == sample);

        // Clear any existing metadata values
        d3.select("#sample-metadata").html("");

        // Display key-value pairs in demographic info box
        Object.entries(metaData).forEach(([key, value]) => {
            d3.select("#sample-metadata")
                .append("h6")
                .text(`${key}: ${value}`)
                .style("color", "#333");
        });
    });
}

// Function to initialize the dashboard
function init() {
    // Dropdown selector
    const selector = d3.select("#selDataset");

    // Retrieve sample data to populate the dropdown selector
    d3.json(url).then(data => {
        const sampleNames = data.names;
        sampleNames.forEach(sample => {
            selector.append("option")
                .text(sample)
                .property("value", sample);
        });

        // Display charts and demographic info for the first sample when dashboard initialized
        const firstSample = sampleNames[0];
        buildCharts(firstSample);
        displayDemoInfo(firstSample);
    });
}

// Function to update the data when a different option is selected in the dropdown selector
function optionChanged(newSample) {
    buildCharts(newSample);
    displayDemoInfo(newSample);
}

// Initialize the dashboard
init();
