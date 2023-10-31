import * as yup from "yup";

export const schema = yup.object({
	cnpj: yup
		.string()
		.transform((value, originalValue) => {
			// Remove todos os caracteres que não são dígitos
			if (originalValue) {
				return originalValue.replace(/[^\d]/g, "");
			}
			return "";
		})
		.test("valid-cnpj", "Digite um CNPJ válido", (value) => {
			if (!value) return true; // Aceitar campo vazio
			const isCnpjValid = value.length === 14;
			return isCnpjValid;
		})
		.required("CNPJ é um campo obrigatório"),

	im: yup
		.string()
		.transform((value, originalValue) => {
			if (originalValue) {
				return originalValue.replace(/[^\d]/g, "");
			}
			return "";
		})
		.test("valid-im", "Digite um IM válido", (value) => {
			if (!value) return true;
			const isIMValid = value.length >= 5 && value.length <= 20;
			return isIMValid;
		})
		.required("IM é um campo obrigatório"),

	ie: yup
		.string()
		.transform((value, originalValue) => {
			if (originalValue) {
				return originalValue.replace(/[^\d]/g, "");
			}
			return "";
		})
		.test("valid-ie", "Digite um IE válido", (value) => {
			if (!value) return true;
			const isIEValid = value.length >= 5 && value.length <= 20;
			return isIEValid;
		})
		.required("IE é um campo obrigatório"),

	name: yup
		.string()
		.required("O nome é obrigatório")
		.matches(
			/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
			"Nome inválido. Use apenas letras e espaços."
		)
		.min(5, "O nome deve ter pelo menos 5 caracteres")
		.max(40, "O nome não deve exceder 40 caracteres"),

	fantasyName: yup
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

	establishmentDate: yup
		.string()
		.required("A data de estabelecimento é obrigatória"),
});
