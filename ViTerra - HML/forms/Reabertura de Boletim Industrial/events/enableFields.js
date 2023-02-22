function enableFields(form){
    var numAtividade = parseInt(getValue("WKNumState"));
    
    var historicoIndex = form.getChildrenIndexes("tbChat");
    
    console.log(historicoIndex);
    // for(var i = 0; i < historicoIndex.length; i++){
    //     form.setEnabled(`txt_chat___${i}`, false)
    // }

    form.setEnabled("txt_nome_solic", false);
    form.setEnabled("txt_matricula_solic", false);
    form.setEnabled("txt_setor_solic", false);
    form.setEnabled("txt_departamento_solic", false);

    if(numAtividade !== 0){
        form.setEnabled("txt_desc_solicitacao", false);
        form.setEnabled("txt_just_solicitacao", false);
        form.setEnabled("txt_datareversao_solicitacao", false);  
    }
}