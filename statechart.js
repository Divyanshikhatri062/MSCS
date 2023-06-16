document.addEventListener('DOMContentLoaded', function() {
  // Complete list of Indian states
  var states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
    'Chandigarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Lakshadweep',
    'Delhi', 'Puducherry', 'Jammu and Kashmir', 'Ladakh'
  ];

  // Society counts for each state (Sample data, you can update with actual values)
  var societyCounts = [
    200, 50, 120, 80, 90, 30, 180, 100, 70, 110, 150, 70, 160, 130, 40, 30, 20, 50, 100, 80, 120, 30, 140, 170, 60, 190, 80, 160, 90, 30, 40, 10, 20, 80, 70, 50, 30
  ];

  // Creating the data array with state names and society counts
  var data = states.map(function(state, index) {
    return { state: state, societies: societyCounts[index] };
  });

  // Extracting state names and number of societies
  var stateNames = data.map(item => item.state);
  var societyCount = data.map(item => item.societies);

  // Creating the 2D scatter plot
  var trace = {
    x: stateNames,
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
    xaxis: {
      title: 'State',
      tickangle: -45,
      automargin: true,
      tickfont: {
        size: 10
      }
    },
    yaxis: { title: 'Number of Societies' },
  };
  var config = {
    responsive: true,
    displaylogo: false
  };
  Plotly.newPlot('chart', [trace], layout, config);
});
