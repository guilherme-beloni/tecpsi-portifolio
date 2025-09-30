import { useState } from 'react'
import { sendEmail } from '../services/emailService'
import type { EmailData } from '../services/emailService'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ContactFormState {
  isSubmitting: boolean
  isSuccess: boolean
  isError: boolean
  message: string
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })

  const [formState, setFormState] = useState<ContactFormState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    })
    setFormState({
      isSubmitting: false,
      isSuccess: false,
      isError: false,
      message: ''
    })
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Por favor, insira seu nome.'
      })
      return false
    }

    if (!formData.email.trim()) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Por favor, insira seu email.'
      })
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Por favor, insira um email válido.'
      })
      return false
    }

    if (!formData.message.trim()) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Por favor, insira sua mensagem.'
      })
      return false
    }

    if (formData.message.trim().length < 10) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'A mensagem deve ter pelo menos 10 caracteres.'
      })
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setFormState({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: ''
    })

    if (!validateForm()) {
      return
    }

    try {
      const emailData: EmailData = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'adsguilhermezb@gmail.com'
      }

      const result = await sendEmail(emailData)

      if (result.success) {
        setFormState({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: result.message
        })
        resetForm()
      } else {
        setFormState({
          isSubmitting: false,
          isSuccess: false,
          isError: true,
          message: result.message
        })
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Erro inesperado. Tente novamente mais tarde.'
      })
    }
  }

  return {
    formData,
    formState,
    handleInputChange,
    handleSubmit,
    resetForm
  }
}
