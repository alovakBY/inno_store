import * as Yup from "yup";

export const validationSchema = Yup.object({
   email: Yup.string()
      .email("Введите корректный email")
      .required("Обязательное поле"),
   password: Yup.string().required("Обязательное поле"),
});
