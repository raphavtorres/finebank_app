import * as yup from "yup";

export const schema = yup.object({
	loanAmount: yup
		.string()
		.min(1)
		.max(7)
		.required("Valor do empréstimo é um campo obrigatório"),

	installmentsAmount: yup
		.number()
		.typeError("Digite um número válido")
		.integer("Digite um número inteiro")
		.min(1, "O número deve ser no mínimo 1")
		.max(10, "O número deve ser no máximo 10")
		.required("A quantidade de parcelas é um campo obrigatório"),

	observation: yup.string().max(50, "No máximo 50 caracteretes"),
});
