# 📧 Configuração do Resend para Envio de Emails

Este guia te ajudará a configurar o envio de emails usando o **Resend**, um serviço moderno e gratuito.

## 🚀 Por que Resend?

- ✅ **3.000 emails/mês** gratuitos
- ✅ API moderna e simples
- ✅ Excelente documentação
- ✅ Templates bonitos
- ✅ Fácil integração
- ✅ Confiável e rápido

## 📋 Passo a Passo

### 1. Criar Conta no Resend

1. Acesse [https://resend.com/](https://resend.com/)
2. Clique em **"Sign Up"**
3. Crie sua conta (pode usar GitHub, Google ou email)
4. Confirme seu email

### 2. Obter API Key

1. No dashboard, vá para **"API Keys"**
2. Clique em **"Create API Key"**
3. Dê um nome (ex: "Portfolio Contact Form")
4. Copie a API Key (começa com `re_`)
5. **⚠️ IMPORTANTE**: Salve a API Key em local seguro!

### 3. Configurar Domínio (Opcional)

Para produção, você pode configurar seu próprio domínio:

1. Vá para **"Domains"**
2. Clique em **"Add Domain"**
3. Siga as instruções de DNS
4. Use seu domínio no `FROM_EMAIL`

### 4. Configurar o Código

1. Abra `client/src/services/emailService.ts`
2. Substitua a API Key:

```typescript
export const EMAIL_CONFIG = {
  API_KEY: 're_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Sua API Key aqui
  TO_EMAIL: 'adsguilhermezb@gmail.com',
  FROM_EMAIL: 'onboarding@resend.dev' // Para testes
}
```

### 5. Testar o Envio

1. Execute o projeto: `npm run dev`
2. Acesse a seção de contato
3. Preencha o formulário
4. Envie uma mensagem de teste
5. Verifique se o email chegou em `adsguilhermezb@gmail.com`

## 🔧 Configuração Avançada

### Usando Seu Próprio Domínio

Se você tem um domínio próprio (ex: `seuportfolio.com`):

1. Configure o domínio no Resend
2. Atualize o `FROM_EMAIL`:

```typescript
export const EMAIL_CONFIG = {
  API_KEY: 're_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  TO_EMAIL: 'adsguilhermezb@gmail.com',
  FROM_EMAIL: 'contato@seuportfolio.com' // Seu domínio
}
```

### Variáveis de Ambiente (Recomendado)

Para maior segurança, use variáveis de ambiente:

1. Crie um arquivo `.env` na raiz do projeto:

```env
VITE_RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_TO_EMAIL=adsguilhermezb@gmail.com
VITE_FROM_EMAIL=onboarding@resend.dev
```

2. Atualize o `emailService.ts`:

```typescript
export const EMAIL_CONFIG = {
  API_KEY: import.meta.env.VITE_RESEND_API_KEY,
  TO_EMAIL: import.meta.env.VITE_TO_EMAIL,
  FROM_EMAIL: import.meta.env.VITE_FROM_EMAIL
}
```

3. Adicione `.env` ao `.gitignore`:

```gitignore
# Environment variables
.env
.env.local
.env.production
```

## 📊 Limites e Preços

### Plano Gratuito
- ✅ **3.000 emails/mês**
- ✅ **3 domínios**
- ✅ **API completa**
- ✅ **Suporte por email**

### Planos Pagos
- **Pro**: $20/mês - 50.000 emails
- **Business**: $80/mês - 200.000 emails
- **Enterprise**: Contato

## 🎨 Personalizando o Email

O template HTML está em `emailService.ts`. Você pode personalizar:

```typescript
html: `
  <div style="font-family: Arial, sans-serif;">
    <h1>Seu Título Personalizado</h1>
    <p>Seu conteúdo aqui...</p>
  </div>
`
```

## 🔒 Segurança

### Boas Práticas:

1. **Nunca** commite sua API Key no Git
2. Use variáveis de ambiente
3. Configure rate limiting se necessário
4. Valide dados no frontend e backend
5. Use HTTPS em produção

### Rate Limiting:

O Resend tem limites automáticos:
- **100 emails/hora** por API Key
- **3.000 emails/mês** no plano gratuito

## 🧪 Testando

### Teste Local:
```bash
cd client
npm run dev
```

### Teste de Produção:
1. Faça deploy do projeto
2. Teste o formulário em produção
3. Verifique os logs no dashboard do Resend

## 🆘 Solução de Problemas

### Erro: "Invalid API Key"
- Verifique se a API Key está correta
- Confirme se a conta está ativa
- Teste a API Key no dashboard

### Erro: "Domain not verified"
- Use `onboarding@resend.dev` para testes
- Configure seu domínio para produção
- Verifique as configurações de DNS

### Email não chega:
- Verifique a pasta de spam
- Confirme se o email de destino está correto
- Teste com um email diferente
- Verifique os logs no dashboard

### Rate Limit:
- Aguarde 1 hora se atingir o limite
- Considere upgrade do plano
- Implemente cache se necessário

## 📈 Monitoramento

No dashboard do Resend você pode:
- Ver estatísticas de envio
- Monitorar taxa de entrega
- Ver logs de erro
- Configurar webhooks

## 🔗 Links Úteis

- **Resend Docs**: [https://resend.com/docs](https://resend.com/docs)
- **API Reference**: [https://resend.com/docs/api-reference](https://resend.com/docs/api-reference)
- **Dashboard**: [https://resend.com/emails](https://resend.com/emails)
- **Suporte**: [https://resend.com/contact](https://resend.com/contact)

## 📞 Suporte

Se precisar de ajuda:
- 📧 Email: adsguilhermezb@gmail.com
- 🐙 GitHub: Abra uma issue
- 📚 Docs: [Resend Documentation](https://resend.com/docs)

---

**🎉 Pronto! Seu formulário de contato está configurado com Resend!**
