package br.com.dio;

import java.util.List;

public class Banco {
	private String nome;
	@SuppressWarnings("unused")
	private List<Contas> contas;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
}