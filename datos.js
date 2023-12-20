// new DataTable('#dataTable', {
//     ajax: 'data/arrays.txt'
// });

$('#dataTable').dataTable( {
    "ajax": "data/def_abs.txt"
  } );

  $('#dataTablePASO').dataTable( {
    "ajax": "data/def_absPASO.txt"
  } );

  $('#dataTableCOMPARATIVO').dataTable( {
    "ajax": "data/def_absCOMPARATIVO.txt"
  } );