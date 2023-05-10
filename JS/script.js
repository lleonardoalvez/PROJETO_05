function media() {
    let nom = window.prompt('Insira o nome do aluno') 
    let n1 = Number(window.prompt(`Insira a primeira nota de ${nom}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, insira a segunda nota de ${nom}?`))
    med = (n1 + n2)/2 
    
    let msg 
    if (med >= 6) { 
        msg = 'Não fez mais que a obrigação!'
    } else { 
        msg = 'Pare de ser burro!'
    }
      let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>` 
    res.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`
}