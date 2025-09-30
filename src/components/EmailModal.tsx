import { useEffect } from 'react'

interface EmailModalProps {
  isOpen: boolean
  onClose: () => void
  status: 'success' | 'error' | null
  message: string
}

const EmailModal = ({ isOpen, onClose, status, message }: EmailModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  console.log('🎭 EmailModal render:', { isOpen, status, message })

  if (!isOpen) return null

  const isSuccess = status === 'success'
  const isError = status === 'error'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gray-800 rounded-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        <div className="p-8 text-center">
          {/* Ícone animado */}
          <div className="mb-6">
            {isSuccess && (
              <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            )}
            
            {isError && (
              <div className="w-20 h-20 mx-auto bg-red-500/20 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            )}
          </div>

          {/* Título */}
          <h3 className={`text-2xl font-bold mb-4 ${
            isSuccess ? 'text-green-400' : 'text-red-400'
          }`}>
            {isSuccess ? 'Email Enviado!' : 'Erro no Envio'}
          </h3>

          {/* Mensagem */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            {message}
          </p>

          {/* Botão de fechar */}
          <button
            onClick={onClose}
            className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              isSuccess 
                ? 'bg-green-500 hover:bg-green-600 text-white' 
                : 'bg-red-500 hover:bg-red-600 text-white'
            }`}
          >
            {isSuccess ? 'Continuar' : 'Tentar Novamente'}
          </button>

          {/* Informações adicionais para sucesso */}
          {isSuccess && (
            <div className="mt-4 p-4 bg-gray-700/50 rounded-lg">
              <p className="text-sm text-gray-400">
                📧 O email foi enviado para <strong>adsguilhermezb@gmail.com</strong>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Responderemos em breve!
              </p>
            </div>
          )}

          {/* Dicas para erro */}
          {isError && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-sm text-red-300">
                💡 Dicas para resolver:
              </p>
              <ul className="text-xs text-red-400 mt-2 space-y-1">
                <li>• Verifique sua conexão com a internet</li>
                <li>• Tente novamente em alguns minutos</li>
                <li>• Entre em contato se o problema persistir</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EmailModal
