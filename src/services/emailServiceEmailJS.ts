// Configuração do EmailJS (solução para CORS)
// Para usar este serviço, você precisa:
// 1. Criar uma conta no https://www.emailjs.com/
// 2. Configurar um serviço de email (Gmail, Outlook, etc.)
// 3. Criar um template de email
// 4. Substituir as constantes abaixo com suas credenciais

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_bc6o5f8', // Service ID configurado
  TEMPLATE_ID: 'template_7mrbdsq', // Template ID configurado
  PUBLIC_KEY: 'gzBbW7-c2KbxzgaGR', // Public Key configurada
  TO_EMAIL: 'adsguilhermezb@gmail.com'
}

export interface EmailData {
  from_name: string
  from_email: string
  message: string
  to_email: string
}

// Função para enviar email usando EmailJS (sem problemas de CORS)
export const sendEmailWithEmailJS = async (emailData: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Importação dinâmica da biblioteca EmailJS
    const emailjs = await import('@emailjs/browser')

    const templateParams = {
      from_name: emailData.from_name,
      from_email: emailData.from_email,
      message: emailData.message,
      to_email: EMAILJS_CONFIG.TO_EMAIL
    }

    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )

    return {
      success: true,
      message: 'Email enviado com sucesso!'
    }
  } catch (error) {
    // Capturar mensagem específica do EmailJS
    let errorMessage = 'Erro desconhecido'
    if (error instanceof Error) {
      errorMessage = error.message
    } else if (error && typeof error === 'object' && 'text' in error) {
      errorMessage = (error as any).text
    } else if (error && typeof error === 'object' && 'message' in error) {
      errorMessage = (error as any).message
    }
    
    return {
      success: false,
      message: `Erro ao enviar email: ${errorMessage}`
    }
  }
}

