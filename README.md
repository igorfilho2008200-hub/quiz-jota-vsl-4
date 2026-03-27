# Centro Decisor - Migração Google AI Studio

Este projeto foi configurado para utilizar o poder do **Gemini** via **Google AI Studio** para fornecer análises de autoconhecimento personalizadas.

## 🚀 Como Ativar a IA

Para que o quiz utilize a inteligência do Google AI Studio:

1.  **Obtenha sua Chave**: Vá ao [Google AI Studio](https://aistudio.google.com/) e crie uma **API KEY**.
2.  **Configure o Ambiente**: No seu ambiente de desenvolvimento ou no arquivo `.env`, adicione a chave:
    ```env
    GOOGLE_GENAI_API_KEY=SUA_CHAVE_AQUI
    ```
3.  **Resultado**: O sistema detectará a chave automaticamente e exibirá o card "Análise do Mentor (IA)" na tela final do quiz, processado inteiramente pelos modelos do Google AI Studio.

## 🧠 Tecnologia GenAI

O projeto utiliza o **Genkit** com o plugin oficial do Google AI Studio (`@genkit-ai/google-genai`). O fluxo de IA utiliza o modelo `gemini-2.5-flash` para garantir respostas rápidas e insights profundos.

---
Desenvolvido para a Jornada da Consciência.
