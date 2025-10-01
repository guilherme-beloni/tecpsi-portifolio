import React, { useState, useEffect } from 'react';
import { Button, Card, Input } from '../reusable';

interface ComponentShowcaseProps {
  onClose: () => void;
}

const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({ onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [buttonVariant, setButtonVariant] = useState<'primary' | 'secondary' | 'outline' | 'ghost'>('primary');
  const [buttonSize, setButtonSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [inputError, setInputError] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Bloquear scroll quando modal estiver aberto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleButtonClick = (message: string) => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
    if (value.length < 3) {
      setInputError('Mínimo 3 caracteres');
    } else {
      setInputError('');
    }
  };

  const handleEmailChange = (value: string) => {
    setEmailValue(value);
  };

  const handlePasswordChange = (value: string) => {
    setPasswordValue(value);
  };

  const copyToClipboard = async (code: string, type: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(type);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  const buttonCode = `<Button variant="${buttonVariant}" size="${buttonSize}" onClick={handleClick}>
  Click Me!
</Button>`;

  const inputCode = `<Input
  label="Nome"
  placeholder="Digite seu nome"
  value={value}
  onChange={setValue}
  required
  error="${inputError ? inputError : ''}"
/>`;


  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                  className="w-6 h-6 filter brightness-0 invert"
                />
              </div>
              <h2 className="text-2xl font-bold text-white">Componentes Reutilizáveis</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 space-y-8 max-h-[calc(90vh-120px)] overflow-y-auto">
          {/* Introduction */}
          <section className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              
              <h3 className="text-2xl font-bold text-white">Biblioteca de Componentes</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Componentes React reutilizáveis desenvolvidos com TypeScript, 
              oferecendo uma base sólida para desenvolvimento rápido e consistente.
            </p>
          </section>

          {/* Button Showcase */}
          <section>
            <h3 className="text-xl font-semibold mb-4 text-white">Botões Interativos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Controles" className="p-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Variante:</label>
                    <div className="flex gap-2">
                      {(['primary', 'secondary', 'outline', 'ghost'] as const).map((variant) => (
                        <button
                          key={variant}
                          onClick={() => setButtonVariant(variant)}
                          className={`px-3 py-1 text-xs rounded transition-colors ${
                            buttonVariant === variant 
                              ? 'bg-blue-500 text-white' 
                              : 'bg-gray-600 text-gray-300 hover:bg-gray-500 border border-gray-500'
                          }`}
                        >
                          {variant}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Tamanho:</label>
                    <div className="flex gap-2">
                      {(['sm', 'md', 'lg'] as const).map((size) => (
                        <button
                          key={size}
                          onClick={() => setButtonSize(size)}
                          className={`px-3 py-1 text-xs rounded transition-colors ${
                            buttonSize === size 
                              ? 'bg-blue-500 text-white' 
                              : 'bg-gray-600 text-gray-300 hover:bg-gray-500 border border-gray-500'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium text-gray-200 mb-2">Preview:</h4>
                    <div className="flex gap-2">
                      <Button 
                        variant={buttonVariant} 
                        size={buttonSize}
                        onClick={() => handleButtonClick(`Botão ${buttonVariant} clicado!`)}
                      >
                        Teste Interativo
                      </Button>
                      <Button 
                        variant={buttonVariant} 
                        size={buttonSize}
                        disabled
                      >
                        Desabilitado
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card title="Código Dinâmico" className="p-4">
                <pre className="bg-gray-700 border border-gray-600 p-4 rounded text-sm overflow-x-auto text-gray-200">
{buttonCode}
                </pre>
                <button 
                  onClick={() => copyToClipboard(buttonCode, 'button')}
                  className="mt-2 text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 transition-colors"
                >
                  {copiedCode === 'button' ? '✅ Copiado!' : '📋 Copiar código'}
                </button>
              </Card>
            </div>
          </section>

          {/* Input Showcase */}
          <section>
            <h3 className="text-xl font-semibold mb-4 text-white">Inputs Interativos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Exemplos Funcionais" className="p-4">
                <div className="space-y-4">
                  <Input
                    label="Nome (com validação)"
                    placeholder="Digite seu nome"
                    value={inputValue}
                    onChange={handleInputChange}
                    required
                    error={inputError}
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="seu@email.com"
                    value={emailValue}
                    onChange={handleEmailChange}
                  />
                  <Input
                    label="Senha"
                    type="password"
                    placeholder="Mínimo 8 caracteres"
                    value={passwordValue}
                    onChange={handlePasswordChange}
                  />
                  
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Valores Atuais:</h4>
                    <div className="text-xs text-gray-300 space-y-1">
                      <p><strong>Nome:</strong> {inputValue || 'vazio'}</p>
                      <p><strong>Email:</strong> {emailValue || 'vazio'}</p>
                      <p><strong>Senha:</strong> {passwordValue ? '••••••••' : 'vazio'}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card title="Código Dinâmico" className="p-4">
                <pre className="bg-gray-700 border border-gray-600 p-4 rounded text-sm overflow-x-auto text-gray-200">
{inputCode}
                </pre>
                <button 
                  onClick={() => copyToClipboard(inputCode, 'input')}
                  className="mt-2 text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 transition-colors"
                >
                  {copiedCode === 'input' ? '✅ Copiado!' : '📋 Copiar código'}
                </button>
              </Card>
            </div>
          </section>

          {/* Card Showcase */}
          <section>
            <h3 className="text-xl font-semibold mb-4 text-white">Cards Interativos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card title="Card Simples" hover>
                <p className="text-gray-300">Este é um card simples com hover effect.</p>
                <Button variant="outline" size="sm" onClick={() => handleButtonClick('Card simples clicado!')}>
                  Ação
                </Button>
              </Card>
              
              <Card title="Card com Subtítulo" subtitle="Descrição do card" hover>
                <p className="text-gray-300">Card com título e subtítulo.</p>
                <div className="mt-2">
                  <Input 
                    placeholder="Digite algo..." 
                    value={inputValue}
                    onChange={setInputValue}
                  />
                </div>
              </Card>
              
              <Card shadow="lg" className="border-blue-200">
                <h4 className="font-semibold text-white mb-2">Card Customizado</h4>
                <p className="text-gray-300 mb-3">Card com sombra e borda customizada.</p>
                <div className="flex gap-2">
                  <Button variant="primary" size="sm">Primário</Button>
                  <Button variant="secondary" size="sm">Secundário</Button>
                </div>
              </Card>
            </div>
          </section>

          {/* Demo Section */}
          <section>
            <h3 className="text-xl font-semibold mb-4 text-white">Demonstração Prática</h3>
            <Card title="Formulário de Exemplo" subtitle="Todos os componentes trabalhando juntos" className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Nome Completo"
                    placeholder="Seu nome completo"
                    value={inputValue}
                    onChange={handleInputChange}
                    required
                    error={inputError}
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="seu@email.com"
                    value={emailValue}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                
                <Input
                  label="Senha"
                  type="password"
                  placeholder="Mínimo 8 caracteres"
                  value={passwordValue}
                  onChange={handlePasswordChange}
                  required
                />

                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="primary" 
                    onClick={() => handleButtonClick('Formulário enviado com sucesso!')}
                    disabled={!inputValue || !emailValue || !passwordValue || !!inputError}
                  >
                    Enviar Formulário
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setInputValue('');
                      setEmailValue('');
                      setPasswordValue('');
                      setInputError('');
                    }}
                  >
                    Limpar
                  </Button>
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Estado do Formulário:</h4>
                  <div className="text-xs text-gray-300 space-y-1">
                    <p><strong>Válido:</strong> {(!inputError && inputValue && emailValue && passwordValue) ? '✅ Sim' : '❌ Não'}</p>
                    <p><strong>Campos preenchidos:</strong> {[inputValue, emailValue, passwordValue].filter(Boolean).length}/3</p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Alert */}
          {showAlert && (
            <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce">
              {alertMessage} 🎉
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase;
