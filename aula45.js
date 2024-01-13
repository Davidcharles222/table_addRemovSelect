/*
const caixaCursos = document.querySelector('#caixaCursos')//acessando caixaCursos
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']//criando lista elementos
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')//acessando id btnCursoSelecionado
const btnRemoverCurso = document.getElementById('btnRemoverCurso')//acessando id btnRemoverCurso
const btnAdicionarNovoCursoAntes = document.getElementById('btnAdicionarNovoCursoAntes')//acessando id btnAdicionarNovoCursoAntes
const btnAdicionarNovoCursoDepois = document.getElementById('btnAdicionarNovoCursoDepois')//acessando id btnAdicionarNovoCursoDepois
const nomeCurso = document.getElementById('nomeCurso')//acessando id nomeCurso

let indice = 0//indice recebe 0

const criarNovoCurso=(curso)=>{//criarNovoCurso recebe todos elementos percorridos na map chamada embaixo
    //Obs. curso recebe valor de el da map abaixo
    const novoElemento = document.createElement('div')//criando elemento div
    novoElemento.setAttribute('id', 'c'+indice)//novoElemento cria atributo id e recebe valor de c + índice 0
    novoElemento.setAttribute('class', 'curso c1')//novoElemento criar atributo class e recebe valor curso e c1
    novoElemento.innerHTML = curso//o texto do novo elemento recebe valor do curso

    const comandos = document.createElement('div')//criando outra div, para o input radio
    comandos.setAttribute('class','comandos')//criando atributo class com valor comandos

    const rb = document.createElement('input')//criando elemento input
    rb.setAttribute('type','radio')//rb cria atributo type radio
    rb.setAttribute('name','rb_curso')//rb cria atributo name rb_curso

    comandos.appendChild(rb)//comandos anexa filho rb
    novoElemento.appendChild(comandos)//novoElemento anexa filho comandos

    return novoElemento//retorna novoElemento percorrido na map
}

cursos.map((el,chave)=>{//map para percorrer todos elementos
    const novoElemento=criarNovoCurso(el)//novo elemento recebe valores de criarNovoCurso
    caixaCursos.appendChild(novoElemento)//caixa cursos anexa novo elemento
    indice++//indice recebe 1 a cada elemento
})

const radioSelecionado=()=>{//radioSelecionado recebe a função arrow function
    const todosRadios=[...document.querySelectorAll('input[type=radio]')]//todosRadios recebe todos imputs radio
    const radioSelecionado=todosRadios.filter((ele,ind,arr)=>{//filtrando todos elementos de todos radios
        return ele.checked//retornando elementos com checked
    })
    return radioSelecionado[0]//retornando radioSelecionado de indice 0
}

btnCursoSelecionado.addEventListener('click',(evt)=>{
    const rs = radioSelecionado()
    if(rs != undefined){
        const cursoSelecionado=rs.parentNode.previousSibling.textContent
        alert('Curso selecionado: ' + cursoSelecionado)
    }else{
        alert('Selecione um curso')
    }
   
})

btnRemoverCurso.addEventListener('click', (evt)=>{
    const rs = radioSelecionado()
    if(rs != undefined){
    const cursoSelecionado=rs.parentNode.parentNode
    cursoSelecionado.remove()
    }else{
        alert('Selecione um curso')
    }
})

btnAdicionarNovoCursoAntes.addEventListener('click',(evt)=>{
    const rs = radioSelecionado()
    if(rs != undefined){
        if(nomeCurso.value!=""){
        const cursoSelecionado=rs.parentNode.parentNode
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso,cursoSelecionado)
        }else{
            alert("Digite o nome do curso")
        }
    }else{
        alert('Selecione um curso')
    }
})

btnAdicionarNovoCursoDepois.addEventListener('click', (evt)=>{//evento criado para o click
    const rs = radioSelecionado()//chamando radioSelecionado para saber qual está selecionado
    if(rs != undefined){
        if(nomeCurso.value!=""){
        const cursoSelecionado=rs.parentNode.parentNode
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling)//
        }else{
            alert("Digite o nome do curso")
        }
    }else{
        alert('Selecione um curso')
    }
})
*/


//parentNode -> nó pai
//childNodes[nodenumber] -> nos filhos
//firstChild -> primeiro filho
//lastChild -> ultimo filho
//nextSibling -> proximo irmão
//previousSibling -> irmão anterior

const caixa=document.getElementById('caixaCursos')
const btnCursoSelecionado=document.getElementById('btnCursoSelecionado')
const removerSelecionado=document.getElementById('btnRemoverCurso')
const adicionarDepois=document.getElementById('btnAdicionarNovoCursoDepois')
const adicionarAntes=document.getElementById('btnAdicionarNovoCursoAntes')
const nomeCurso=document.getElementById('nomeCurso')
const cursos=['HTML','Javascript','CSS','Nodejs','React','Angular']

//criando elementos para a caixa -> div -> div -> input radio

const criarNovoCurso=(el,ind)=>{
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id','c'+ind)
    novoElemento.setAttribute('class','curso c1')

    const comandos=document.createElement('div')
    comandos.setAttribute('class','comandos')

    const rb=document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name','rb_curso')
    
    novoElemento.innerHTML = el

    caixa.appendChild(novoElemento)
    novoElemento.appendChild(comandos)
    comandos.appendChild(rb)

    return novoElemento

}

cursos.map((el,ind)=>{//percorrer todos os cursos criados
    const novoElemento=criarNovoCurso(el,ind)
})

// descobrindo qual curso está selecionado
const radioSelecionado=()=>{
    const todosRadios=[...document.querySelectorAll('input[type=radio]')]
    const radioSelecionado=todosRadios.filter((el,ind,arr)=>{
        return el.checked
    })
    return radioSelecionado[0]
}

// criando evento selecionado
btnCursoSelecionado.addEventListener('click',(evt)=>{//evento não precisa de const
    const rs = radioSelecionado()
    if(rs != undefined){
    const cursoSelecionado = rs.parentNode.parentNode.textContent
    alert('curso Selecionado: ' + cursoSelecionado)
    }else{
        alert('Selecione um curso ')
    }
})

// criando evento de remoção
removerSelecionado.addEventListener('click',(evt)=>{
    const rs = radioSelecionado()
    if(rs != undefined){
    const cursoSelecionado = rs.parentElement.parentNode
    cursoSelecionado.remove()
    }else{
        alert('Selecione um curso')
    }
})

// criando evento adicionar antes
adicionarAntes.addEventListener('click',(evt)=>{
    const rs = radioSelecionado()//chamando função input selecionado "checked"
    if(rs != undefined){
    if(nomeCurso.value != ""){
    const cursoSelecionado = rs.parentElement.parentNode//acessando div pai da caixa que o rs foi selecionado
    const novoCurso = criarNovoCurso(nomeCurso.value)//chamando função dos elementos,colocando valor no nome curso
    caixaCursos.insertBefore(novoCurso,cursoSelecionado)//na caixa inserindo depois antes do selecionado o
    }else{
        alert('Digite um curso')
    }
    }else{
        alert('Selecione um curso')
    }
})

adicionarDepois.addEventListener('click',(evt)=>{
    const rs = radioSelecionado()//chamando função input selecionado "checked"
    if(rs != undefined){
    if(nomeCurso.value != ""){
    const cursoSelecionado = rs.parentElement.parentNode//acessando div pai da caixa que o rs foi selecionado
    const novoCurso = criarNovoCurso(nomeCurso.value)//chamando função dos elementos,colocando valor no nome curso
    caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling)//na caixa inserindo depois antes do selecionado o
    }else{
        alert('Digite um curso')
    }
    }else{
        alert('Selecione um curso')
    }
})