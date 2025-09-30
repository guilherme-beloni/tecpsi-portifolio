# 🚀 Configuração Rápida do EmailJS

O Resend tem problemas de CORS no frontend. Vamos usar o EmailJS que é feito especificamente para frontend.

## ⚡ Configuração em 5 minutos

### 1. Criar Conta no EmailJS
1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em "Sign Up" (gratuito)
3. Confirme seu email

### 2. Configurar Serviço de Email
1. No dashboard, vá para **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha **"Gmail"** (recomendado)
4. Faça login com sua conta Gmail
5. **Anote o Service ID** (ex: `service_abc123`)

### 3. Criar Template
1. Vá para **"Email Templates"**
2. Clique em **"Create New Template"**
3. Use este template:

```
Nova mensagem do portfólio!

Nome: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}

---
Enviado através do formulário de contato.
```

4. **Anote o Template ID** (ex: `template_xyz789`)

### 4. Obter Public Key
1. Vá para **"Account"** → **"General"**
2. **Copie sua Public Key** (ex: `abc123def456`)

### 5. Configurar o Código
1. Abra `client/src/services/emailServiceEmailJS.ts`
2. Substitua as configurações:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123', // Seu Service ID
  TEMPLATE_ID: 'template_xyz789', // Seu Template ID
  PUBLIC_KEY: 'abc123def456', // Sua Public Key
  TO_EMAIL: 'adsguilhermezb@gmail.com'
}
```

### 6. Instalar Dependência
```bash
cd client
npm install @emailjs/browser
```

## 🧪 Testar

1. Execute o projeto: `npm run dev`
2. Acesse a seção de contato
3. Clique em "🧪 Testar Conectividade"
4. Se funcionar, teste o envio real

## 📊 Limites Gratuitos

- ✅ **200 emails/mês** no plano gratuito
- ✅ **2 serviços de email**
- ✅ **2 templates**
- ✅ **Sem problemas de CORS**

## 🔧 Solução de Problemas

### Erro: "Invalid template"
- Verifique se o Template ID está correto
- Confirme se as variáveis estão no template

### Erro: "Invalid service"
- Verifique se o Service ID está correto
- Confirme se o serviço está ativo

### Erro: "Invalid public key"
- Verifique se a Public Key está correta
- Confirme se a conta está ativa

## 🎯 Vantagens do EmailJS

- ✅ **Sem problemas de CORS**
- ✅ **Fácil configuração**
- ✅ **Gratuito para começar**
- ✅ **Funciona no frontend**
- ✅ **Templates personalizáveis**

---

**⚡ Em 5 minutos você terá emails funcionando sem problemas de CORS!**
