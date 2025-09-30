# 📦 Instalação da Biblioteca Resend

Para usar o envio de emails com a biblioteca oficial do Resend, você precisa instalar a dependência:

## 🚀 Instalação

```bash
cd client
npm install resend
```

## 📋 Verificação

Após a instalação, verifique se a biblioteca foi instalada corretamente:

```bash
npm list resend
```

## 🔧 Configuração

A API Key já está configurada no arquivo `src/services/emailService.ts`:

```typescript
export const EMAIL_CONFIG = {
  API_KEY: 're_Cqy7cj2M_PLUEVS5zGy5SqJtZv5m7oDPi',
  TO_EMAIL: 'adsguilhermezb@gmail.com',
  FROM_EMAIL: 'Acme <onboarding@resend.dev>'
}
```

## 🧪 Testando

1. Execute o projeto:
```bash
npm run dev
```

2. Acesse a seção de contato
3. Preencha o formulário
4. Envie uma mensagem
5. Verifique os logs no console do navegador
6. Confirme se o email chegou em `adsguilhermezb@gmail.com`

## 📊 Logs de Debug

O sistema agora inclui logs detalhados:

- 🚀 **Início do envio**: Mostra os dados do remetente
- 📤 **Payload**: Mostra o conteúdo do email
- ✅ **Sucesso**: Confirma o envio
- ❌ **Erro**: Detalhes do erro se houver

## 🔍 Verificando os Logs

Abra o **Console do Navegador** (F12) para ver os logs:

```
🚀 Iniciando envio de email...
📤 Enviando email com payload: {...}
✅ Email enviado com sucesso! {id: "..."}
```

## 🆘 Solução de Problemas

### Erro: "Module not found"
```bash
npm install resend
```

### Erro: "Invalid API Key"
- Verifique se a API Key está correta
- Confirme se a conta do Resend está ativa

### Erro: "Domain not verified"
- Use `onboarding@resend.dev` para testes
- Configure seu domínio no dashboard do Resend

## 📚 Documentação

- **Resend Docs**: [https://resend.com/docs](https://resend.com/docs)
- **NPM Package**: [https://www.npmjs.com/package/resend](https://www.npmjs.com/package/resend)
