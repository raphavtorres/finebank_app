import * as yup from "yup";

export const schema = yup.object({
	cep: yup
		.string()
		.transform((value, originalValue) => {
			// Remove todos os caracteres que não são dígitos
			if (originalValue) {
				return originalValue.replace(/[^\d]/g, "");
			}
			return "";
		})
		.test("valid-cep", "Digite um CEP válido", (value) => {
			if (!value) return true; // Aceitar campo vazio
			const isCpfValid = value.length === 8;
			return isCpfValid;
		})
		.required("CEP é um campo obrigatório"),

	state: yup
		.string()
		.required("O Estado é obrigatório")
		.matches(
			/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
			"Estado inválido. Use apenas letras e espaços."
		)
		.min(3, "O nome do Estado deve ter pelo menos 2 caracteres")
		.max(40, "O nome do Estado não deve exceder 40 caracteres"),

	city: yup
		.string()
		.matches(
			/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
			"Cidade inválida. Use apenas letras e espaços."
		)
		.min(3, "O nome da cidade deve ter pelo menos 3 caracteres")
		.max(40, "O nome da cidade não deve exceder 40 caracteres"),

	neighborhood: yup
		.string()
		.matches(
			/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
			"Bairro inválido. Use apenas letras e espaços."
		)
		.min(3, "O nome do bairro deve ter pelo menos 3 caracteres")
		.max(40, "O nome do bairro não deve exceder 40 caracteres"),

	street: yup
		.string()
		.matches(
			/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
			"Rua inválida. Use apenas letras e espaços."
		)
		.min(3, "O nome da rua deve ter pelo menos 3 caracteres")
		.max(40, "O nome da rua não deve exceder 40 caracteres"),

	number: yup
		.string()
		.transform((value, originalValue) => {
			if (originalValue) {
				return originalValue.replace(/[^\d]/g, "");
			}
			return "";
		})
		.test("valid-number", "Digite um número válido", (value) => {
			if (!value) return true;
			const isNumberValid = value.length >= 1 && value.length <= 5;
			return isNumberValid;
		})
		.required("Número é um campo obrigatório"),

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
