import * as yup from "yup";

export const schema = yup.object({
	cpfOrCnpj: yup
		.string()
		.transform((value, originalValue) => {
			// Remove todos os caracteres que não são dígitos
			if (originalValue) {
				return originalValue.replace(/[^\d]/g, "");
			}
			return "";
		})
		.test("valid-cpf-cnpj", "Digite um CPF / CNPJ válido", (value) => {
			if (!value) return true; // Aceitar campo vazio
			const isCpfValid = value.length === 11;
			const isCnpjValid = value.length === 14;
			return isCpfValid || isCnpjValid;
		})
		.required("CPF / CNPJ é um campo obrigatório"),
	password: yup
		.string()
		.min(6, "Senha deve ter no mínimo 6 caracteres")
		.max(20, "Senha deve ter no máximo 20 caracteres")
		.required("A senha é um campo obrigatório"),
});
