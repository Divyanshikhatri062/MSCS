document.addEventListener('DOMContentLoaded', function() {
    // Data for number of registered societies by year
    var data = [
      { year: 1900, societies: 100 },
      { year: 1905, societies: 120 },
      { year: 1910, societies: 150 },
      { year: 1920, societies: 210 },
      { year: 1925, societies: 160 },
      { year: 1930, societies: 170 },
      { year: 1935, societies: 190 },
      { year: 1940, societies: 519 },
      { year: 1945, societies: 410 },
      { year: 1950, societies: 300 },
      { year: 1955, societies: 250 },
      { year: 1960, societies: 70 },
      { year: 1965, societies: 190 },
      { year: 1970, societies: 100 },
      { year: 1975, societies: 170 },
      { year: 1980, societies: 150 },
      { year: 1985, societies: 160 },
      { year: 1990, societies: 170 },
      // ... Add more objects for each year with the corresponding number of societies
      { year: 1995, societies: 200 }
    ];
  
    // Extracting years and number of societies
    var years = data.map(item => item.year);
    var societyCount = data.map(item => item.societies);
  
    // Creating the 2D scatter plot
    var trace = {
      x: years,
      y: societyCount,
      mode: 'markers',
      marker: {
        size: 8,
        color: societyCount,
        colorscale: 'Viridis',
        colorbar: {
          title: 'Number of Societies'
        },
        opacity: 0.8
      },
      type: 'scatter'
    };
    var layout = {
      title: 'Registered Societies',
      xaxis: { title: 'Year' },
      yaxis: { title: 'Year' },
    };
    var config = {
      responsive: true,
     displaylogo:false
    };
    Plotly.newPlot('chart', [trace], layout, config);
  });
  