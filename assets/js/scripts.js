// $(function(){
//   $( '#tel' ).mask( '(00) 0 0000-0000' );
//   $( '#qtdVeiculos' ).mask( '000' );

//   var myForm = $('#formContatoVenda');

//   $("#formContatoVenda").validate({

//     rules: {
//       nomeCompleto: {
//         required: true
//       },
//       email: {
//         required: true,
//         email: true
//       },
//       tel: {
//         required: true
//       },
//       aceiteContato: {
//         required: true
//       }
//     },
//     messages: {
//       nomeCompleto: "",
//       email: "",
//       tel: "",
//       aceiteContato: ""
//     }
// });

//   $('#submit').on('click', function() {

//     var nome = $('#nomeCompleto');
//     var telefone = $('#tel');
//     var email = $('#email');
//     var aceite = $('#aceite');

//     var form = new FormData();

//     form.append('nome_completo', nome.val());
//     form.append('tel', telefone.val());
//     form.append('email', email.val());
//     form.append('aceiteContato', aceite.is(':checked') ? 'sim': 'não');

//     var settings = {
//       "async": true,
//       "crossDomain": true,
//       "url": "sendmail.php",
//       "method": "POST",
//       "headers": {},
//       "processData": false,
//       "contentType": false,
//       "mimeType": "multipart/form-data",
//       "data": form
//     };

//     if (myForm.valid()) {
//       $('#submit').hide();
//       $('.loader').css('display', 'block');
//       $.ajax(settings).done(function (response) {
//         nome.val('');
//         telefone.val('');
//         email.val('');
//         aceite.prop('checked', false);
//         $('.loader').css('display', 'none');
//         $('.success').show();
//         $('form').find('.error').removeClass();
//       });
//     }
//   })
// });


$(function () {

  var myForm = $('#formContato');

  $("#formContato").validate({

    rules: {
      id: {
        required: true
      },
      nome: {
        required: true
      }
    },
    messages: {
      id: "",
      nome: ""
    }
  });

  $('#submit').on('click', function () {

    var nome = $('#nome');
    var id = $('#id');

    var form = new FormData();

    form.append('nome', nome.val());
    form.append('id', id.val());

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "sendmail.php",
      "method": "POST",
      "headers": {},
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    };

    if (myForm.valid()) {
      $('#submit').hide();
      $('.loader').css('display', 'block');
      $.ajax(settings).done(function (response) {
        nome.val('');
        id.val('');
        $('.loader').css('display', 'none');
        $('.success').show();
        $('form').find('.error').removeClass();
      });
    }
  })

  // $('#submit').trigger('click');
});


