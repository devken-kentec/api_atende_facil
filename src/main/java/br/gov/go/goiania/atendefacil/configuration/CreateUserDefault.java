package br.gov.go.goiania.atendefacil.configuration;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import br.gov.go.goiania.atendefacil.domain.Acesso;
import br.gov.go.goiania.atendefacil.domain.Role;
import br.gov.go.goiania.atendefacil.domain.Servidor;
import br.gov.go.goiania.atendefacil.repository.AcessoRepository;
import br.gov.go.goiania.atendefacil.repository.RoleRepository;
import br.gov.go.goiania.atendefacil.repository.ServidorRepository;
import br.gov.go.goiania.atendefacil.shared.Util;

@Configuration
@Profile("dev")
public class CreateUserDefault {
	
	@Autowired
	private ServidorRepository sr;
	
	@Autowired
	private RoleRepository rr;
	
	@Autowired
	private AcessoRepository ar;
	
	@Bean
	@Transactional
	CommandLineRunner executar() {
		return args -> {
			long users = sr.count();
			if(users == 0) {
				Servidor servidor = new Servidor();
				servidor.setNome("Kennedy Tomazete");
				servidor.setCpf("00240175158");
				servidor.setMatricula("1038885");
				servidor.setEmail("kennedy_tomazete@outlook.com");
				servidor.setLotacao("SIT");
				servidor.setStatusServidor("ATIVO");
				servidor.setTelefone("62984688222");
				System.out.println(servidor);
				sr.save(servidor);
				
				Role role = new Role();
				role.setDescricao("DEV_SYSTEM");
				System.out.println(role);
				rr.save(role);
				
				Acesso acesso = new Acesso();
				acesso.setSenha(Util.encodeB64("devken"));
				acesso.setServidor(servidor);
				acesso.setRole(role);
				acesso.setUnidade(null);
				System.out.println(acesso);
				ar.save(acesso);
				
			}
		};
	}
}
