package br.com.dio;

public class ContaPoupanca extends Contas {
	
	@Override
	public void imprimirExtrato() {
		System.out.println("\n--Extrato Conta Poupanca--");
		super.imrpimirExtratoComum();
	}
}