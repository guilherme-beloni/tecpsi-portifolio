// Configuração do Resend
// Para usar este serviço, você precisa:
// 1. Criar uma conta no https://resend.com/
// 2. Obter sua API Key
// 3. Configurar um domínio (ou usar o domínio de teste)
// 4. Substituir a API_KEY abaixo

export const EMAIL_CONFIG = {
  API_KEY: 're_Cqy7cj2M_PLUEVS5zGy5SqJtZv5m7oDPi', // Sua API Key do Resend
  TO_EMAIL: 'adsguilhermezb@gmail.com',
  FROM_EMAIL: 'Acme <onboarding@resend.dev>' // Formato recomendado pelo Resend
}


export interface EmailData {
  from_name: string
  from_email: string
  message: string
  to_email: string
}

// Função para enviar email usando Resend (com fallback para EmailJS)
export const sendEmail = async (emailData: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Importação dinâmica da biblioteca Resend
    const { Resend } = await import('resend')
    const resend = new Resend(EMAIL_CONFIG.API_KEY)

    const emailPayload = {
      from: EMAIL_CONFIG.FROM_EMAIL,
      to: [EMAIL_CONFIG.TO_EMAIL],
      subject: `Nova mensagem de ${emailData.from_name} - Portfólio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            📧 Nova mensagem do portfólio
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Informações do contato:</h3>
            <p><strong>Nome:</strong> ${emailData.from_name}</p>
            <p><strong>Email:</strong> ${emailData.from_email}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #1f2937; margin-top: 0;">Mensagem:</h3>
            <p style="line-height: 1.6; color: #374151;">${emailData.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>📧 Enviado através do formulário de contato do portfólio</p>
            <p>⏰ ${new Date().toLocaleString('pt-BR')}</p>
          </div>
        </div>
      `,
      reply_to: emailData.from_email
    }

    const result = await resend.emails.send(emailPayload)
    
    // Verificar se houve erro na resposta
    if (result.error) {
      throw new Error(`Resend API Error: ${result.error.message}`)
    }
    
    if (!result.data?.id) {
      throw new Error('Resend não retornou ID do email')
    }

    return {
      success: true,
      message: `Email enviado com sucesso! ID: ${result.data.id}`
    }
  } catch (error: unknown) {
    // Sempre tentar EmailJS como fallback quando Resend falhar
    try {
      const { sendEmailWithEmailJS } = await import('./emailServiceEmailJS')
      return await sendEmailWithEmailJS(emailData)
    } catch (emailjsError) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido'
      return {
        success: false,
        message: `Erro ao enviar email: ${errorMessage}`
      }
    }
  }
}

// Função alternativa usando fetch para um endpoint personalizado
export const sendEmailViaAPI = async (emailData: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: EMAIL_CONFIG.TO_EMAIL,
        from: emailData.from_email,
        name: emailData.from_name,
        message: emailData.message,
        subject: `Nova mensagem de ${emailData.from_name} - Portfólio`
      })
    })

    if (response.ok) {
      return {
        success: true,
        message: 'Email enviado com sucesso!'
      }
    } else {
      throw new Error('Erro na API')
    }
  } catch (error) {
    console.error('Erro ao enviar email via API:', error)
    return {
      success: false,
      message: 'Erro ao enviar email. Tente novamente mais tarde.'
    }
  }
}