import axios from "axios";
import { API_URL } from "../constant/apiConstant";

export const axiosInstance = axios.create({
	baseURL: API_URL,
});

// Geting accounts
export async function getAccounts() {
	try {
		const response = await axiosInstance.get("accounts/");
		return response.data;
	} catch (err) {
		alert(err, " | erro ao pegar as contas");
	}
}

// Getting account by id
export async function getAccountById(account) {
	try {
		const response = await axiosInstance.get(`accounts/${account}/`);
		return response.data;
	} catch (err) {
		alert(err, " | erro ao pegar a conta pelo id");
	}
}

// Geting user
export async function getUser(user_type) {
	try {
		const response = await axiosInstance.get(`${user_type}-people/`);
		return response.data[0];
	} catch (err) {
		alert(err, " | erro ao pegar o usuário");
	}
}

// Geting user
export async function getCards(account) {
	try {
		const response = await axiosInstance.get(`cards/?account=${account}`);
		return response.data;
	} catch (err) {
		alert(err, " | erro ao pegar os cartões");
	}
}

// Getting statement
export async function getStatements(account) {
	try {
		const response = await axiosInstance.get(
			`bank-statement/?account=${account}`
		);
		return response.data;
	} catch (err) {
		alert(err, " | erro ao pegar as transações");
	}
}

// Getting loans
export async function getLoans(account) {
	try {
		const response = await axiosInstance.get(`loans/?account=${account}`);
		return response.data.filter((loan) => !loan.is_payout);
	} catch (err) {
		alert(err, " | erro ao pegar os empréstimos");
	}
}

// Requesting loan
export async function postLoan(
	account,
	amount_request,
	installment_amount,
	observation
) {
	try {
		const response = await axiosInstance.post("loans/", {
			account: account,
			amount_request: amount_request,
			installment_amount: installment_amount,
			observation: observation,
		});
		return response.data;
	} catch (err) {
		alert("Não elegível para receber o empréstimo");
	}
}

// Getting installments
export async function getInstallments(loan) {
	try {
		const response = await axiosInstance.get(`installments/?loan=${loan}`);
		return response.data.filter((installment) => !installment.is_paid);
	} catch (err) {
		alert(err, " | erro ao pegar as parcelas");
	}
}

// Updating loans
export async function patchLoan(loan, account) {
	try {
		const response = await axiosInstance.patch(
			`loans/${loan}/?account=${account}`
		);
		alert("Fatura paga com sucesso!");
		return response.data;
	} catch (err) {
		alert("Não há saldo suficiente para pagar as parcelas");
	}
}

// Getting investments
export async function getInvestments() {
	try {
		const response = await axiosInstance.get("investments/");
		return response.data;
	} catch (err) {
		alert(err, " | erro ao pegar os investimentos");
	}
}

// Getting account investments
export async function getAccountInvestments(account) {
	try {
		const response = await axiosInstance.get(
			`account-investments/?account=${account}`
		);
		return response.data;
	} catch (err) {
		alert(err, " | erro ao pegar os investimentos da sua conta");
	}
}

// Create account investment
export async function postAccountInvestments(investment, account) {
	try {
		const response = await axiosInstance.post("account-investments/", {
			id_investment: investment,
			id_account: account,
		});
		alert("Investimento feito com sucesso!");
		return response.data;
	} catch (err) {
		alert("Não há saldo suficiente para investir");
	}
}

// Requesting Card
export async function requestCard(account) {
	try {
		const response = await axiosInstance.post("cards/", {
			account: account,
		});
		alert("Cartão solicitado!");
		return response.data;
	} catch (err) {
		alert("Não elegível para receber o cartão!");
	}
}

// Making transaction
export async function makeTransaction(
	card,
	receiver_acc_number,
	amount,
	transaction_type
) {
	try {
		const response = await axiosInstance.post("transactions/", {
			card: card,
			receiver_acc_number: receiver_acc_number,
			amount: amount,
			transaction_type: transaction_type,
		});
		return response.data;
	} catch (err) {
		alert(err, "Não há saldo suficiente para fazer a transação!");
	}
}

// Creating Natural Person
export async function createPF(
	cpf,
	password,
	name,
	birthdate,
	rg,
	social_name = ""
) {
	try {
		const response = await axiosInstance.post("natural-people/", {
			cpf: cpf,
			password: password,
			name: name,
			birthdate: birthdate,
			rg: rg,
			social_name: social_name,
		});
		return response.data;
	} catch (err) {
		alert(err, "Erro ao criar Pessoa Física");
	}
}

// Creating Legal Person
export async function createPJ(
	cnpj,
	password,
	fantasy_name = "",
	establishment_date,
	im,
	ie,
	legal_nature
) {
	try {
		const response = await axiosInstance.post("legal-people/", {
			cnpj: cnpj,
			password: password,
			fantasy_name: fantasy_name,
			establishment_date: establishment_date,
			im: im,
			ie: ie,
			legal_nature: legal_nature,
		});
		return response.data;
	} catch (err) {
		alert(err, "Erro ao criar Pessoa Jurídica");
	}
}

// Creating account
export async function createAccount(acc_type) {
	try {
		const response = await axiosInstance.post("accounts/", {
			acc_type: acc_type,
		});
		return response.data;
	} catch (err) {
		alert(err, "Erro ao criar conta");
	}
}

// Creating Address
export async function createAddress(
	neighborhood,
	street,
	number,
	city,
	state,
	cep,
	customer
) {
	try {
		const response = await axiosInstance.post("addresses/", {
			neighborhood: neighborhood,
			street: street,
			number: number,
			city: city,
			state: state,
			cep: cep,
			customer: customer,
		});
		return response.data;
	} catch (err) {
		alert(err, "Erro ao cadastrar endereço");
	}
}

export async function createPhone(
	phone,
	prefix_number,
	customer,
	country_code = "55"
) {
	try {
		const response = await axiosInstance.post("phones/", {
			phone: phone,
			country_code: country_code,
			prefix_number: prefix_number,
			customer: customer,
		});
		return response.data;
	} catch (err) {
		alert(err, "Erro ao cadastrar telefone");
	}
}

export async function createEmail(email, customer) {
	try {
		const response = await axiosInstance.post("emails/", {
			email: email,
			customer: customer,
		});
		return response.data;
	} catch (err) {
		alert(err, "Erro ao cadastrar email");
	}
}

export async function updateProfilePic(image, userId) {
	try {
		const formData = new FormData();
		formData.append("name", `image-user-${userId}`);
		formData.append("file", {
			uri: image.uri,
			type: image.type,
			name: image.fileName,
		});

		const response = await axiosInstance.post(`URL_API/`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		console.log("Resposta da API:", response.data);
	} catch (error) {
		console.error("Erro ao enviar a imagem para a API:", error);
	}
}
