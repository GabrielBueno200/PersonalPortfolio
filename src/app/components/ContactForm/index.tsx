import { sendEmailAsync } from '@/app/utils/email'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

const schema = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
  email: z
    .string()
    .nonempty({ message: 'Email is required' })
    .email({ message: 'Invalid email' }),
  message: z.string().nonempty({ message: 'Message is required' })
})

type SendEmailFormData = z.infer<typeof schema>

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SendEmailFormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: SendEmailFormData) => {
    const response = await sendEmailAsync({
      senderName: data.name,
      senderEmail: data.email,
      message: data.message
    })

    if (response.status === 200) toast.success(response.content.message)
    else toast.error(response.content.error)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 w-full mt-2">
        <div>
          <input
            className="w-full bg-zinc-900 p-2 text-white rounded-lg"
            placeholder="Your name"
            {...register('name')}
          />
          {errors.name && (
            <small className="text-red-400">{errors.name.message}</small>
          )}
        </div>

        <div>
          <input
            className="w-full bg-zinc-900 p-2 text-white rounded-lg"
            placeholder="Your email"
            {...register('email')}
          />
          {errors.email && (
            <small className="text-red-400">{errors.email.message}</small>
          )}
        </div>

        <div>
          <textarea
            className="h-[13em] w-full bg-zinc-900 p-2 rounded-lg text-white"
            placeholder="Your message to me..."
            style={{ resize: 'none' }}
            {...register('message')}
          />
          {errors.message && (
            <small className="text-red-400">{errors.message.message}</small>
          )}
        </div>

        <button
          disabled={isSubmitting}
          className="w-fit bg-primary-green disabled:opacity-25 text-white hover:opacity-75 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
        >
          {!isSubmitting ? 'SEND IT' : 'SENDING...'}
        </button>
      </form>
    </>
  )
}

export default ContactForm

