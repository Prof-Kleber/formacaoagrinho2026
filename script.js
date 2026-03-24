// Variável para rastrear se uma resposta já foi dada
let respostaJaDada = false;

// Função para verificar a resposta do quiz interativo
function verificarResposta(alternativa) {
    // Prevenir múltiplos cliques
    if (respostaJaDada) return;
    
    const textoResultado = document.getElementById("resultado-quiz");
    const botoes = document.querySelectorAll(".quiz-button");
    
    // Desabilitar todos os botões após resposta
    botoes.forEach(btn => btn.disabled = true);
    respostaJaDada = true;
    
    // A alternativa B (ILPF) é a correta
    if (alternativa === 'b') {
        textoResultado.textContent = "✅ Resposta Correta! A Integração Lavoura-Pecuária-Floresta é uma das melhores estratégias para o agro sustentável.";
        textoResultado.className = "resultado correto";
        // Anunciar para leitores de tela
        anunciarResultado("Parabéns! Você acertou a resposta.");
    } else {
        textoResultado.textContent = "❌ Resposta Incorreta. Tente novamente! Lembre-se que buscamos o equilíbrio entre plantar, criar animais e preservar a mata.";
        textoResultado.className = "resultado incorreto";
        // Anunciar para leitores de tela
        anunciarResultado("Resposta incorreta. Tente novamente.");
        
        // Reabilitar botões após 2 segundos para permitir nova tentativa
        setTimeout(() => {
            botoes.forEach(btn => btn.disabled = false);
            respostaJaDada = false;
            textoResultado.textContent = "";
        }, 2000);
    }
}

// Função para anunciar resultados a leitores de tela
function anunciarResultado(mensagem) {
    const anunciador = document.createElement('div');
    anunciador.setAttribute('role', 'status');
    anunciador.setAttribute('aria-live', 'polite');
    anunciador.setAttribute('aria-atomic', 'true');
    anunciador.textContent = mensagem;
    anunciador.className = 'sr-only';
    document.body.appendChild(anunciador);
    
    // Remover o elemento após 1 segundo
    setTimeout(() => anunciador.remove(), 1000);
}

// Adicionar suporte a navegação por teclado (Enter e Space)
document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('.quiz-button');
    
    botoes.forEach((botao, index) => {
        botao.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.click();
            }
            
            // Navegação entre botões com setas
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                const proximoBotao = botoes[(index + 1) % botoes.length];
                proximoBotao.focus();
            }
            if (event.key === 'ArrowUp') {
                event.preventDefault();
                const botaoAnterior = botoes[(index - 1 + botoes.length) % botoes.length];
                botaoAnterior.focus();
            }
        });
    });
    
    // Adicionar indicador visual de progresso
    const quiz = document.querySelector('.quiz-section');
    if (quiz) {
        const indicador = document.createElement('div');
        indicador.className = 'quiz-status';
        indicador.textContent = '💡 Dica: Use as setas para navegar entre os botões ou clique para responder.';
        quiz.insertBefore(indicador, quiz.querySelector('.quiz-options'));
    }
});