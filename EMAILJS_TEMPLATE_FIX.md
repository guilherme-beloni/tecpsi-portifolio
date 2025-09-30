# 🔧 Correção do Template EmailJS

O erro 422 indica que o template não está configurado corretamente. Siga estes passos:

## 📧 **Template Correto para EmailJS**

### **1. Acesse seu template no EmailJS**
- Vá para [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
- Clique em **"Email Templates"**
- Edite o template `template_7mrbdsq`

### **2. Use este template EXATO:**

**Assunto:**
```
Nova mensagem de {{from_name}} - Portfólio
```

**Conteúdo (HTML):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
    📧 Nova mensagem do portfólio
  </h2>
  
  <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #1f2937; margin-top: 0;">Informações do contato:</h3>
    <p><strong>Nome:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
  </div>
  
  <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
    <h3 style="color: #1f2937; margin-top: 0;">Mensagem:</h3>
    <p style="line-height: 1.6; color: #374151;">{{message}}</p>
  </div>
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
    <p>📧 Enviado através do formulário de contato do portfólio</p>
  </div>
</div>
```

### **3. Configurações Importantes:**

- **To Email**: `adsguilhermezb@gmail.com`
- **From Name**: `{{from_name}}`
- **Reply To**: `{{from_email}}`

### **4. Variáveis do Template:**
- `{{from_name}}` - Nome do remetente
- `{{from_email}}` - Email do remetente  
- `{{message}}` - Mensagem

### **5. Salve o template**

## 🧪 **Teste Novamente:**

1. Salve o template no EmailJS
2. Teste o botão "📧 Testar EmailJS"
3. Se funcionar, teste o envio real

## 🔍 **Se ainda der erro:**

Verifique se:
- ✅ Service ID está correto: `service_bc6o5f8`
- ✅ Template ID está correto: `template_7mrbdsq`
- ✅ Public Key está correto: `gzBbW7-c2KbxzgaGR`
- ✅ Template tem as variáveis corretas
- ✅ Serviço de email está ativo

---

**🎯 O problema é sempre no template - configure exatamente como mostrado acima!**
