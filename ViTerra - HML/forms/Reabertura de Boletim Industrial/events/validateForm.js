function validateForm(form){
    var msg = "";

    if(form.getValue("txt_desc_solicitacao") == ""){
		msg += "A Descrição da Solicitação está vazia! \n";
        if(form.getValue("txt_just_solicitacao") == ""){
            msg += "A Justificativa da Solicitação está vazia! \n";
            if(form.getValue("txt_datareversao_solicitacao") == ""){
                msg += "A Data de Reversão está vazia! \n";
                if(form.getValue("txt_observacoes_solic") == ""){
                    msg += "A Observação está vazia! \n";
                }
            }
        }
	}

    if(msg !== '') throw msg

}