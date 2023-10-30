import * as yup from "yup";

export const schema = yup.object({
	cpf: yup
		.string()
		.transform((value, originalValue) => {
			// Remove todos os caracteres que não são dígitos
			if (originalValue) {
				return originalValue.replace(/[^\d]/g, "");
			}
			return "";
		})
		.test("valid-cpf", "Digite um CPF válido", (value) => {
			if (!value) return true; // Aceitar campo vazio
			const isCpfValid = value.length === 11;
			return isCpfValid;
		})
		.required("CPF é um campo obrigatório"),

	rg: yup
		.string()
		.transform((value, originalValue) => {
			if (originalValue) {
				return originalValue.replace(/[^\d]/g, "");
			}
			return "";
		})
		.test("valid-rg", "Digite um RG válido", (value) => {
			if (!value) return true;
			const isRGValid = value.length >= 8 && value.length <= 10;
			return isRGValid;
		})
		.required("RG é um campo obrigatório"),

	fullname: yup
		.string()
		.required("O nome é obrigatório")
		.matches(
			/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
			"Nome inválido. Use apenas letras e espaços."
		)
		.min(5, "O nome deve ter pelo menos 5 caracteres")
		.max(40, "O nome não deve exceder 40 caracteres"),

	socialname: yup
		.string()
		.matches(
			/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
			"Nome inválido. Use apenas letras e espaços."
		)
		.min(5, "O nome deve ter pelo menos 5 caracteres")
		.max(40, "O nome não deve exceder 40 caracteres"),

	telephone: yup
		.string()
		.min(14, "O telefone deve ter 9 digitos")
		.required("O telefone é obrigatório"),

	email: yup.string().email("Digite um e-mail válido"),

	birthdate: yup.string().required("A data de nascimento é obrigatória"),

	password: yup
		.string()
		.min(6, "Senha deve ter no mínimo 6 caracteres")
		.max(20, "Senha deve ter no máximo 20 caracteres")
		.required("A senha é um campo obrigatório"),
	passwordConfirmation: yup
		.string()
		.required("A confirmação da senha é um campo obrigatório")
		.oneOf([yup.ref("password")], "Os campos de senha devem ser iguais"),
});
