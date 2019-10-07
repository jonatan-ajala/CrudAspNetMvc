$(function () {
    var qtdTelefones = 0

    $("#btn-add-telefone").click(function (e) {
        e.preventDefault();

        var blocoTelefone =
         '  <div class="row">' +
         '      <div class="col-md-10" >'+
         '          <div class="col-md-3">'+
         '                 <input type="number" name="Telefones['+ qtdTelefones+'].DDD" class="form-control" placeholder="DDD" />'+
         '          </div>'+
         '          <div class="col-md-4">'+
            '                 <input type="text" name="Telefones[' + qtdTelefones +'].Number" class="form-control" placeholder="Número"/>'+
         '          </div>'+
         '          <div class="col-md-4">'+
         '             <select name="Telefones" [' + qtdTelefones +'].Tipo class="form-control">'+
         '                  <option value="0">Residencial</option>'+
         '                  <option value="1">Comercial</option>'+
         '                  <option value="2">Celular</option>'+
         '                  <option value="3">Recado</option>'+
         '              </select>'+
         '           </div >'+
         '      <div class="col-md-1">'+
         '          <button class="btn btn-danger btn-remove-telefone">'+
         '              <span class="glyphicon glyphicon-trash"></span>'+
         '          </button>'+
         '      </div > '+
         '              </div > '+
         '  </div >' +
         '  <br>';

        $("#div-telefones").append(blocoTelefone);
        qtdTelefones++;

        console.log(blocoTelefone);
    });

   


    $("btn-remove-telefone").click(function (e) {
        e.preventDefault();
    });
});