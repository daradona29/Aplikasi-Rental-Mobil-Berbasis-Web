$(document).ready(function() {
    $('#search-input').keyup(function() {
      var searchValue = $(this).val();
      $.ajax({
        url: 'search-transaksi.php',
        method: 'POST',
        data: { search: searchValue },
        success: function(response) {
          $('#mobil-table').html(response);
        }
      });
    });
  });
  