import { IFeedbackInput } from '@/types/feedbackForm'
import styles from '@/styles/feedbackForm/index.module.scss'

const PhoneInput = ({ register, errors, darkModeClass }: IFeedbackInput) => (
  <label className={`${styles.feedback_form__form__label} ${darkModeClass}`}>
    <span>Телефон *</span>
    <input
      className={styles.feedback_form__form__input}
      placeholder="+380 68 237 8734"
      type="tel"
      {...register('phone', {
        required: 'Введіть телефон!',
        pattern: {
          value: /^\d*[1-9]\d*$/,
          message: 'Не допустиме значення',
        },
        minLength: 11,
        maxLength: 11,
      })}
    />
    {errors.phone && (
      <span className={styles.error_alert}>{errors.phone?.message}</span>
    )}
    {errors.phone && errors.phone.type === 'minLength' && (
      <span className={styles.error_alert}>Мінімум 11 цифр!</span>
    )}
    {errors.phone && errors.phone.type === 'maxLength' && (
      <span className={styles.error_alert}>Не більше 11 цифр!</span>
    )}
  </label>
)

export default PhoneInput
