$(function(){
  $( '#tel' ).mask( '(00) 0 0000-0000' );
  $( '#qtdVeiculos' ).mask( '000' );

  var myForm = $('#formContatoVenda');

  $("#formContatoVenda").validate({
  
    rules: {
      nomeCompleto: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      tel: {
        required: true
      },
      aceiteContato: {
        required: true
      }
    },
    messages: {
      nomeCompleto: "",
      email: "",
      tel: "",
      aceiteContato: ""
    }
});

  $('#submit').on('click', function() {
    
    var nome = $('#nomeCompleto');
    var telefone = $('#tel');
    var email = $('#email');
    var aceite = $('#aceite');
    
    var form = new FormData();

    form.append('nome_completo', nome.val());
    form.append('tel', telefone.val());
    form.append('email', email.val());
    form.append('aceiteContato', aceite.is(':checked') ? 'sim': 'não');
    
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
        telefone.val('');
        email.val('');
        aceite.prop('checked', false);
        $('.loader').css('display', 'none');
        $('.success').show();
        $('form').find('.error').removeClass();
      });
    }
  })
});

