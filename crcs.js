document.addEventListener("DOMContentLoaded", function() {
    const sortSelect = document.getElementById("sort-select");
    const monthFilterContainer = document.getElementById("month-filter-container");

    sortSelect.addEventListener("change", function() {
      if (sortSelect.value === "month") {
        monthFilterContainer.style.display = "block";
      } else {
        monthFilterContainer.style.display = "none";
      }
      sortTable();
    });

    const monthFilter = document.getElementById('month-filter');
    const table = document.querySelector('table');
    const tableBody = table.querySelector('tbody');
    let tableRows = Array.from(tableBody.querySelectorAll('tr'));

    monthFilter.addEventListener('change', filterTableByMonth);

    function sortTable() {
      const sortBy = sortSelect.value;
      if (sortBy === 'default') {
        // Reset table to original order
        tableRows.forEach(row => {
          tableBody.appendChild(row);
        });
      } else if (sortBy === 'month') {
        tableRows.sort((a, b) => {
          const dateA = new Date(a.cells[5].textContent);
          const dateB = new Date(b.cells[5].textContent);
          return dateA.getMonth() - dateB.getMonth();
        });
      } else if (sortBy === 'state') {
        tableRows.sort((a, b) => {
          const stateA = a.cells[3].textContent.toLowerCase();
          const stateB = b.cells[3].textContent.toLowerCase();
          return stateA.localeCompare(stateB);
        });
      } else if (sortBy === 'name') {
        tableRows.sort((a, b) => {
          const nameA = a.cells[1].textContent.toLowerCase();
          const nameB = b.cells[1].textContent.toLowerCase();
          return nameA.localeCompare(nameB);
        });
      }

      tableRows.forEach(row => {
        tableBody.appendChild(row);
      });

      // Update tableRows after sorting
      tableRows = Array.from(tableBody.querySelectorAll('tr'));
    }

    function filterTableByMonth() {
      const filterByMonth = monthFilter.value;

      tableRows.forEach(row => {
        const dateCell = row.cells[5];
        const month = dateCell.textContent.split('/')[1];

        if (filterByMonth === '' || month === filterByMonth) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    }
  });
