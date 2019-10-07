$(function () {
    var qtdTelefones = 0

    $("#btn-add-telefone").click(function (e) {
        e.preventDefault();

        var blocoTelefone = '  <div class="row">' +
            '      <div class="col-md-10" >' +
            '          <div class="col-md-3">' +
            '                 <input type="number" name="Telefones[' + qtdTelefones + '].DDD" maxlenght="2" placeholder="DDD" class="form-control txt-ddd"  />' +
            '          </div>' +
            '          <div class="col-md-4">' +
            '                 <input type="text" name="Telefones[' + qtdTelefones + '].Numero" placeholder="Número" class="form-control txt-numero" />' +
            '          </div>' +
            '          <div class="col-md-4">' +
            '             <select name="Telefones[' + qtdTelefones + '].Tipo" class="form-control sel-tipo">' +
            '                  <option value="0">Residencial</option>' +
            '                  <option value="1">Comercial</option>' +
            '                  <option value="2">Celular</option>' +
            '                  <option value="3">Recado</option>' +
            '              </select>' +
            '           </div >' +
            '      <div class="col-md-1">' +
            '          <button class="btn btn-danger btn-remover-telefone">' +
            '              <span class="glyphicon glyphicon-trash"></span>' +
            '          </button>' +
            '      </div > ' +
            '              </div > ' +
            '  </div >' +
            '   <p>';

        $("#div-telefones").append(blocoTelefone);
        qtdTelefones++;

        
    });

    $("#div-telefones").on("click", ".btn-remover-telefone", function (e) {
        e.preventDefault();

        $(this).parent().parent().remove();

        qtdTelefones--;
        console.log(qtdTelefones);

    });

    $("#div-telefones .row").each(function (indice, elemento) {
        $(elemento).find(".txt-ddd").attr("name", "Telefones[" + indice + "].DDD");
        $(elemento).find(".txt-numero").attr("name", "Telefones[" + indice + "].Numero");
        $(elemento).find(".sel-tipo").attr("name", "Telefones[" + indice + "].Tipo");
    });
});