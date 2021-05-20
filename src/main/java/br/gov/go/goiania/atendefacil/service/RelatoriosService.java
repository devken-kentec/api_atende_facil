package br.gov.go.goiania.atendefacil.service;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.gov.go.goiania.atendefacil.dto.AtendenteDto;
import br.gov.go.goiania.atendefacil.dto.AtendimentoDto;
import br.gov.go.goiania.atendefacil.repository.AtendenteRepository;
import br.gov.go.goiania.atendefacil.repository.AtendimentoRepository;
import br.gov.go.goiania.atendefacil.repository.RelatoriosAgendamentoRepository;
import br.gov.go.goiania.atendefacil.repository.RelatoriosGradeRepository;

@Service
public class RelatoriosService {
	
	@Autowired
	private RelatoriosGradeRepository rgr;
	
	@Autowired
	private RelatoriosAgendamentoRepository rar;
	
	@Autowired
	private AtendimentoRepository ar;
	
	@Autowired
	private AtendenteRepository atr;
	
	public Object[] listarQuanUnidade(String unidade, String dataInicial, String dataFinal, String servico) {
		return rgr.relGradeUnidade(unidade, dataInicial, dataFinal, servico);
	}
	
	public Object[] listarQuanServico(String unidade, String dataInicial, String dataFinal, String servico) {
		return rgr.relGradeServico(unidade, dataInicial, dataFinal, servico);
	}
	
	public Object[] listarQuantAgendUnidade(String unidade, String dataInicial, String dataFinal, String servico, String statusAgendamento) {
	 	return rar.relAgendUnidade(unidade, dataInicial, dataFinal, servico, statusAgendamento);
	}
	
	public Object[] listarQuantAgendServico(String unidade, String dataInicial, String dataFinal, String servico, String statusAgendamento) {
	 	return rar.relAgendServico(unidade, dataInicial, dataFinal, servico, statusAgendamento);
	}
	
	public List<AtendimentoDto> listarAtendimentoDiario(String unidade, String dataInicial, String dataFinal, String matricula, String nome) {
		return ar.atendimentos(unidade , dataInicial  , dataFinal, "%"+ matricula + "%", "%"+ nome + "%").stream().map(AtendimentoDto:: new).collect(Collectors.toList());
	}
	
	public Object[] somarAtendementos(String unidade, String dataInicial, String dataFinal, String matricula, String nome) {
		return ar.somarAtendimentos(unidade , dataInicial  , dataFinal, "%"+ matricula + "%", "%"+ nome + "%");
	}
	
	public List<AtendenteDto> listarAtendente(String unidade){
		return atr.findAtendentes(unidade).stream().map(AtendenteDto:: new ).collect(Collectors.toList());
	}

}
