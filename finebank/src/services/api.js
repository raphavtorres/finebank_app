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
		return response.data;
	} catch (err) {
		alert("Não elegível para receber o cartão");
	}
}

// Making transaction
export async function makeTransaction(
	id_card,
	acc_receiver,
	amount,
	transaction_type
) {
	try {
		const response = await axiosInstance.post("transactions/", {
			id_card: id_card,
			acc_receiver: acc_receiver,
			amount: amount,
			transaction_type: transaction_type,
		});
		return response.data;
	} catch (err) {
		alert(err, "Não há saldo suficiente para fazer a transação");
	}
}
