package br.com.dio;

public class ContaCorrente extends Contas {

	@Override
	public void imprimirExtrato() {
		System.out.println("\n--Extrato Conta Corrente--");
		super.imrpimirExtratoComum();
	}
}