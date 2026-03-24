// Função para verificar a resposta do quiz interativo
function verificarResposta(alternativa) {
    const textoResultado = document.getElementById("resultado-quiz");
    
    // A alternativa B (ILPF) é a correta
    if (alternativa === 'b') {
        textoResultado.textContent = "✅ Resposta Correta! A Integração Lavoura-Pecuária-Floresta é uma das melhores estratégias para o agro sustentável.";
        textoResultado.className = "resultado correto";
    } else {
        textoResultado.textContent = "❌ Resposta Incorreta. Tente novamente! Lembre-se que buscamos o equilíbrio entre plantar, criar animais e preservar a mata.";
        textoResultado.className = "resultado incorreto";
    }
}