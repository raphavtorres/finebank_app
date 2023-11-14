import * as yup from "yup";

export const schema = yup.object({
	accountNumber: yup
		.string()
		.min(8)
		.max(8)
		.required("A conta de quem irá receber é obrigatório"),

	transactionAmount: yup
		.string()
		.min(1)
		.max(7)
		.required("Valor da transação é um campo obrigatório"),
});
